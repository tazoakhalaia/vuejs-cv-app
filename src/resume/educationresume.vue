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
            <h1 class="position">გამოცდილება</h1>
            <h1 class="pos-rec">{{ position }} {{ recruiter }}</h1>
            <h2 class="experiencedesc">{{ experienceDescription }}</h2>
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
            experienceDescription: localStorage.getItem("textareadecription")
        }
    },
    props: {
        positionValue: {
            type: String,
            require: false
        },
        newPositionValue: {
            type: Array,
            require: false
        },
        startDate: {
            type: String,
            require: false
        },
        endDate: {
            type: String,
            require: false
        },
        recruiterValue: {
            type: String,
            require: false
        },
        textAreaValue: {
            type: String,
            require: false
        },
        newTextArea: {
            type: Array,
            require: false
        }

    },
    mounted() {
        console.log(this.startDate);
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
    word-wrap: break-word ;
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
    font-size: 26px;
    font-weight: bold;
    color: #F93B1D;
    font-family: HelveticaNeue;
}

.pos-rec {
    margin-top: 10px;
    font-size: 18px;
    font-weight: bold;
    font-family: HelveticaNeue;
    margin-bottom: 20px;
}
.experiencedesc{
    margin-top: 10px;
    font-size: 18px;
    font-weight: bold;
    font-family: HelveticaNeue;
    margin-bottom: 20px;
}
</style>