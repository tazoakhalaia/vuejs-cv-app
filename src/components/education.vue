<template >
        <div class="info">
            <div class="instute-info">
                <div class="instute-info-header">
                    <div class="img-info-title">
                        <router-link to="/"><img @click="goFirstPage" class="gofirstpageimg" src="../assets/gofirstpagebtn.png"></router-link>
                        <h1 class="info-title">განთლება</h1>
                    </div>
                    <h3 class="page-number">3/3</h3>
                </div>
                <hr>
                <form @submit="foo">
                        <div class="instute">
                            <h1 class="instute-alert">სასწავლებელი</h1>
                            <input type="text" placeholder="სასწავლებელი">
                            <h6 class="warning">მინიმუმ 2 ასო</h6>
                    </div>
                    <div class="date-degree">
                        <div class="degree">
                            <h1>ხარისხი</h1>
                       <select v-model="degreeValue">
                        <option v-for="(item,index) in degreeResponse" :key="index">{{item}}</option>
                       </select>
                        </div>
                        <div class="enddate">
                            <h1>დამთავრების რიცხვი</h1>
                            <input type="date"  >
                        </div>
                    </div>
                    <div class="description">
                        <h1>აღწერა</h1>
                       <textarea v-bind:class="textareaClass" v-model="textAreaValue" placeholder="განათლების აღწერა" ></textarea>
                    </div>
                      <div id="container" v-for="(item, index) in edu">
                          <div  :key="index">
                             <hr style="width: 100%">
                            <div  class="ss">
                                <h1 class="position-s">თანამდებოდა</h1>
                            <input  type="text" placeholder="დეველოპერი, დიზაინერი ა.შ" >
                            <h6 class="warning">მინიმუმ 2 ასო, ქართული ასოები</h6>
                             </div>
                              <div class="ss">
                                <div class="ss">
                            <h1>დაწყების რიცხვი</h1>
                       <input type="ss" >
                        </div>
                        <div class="ss">
                            <h1>დამთავრების რიცხვი</h1>
                            <input type="ss" >
                        </div>
                             </div>
                              <div class="ss">
                                <h1>აღწერა</h1>
                                  <textarea type="text"></textarea>
                              </div>
                              <button class="remove" @click="removeDiv(index)">წაშლა</button>
                            </div>
                             </div>
                    <button class="add-more-experience-btn" @click="createAdditionaInputs">მეტი გამოცდილების დამატება</button>
                    <div class="prev-next-btn">
                        <router-link to='/experience'><button class="prev-page">უკან</button></router-link>
                     <router-link to="/result"><button class="submit-btn" @click="sendRequest">send request</button></router-link>
                    </div>
                    </form>
            </div>
        </div>
        <EducationResume />
</template>
<script>
import axios from 'axios'
import EducationResume from '../resume/educationresume.vue'
let formData = new FormData()
export default {
    data(){
        return{
            name: localStorage.getItem("name"),
            surname: localStorage.getItem("surname"),
            email: localStorage.getItem("email"),
            phone_number: localStorage.getItem("phone_number"),
            generalDescription: localStorage.getItem("description"),
            experienceDescription: localStorage.getItem("textareadecription"),
            start_date: localStorage.getItem("startdate"),
            enddate: localStorage.getItem("due_date"),
            position: localStorage.getItem("position"),
            responseData: "",
            edu: [],
            degreeResponse: [],
            degreeValue: ""


        }
    },
    components: {
        EducationResume
    },
    watch: {
        degreeValue(newDegree){
            localStorage.setItem("degree", newDegree)
        }
    },
    mounted(){
        if (localStorage.getItem("educationdivs")) {
      this.edu = JSON.parse(localStorage.getItem("educationdivs"));
    }
        this.degreeValue = localStorage.getItem("degree")
    },
    created(){
        axios.get('https://resume.redberryinternship.ge/api/degrees').then(res => {
            let degreeValue = res.data
            for(var i = 0; i < degreeValue.length; i++){
                this.degreeResponse.push(degreeValue[i].title)
            }
        })
    },
    methods: {
        createAdditionaInputs(e) {
            e.preventDefault();
      this.edu.push('');
      localStorage.setItem('educationdivs', JSON.stringify(this.edu))
    },
    removeDiv(index){
        this.edu.splice(index,1)
        localStorage.setItem('educationdivs', JSON.stringify(this.edu))
        
    },
        dataURLtoBlob(dataURL){
  var parts = dataURL.split(',');
  var mime = parts[0].split(':')[1].split(';')[0];
  var binary = atob(parts[1]);
  var array = [];
  for (var i = 0; i < binary.length; i++) {
    array.push(binary.charCodeAt(i));
  }
  return new Blob([new Uint8Array(array)], {
    type: mime
  });
},
        async sendRequest(){
            var imageData = localStorage.getItem("image")
            var blob = this.dataURLtoBlob(imageData)
        formData.append("name", this.name)
        formData.append("surname", this.surname)
        formData.append("email", this.email)
        formData.append("phone_number", this.phone_number)
        formData.append("about_me", "kaia")
        formData.append("image",  blob, 'image.' + blob.type.split('/')[1]);
        formData.append("experiences[0][position]", this.position)
        formData.append("experiences[0][employer]", "redbery")
        formData.append("experiences[0][start_date]", "2020/10/10")
        formData.append("experiences[0][due_date]", "2021/10/10")
        formData.append("experiences[0][description]", "asdsads kaksdjha s")
        formData.append("educations[0][institute]", "ასდასდ")
        formData.append("educations[0][degree_id]", "7")
        formData.append("educations[0][due_date]", "2020/10/10")
        formData.append("educations[0][description]", "asdsads kaksdjha s")
        try{
            const response = await axios.post("https://resume.redberryinternship.ge/api/cvs", formData, {
                headers: {
                    "Content-Type" : "multipart/form-data"
                }
            })
            this.responseData = response.data
            localStorage.setItem("response", JSON.stringify(this.responseData))
        console.log(response.data);
        }catch(er){
            console.log(er);
        }
    }
    }
}
</script>
<style scoped>
   * {
    box-sizing: border-box;
    font-family: HelveticaNeue;
}

