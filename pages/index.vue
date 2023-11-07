<template>
    <Hero>
        <div style="width:60%; position:relative">
            <span>Depuis n'importe où</span>
            <h1 class="text-h2 font-weight-bold mb-4">Restez connecté</h1>
            <p class="text-body-1 mb-4">Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise
                en
                page avant impression.
                Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme
                assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.</p>
            <v-btn color="primary" size="large" to="/blog">
                Découvrir le blog
            </v-btn>
            <img class="saturn-img" src="saturn.webp">
        </div>
        <div style="width:40%;">
            <img class="hero-img" src="landing-3d.webp">
        </div>
    </Hero>
    <Hero>
        <div>
            <h2>
                Les derniers articles
            </h2>
            <div v-if="!pending" class="v-grid" style="position: relative;">
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
                <img class="planet-img" src="planet.webp">
                <img class="controller-img" src="controller.webp">
            </div>
        </div>
    </Hero>
</template>
<script setup>
// SSR
import Articles from '@/cms/queries/articles'
const { data, pending, error, refresh } = await useLazyAsyncQuery(Articles)
console.log(data)
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
    top:50%;
    right: -200px;
    z-index: 20;
    width: 100px;
    position: absolute;
}

.controller-img {
    top:20%;
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