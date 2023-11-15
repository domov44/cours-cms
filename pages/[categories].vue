<template v-if="route && !pending">
  <Hero v-if="data">
    <v-container class="d-flex justify-space-between align-center">
      <div style="width:80%;">
        <h1 class="text-h2">Les articles de la catégorie {{ data.category.categoryLabel }}</h1>
        <div v-html=data.category.categoryDescription[0].richtext class="text-body-1 mb-4"></div>
      </div>
      <div style="width:20%;">
        <v-img alt={{data.category.seoCategory.image.alt}} :src="data.category.seoCategory.image.url" cover>
        </v-img>
      </div>
    </v-container>
  </Hero>
</template>
<script setup>
import categoryQuery from '@/cms/queries/categories';
const route = useRoute();
const { data, pending, error } = useLazyAsyncQuery(categoryQuery, { slug: route.params.categories });
</script>