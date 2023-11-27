<template>
<Hero v-if="homeData && homeData.home && homeData.home.content" v-for="(content, index) in homeData.home.content" :key="index">
  <v-container class="d-flex flex-column justify-space-between align-center flex-md-row"
      :class="{ 'd-flex flex-column justify-space-between align-center flex-md-row-reverse': content.__typename === 'LeftRightRecord' && !content.mediaOnTheRight, 'justify-space-between align-center': content.__typename === 'LeftRightRecord' }"
      v-if="content.__typename === 'LeftRightRecord'">
      <div class="page-content box" style="width:60%;">
        <div v-if="content.text && content.text.length > 0" v-for="(textItem, textIndex) in content.text" :key="textIndex">
          <v-chip class="ma-2" color="success" v-if="textItem.__typename === 'ChipRecord'">
            {{ textItem.chipLabel }}
          </v-chip>
          <div v-else-if="textItem.__typename === 'RichtextRecord'" v-html="textItem.richtext"></div>
          <v-btn color="primary" size="large" v-else-if="textItem.__typename === 'ExternalLinkRecord'" :to="textItem.url">
            {{ textItem.title }}
          </v-btn>
        </div>
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
      <div class="page-content" v-if="content.text && content.text.length > 0">
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
  </Hero>

  <Section>
    <v-container class="d-flex flex-column justify-space-between align-center flex-md-row">
      <div>
        <h2>Choisissez une catégorie d'articles</h2>
        <div v-if="!pending" class="v-grid">
          <v-card v-for="category in data.allCategories" :key="category.id" class="category-card mx-auto" width="350"
            :title=category.categoryLabel :to=category.categorySlug subtitle="Catégorie"
            :prepend-avatar=category.seoCategory.image.url>
          </v-card>
        </div>
      </div>
    </v-container>
  </Section>
  <Section>
    <v-container class="d-flex justify-space-between align-center">
      <div>
        <h2>Ou parcourez nos derniers articles</h2>
        <div v-if="!pending" class="v-grid">
          <v-card v-for="post in data.allPosts" :key="post.id" width="350" outlined>
            <v-img height="200" :alt="post.seo[0].seo.image.alt" :src="post.seo[0].seo.image.url" cover></v-img>
            <v-card-title>{{ post.titlePost }}</v-card-title>
            <v-card-actions>
              <v-btn color="success" variant="tonal" :to="post.postCategory.categorySlug">
                {{ post.postCategory.categoryLabel }}
              </v-btn>
            </v-card-actions>
            <v-card-subtitle>Par {{ post.author }} le {{ formatPostDate(post.postDate, 'DD MMMM') }}</v-card-subtitle>
            <v-card-actions>
              <v-btn :to="'/blog/' + post.postSlug" color="primary" size="large">Lire l'article</v-btn>
              <v-btn size="small" color="surface-variant" variant="text" icon="mdi-share-variant"></v-btn>
            </v-card-actions>
          </v-card>
          <img class="planet-img" src="https://www.datocms-assets.com/110963/1699538721-planet.webp">
          <img class="controller-img" src="https://www.datocms-assets.com/110963/1699538704-controller.webp">
        </div>
      </div>
    </v-container>
  </Section>
</template>
<script setup>
// SSR
import Posts from '@/cms/queries/posts'
import Home from '@/cms/queries/home'
import { formatPostDate } from '@/functions/DatePost.js';
const { data, pending, error, refresh } = await useLazyAsyncQuery(Posts)
const { data: homeData, pending: homePending, error: homeError, refresh: homeRefresh } = await useLazyAsyncQuery(Home);
</script>