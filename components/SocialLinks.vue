<template>
    <div v-if="!pending" style="width:40%; gap:10px;" class="d-flex align-center justify-end">
        <NuxtLink v-for="socialitem in data.footer.social" :key="socialitem.id" :to="socialitem.url" color="primary"
            size="large" to="/blog">
            {{ socialitem.title }}
        </Nuxtlink>
    </div>
</template>
<script setup>
// SSR
import Footer from '@/cms/queries/footer'
const { data, pending, error, refresh } = useAsyncQuery(Footer)
</script>