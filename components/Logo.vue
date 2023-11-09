<template>
    <div v-if="!pending" style="width:100%;" class="d-flex align-center">
        <v-img class="mx-2" :src="data.header.logo.url" :alt="data.header.logo.alt" max-height="180" max-width="180" contain>
        </v-img>
    </div>
</template>
<script setup>
// SSR
import Header from '@/cms/queries/header'
const { data, pending, error, refresh } = useAsyncQuery(Header)
console.log(data)
</script>
