<script setup>
import { onMounted, ref } from "vue";
import axios from "axios"
let posts = ref("")
onMounted(() => {
    axios.get('http://localhost:3000/')
        .then(function (response) {
            posts.value = response.data
        })
        .catch(function (error) {
            console.log(error);
        })
})
</script>
<template>
    <div v-for="post in posts" :key="post.index">
        <h2>
            {{ post.title }}
        </h2>
        <div>
            {{ post.text }}
        </div>

    </div>
</template>