<template>
    <div style="display: flex; justify-content: center;">
        <div class="resume-container">
            <div class="left-side">
                <h1 class="username">{{ nameOfUser }} {{ surname }}</h1>
                <div class="user-emssssail">
                    <h3>{{ userEmail }}</h3>
                    <h3>{{ userNumber }}</h3>
                </div>
                <div class="about-user">
                    {{ aboutUser }}
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
            type: Image,
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

.resume-container {
    width: 100%;
    padding-top: 50px;
}

.username {
    font-size: 34px;
    font-weight: bold;
    color: #F93B1D;

}

.left-side {
    float: left;
    width: 50%;
    word-wrap: break-word ;
}

.userimage {
    margin-top: 0;
    margin-left: 10px;
    width: 220px;
    height: 220px;
    border-radius: 50%;
}
</style>