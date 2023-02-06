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
                      <div id="container">
                          <div v-for="(item, index) in divs" :key="index">
                             <hr style="width: 100%">
                            <div  class="nn">
                             <input style="width: 100px; height: 30px; margin-top;" type="text" />
                             </div>
                              <div class="nn">
                                 <input style="width: 10px; height: 30px;" type="text"  />
                             </div>
                             <div class="nn">
                                  <input style="width: 170px; height: 30px;" type="date" />
                             </div>
                              <div class="nn">
                                  <textarea style="width: 120px; height: 30px;" type="text" ></textarea>
                              </div>
                            </div>
                             </div>
                    <button class="add-more-experience-btn" @click="createAdditionaInputs">მეტი გამოცდილების დამატება</button>
                    <div class="prev-next-btn">
                        <button class="prev-page">უკან</button>
                        <button class="submit-btn" type="submit" @click="sendreq">შემდეგი</button>
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
            divs: [],
        }
    },
    mounted(){
        if (localStorage.getItem("divs")) {
      this.divs = JSON.parse(localStorage.getItem("divs"));
    }
    },
    methods: {
        createAdditionaInputs(e) {
            e.preventDefault();
      this.divs.push('');
      localStorage.setItem('divs', JSON.stringify(this.divs))
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
