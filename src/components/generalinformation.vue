<template>
    <div>
        <div class="info">
            <div class="private-info">
                <div class="private-info-header">
                    <div class="img-info-title">
                        <router-link to="/"><img @click="goFirstPage" class="gofirstpageimg" src="../assets/gofirstpagebtn.png"></router-link>
                        <h1 class="info-title">პირადი ინფო</h1>
                    </div>
                    <h3 class="page-number">1/3</h3>
                </div>
                <hr>
                <form @submit="foo">
                    <div class="name-surname">
                        <div class="name">
                            <h1 class="name-surname-field">სახელი</h1>
                            <input v-bind:class="nameInput" type="text" v-model="name" placeholder="სახელი">
                            <h6 class="warning">მინიმუმ 2 ასო, ქართული ასოები</h6>
                        </div>
                        <div class="surname">
                            <h1 class="name-surname-field">გვარი</h1>
                            <input v-bind:class="surnameInput" type="text" v-model="surname" placeholder="გვარი">
                            <h6 class="warning">მინიმუმ 2 ასო, ქართული ასოები</h6>
                        </div>
                    </div>
                    <div class="upload-picture">
                        <span class="uploadphoto">პირადი ფოტოს ატვირთვა</span><input v-bind:class="uploadphoto" type="file" @change="fleupload" >
                    </div>
                    <div class="about-me">
                        <h1>ჩემს შესახებ (არასავალდებულო)</h1>
                        <textarea name="aboutme"  cols="30" rows="10" v-model="textareaText" maxlength="1000" placeholder="ზოგადი ინფო შენს შესახებ"></textarea>
                    </div>
                    <div class="email-field">
                        <h1>ელ.ფოსტა</h1>
                       <input type="text" v-model="email" v-bind:class="emailInput" placeholder="ელ.ფოსტა უნდა მთავრდებოდეს @redberry.ge">
                    </div>
                    <div class="phone-number">
                        <h1>მობილური ნომერი</h1>
                       <input type="text" v-model="phoneText" v-bind:class="phoneInput" placeholder="+995 959 16 11 11">
                    </div>
                       <button class="submit-btn" type="submit" @click="nextPage" >შემდეგი</button>
                    </form>
            </div>
        </div>
        <div class="resume-design">
            <Resume :nameOfUser ="name" :surname="surname" :userImage="picture" :aboutUser="textareaText" :userEmail="email" :userNumber="phoneText"/>
        </div>
    </div>
