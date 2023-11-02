<script setup>
// SSR
import Post from '@/cms/queries/post'
const { data, pending, error, refresh } = await useLazyAsyncQuery(Post)

console.log(data)
</script>

<template>
    <v-container class="bg-surface-variant" v-if="!pending">
        <h1>
            Mes recettes
        </h1>
        <v-row>
            <v-col cols="12" sm="4" v-for="item in data.allArticles" :key="item.id">
                <v-card width="350" outlined>
                    <v-card-title>{{ item.title }}</v-card-title>
                    <v-btn prepend-icon="mdi-account" variant="text">
                        Ronan Scotet
                    </v-btn>
                    <v-card-text>{{ item.content }}</v-card-text>
                    <v-card-actions>
                        <v-btn to="/" color="primary" size="large">Suivre la recette</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
        <v-btn to="/" color="secondary" size="large">Back home</v-btn>
    </v-container>
</template>

