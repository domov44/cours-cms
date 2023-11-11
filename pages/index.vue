<template>
    <Hero>
        <div style="width:60%; position:relative">
            <v-chip class="ma-2" color="primary">
                Depuis n'importe où
            </v-chip>
            <h1 class="text-h2 font-weight-bold mb-4">Restez connecté</h1>
            <p class="text-body-1 mb-4">Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise
                en
                page avant impression.
                Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme
                assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.</p>
            <v-btn color="primary" size="large" to="/blog">
                Découvrir le blog
            </v-btn>
            <img class="saturn-img" src="https://www.datocms-assets.com/110963/1699538726-saturn.webp">
        </div>
        <div style="width:40%;">
            <img class="hero-img" src="https://www.datocms-assets.com/110963/1699538711-landing-3d.webp">
        </div>
    </Hero>
    <Hero>
        <div>
            <h2>
                Les derniers articles
            </h2>
            <div class="v-grid">
                <v-card v-if="!pending" v-for="posts in data.allPosts" :key="posts.id" width="350" outlined>
                    <v-img height="200" alt={{posts.seo[0].seo.image.alt}} :src="posts.seo[0].seo.image.url" cover>
                    </v-img>
                    <v-card-title>{{ posts.titlePost }}</v-card-title>
                    <v-chip class="ma-2" color="success">
                        Future Category
                    </v-chip>
                    <v-card-subtitle>Par {{ posts.author }} le {{ posts.postDate }}</v-card-subtitle>
                    <v-card-actions>
                        <v-btn :to="'/blog/' + posts.postSlug" color="primary" size="large">Lire l'article</v-btn>
                        <v-btn size="small" color="surface-variant" variant="text" icon="mdi-share-variant"></v-btn>
                    </v-card-actions>
                </v-card>
                <img class="planet-img" src="https://www.datocms-assets.com/110963/1699538721-planet.webp">
                <img class="controller-img" src="https://www.datocms-assets.com/110963/1699538704-controller.webp">
            </div>
        </div>
    </Hero>
</template>
<script setup>
// SSR
import Posts from '@/cms/queries/posts'
const { data, pending, error, refresh } = await useLazyAsyncQuery(Posts)
</script>
<style>
.v-grid {
    display: grid;
    margin-top: 10px;
    font-size: 0;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    grid-gap: 20px 22px;
    justify-content: center;
    max-width: 1400px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
}

.hero-img {
    z-index: 20;
    width: 100%;
}

.saturn-img {
    top: -100px;
    left: -150px;
    z-index: 20;
    width: 100px;
    position: absolute;
}

.planet-img {
    top: 50%;
    right: -200px;
    z-index: 20;
    width: 100px;
    position: absolute;
}

.controller-img {
    top: 20%;
    left: -200px;
    z-index: 20;
    width: 100px;
    position: absolute;
}


@media only screen and (max-width: 1280px) {
    .v-grid {
        grid-template-columns: 1fr 1fr;
        max-width: 900px;
        grid-gap: 15px 18px;
    }
}
</style>