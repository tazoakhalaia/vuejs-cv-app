<template >
        <div class="info">
            <div class="instute-info">
                <div class="instute-info-header">
                    <div class="img-info-title">
                        <router-link to="/"><img @click="goFirstPage" class="gofirstpageimg" src="../assets/gofirstpagebtn.png"></router-link>
                        <h1 class="info-title">განათლება</h1>
                    </div>
                    <h3 class="page-number">3/3</h3>
                </div>
                <hr>
                <form @submit="foo">
                        <div class="instute">
                            <h1 class="instute-alert">სასწავლებელი</h1>
                            <input type="text" placeholder="სასწავლებელი" v-bind:class="intituteClass" v-model="instute">
                            <h6 class="warning">მინიმუმ 2 სიმბოლო</h6>
                    </div>
                    <div class="date-degree">
                        <div class="degree">
                            <h1>ხარისხი</h1>
                       <select v-model="degreeValue">
                        <option value="" disabled selected>აირჩიეთ ხარისხი</option>
                        <option v-for="(item,index) in degreeResponse" :value="item.id"  :key="index">{{ item.title }}</option>
                       </select>
                        </div>
                        <div class="enddate">
                            <h1>დამთავრების რიცხვი</h1>
                            <input type="date" v-model="duedate"  v-bind:class="dueDateClass">
                        </div>
                    </div>
                    <div class="description">
                        <h1>აღწერა</h1>
                       <textarea v-bind:class="textareaClass" v-model="educationdesc" placeholder="განათლების აღწერა" ></textarea>
                    </div>
                      <div id="container" v-for="(item, index) in edu">
                          <div  :key="index">
                             <hr style="width: 100%">
                            <div style="margin-top: 20px;" class="instute">
                                <h1 class="instute-alert">სასწავლებელი</h1>
                            <input  type="text" placeholder="სასწავლებელი">
                            <h6 class="warning">მინიმუმ 2 სიმბოლო</h6>
                             </div>
                             <div class="date-degree">
                        <div class="degree">
                            <h1>ხარისხი</h1>
                       <select v-model="degreeValue">
                        <option value="" disabled selected>აირჩიეთ ხარისხი</option>
                        <option v-for="(item,index) in degreeResponse" :value="item.id"  :key="index">{{ item.title }}</option>
                       </select>
                        </div>
                        <div class="enddate">
                            <h1>დამთავრების რიცხვი</h1>
                            <input type="date" v-model="duedate" >
                        </div>
                    </div>
                    <div class="description">
                        <h1>აღწერა</h1>
                       <textarea v-bind:class="textareaClass" v-model="educationdesc" placeholder="განათლების აღწერა" ></textarea>
                    </div>
                              <button class="remove" @click="removeDiv(index)">წაშლა</button>
                            </div>
                             </div>
                             <button class="add-more-experience-btn" @click="createAdditionaInputs">სხვა სასწავლებელის fდამატება</button>
                    <div class="prev-next-btn">
                        <button @click="goback" class="prev-page">უკან</button>
                        <button class="submit-btn" @click="sendRequest">დასრულება</button>
                    </div>
                    </form>
            </div>
        </div>
        <EducationResume :institute="instute" :duedate="duedate" :educationDescription="educationdesc" />
</template>
<script>
import axios from 'axios'
import EducationResume from '../resume/educationresume.vue'
import store from '../store/index'
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
            recruiter: localStorage.getItem("recruiter"),
            degree_id: JSON.parse(localStorage.getItem("degree")),
            responseData: "",
            edu: [{va: "", value2: "", value3: "",value4: ""}],
            degreeResponse: [],
            degreeValue: "",
            instute: "",
            duedate: "",
            educationdesc: "",
            valid: "valid",
            notvalid: "notvalid",
            initial: "initiial"


        }
    },
    components: {
        EducationResume
    },
    watch: {
        degreeValue(newDegree){
            console.log(newDegree);
            localStorage.setItem("degree", newDegree)
        },
        instute(newInstitute){
            localStorage.setItem("institue", newInstitute)
        },
        educationdesc(newDesc){
            localStorage.setItem("educationdesc", newDesc)
        },
        duedate(newDueDate){
            localStorage.setItem("educationduedate", newDueDate)
        },
        responseData: function(newValue){
            if(this.instute.length >= 2 && this.degreeValue != "" &&
            this.duedate != "" && this.educationdesc != ""){
                if(newValue){
                this.$router.push({path: "/result"})
            }
            }
        }
    },
    computed: {
        intituteClass(){
            if(this.instute.length >= 2){
                return this.valid
            }else if (this.instute === ""){
                return this.initial
            }else if (this.instute.length > 0 && this.instute.length < 2){
                return this.notvalid
            }
        },
        textareaClass(){
            if(this.educationdesc != ""){
                return this.valid
            }
        },
        dueDateClass(){
            if(this.duedate != ""){
                return this.valid
            }
        }
    },
    mounted(){
        if (localStorage.getItem("educationdivs")) {
            this.edu = JSON.parse(localStorage.getItem("educationdivs"));
        }
        this.instute = localStorage.getItem("institue") || ""
        this.educationdesc = localStorage.getItem("educationdesc") || ""
        this.degreeValue = localStorage.getItem("degree") || ""
        this.duedate = localStorage.getItem("educationduedate") || ""
    },
    created(){
        axios.get('https://resume.redberryinternship.ge/api/degrees').then(res => {
            let degreeValue = res.data
            for(var i = 0; i < degreeValue.length; i++){
                this.degreeResponse.push(degreeValue[i])
            }
        })
        const savedInputs = JSON.parse(localStorage.getItem("divs") || "[]");
        this.divs = savedInputs;
    },
    methods: {
        createAdditionaInputs(e) {
            e.preventDefault()
            this.edu.push({va: "", value2: "", value3: "",value4: ""});
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
            async sendRequest(e){
                e.preventDefault()
                var imageData = localStorage.getItem("image")
                var blob = this.dataURLtoBlob(imageData)
                formData.append("name", this.name)
                formData.append("surname", this.surname)
                formData.append("email", this.email)
                formData.append("phone_number", this.phone_number)
                formData.append("about_me", "kaia")
                formData.append("image",  blob, 'image.' + blob.type.split('/')[1]);
                formData.append("experiences[0][position]", this.position)
                formData.append("experiences[0][employer]", this.recruiter)
                formData.append("experiences[0][start_date]", this.start_date)
                formData.append("experiences[0][due_date]", this.start_date)
                formData.append("experiences[0][description]", this.experienceDescription)
                formData.append("educations[0][institute]", this.instute)
                formData.append("educations[0][degree_id]", this.degreeValue)
                formData.append("educations[0][due_date]", this.duedate)
                formData.append("educations[0][description]", this.educationdesc)
                try{
                    const response = await axios.post("https://resume.redberryinternship.ge/api/cvs", formData, {
                        headers: {
                            "Content-Type" : "multipart/form-data"
                        }
                    })
                    this.responseData = response.data
                    store.commit("updateInfo",this.responseData)
                    console.log(response.data);
                }catch(er){
                    console.log(er);
                }
            },
            goback(e){
                e.preventDefault()
                this.$router.push({ path: "/experience" })
            },
            goFirstPage(){
                localStorage.clear()
                this.$router.push({ path: "/" })
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

.initial {
    border-radius: 3px;
    border: none;
    outline: none;
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
