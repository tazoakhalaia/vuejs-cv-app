<template>
    <div style="display: flex; justify-content: center;">
        <div class="resume-container" >
            <div class="left-side" style=" word-break:break-all;">
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
                <div style="margin-top: 20px;" class="position-div">
                    <hr style="margin-bottom: 30px">
                    <h1 v-if="positionValue" class="position-text">გამოცდილება</h1>
                    <div class="allposition" style="display: flex;">
            <h2  class="user-position">{{ positionValue }}</h2>
            <h1 v-for="(item,index) in newPositionValue">{{ item.value}}</h1>
            <h3>{{ recruiterValue }}</h3>
        </div>
            <h4 class="date">{{ startDate }}  {{ endDate }}</h4>
            <div class="textareas" style="display: flex;">
                <h3 class="textarea">{{ textAreaValue}}</h3>
                <h3 style="margin-left: 10px;" v-for="(text,index) in newTextArea">{{ text.value2 }}</h3>
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

.position-text {
    font-size: 18px;
    font-weight: bold;
    color: #F93B1D;
    font-family: HelveticaNeue;
    margin-bottom: 20px;
}

.user-position {
    font-size: 16px;
}

.date {
    font-size: 16px;
    color: #909090;
    margin-top: 10px;
}

.textareas h3 {
    font-size: 16px;
    margin-top: 10px;
}


.allposition h1{
    margin-left: 10px;
    font-size: 16px;
}

.allposition h3 {
    font-size: 16px;
    margin-left: 10px;
}
</style>