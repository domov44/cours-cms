<script setup>
// SSR
import Posts from '@/cms/queries/posts'
import { formatPostDate } from '@/functions/DatePost.js';
const { data, pending, error, refresh } = await useLazyAsyncQuery(Posts)
</script>
<template>
  <Hero>
    <v-container class="d-flex flex-column justify-space-between align-center flex-md-row">
      <div style="width:80%;">
        <h1 class="text-h2 font-weight-bold mb-4">Le blog connecté</h1>
        <p class="text-body-1 mb-4">Quoi de neuf dans les technos web ?</p>
      </div>
      <div style="width:20%;">
        <img style="width:100%;" src="https://www.datocms-assets.com/110963/1699538708-earth.webp">
      </div>
    </v-container>
  </Hero>
  <Section>
    <v-container class="d-flex flex-column justify-space-between align-center flex-md-row">
      <div>
        <h2>Les articles</h2>
        <div>
          <v-btn rounded="xl" variant="tonal" color="primary" to="/blog">Tous</v-btn>
          <v-btn rounded="xl" variant="tonal" color="primary" to="/analyse">Analyse</v-btn>
          <v-btn rounded="xl" variant="tonal" color="primary" to="/developpement">Développement</v-btn>
        </div>
        <div v-if="!pending" class="v-grid">
          <v-card v-for="post in data.allPosts" :key="post.id" width="350" outlined>
            <v-img height="200" :alt="post.seo[0].seo.image.alt" :src="post.seo[0].seo.image.url" cover></v-img>
            <v-card-title>{{ post.titlePost }}</v-card-title>
            <v-card-actions>
              <v-btn color="success" variant="tonal" :to="post.postCategory.categorySlug">
                {{ post.postCategory.categoryLabel }}
              </v-btn>
            </v-card-actions>
            <v-card-subtitle>Par {{ post.author }} le {{ formatPostDate(post.postDate, 'DD MMMM') }}</v-card-subtitle>
            <v-card-actions>
              <v-btn :to="'/blog/' + post.postSlug" color="primary" size="large">Lire l'article</v-btn>
              <v-btn size="small" color="surface-variant" variant="text" icon="mdi-share-variant"></v-btn>
            </v-card-actions>
          </v-card>
          <img class="planet-img" src="https://www.datocms-assets.com/110963/1699538721-planet.webp">
          <img class="controller-img" src="https://www.datocms-assets.com/110963/1699538704-controller.webp">
        </div>
      </div>
    </v-container>
  </Section>
</template>


