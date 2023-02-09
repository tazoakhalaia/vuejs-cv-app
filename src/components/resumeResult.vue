<template >
    <div>
        <h1>result</h1>
        <img :src="userImage">
        {{ response.name }}
        {{ response.surname }}
    </div>
</template>
<script>
export default {
    data(){
        return{
        userImage: localStorage.getItem("image"),
        response: JSON.parse(localStorage.getItem("response"))
        }
    },

}
</script>
<style lang="">
    
</style>