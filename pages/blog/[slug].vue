<template v-if="route && !pending">
    <PostHero v-if="data">
        <h1 class="text-h2">{{ data.article.title }}</h1>
        <p class="text">{{ data.article.introduction }}</p>
        <p class="text">{{ data.article.author }} // {{ data.article._publishedAt }}</p>
        <SharePost />
        <v-img class="align-end text-white" alt={{data.article.seoMetaData.alt}} :src="data.article.seoMetaData.image.url"
            cover>
        </v-img>
    </PostHero>
</template>

<script setup>
import singlepost from '@/cms/queries/singlepost'
const route = useRoute()
const { data, pending, error } = await useLazyAsyncQuery(singlepost, { slug: route.params.slug })
console.log(data)
</script>