</template>
<script>
import Vector from '../assets/Vector.png'
import Resume from '../resume/cv.vue'
// /^(\+995\d{9})$/
export default {
    data(){
        return {
            notvalid: "notvalid",
            valid: "valid",
            initial : "initial",
            name: "",
            surname: "",
            textareaText: "",
            email: "",
            geoRegex: /^[ა-ჰ]+$/g,
            emailRegex: /^[a-zA-Z0-9_.+-]+@redberry\.ge$/,
            vector: [Vector],
            picture: [],
            emailinput: "email-field input",
            phoneRegex: /^\+995\s5\d{2}\s\d{2}\s\d{2}\s\d{2}$/,
            phoneText: "",
}
    },
    components: {
        Resume
    },
    watch: {
        surname(newMessage){
            localStorage.setItem('surname', newMessage)
        },
        name(newName){
            localStorage.setItem('name', newName)
        },
        picture(newImage){
            localStorage.setItem('image', newImage)
        },
        email(newEmail){
            localStorage.setItem("email",newEmail)
        },
        phoneText(newNumber){
            let newNumberWithNoSpace = newNumber.replace(/ /g,"")
            localStorage.setItem("phone_number", newNumberWithNoSpace)
            localStorage.setItem("number", newNumber)
        },
        textareaText(newTextArea){
            localStorage.setItem("description", newTextArea)
        }
    },
    mounted(){
       this.surname = localStorage.getItem("surname") || ""
       this.name = localStorage.getItem("name") || ""
       this.picture = localStorage.getItem('image') || ""
       this.email = localStorage.getItem("email") || ""
       this.phoneText = localStorage.getItem("number") || ""
       this.textareaText = localStorage.getItem("description") || ""
    },
    computed: {
        // isDisabled(){
        //     if(this.name.match(this.geoRegex) && this.name.length >= 2 
        //     && this.surname.match(this.geoRegex) && this.surname.length >= 2 &&
        //     this.picture.length != 0 && this.email.match(this.emailRegex) && 
        //     this.phoneText.match(this.phoneRegex)){
        //         return true
        //     }
        //     else {
        //         return false
        //     }
        // },
        nameInput(){
            if(this.name.length >= 2 && this.name.match(this.geoRegex)){
                return this.valid
            }else if(this.name.length == 0){
                return this.initial
            }else {
                return this.notvalid
            }
        },
        surnameInput(){
            if(this.surname.length >= 2 && this.surname.match(this.geoRegex)){
                return this.valid
            }else if(this.surname.length == 0){
                return this.initial
            }else {
                return this.notvalid
            }
        },
        uploadphoto(){
            if(this.picture.length !=0){
                return this.valid
            }else {
                return this.notvalid
            }
        },
        emailInput(){
            if(this.email.match(this.emailRegex)){
                return this.valid
            }else if(this.email.length == 0){
                return this.initial
            }else{
                return this.notvalid
            }
        },
        phoneInput(){
            if(this.phoneText.match(this.phoneRegex)){
                return this.valid
            }else if(this.phoneText.length == 0){
                return this.initial
            }else{
                return this.notvalid
            }
        }
    },
    methods: {
        fleupload(e){
            this.picture = e.target.files[0]
            var reader = new FileReader()
            reader.addEventListener("load", () => {
                 this.picture = reader.result;
                 })
                 reader.readAsDataURL(this.picture);
                },
        goFirstPage(){
            localStorage.clear()
        },
        nextPage(e){
            e.preventDefault();
            if(this.name.match(this.geoRegex) && this.name.length >= 2 
             && this.surname.match(this.geoRegex) && this.surname.length >= 2 &&
             this.picture.length != 0 && this.email.match(this.emailRegex) && 
             this.phoneText.match(this.phoneRegex)){
                this.$router.push({ path: "/experience" })
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
   

.info {
    width: 55%;
    background-color: #f9f9f9;
    float: left;
}

.private-info {
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

.private-info-header {
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

.name-surname {
    display: flex;
    justify-content: space-between;
}

.name input ,
.surname input  {
    width: 390px;
    height: 31px;
    border-radius: 3px;
    outline: none;
}

.valid {
    border-radius: 3px;
    border: 1px solid #76f776;
    outline: none;
    background: url('../assets/Vector.png');
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
.notvalid {
    outline: none;
    border: 1px solid red;
    background: url('../assets/notallow.png');
    background-color: white;
    background-repeat: no-repeat;
    background-size: 20px 20px;
    background-position: 99% center;
}


.name-surname-field {
    font-family: HelveticaNeue;
    font-size: 14px;
    margin-bottom: 5px;
} 

.warning {
    font-family: HelveticaNeue;
    margin-top: 5px;
    color: #2E2E2E;
}

.submit-btn {
    position: absolute;
    font-family: HelveticaNeue;
    left: 85%;
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

.uploadphoto  {
    font-family: HelveticaNeue;
    font-weight: bold;
}

.upload-picture {
    margin-top: 90px;
}

.upload-picture input {
    margin-left: 15px;
}

.upload-picture input[type="file"]{
    position: relative;
    width: 110px;
    height: 20;
    color: rgba(218, 17, 17, 0);
    background-color: #0E80BF;
    border-radius: 3px;
}

.upload-picture input[type="file"]::before {
    position: absolute;
    content: 'ატვირთე';
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    color: white;
    white-space: nowrap; 
    cursor: pointer;
    font-family: HelveticaNeue;
    font-size: 12px;
}

input[type="file"]::-webkit-file-upload-button {
    visibility: hidden;
  }

  .about-me {
    margin-top: 100px;
  }

  .about-me h1 {
    font-size: 18px;
  }

  .about-me textarea {
    resize: none;
    margin-top: 5px;
    width: 100%;
    border-radius: 3px;
    outline: none;
  }

  .email-field {
    margin-top: 110px;
  }
  .email-field h1 {
    font-size: 18px;
  }

  .email-field input {
    width: 100%;
    height: 35px;
    border-radius: 3px;
    outline: none;
    margin-top: 10px;
  }
  .phone-number {
    margin-top: 110px;
  }

  .phone-number input {
    width: 100%;
    height: 35px;
    border-radius: 3px;
    margin-top: 10px;
  }

  .phone-number h1 {
    font-size: 18px;
  }
</style>