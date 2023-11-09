<script setup>
// SSR
import Posts from '@/cms/queries/posts'
const { data, pending, error, refresh } = await useLazyAsyncQuery(Posts)
console.log(data)
</script>
<template>
    <Hero>
        <div style="width:80%;">
            <h1 class="text-h2 font-weight-bold mb-4">Le blog connecté</h1>
            <p class="text-body-1 mb-4">Quoi de neuf dans les technos web ?</p>
        </div>
        <div style="width:20%;">
            <img style="width:100%;" src="earth.webp">
        </div>
    </Hero>
    <Hero>
        <div>
            <h1>
                Les articles
            </h1>
            <div v-if="!pending" class="v-grid">
                <v-card v-for="posts in data.allPosts" :key="posts.id" width="350" outlined>
                    <v-img class="align-end text-white" height="200" alt={{posts.seo[0].seo.image.alt}}
                        :src="posts.seo[0].seo.image.url" cover>
                        <v-card-title>{{ posts.titlePost }}</v-card-title>
                    </v-img>
                    <v-card-subtitle>{{ posts.postDate }}</v-card-subtitle>
                    <v-card-text>{{ posts.excerp[0].richtext }}</v-card-text>
                    <v-card-actions>
                        <v-btn :to="'/blog/' + posts.postSlug" color="primary" size="large">Lire l'article</v-btn>
                        <v-btn size="small" color="surface-variant" variant="text" icon="mdi-share-variant"></v-btn>
                    </v-card-actions>
                </v-card>
            </div>
        </div>
    </Hero>
</template>


