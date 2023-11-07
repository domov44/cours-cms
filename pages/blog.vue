<script setup>
// SSR
import Articles from '@/cms/queries/articles'
const { data, pending, error, refresh } = await useLazyAsyncQuery(Articles)
console.log(data)
</script>
<template>
    <Hero>
        <div style="width:80%;">
            <h1 class="text-h2 font-weight-bold mb-4">Le blog connecté</h1>
            <p class="text-body-1 mb-4">Quoi de neuf dans les technos web ?</p>
        </div>
        <div style="width:20%;">
            <img style="width:100%;" src="main-3d.webp">
        </div>
    </Hero>
    <Hero>
        <div>
            <h1>
                Les articles
            </h1>
            <div v-if="!pending" class="v-grid">
                <v-card v-for="articles in data.allArticles" :key="articles.id" width="350" outlined>
                    <v-img class="align-end text-white" height="200" alt={{articles.seoMetaData.alt}}
                        :src="articles.seoMetaData.image.url" cover>
                        <v-card-title>{{ articles.title }}</v-card-title>
                    </v-img>
                    <v-card-subtitle>{{ articles.postDate }}</v-card-subtitle>
                    <v-card-text>{{ articles.excerp }}</v-card-text>
                    <v-card-actions>
                        <v-btn :to="'/blog/' + articles.blogSlug" color="primary" size="large">Lire l'article</v-btn>
                        <v-btn size="small" color="surface-variant" variant="text" icon="mdi-share-variant"></v-btn>
                    </v-card-actions>
                </v-card>
            </div>
        </div>
    </Hero>
</template>


