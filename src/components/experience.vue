<template>
    <div>
        <div class="info">
            <div class="experience-info">
                <div class="experience-info-header">
                    <div class="img-info-title">
                        <router-link to="/"><img @click="goFirstPage" class="gofirstpageimg" src="../assets/gofirstpagebtn.png"></router-link>
                        <h1 class="info-title">გამოცდილება</h1>
                    </div>
                    <h3 class="page-number">2/3</h3>
                </div>
                <hr>
                <form @submit="foo">
                        <div class="position">
                            <h1 class="position-alert">თანამდებოდა</h1>
                            <input type="text" v-bind:class="positionClass" placeholder="დეველოპერი, დიზაინერი ა.შ" v-model="positionValue">
                            <h6 class="warning">მინიმუმ 2 სიმბოლო</h6>
                    </div>
                    <div class="recruiter">
                        <h1>დამსაქმებელი</h1>
                        <input type="text" v-bind:class="recruiterClass" v-model="recruiteValue" placeholder="დამსაქმებელი">
                        <h6 class="warning">მინიმუმ 2 სიმბოლო</h6>
                    </div>
                    <div class="date">
                        <div class="startdate">
                            <h1>დაწყების რიცხვი</h1>
                       <input type="date" v-model="startDate" v-bind:class="startdateInput" >
                        </div>
                        <div class="enddate">
                            <h1>დამთავრების რიცხვი</h1>
                            <input type="date" v-model="endDate"  v-bind:class="endInput">
                        </div>
                    </div>
                    <div class="description">
                        <h1>აღწერა</h1>
                       <textarea v-bind:class="textareaClass" v-model="textAreaValue" placeholder="როლი თანამდებობაზე და ზოგადი აღწერა (აუცილებელი)" ></textarea>
                    </div>
                    <!---addeddiv-->
                      <div id="container">
                          <div v-for="(item, index) in divs" :key="index">
                             <hr style="width: 100%">
                            <div  style="margin-top: 10px;" class="position">
                                <h1 class="position-alert">თანამდებოდა</h1>
                            <input  type="text" :class="[divs[index].value.length >= 2 ? valid : notValid]" placeholder="დეველოპერი, დიზაინერი ა.შ" v-model="divs[index].value">
                            <h6 class="warning">მინიმუმ 2 ასო, ქართული ასოები</h6>
                             </div>
                             <div class="recruiter">
                        <h1>დამსაქმებელი</h1>
                        <input type="text" :class="[divs[index].value5.length >= 2 ? valid : notValid]"  v-model="divs[index].value5" placeholder="დამსაქმებელი">
                        <h6 class="warning">მინიმუმ 2 სიმბოლო</h6>
                    </div>
                              <div class="date">
                                <div class="startdate">
                            <h1>დაწყების რიცხვი</h1>
                       <input type="date" :class="[divs[index].value3 != 0 ? valid : notValid]" v-model="divs[index].value3" >
                        </div>
                        <div class="enddate">
                            <h1>დამთავრების რიცხვი</h1>
                            <input type="date" :class="[divs[index].value4 != 0 ? valid : notValid]" v-model="divs[index].value4" >
                        </div>
                             </div>
                              <div class="description">
                                <h1>აღწერა</h1>
                                  <textarea type="text" :class="[divs[index].value2 != 0 ? valid : notValid]" v-model="divs[index].value2"  ></textarea>
                              </div>
                              <button class="remove" @click="removeDiv(index)">წაშლა</button>
                            </div>
                             </div>
                    <button class="add-more-experience-btn" @click="createAdditionaInputs">მეტი გამოცდილების დამატება</button>
                    <div class="prev-next-btn">
                        <router-link to='/generalinformation'><button class="prev-page">უკან</button></router-link>
                    <button class="submit-btn" type="submit" @click="nextPage">შემდეგი</button>
                    </div>
                    </form>
            </div>
        </div>
        <ExperienceResume 
        :positionValue="positionValue" 
        :newPositionValue="divs"  
        :newTextArea="divs"
        :newRecruiter="divs"
        :startDate="startDate" :endDate="endDate" 
        :recruiterValue="recruiteValue"
        :textAreaValue="textAreaValue"
        />
    </div>
