<script setup>
import { reactive } from 'vue';
import axios from "axios"

const post = reactive(
    {
        title: '',
        text: '',
    }
)

function sendForm() {
    axios.post('http://localhost:3000/new-post', post)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })
}
</script>
<template>
    <div class="container">
        <div class="form">
            <input type="text" placeholder="Заголовок" v-model="post.title">
            <textarea placeholder="Текст" v-model="post.text"></textarea>
            <button @click="sendForm()">Отправить</button>
        </div>
    </div>
</template>
<style scoped>
.container {
    display: flex;
    justify-content: center;
}

.form {
    width: 50%;
}

input,
textarea {

    width: 100%;
    margin: 10px;
    line-height: 30px;
}

.form {
    display: flex;
    align-items: center;
    flex-direction: column;
}

button {
    width: 300px;
    line-height: 30px;
}

@media (max-width: 1200px) {
    .form {
        width: 80%;
    }
}

@media (max-width: 900px) {
    .form {
        width: 100%;
    }
}
</style>