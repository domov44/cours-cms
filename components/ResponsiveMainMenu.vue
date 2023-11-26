<template>
    <v-list-item v-if="!pending" v-for="menuitem in data.header.menu" :key="menuitem.id" :to="menuitem.url" :title="menuitem.title"></v-list-item>
</template>
<script setup>
// SSR
import Header from '@/cms/queries/header'
const { data, pending, error, refresh } = useAsyncQuery(Header)
</script>
