<template v-if="route && !pending">
  <Hero v-if="data">
    <v-container class="d-flex flex-column justify-space-between align-center flex-md-row">
      <div class="box" style="width:80%;">
        <h1 class="text-h2">Les articles de la catégorie {{ data.category.categoryLabel }}</h1>
        <div v-html=data.category.categoryDescription[0].richtext class="text-body-1 mb-4"></div>
      </div>
      <div class="box" style="width:20%;">
        <v-img alt={{data.category.seoCategory.image.alt}} :src="data.category.seoCategory.image.url" cover>
        </v-img>
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
          <v-card v-for="post in filteredPosts" :key="post.id" width="350" outlined>
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

<script setup>
import categoryQuery from '@/cms/queries/categories';
import { formatPostDate } from '@/functions/DatePost.js';
const route = useRoute();
const { data, pending, error } = useLazyAsyncQuery(categoryQuery, { slug: route.params.categories });

// Define a computed property to filter posts by category label
const filteredPosts = computed(() => {
  if (data.value && data.value.allPosts) {
    return data.value.allPosts.filter(post => post.postCategory.categoryLabel === data.value.category.categoryLabel);
  }
  return [];
});
</script>