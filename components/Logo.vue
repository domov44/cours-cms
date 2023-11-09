<template>
    <div v-if="!pending" style="width:100%;" class="d-flex align-center justify-end">
        <v-img v-for="logo in data.header" :key="logo.id" class="mx-2" :src="logo.url"
            max-height="180" max-width="180" contain>
        </v-img>
    </div>
</template>
<script setup>
// SSR
import Header from '@/cms/queries/header'
const { data, pending, error, refresh } = useAsyncQuery(Header)
console.log(data)
</script>
  