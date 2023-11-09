<template v-if="route && !pending">
    <PostHero v-if="data">
        <h1 class="text-h2">{{ data.post.titlePost }}</h1>
        <p class="text" v-html=data.post.introduction[0].richtext></p>
        <p class="text">{{ data.post.author }} - {{ data.post.postDate }}</p>
        <SharePost />
        <v-img alt={{data.post.seo[0].seo.image.alt}} :src="data.post.seo[0].seo.image.url" cover>
        </v-img>
    </PostHero>
</template>

<script setup>
import singlepost from '@/cms/queries/singlepost'
const route = useRoute()
const { data, pending, error } = await useLazyAsyncQuery(singlepost, { slug: route.params.slug })
console.log(data)
</script>