@font-face {
      font-family: HelveticaNeue;
      src: url('../font/HelveticaNeue.ttc');
    }
   
.valid {
    outline: none;
    background: url('../assets/Vector.png');
    background-color: white;
    background-repeat: no-repeat;
    background-size: 20px 20px;
    background-position: 99% center;
}

.notvalid {
    outline: none;
    background: url('../assets/notallow.png');
    background-color: white;
    background-repeat: no-repeat;
    background-size: 20px 20px;
    background-position: 99% center;
}

.info {
    width: 55%;
    background-color: #f9f9f9;
    float: left;
}

.instute-info {
    width: 82%;
    margin: auto;
    padding-top: 25px;
}

hr {
    width: 100%;
    margin-top: 15px;
    background-color: black;
    height: 1px;
    border: none;
    outline: none;
}

.instute-info-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.img-info-title {
    display: flex;
    align-items: center;
}

.gofirstpageimg {
    margin-left: -60px;
}

.info-title {
    font-size: 20px;
    font-family: HelveticaNeue;
    margin-left: 18px;
}

.page-number {
    font-size: 15px;
}

.gofirstpageimg {
    width: 40px;
    height: 40px;
}

form {
    position: relative;
    width: 100%;
    margin-top: 85px;
    padding-bottom: 50%;
}
.instute input {
    width: 100%;
    height: 31px;
    border-radius: 3px;
    outline: none;
    border: 0.5px solid grey;
    margin-top: 10px;
}

.instute-alert {
    font-size: 18px;
}
.warning {
    font-family: HelveticaNeue;
    margin-top: 10px;
    color: #2E2E2E;
}


.date-degree {
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
}
.enddate input {
    width: 340px;
    height: 30px;
    border-radius: 3px;
    border: 0.5px solid grey;
    margin-top: 10px;
}

.degree select{
    width: 340px;
    height: 30px;
    border-radius: 3px;
    border: 0.5px solid grey;
    margin-top: 10px;
}

.degree h1 {
    font-size: 18px;
}

.enddate h1 {
    font-size: 18px;
}

.description h1 {
    font-size: 18px;
}

.description {
    margin-top: 50px;
}

.description textarea {
    resize: none;
    width: 100%;
    border-radius: 3px;
    height: 150px;
    margin-top: 10px;
}

.add-more-experience-btn {
    margin-top: 30px;
    width: 300px;
    height: 50px;
    border: none;
    background-color: #62A1EB;
    color: #FFFFFF;
    font-size: 16px;
    border-radius: 3px;
    cursor: pointer;
}

.prev-next-btn {
    margin-top: 100px;
    display: flex;
    justify-content: space-between;
}

.submit-btn {
    font-family: HelveticaNeue;
    width: 130px;
    height: 38px;
    background-color: #6B40E3;
    font-family: HelveticaNeue;
    color: #FFFFFF;
    border-radius: 3px;
    cursor: pointer;
    outline: none;
    border: none;
    margin-top: 100px;
}

.prev-page {
    font-family: HelveticaNeue;
    width: 130px;
    height: 38px;
    background-color: #6B40E3;
    font-family: HelveticaNeue;
    color: #FFFFFF;
    border-radius: 3px;
    cursor: pointer;
    outline: none;
    border: none;
    margin-top: 100px;
}

.remove {
    font-family: HelveticaNeue;
    width: 130px;
    height: 38px;
    background-color: #6B40E3;
    font-family: HelveticaNeue;
    color: #FFFFFF;
    border-radius: 3px;
    cursor: pointer;
    outline: none;
    border: none;
    margin-top: 20px;
}


</style>