</template>
<script>
import ExperienceResume from '../resume/experienceresume.vue'
export default {
    data(){
        return {
            divs: [{value: "", value2: "", value3: "",value4: "", value5: ""}],
            positionValue: "",
            valid: "valid",
            notValid: "notvalid",
            initial: "initial",
            recruiteValue: "",
            textAreaValue: "",
            startDate: "",
            endDate: "",
        }
    },
    components: {
        ExperienceResume
    },
    watch: {
        positionValue(newPosition){
            localStorage.setItem("position", newPosition)
        },
        recruiteValue(newRec){
            localStorage.setItem("recruiter", newRec)
        },
        textAreaValue(newText){
            localStorage.setItem('textareadecription', newText)
        },
        startDate(newStartDate){
            localStorage.setItem("startdate", newStartDate)
        },
        endDate(newEndDate){
            localStorage.setItem('enddate', newEndDate)
        },
        divs: {
            handler(newValue){
                localStorage.setItem("divs", JSON.stringify(newValue));
            },
            deep: true
        }
    },
    computed: {
        positionClass(){
            if(this.positionValue.length >= 2){
                return this.valid
            }else if ( this.positionValue.length > 0 && this.positionValue.length < 2){
                return this.notValid
            }else if(this.positionValue.length == 0){
                return this.initial
            }
        },
        recruiterClass(){
            if(this.recruiteValue.length >= 2){
                return this.valid
            }else if (this.recruiteValue.length > 0 && this.recruiteValue.length < 2){
                return this.notValid
            }else if(this.recruiteValue.length == 0){
                return this.initial
            }
        },
        textareaClass(){
            if(this.textAreaValue.length >= 1){
                return this.valid
            }else if ( this.textAreaValue.length > 0 &&this.textAreaValue.length < 1){
                return this.notValid
            }else if(this.positionValue.length == 0){
                return this.initial
            }
        },
        startdateInput(){
            if(this.startDate != ""){
                return this.valid
            }
            },
            endInput(){
                if(this.endDate != ""){
                return this.valid
            }
        }
    },
    mounted(){
        if (localStorage.getItem("divs")) {
      this.divs = JSON.parse(localStorage.getItem("divs"));
    }
    this.positionValue = localStorage.getItem("position") || ""
    this.recruiteValue = localStorage.getItem("recruiter") || ""
    this.textAreaValue = localStorage.getItem("textareadecription") || ""
    this.startDate = localStorage.getItem("startdate") || ""
    this.endDate = localStorage.getItem("enddate") || ""
    },
    created(){
        const savedInputs = JSON.parse(localStorage.getItem("divs") || "[]");
        this.divs = savedInputs;
    },
    methods: {
        createAdditionaInputs(e) {
            e.preventDefault();
      this.divs.push({value: "", value2: "", value3: "",value4: "", value5: ""});
    },
    removeDiv(index){        
        this.divs.splice(index,1)
        localStorage.setItem('divs', JSON.stringify(this.divs))
    },
    goFirstPage(){
        localStorage.clear()
    },
    nextPage(e){
        e.preventDefault()
        if(this.positionValue.length >= 2 && this.recruiteValue.length >= 2 
        && this.startDate != "" && this.endDate != "" && this.textAreaValue != ""){
            this.$router.push({ path: "/education" })
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
    border: 1px solid #76f776;
}

.initial {
    border-radius: 3px;
    border: none;
    outline: none;
}

.notvalid {
    outline: none;
    background: url('../assets/notallow.png');
    background-color: white;
    background-repeat: no-repeat;
    background-size: 20px 20px;
    background-position: 99% center;
    border: 1px solid red;
}

.info {
    width: 55%;
    background-color: #f9f9f9;
    float: left;
}

.experience-info {
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

.experience-info-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.img-info-title {
    display: flex;
    align-items: center;
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
    margin-left: -60px;
}

form {
    position: relative;
    width: 100%;
    margin-top: 85px;
    padding-bottom: 50%;
}
.position input {
    width: 100%;
    height: 31px;
    border-radius: 3px;
    outline: none;
    margin-top: 10px;
}
.position-alert {
    font-size: 18px;
}

.warning {
    font-family: HelveticaNeue;
    margin-top: 10px;
    color: #2E2E2E;
}

.recruiter {
    margin-top: 50px;
}
.recruiter h1 {
    font-size: 18px;
}

.recruiter input {
    width: 100%;
    height: 31px;
    border-radius: 3px;
    outline: none;
    margin-top: 10px;
}

.date {
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
}
.startdate input,
.enddate input {
    width: 340px;
    height: 30px;
    border-radius: 3px;
    border: 0.5px solid grey;
    margin-top: 10px;
}

.startdate h1,
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
