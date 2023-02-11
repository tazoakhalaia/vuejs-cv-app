<template >
    <div>
        {{ cvResult.surname }}
        {{ cvResult.name }}
        {{ cvResult.email }}
        {{ cvResult.phone_number }}
        {{ cvResult.about_me }}
        {{ cvResult.educations[0].institute }}
        {{ cvResult.educations[0].degree }}
        {{ cvResult.educations[0].description }}
        {{ cvResult.experiences[0].description }}
        {{ cvResult.experiences[0].due_date }}
        {{ cvResult.experiences[0].employer }}
        {{ cvResult.experiences[0].position }}
        {{  cvResult.experiences[0].start_date }}
        <h1>img</h1>
        <img :src="image+cvResult.image" alt="">

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
    }
}
</script>
<style lang="">
    
</style>