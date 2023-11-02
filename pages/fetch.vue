<script setup>
// SSR
const { data, pending, error, refresh } =
    await
useFetch('https://api.nuxtjs.dev/mountains')
</script>

<template>
    <h1>
        Table
    </h1>
    <div style=" display: grid;
    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
    grid-gap: 20px;
    width: 100%;
    max-width: 1200px;
    justify-items: center;
    margin-left: auto;
    margin-right: auto;">
    
        <div style="background:grey;" v-for="item in data" :key="index">
            <img :src="item.image" />
            <p> Image prise de {{ item.title }}</p>
            <h3>Description</h3>
            <p>{{ item.description }}</p>
        </div>
    </div>
</template>