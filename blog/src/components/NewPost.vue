<script setup>
import { reactive, ref } from 'vue';

import axios from "axios"
import { routerKey } from 'vue-router';

const emit = defineEmits(['upDateBlog', 'showForm'])

const post = reactive(
    {
        title: '',
        text: '',
    }
)

let selectedFile = ref(null)

const sendForm = async () => {

    if (
        post && selectedFile.value
    ) {
        const form = new FormData();
        const stringPost = JSON.stringify(post)
        form.append('file', selectedFile.value);
        form.append('post', stringPost);


        const res = await axios.post('http://localhost:3000/new-post', form, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
            .then(function (res) {
                emit('upDateBlog')
                emit('showForm')
                console.log(res.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

}
function onFileChanged(event) {
    selectedFile.value = event.target.files[0]
}
</script>
<template>
    <div class="container">
        <div class="form">
            <input type="text" placeholder="Заголовок" v-model="post.title">
            <input type="file" @change="onFileChanged">
            <textarea placeholder="Текст" v-model="post.text"></textarea>
            <div class="buttons">
                <button @click="closeForm()">Закрыть</button>

                <button @click="sendForm()">Отправить</button>
            </div>

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
    min-width: 200px;
    line-height: 30px;
    margin: 10px;
}

.buttons {
    display: flex;
    justify-content: center;
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