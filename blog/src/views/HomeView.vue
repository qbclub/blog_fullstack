<script setup>
import { onMounted, ref } from "vue";
import NewPost from '../components/NewPost.vue'
import axios from "axios"
let showAddPost = ref(false)
let posts = ref("")


function showForm() {
    showAddPost.value = !showAddPost.value
}
function upDateBlog() {

    axios.get('http://localhost:3000/')
        .then(function (response) {
            posts.value = response.data.reverse()
        })
        .catch(function (error) {
            console.log(error);
        })
}

onMounted(() => {
    upDateBlog()
})
</script>
<template>
    <div>
        <button @click="showForm()"> Новый пост</button>
    </div>
    <div v-if="showAddPost">
        <NewPost @upDateBlog="upDateBlog" @showForm="showForm" />
    </div>

    <div v-for="post in posts" :key="post.index">
        <h2>
            {{ post.title }}
        </h2>
        <div class="post-content">
            <div>
                <img :src="post.imgUrl" alt="" style="width:100%" />
            </div>

            <div>
                {{ post.text }}
            </div>
        </div>


    </div>
</template>
<style scoped>
.post-content {
    display: flex;
    width: 100%;

}

.post-content>div {
    width: 50%;
    padding: 20px;
}

@media (max-width: 900px) {
    .post-content {
        flex-direction: column;
    }

    .post-content>div {
        width: 100%;
        padding: 10px;
    }
}
</style>