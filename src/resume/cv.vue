<template>
    <div style="display: flex; justify-content: center;">
        <div class="resume-container">
            <div class="left-side">
                <h1 class="username">{{ nameOfUser }} {{ surname }}</h1>
                <div class="user-email-phone">
                    <div v-if="userEmail" class="emaillogo">
                        <img src="../assets/email_logo.png">
                        <h3 class="email-phone-h3">{{ userEmail }}</h3>
                    </div>
                    <div class="phonelogo">
                        <img v-if="userNumber" src="../assets/phone_logo.png">
                        <h3 class="email-phone-h3">{{ userNumber }}</h3>
                    </div>
                </div>
                <div class="about-user">
                    <h1 v-if="aboutUser" class="about-me">ჩემ შესახებ</h1>
                    <p>{{ aboutUser }}</p>
                </div>
                <div class="resume-bottom-logo">
            <img src="../assets/LOGO.png" alt="">
        </div>
            </div>
        <img v-if="userImage" :src="userImage" class="userimage" >
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    props: {
        nameOfUser: {
            type: String,
            require: false
        },
        surname: {
            type: String,
            require: false
        },
        userImage: {
            type: String,
            require: false
        },
        aboutUser: {
            type: String,
            require: false
        },
        userEmail: {
            type: String,
            require: false
        },
        userNumber: {
            type: String,
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
</style>