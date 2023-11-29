<template>
    <v-app>
        <Header />
        <v-main class="d-flex flex-column align-center justify-center" style="min-height: 300px;">
            <NuxtPage />
        </v-main>
        <Footer />
    </v-app>
</template>

<script setup>
const route = useRoute()

useHead({
  title: `Le Blog Nexinu`,
  meta: [
    { name: 'description', content: `Blog Nexinu sur les nouvelles technologies` },
    { property: 'og:title', content: `` },
    { property: 'og:image', content: `` }
],
})
</script>