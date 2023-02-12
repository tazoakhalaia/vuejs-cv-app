<template>
    <div style="display: flex; justify-content: center;">
        <div class="resume-container">
            <div class="left-side">
                <h1 class="username">{{ userName }} {{ surName }}</h1>
                <div class="user-email-phone">
                    <div  class="emaillogo">
                        <img src="../assets/email_logo.png">
                        <h3 class="email-phone-h3">{{ email }}</h3>
                    </div>
                    <div class="phonelogo">
                        <img  src="../assets/phone_logo.png">
                        <h3 class="email-phone-h3">{{ phoneNumber }}</h3>
                    </div>
                </div>
                <div class="about-user">
                    <h1  class="about-me">ჩემ შესახებ</h1>
                    <p>{{ description }}</p>
                </div>
                <div class="resume-bottom-logo">
                    <img src="../assets/LOGO.png" alt="">
                </div>
                <hr style="background-color: black; margin-top: 20px; margin-bottom: 10px;">
        <div class="experience-div">
            <h1 class="position" style="font-size: 18px;">გამოცდილება</h1>
            <div class="fullpos">
                <h1 class="pos-rec">{{ position }} {{ recruiter }}</h1>
                <h1 v-for="(item,indnex) in experinceAddedinputs"> {{ item.value }}</h1>
            </div>
            <h3>{{ startDate }} {{ endDate }}</h3>
            <div class="desc" style="display: flex;">
                <h2 class="experiencedesc">{{ experienceDescription }}</h2>
                <h2 style="margin-left: 5px;" v-for="(desc,index) in experinceAddedinputs"> {{ desc.value2 }}</h2>
            </div>
        </div>
        <hr>
        <div class="education-div">
            <h1 v-if="institute || duedate || educationDescription">განათლება</h1>
            <div class="inst">
                <h2>{{ institute }} </h2>
                <h2 v-for="(inst,index) in newInstitute">{{ inst.value }}</h2>
            </div>
            <div class="due-date">
                <h3>{{ duedate }}</h3>
                <h3 v-for="(datenumber,index) in newDate ">{{ datenumber.value3 }}</h3>
            </div>
            <div class="educationdescription">
               <p>{{ educationDescription }}</p>
               <p v-for="(newdesc,index) in newEducationDesc">{{ newdesc.value4 }}</p>
            </div>
        </div>
            </div>
            <img :src="image" class="userimage" >
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            userName: localStorage.getItem("name"),
            surName: localStorage.getItem('surname'),
            phoneNumber: localStorage.getItem("phone_number"),
            email: localStorage.getItem("email"),
            description: localStorage.getItem("description"),
            image: localStorage.getItem("image"),
            position: localStorage.getItem("position"),
            recruiter: localStorage.getItem("recruiter"),
            startDate: localStorage.getItem("startdate"),
            endDate: localStorage.getItem("enddate"),
            experienceDescription: localStorage.getItem("textareadecription"),
            experinceAddedinputs: JSON.parse(localStorage.getItem("divs"))
        }
    },
    props: {
        institute: {
            type: String,
            required: false
        },
        duedate: {
            type: String,
            required: false
        },
        educationDescription: {
            type: String,
            required: false
        },
        newInstitute: {
            type: Array,
            required: false
        },
        newDate: {
            type: Array,
            required: false
        },
        newEducationDesc: {
            type: Array,
            required: false
        }

    },
    mounted() {
        console.log(this.experinceAddedinputs);
    },
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
.resume-container {
    width: 100%;
    padding-top: 50px;
    position: relative;
}

.resume-bottom-logo {
    position: absolute;
    bottom: 0;
    left: 100px;
}

.username {
    font-size: 34px;
    font-weight: bold;
    color: #F93B1D;
    font-family: HelveticaNeue;

}

.left-side {
    float: left;
    width: 50%;
    word-break: break-all ;
    margin-left: 100px;
    padding-bottom: 100%;
}

.userimage {
    margin-top: 0;
    margin-left: 10px;
    width: 220px;
    height: 220px;
    border-radius: 50%;
}

.user-email-phone {
    margin-top: 20px;
}

.email-phone-h3 {
    font-size: 16px;
    font-family: HelveticaNeue;
    margin-top: 10px;
    margin-left: 10px;
}

.emaillogo {
    display: flex;
    align-items: center;
}

.emaillogo img {
    width: 20px;
    height: 20px;
    margin-top: 15px;
}

.phonelogo {
    display: flex;
    align-items: center;
}

.phonelogo img {
    width: 16px;
    height: 16px;
    margin-top: 10px;
}

.about-user {
    margin-top: 50px;
}

.about-user p {
    margin-top: 15px;
}
.about-me {
    font-size: 20px;
    color: #F93B1D;
}
.position {
    font-size: 18px;
    font-weight: bold;
    color: #F93B1D;
    font-family: HelveticaNeue;
    margin-bottom: 20px;
}

.experiencedesc{
    margin-top: 10px;
    font-size: 16px;
    font-weight: bold;
    font-family: HelveticaNeue;
    margin-bottom: 20px;
}

.education-div {
    margin-top: 20px;
}


.experience-div h3 {
    font-size: 16px;
    color: grey;
}
.education-div h1 {
    color:#F93B1D;
    font-size: 18px;
}

.inst h2 {
    margin-top: 10px;
    font-size: 16px;
}
.due-date {
    color: grey;
    margin-top: 10px;
    font-size: 16px;
}

.educationdescription p {
    font-size: 16px;
    margin-top: 10px;
}

.fullpos {
    display: flex;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 20px;
}

.fullpos h1{
    font-size: 16px;
    margin-left: 5px;
}

.desc h2 {
    font-size: 16px;
    margin-top: 10px;
}
</style>