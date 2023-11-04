<template>
    <Hero>
        <div style="width:60%;">
            <Pastille>Depuis n'importe où</Pastille>
            <h1 class="text-h2 font-weight-bold mb-4">Restez connecté</h1>
            <p class="text-body-1">Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en
                page avant impression.
                Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme
                assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.</p>
            <v-btn color="primary" size="large" to="/fetch">
                Découvrir le blog
            </v-btn>
        </div>
        <div style="width:40%;">
            <img style="width:100%;" src="web-template.png">
        </div>
    </Hero>
    <Hero>
        <div style="width:100%;">
            <h2 class="text-h2 font-weight-bold mb-4">Les derniers articles</h2>
            <v-row v-if="!pending">
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
            <v-btn color="primary" size="large" to="/fetch">
                Découvrir le blog
            </v-btn>
        </div>
    </Hero>
</template>
<script setup>
// SSR
import Articles from '@/cms/queries/articles'
const { data, pending, error, refresh } = await useLazyAsyncQuery(Articles)
console.log(data)
</script>