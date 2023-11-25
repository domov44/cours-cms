<template>
    <v-btn v-if="!pending" v-for="menuitem in data.header.menu" :key="menuitem.id" :to="menuitem.url" variant="text" class="hidden-sm-and-down mt-2 ma-2" color="primary">
      {{ menuitem.title }}
    </v-btn>
</template>
<script setup>
// SSR
import Header from '@/cms/queries/header'
const { data, pending, error, refresh } = useAsyncQuery(Header)
</script>
