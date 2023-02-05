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
                            <input type="text" placeholder="დეველოპერი, დიზაინერი ა.შ">
                            <h6 class="warning">მინიმუმ 2 ასო, ქართული ასოები</h6>
                    </div>
                    <div class="recruiter">
                        <h1>დამსაქმებელი</h1>
                        <input type="text" placeholder="დამსაქმებელი">
                        <h6 class="warning">მინიმუმ 2 ასო, ქართული ასოები</h6>
                    </div>
                    <div class="date">
                        <div class="startdate">
                            <h1>დაწყების რიცხვი</h1>
                       <input type="date" >
                        </div>
                        <div class="enddate">
                            <h1>დამთავრების რიცხვი</h1>
                            <input type="date" >
                        </div>
                    </div>
                    <div class="description">
                        <h1>აღერა</h1>
                       <textarea placeholder="როლი თანამდებობაზე და ზოგადი აღწერა" ></textarea>
                    </div>
                    <hr>
                    <!-- <input v-model="newDiv.input1" type="text" />
    <input v-if="ss"  v-model="newDiv.input2" type="text" />
    <input v-model="newDiv.input3" type="text" />
    <input v-model="newDiv.input4" type="text" />
    <input v-model="newDiv.input5" type="text" />
    <button @click="addDiv">Add div</button>
    <div v-for="(item, index) in divs" :key="index">
      {{ item.input1 }} {{ item.input2 }} {{ item.input3 }} {{ item.input4 }} {{ item.input5 }}
    </div> -->
                    <!-- <div class="added-inputs" v-for="(item) in newDiv">
                    {{ item }} -->
                        
                        <!-- <div  class="position" v-for="(position,positionindex) in positions" :key="positionindex">
                            <h1 class="position-alert">თანამდებოდა</h1>
                        <input placeholder="დეველოპერი, დიზაინერი ა.შ" />
                        <h6 class="warning">მინიმუმ 2 ასო, ქართული ასოები</h6>
                    </div>
                    <div class="recruiter" v-for="(recruter,recruiterindex) in recruiters" :key="recruiterindex">
                        <h1>დამსაქმებელი</h1>
                        <input placeholder="დამსაქმებელი"/>
                        <h6 class="warning">მინიმუმ 2 ასო, ქართული ასოები</h6>
                    </div>
                    <div class="date">
                        <div class="startdate" v-for="(start,startdateindex) in startdate" :key="startdateindex">
                            <h1>დაწყების რიცხვი</h1>
                            <input type="date">
                        </div>
                        <div class="enddate" v-for="(end,endindex) in enddate" :key="endindex">
                            <h1>დამთავრების რიცხვი</h1>
                            <input type="date">
                        </div>
                    </div>
                    <div class="description" v-for="(textarea,textareIndex) in textareaField" :key="textareIndex">
                        <h1>აღერა</h1>
                        <textarea placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"></textarea>
                    </div> -->
                    <!-- </div> -->
                    <button class="add-more-experience-btn" @click="createAdditionaInputs">მეტი გამოცდილების დამატება</button>
                    <div class="prev-next-btn">
                        <button class="prev-page">უკან</button>
                        <button class="submit-btn" type="submit">შემდეგი</button>
                    </div>
                    </form>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    data(){
        return {
    //         ss: false,
    //        positions: [],
    //        recruiters: [],
    //        startdate: [],
    //        enddate: [],
    //        textareaField: [],
    //        divs: [],
    //   newDiv: {
    //     input1: '',
    //     input2: '',
    //     input3: '',
    //     input4: '',
    //     input5: ''
    //   }
        }
    },
    methods: {
        // createAdditionaInputs(e){
        //     e.preventDefault();
        //     // this.positions.push({})
        //     // this.recruiters.push({})
        //     // this.startdate.push({})
        //     // this.enddate.push({})
        //     // this.textareaField.push({})
        //     // console.log("nice");
        //     // this.newDiv.push(this.ss)
        //     // this.ss = ""
        // },
//         addDiv(e) {
// e.preventDefault()
// this.ss = true
//       this.divs.push(Object.assign({}, this.newDiv));
//       this.newDiv = {
//         input1: '',
//         input2: '',
//         input3: '',
//         input4: '',
//         input5: ''
//       }
//     }
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
    border: 0.5px solid grey;
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
    border: 0.5px solid grey;
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


  
</style>
