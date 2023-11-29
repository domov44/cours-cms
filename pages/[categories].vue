<template v-if="route && !pending">
  <SeoMeta v-if="!pending" :meta_seo="data.category"/>
  <Hero v-if="data">
    <v-container class="d-flex flex-column justify-space-between align-center flex-md-row">
      <div class="box" style="width:80%;">
        <h1 class="text-h2">Les articles de la catégorie {{ data.category.categoryLabel }}</h1>
        <div v-html=data.category.categoryDescription[0].richtext class="text-body-1 mb-4"></div>
      </div>
      <div class="box" style="width:20%;">
        <v-img alt={{data.category.seo[0].seo.image.alt}} :src="data.category.seo[0].seo.image.url" cover>
        </v-img>
      </div>
    </v-container>
  </Hero>
  <Section>
    <v-container class="d-flex flex-column justify-space-between align-center flex-md-row" v-if="!pending">
      <div>
        <h2>Les articles de la catégorie</h2>
        <div class="filter-container">
          <v-btn rounded="xl" variant="tonal" color="primary" to="/blog">Tous</v-btn>
          <v-btn rounded="xl" variant="tonal" color="primary" v-for="category in data.allCategories" :key="category.id"
            :to="category.categorySlug"> {{ category.categoryLabel }}
          </v-btn>
        </div>
        <div  class="v-grid">
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
            </v-card-actions>
          </v-card>
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