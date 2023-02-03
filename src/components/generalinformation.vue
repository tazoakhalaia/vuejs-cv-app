<template>
    <div>
        <div class="info">
            <div class="private-info">
                <div class="private-info-header">
                    <div class="img-info-title">
                        <router-link to="/"><img class="gofirstpageimg" src="../assets/gofirstpagebtn.png"></router-link>
                    <h1 class="info-title">პირადი ინფო</h1>
                    </div>
                    <h3 class="page-number">1/3</h3>
                </div>
                <hr>
                <form @submit="foo">
                    <div class="name-surname">
                        <div class="name">
                            <h1 class="name-surname-field">სახელი</h1>
                            <input :class="[name.match(geoRegex) && name.length >=2 ? valid : nameinput]" type="text" v-model="name" placeholder="სახელი">
                            <h6 class="warning">მინიმუმ 2 ასო, ქართული ასოები</h6>
                        </div>
                        <div class="surname">
                            <h1 class="name-surname-field">გვარი</h1>
                            <input :class="[surname.match(geoRegex) && surname.length >=2  ? valid : surnameinput]" type="text" v-model="surname" placeholder="გვარი">
                            <h6 class="warning">მინიმუმ 2 ასო, ქართული ასოები</h6>
                        </div>
                    </div>
                        <button class="submit-btn" type="submit" :disabled="!isDisabled">შემდეგი</button>
                    </form>
            </div>
        </div>
        <div class="resume-design">
            <h1>{{ name }}</h1>
        </div>
    </div>
</template>
<script>
import Vector from '../assets/Vector.png'
export default {
    data(){
        return {
            surnameinput: "surname-input",
            nameinput: "name-input",
            valid: "validname-surname",
            name: "",
            surname: "",
            geoRegex: /^[ა-ჰ]+$/g,
            vector: [Vector]

        }
    },
    watch: {
        surname(newMessage){
            localStorage.setItem('surname', newMessage)
        },
        name(newName){
            localStorage.setItem('name', newName)
        }
    },
    mounted(){
       this.surname = localStorage.getItem("surname")
       this.name = localStorage.getItem("name")
    },
    computed: {
        isDisabled(){
            if(this.name.match(this.geoRegex) && this.name.length >= 2 && this.surname.match(this.geoRegex) && this.surname.length >= 2){
                return true
            }else {
                return false
            }
        }
    },
    methods: {
        foo(e){
            e.preventDefault();
            console.log('nice');
        }
    }
}
</script>
<style scoped>

@font-face {
      font-family: HelveticaNeue;
      src: url('../font/HelveticaNeue.ttc');
    }
   

.info {
    width: 55%;
    background-color: #dadada;
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
}

form {
    position: relative;
    width: 100%;
    margin-top: 15px;
    padding-bottom: 100%;
}

.name-surname {
    display: flex;
    justify-content: space-between;
}

.name-input,
.surname-input {
    width: 390px;
    height: 31px;
    border-radius: 3px;
    border: none;
    outline: none;
}

.validname-surname {
    width: 390px;
    height: 31px;
    border-radius: 3px;
    border: none;
    outline: none;
    background: url('../assets/Vector.png');
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
}

</style>