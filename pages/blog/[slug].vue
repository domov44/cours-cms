<template v-if="route && !pending">
    <PostHero v-if="data">
        <h1 class="text-h2">{{ data.post.titlePost }}</h1>
        <v-chip class="ma-2" color="success">
            Future Category
        </v-chip>
        <div class="introduction" v-html=data.post.introduction[0].richtext></div>
        <SharePost />
        <p class="text">{{ data.post.author }} - {{ data.post.postDate }}</p>
        <v-img alt={{data.post.seo[0].seo.image.alt}} :src="data.post.seo[0].seo.image.url" cover>
        </v-img>
    </PostHero>
    <div v-if="data && data.post && data.post.content" v-for="(content, index) in data.post.content" :key="index">
        <div v-if="content.__typename === 'LeftRightRecord'">
            <div v-if="content.text && content.text.length > 0">
                <div v-html="content.text[0].richtext"></div>
            </div>
            <div v-for="(mediaBlock, mediaIndex) in content.media" :key="mediaIndex">
                <div v-if="mediaBlock.__typename === 'MediablockRecord'">
                    <img :src="mediaBlock.image.url" :alt="mediaBlock.image.alt" />
                </div>
            </div>
        </div>
        <div v-if="content.__typename === 'MediablockRecord'">
            <img :src="content.image.url" :alt="content.image.alt" />
        </div>
        <div v-if="content.__typename === 'RichtextRecord'">
            <div v-html="content.richtext"></div>
        </div>
        <div v-if="content.__typename === 'VideoblockRecord'">
            <video :src="content.video.url" controls></video>
        </div>
    </div>
</template>

<script setup>
import singlepost from '@/cms/queries/singlepost'
const route = useRoute()
const { data, pending, error } = await useLazyAsyncQuery(singlepost, { slug: route.params.slug })
console.log(data)
</script>