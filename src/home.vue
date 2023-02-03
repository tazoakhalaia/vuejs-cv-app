<template>
    <div class="home-page">
      <div class="redberry-logo">
        <img src="./assets/redberyy-logo.png" >
        <hr>
      </div>
      <div class="redberry-logo-2">
        <img src="./assets/redberyy-logo2.png">
      </div>
      <div class="resumebtn">
        <router-link to="/generalinformation"><button class="addresume">რეზიუმეს დამატება</button></router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {

  }
  </script>
<style scoped>
    @font-face {
      font-family: HelveticaNeue;
      src: url('./font/HelveticaNeue.ttc');
    }
    .home-page{
      position: relative;
      background: url('./assets/homeBackground.png');
      min-height: 100vh;
    }

    .redberry-logo {
      width: 90%;
      margin: auto;
      padding-top: 40px;
    }

    .redberry-logo-2 {
      width: 300px;
      height: 300px;
      position: absolute;
      top: 58%;
      left: 60%;
      transform: translate(-50%,-50%);
    }

    .resumebtn {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
    }

    .addresume {
      font-family: HelveticaNeue;
      color: #FFFFFF;
      width: 465px;
      height: 60px;
      background-color: black;
      border-radius: 5px;
      cursor: pointer;
      font-weight: bold;
      font-size: 20px;
    }

</style>