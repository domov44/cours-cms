<template>
  <div v-if="!pending" style="width:100%;" class="d-flex align-center justify-end">
    <v-btn v-for="menuitem in data.header.menu" :key="menuitem.id" :to="menuitem.url" variant="text" class="mt-2 ma-2" color="primary">
      {{ menuitem.title }}
    </v-btn>
  </div>
</template>
<script setup>
// SSR
import Header from '@/cms/queries/header'
const { data, pending, error, refresh } = useAsyncQuery(Header)
</script>
