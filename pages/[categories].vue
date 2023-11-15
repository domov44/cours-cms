<!-- SinglePost.vue -->
<template v-if="route && !pending">
<Section v-if="data">
    <h1>{{ data.category.categoryLabel }}</h1>
</Section>
</template>
    
  <script setup>
  import { ref } from 'vue';
  import { formatPostDate } from '@/functions/DatePost.js';
  import categories from '@/cms/queries/categories';
  
  const route = useRoute();
  const { data, pending, error } = useLazyAsyncQuery(categories, { slug: route.params.slug });
  </script>
  