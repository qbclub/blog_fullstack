<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>
<template>
    <div class="menu">
        <RouterLink to="/">Блог</RouterLink>
        <RouterLink to="newpost">Новый пост</RouterLink>
    </div>
</template>
<style scoped>
.menu {
    display: flex;
    justify-content: center;
}

a {
    text-decoration: none;
    font-size: 1.2em;
    text-transform: uppercase;
    color: black;
    margin: 10px;
}
</style>

