<script setup>
// SSR
import Articles from '@/cms/queries/articles'
const { data, pending, error, refresh } = await useLazyAsyncQuery(Articles)
console.log(data)
</script>
<template>
    <v-container>
        <h1>
            Nos articles
        </h1>
        <v-row v-if="!pending">
            <v-col cols="12" sm="4" v-for="articles in data.allArticles" :key="articles.id">
                <v-card width="350" outlined>
                    <v-img class="align-end text-white" height="200" alt={{articles.seoMetaData.alt}}
                        :src="articles.seoMetaData.image.url" cover>
                        <v-card-title>{{ articles.title }}</v-card-title>
                    </v-img>
                    <v-card-subtitle>{{ articles.postDate }}</v-card-subtitle>
                    <v-card-text>{{ articles.excerp }}</v-card-text>
                    <v-card-actions>
                        <v-btn to="/" color="primary" size="large">Lire l'article</v-btn>
                        <v-btn size="small" color="surface-variant" variant="text" icon="mdi-share-variant"></v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>


