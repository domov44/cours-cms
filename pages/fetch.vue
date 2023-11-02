<script setup>
// SSR
import Post from '@/cms/queries/post'
const { data, pending, error, refresh } = await useLazyAsyncQuery(Post)

console.log(data)
</script>

<template>
    <h1>
        Table
    </h1>
    <v-btn to="/" color="secondary" size="large">Back home</v-btn>
    <div v-if="!pending">
        <div v-for="(item, index) in data.allArticles" :key="index">
            <h3>{{ item.title }}</h3>
            <p>{{ item.content }}</p>
            <v-btn to="/" color="primary" size="large">Lire l'article</v-btn>
        </div>
    </div>


    <div v-if="!pending" class="d-flex justify-center ma-4">
        <v-card width="350" outlined v-for="(item, index) in data.allArticles" :key="index">
            <v-card-title>{{ item.title }}</v-card-title>
            <v-card-subtitle>Par Ronan Scotet</v-card-subtitle>
            <v-card-text>{{ item.content }}</v-card-text>
            <v-card-actions>
                <v-btn to="/" color="primary" size="large">Suivre la recette</v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

