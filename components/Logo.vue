<template>
    <div v-if="!pending" style="width:100%;" class="d-flex align-center">
        <v-img class="mx-2" :src="data.header.logoDuSiteWeb[0].fichierLogo.url" :alt="data.header.logoDuSiteWeb[0].fichierLogo.alt" max-height="180" max-width="180" contain>
        </v-img>
    </div>
</template>
<script setup>
// SSR
import Header from '@/cms/queries/header'
const { data, pending, error, refresh } = useAsyncQuery(Header)
</script>
