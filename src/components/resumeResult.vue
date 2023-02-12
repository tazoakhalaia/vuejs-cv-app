<template >
    <div style="display: flex; justify-content: space-between; padding-top: 30px; ">
        <div class="left-side" style="width: 75%; display: flex; justify-content: space-between;">
        <div class="gofirstpageicon">
            <img @click="goFirstPage" src="../assets/gofirstpagebtn.png" >
        </div>
        <div class="resume">
            <div class="resume-mid">
            <div class="generalinfo">
                <div class="name-surname">
                    <div class="n-s">
                    <h1>{{ cvResult.name }}</h1>
                    <h1 style="margin-left: 20px;">{{ cvResult.surname }}</h1>
                </div>
                <img :src="image+cvResult.image">
                </div>
                <div class="email">
                    <img src="../assets/email_logo.png">
                    <h3>{{ cvResult.email }}</h3>
                </div>
                <div class="phone">
                    <img src="../assets/phone_logo.png">
                    <h3>{{ cvResult.phone_number }}</h3>
                </div>
                <div class="about-me">
                    <h1>ჩემს შესახებ</h1>
                    <p>{{ cvResult.about_me }}</p>
                </div>
                <hr style="margin-top: 30px;"> 
            </div>
            <div class="experience-info">
                <h1>გამოცდილება</h1>
                <div class="position-recruiter">
                    <h2>{{ cvResult.experiences[0].position }}</h2>
                    <h2 style="margin-left: 10px;">{{ cvResult.experiences[0].employer }}</h2>
                </div>
                <div class="start-end-date">
                    <h3>{{  cvResult.experiences[0].start_date }}</h3>
                    <h3 style="margin-left: 10px;"> {{ cvResult.experiences[0].due_date }}</h3>
                </div>
                <div class="experience-desc">
                    <p> {{ cvResult.experiences[0].description }}</p>
                </div>
                <hr style="margin-top: 30px;">
            </div>
            <div class="education-info">
                <h1>განათლება</h1>
                <div class="institute-degree">
                <h2>{{ cvResult.educations[0].institute }}</h2>
                <h2 style="margin-left: 10px;">{{ cvResult.educations[0].degree }}</h2>
            </div>
            <div class="duedate">
                <h3>{{ cvResult.educations[0].due_date }}</h3>
            </div>
            <div class="education-desc">
                <p>askdjhakjd</p>
            </div>
            </div>
        </div>
        </div>
    </div>
        <div class="success-message" ref="successmessage">
            <div class="message">
                <h1>რეზიუმე წარმატებით გაიგზავნა 🎉</h1>
                <img @click="closeAlert" src="../assets/close.png">
            </div>
        </div>

    </div>
</template>
<script>
import store from '../store/index'
export default {
    data(){
        return{
        cvResult: store.state.text,
        image: "https://resume.redberryinternship.ge/"
        }
    },
    methods: {
        closeAlert(){
            this.$refs.successmessage.style.display = "none"
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

    .resume {
        width: 1100px;
        margin-left: 200px;
    }
    .success-message{
        width: 350px;
        height: 140px;
        border-radius: 5px;
        background-color: #FFFFFF;
        margin-right: 30px;
        box-shadow: 0 0 5px 0 black;
    }

    .gofirstpageicon {
        margin-left: 30px;
        cursor: pointer;
    }
    .resume-mid {
        margin: auto;
        width: 80%;
        margin-top: -150px;
    }

    .name-surname {
        width: 750px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .name-surname img {
        width: 250px;
        height: 250px;
        border-radius: 50%;
        margin-top: 150px;
    }
    .n-s {
        display: flex;
    }

    .name-surname h1{
        color: #F93B1D;
    }

    .email,
    .phone{
        display: flex;
    }

    .email h3 {
        font-size: 18px;
        margin-left: 10px;
        margin-top: -140px;
    }
    .phone h3 {
        margin-left: 10px;
        font-size: 18px;
        margin-top: -100px;
    }

    .email img {
        width: 20px;
        height: 20px;
        margin-top: -140px;
    }
    .phone img {
        width: 20px;
        height: 20px;
        margin-top: -100px;
    }

    .about-me {
        margin-top: -15px;
    }

    .about-me h1 {
        color: #F93B1D;
        font-size: 18px;
    }

    .about-me p {
        font-size: 16px;
        margin-top: 10px;
    }

    .experience-info {
        margin-top: 30px;
    }

    .experience-info h1 {
        font-size: 18px;
        color: #F93B1D;
    }

    .position-recruiter {
        margin-top: 10px;
        display: flex;
    }

    .position-recruiter h2 {
        font-size: 16px;
    }

    .start-end-date {
        display: flex;
        margin-top: 10px;
    }

    .start-end-date h3 {
        font-size: 16px;
        color: grey;
    }

    .experience-desc p {
        margin-top: 15px;
        font-size: 16px;
    }

    .education-info {
        margin-top: 20px;
    }

    .education-info h1 {
        color: #F93B1D;
        font-size: 18px;
    }

    .institute-degree {
        display: flex;
        margin-top: 10px;
    }

    .institute-degree h2 {
        font-size: 16px;
    }

    .duedate {
        margin-top: 10px;
    }

    .duedate h3 {
        font-size: 16px;
        color: grey;
    }

    .education-desc {
        margin-top: 10px;
    }

    .success-message h1 {
        font-size: 24px;
        margin-top: 30px;
        margin-left: 50px;
    }

    .message {
        display: flex;
    }
    .message img {
        width: 20px;
        height: 20px;
        cursor: pointer;
    }
</style>
