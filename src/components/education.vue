<template >
        <div>
        <button @click="sendRequest">send request</button>
    </div>
</template>
<script>
import axios from 'axios'
let formData = new FormData()
export default {
    data(){
        return{
            img: "",
            name: localStorage.getItem("name"),
            surname: localStorage.getItem("surname"),
            email: localStorage.getItem("email"),
            phone_number: localStorage.getItem("phone_number"),
            generalDescription: localStorage.getItem("description"),
            experienceDescription: localStorage.getItem("textareadecription"),
            start_date: localStorage.getItem("startdate"),
            enddate: localStorage.getItem("due_date"),
            position: localStorage.getItem("position"),
            responseData: ""


        }
    },
    methods: {
        dataURLtoBlob(dataURL){
  var parts = dataURL.split(',');
  var mime = parts[0].split(':')[1].split(';')[0];
  var binary = atob(parts[1]);
  var array = [];
  for (var i = 0; i < binary.length; i++) {
    array.push(binary.charCodeAt(i));
  }
  return new Blob([new Uint8Array(array)], {
    type: mime
  });
},
        async sendRequest(){
            var imageData = localStorage.getItem("image")
    var blob = this.dataURLtoBlob(imageData)
        formData.append("name", this.name)
        formData.append("surname", this.surname)
        formData.append("email", this.email)
        formData.append("phone_number", this.phone_number)
        formData.append("about_me", "kaia")
        formData.append("image",  blob, 'image.jpeg');
        formData.append("experiences[0][position]", this.position)
        formData.append("experiences[0][employer]", "redbery")
        formData.append("experiences[0][start_date]", "2020/10/10")
        formData.append("experiences[0][due_date]", "2021/10/10")
        formData.append("experiences[0][description]", "asdsads kaksdjha s")
        formData.append("educations[0][institute]", "ასდასდ")
        formData.append("educations[0][degree_id]", "7")
        formData.append("educations[0][due_date]", "2020/10/10")
        formData.append("educations[0][description]", "asdsads kaksdjha s")
        try{
            const response = await axios.post("https://resume.redberryinternship.ge/api/cvs", formData, {
                headers: {
                    "Content-Type" : "multipart/form-data"
                }
            })
            this.responseData = response.data
        console.log(response.data);
        }catch(er){
            console.log(er);
        }
    }
    }
}
</script>
<style scoped>
   
</style>