<!-- SinglePost.vue -->
<template v-if="route && !pending">
  <PostHero v-if="data">
    <h1 class="text-h2">{{ data.post.titlePost }}</h1>
    <v-chip class="ma-2" color="success">
      {{ data.post.category }}
    </v-chip>
    <div class="introduction" v-html=data.post.introduction[0].richtext></div>
    <SharePost />
    <p class="text">{{ data.post.author }} - publié le {{ formatPostDate(data.post.postDate) }}</p>
    <v-img alt={{data.post.seo[0].seo.image.alt}} :src="data.post.seo[0].seo.image.url" cover>
    </v-img>
  </PostHero>

  <Section v-if="data && data.post && data.post.content" v-for="(content, index) in data.post.content" :key="index">
    <v-container class="d-flex flex-column justify-space-between align-center flex-md-row"
      :class="{ 'd-flex flex-column justify-space-between align-center flex-md-row-reverse': content.__typename === 'LeftRightRecord' && !content.mediaOnTheRight, 'justify-space-between align-center': content.__typename === 'LeftRightRecord' }"
      v-if="content.__typename === 'LeftRightRecord'">
        <div class="content box" style="width:60%;" v-if="content.text && content.text.length > 0" v-for="(textItem, textIndex) in content.text" :key="textIndex">
          <v-chip class="ma-2" color="success" v-if="textItem.__typename === 'ChipRecord'">
            {{ textItem.chipLabel }}
          </v-chip>
          <div v-else-if="textItem.__typename === 'RichtextRecord'" v-html="textItem.richtext"></div>
          <v-btn color="primary" size="large" v-else-if="textItem.__typename === 'ExternalLinkRecord'" :to="textItem.url">
            {{ textItem.title }}
          </v-btn>
        </div>
      <div class="box" style="width:40%;" v-for="(mediaBlock, mediaIndex) in content.media" :key="mediaIndex">
        <img v-if="mediaBlock.__typename === 'MediablockRecord'" class="section-img" :src="mediaBlock.image.url"
          :alt="mediaBlock.image.alt" />
        <video v-if="mediaBlock.__typename === 'VideoblockRecord'" :src="mediaBlock.video.url" controls></video>
      </div>
    </v-container>
    <v-container class="d-flex flex-column justify-space-between align-center flex-md-row" v-if="content.__typename === 'MediablockRecord'">
      <img :src="content.image.url" :alt="content.image.alt" />
    </v-container>
    <v-container class="d-flex flex-column justify-space-between align-center flex-md-row" v-else-if="content.__typename === 'VerticalContentRecord'">
      <div class="content" v-if="content.text && content.text.length > 0">
        <div v-for="(textItem, textIndex) in content.text" :key="textIndex">
          <v-chip class="ma-2" color="success" v-if="textItem.__typename === 'ChipRecord'">
            {{ textItem.chipLabel }}
          </v-chip>
          <div v-else-if="textItem.__typename === 'RichtextRecord'" v-html="textItem.richtext"></div>
          <v-btn v-else-if="textItem.__typename === 'ExternalLinkRecord'" color="primary" size="large"
            :href="textItem.url">{{ textItem.title }}</v-btn>
        </div>
      </div>
    </v-container>
    <v-container class="d-flex flex-column justify-space-between align-center flex-md-row" v-if="content.__typename === 'VideoblockRecord'">
      <video :src="content.video.url" controls></video>
    </v-container>
    <v-container class="d-flex flex-column justify-space-between align-center flex-md-row"
      v-if="content.__typename === 'GridCardRecord'">
      <div v-if="content.addAllCategories">
        <div v-if="content.sectionTitle && content.sectionTitle[0] && content.sectionTitle[0].richtext">
          <div v-html="content.sectionTitle[0].richtext"></div>
        </div>
        <div v-if="!pending" class="v-grid">
          <v-card v-for="category in data.allCategories" :key="category.id" class="category-card mx-auto" width="350"
            :title="category.categoryLabel" :to="category.categorySlug" subtitle="Catégorie"
            :prepend-avatar="category.seoCategory.image.url">
          </v-card>
        </div>
      </div>
      <div v-else>
        <div v-if="content.sectionTitle && content.sectionTitle[0] && content.sectionTitle[0].richtext">
          <div v-html="content.sectionTitle[0].richtext"></div>
        </div>
        <div v-if="!pending" class="v-grid">
          <v-card v-for="card in content.card" :key="card.id" class="category-card mx-auto" width="350"
            :title="card.cardTitle" :href=card.cardLink :subtitle=card.cardSubtitle
            :prepend-avatar="card.cardPicture.url">
          </v-card>
        </div>
      </div>
    </v-container>
  </Section>
</template>
  
<script setup>
import { ref } from 'vue';
import { formatPostDate } from '@/functions/DatePost.js';
import singlepost from '@/cms/queries/singlepost';

const route = useRoute();
const { data, pending, error } = useLazyAsyncQuery(singlepost, { slug: route.params.slug });
</script>
