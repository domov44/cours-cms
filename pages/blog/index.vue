<template>
  <Hero v-if="blogData && blogData.blog && blogData.blog.content" v-for="(content, index) in blogData.blog.content"
    :key="index">
    <v-container class="d-flex flex-column justify-space-between align-center flex-md-row"
      :class="{ 'd-flex flex-column justify-space-between align-center flex-md-row-reverse': content.__typename === 'LeftRightRecord' && !content.mediaOnTheRight, 'justify-space-between align-center': content.__typename === 'LeftRightRecord' }"
      v-if="content.__typename === 'LeftRightRecord'">
      <div class="page-content box" style="width:60%;">
        <div v-if="content.text && content.text.length > 0" v-for="(textItem, textIndex) in content.text"
          :key="textIndex">
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
    <v-container class="d-flex flex-column justify-space-between align-center flex-md-row"
      v-if="content.__typename === 'MediablockRecord'">
      <img :src="content.image.url" :alt="content.image.alt" />
    </v-container>
    <v-container class="d-flex flex-column justify-space-between align-center flex-md-row"
      v-else-if="content.__typename === 'VerticalContentRecord'">
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
    <v-container class="d-flex flex-column justify-space-between align-center flex-md-row"
      v-if="content.__typename === 'VideoblockRecord'">
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
    <v-container class="d-flex flex-column justify-space-between align-center flex-md-row"
      v-if="content.__typename === 'GridForVerticalCardRecord'">
      <div v-if="content.addAllPosts">
        <div v-if="content.gridTitle && content.gridTitle[0] && content.gridTitle[0].richtext">
          <div v-html="content.gridTitle[0].richtext"></div>
        </div>
        <div v-if="content.addAllCategoriesFilter" class="filter-container">
          <v-btn rounded="xl" variant="tonal" color="primary" to="/blog">Tous</v-btn>
          <v-btn rounded="xl" variant="tonal" color="primary" v-for="category in data.allCategories" :key="category.id"
            :to="category.categorySlug"> {{ category.categoryLabel }}
          </v-btn>
        </div>
        <div v-if="!pending" class="v-grid">
          <v-card v-for="post in content.cardsNumber ? data.allPosts.slice(0, content.cardsNumber) : data.allPosts"
            :key="post.id" width="350" outlined>
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
        </div>
      </div>
      <div v-else>
        <div v-if="content.gridTitle && content.gridTitle[0] && content.gridTitle[0].richtext">
          <div v-html="content.gridTitle[0].richtext"></div>
        </div>
        <div v-if="!pending" class="v-grid">
          <v-card v-for="vertical_card in content.verticalCard" :key="vertical_card.id" width="350" outlined>
            <v-img v-if="vertical_card.cardImage" height="200" :alt="vertical_card.cardImage.alt"
              :src="vertical_card.cardImage.url" cover></v-img>
            <v-card-title v-if="vertical_card.cardTitle && vertical_card.cardTitle.length > 0">{{ vertical_card.cardTitle
            }}</v-card-title>
            <v-card-actions v-if="vertical_card.cardSecondaryLink && vertical_card.cardSecondaryLink.length > 0">
              <v-btn color="success" variant="tonal" :href=vertical_card.cardSecondaryLink[0].url>
                {{ vertical_card.cardSecondaryLink[0].title }}
              </v-btn>
            </v-card-actions>
            <v-card-subtitle v-else-if="vertical_card.cardSubtitle && vertical_card.cardSubtitle.length > 0">{{
              vertical_card.cardSubtitle }}</v-card-subtitle>
            <v-card-actions v-else-if="vertical_card.cardButton && vertical_card.cardButton.length > 0">
              <v-btn :href="vertical_card.cardButton[0].url" color="primary" size="large">
                {{ vertical_card.cardButton[0].title }}
              </v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </div>
    </v-container>
  </Hero>
</template>
<script setup>
// SSR
import Posts from '@/cms/queries/posts'
import Blog from '@/cms/queries/blog'
import { formatPostDate } from '@/functions/DatePost.js';
const { data: blogData, pending: blogPending, error: blogError, refresh: blogRefresh } = await useLazyAsyncQuery(Blog);
const { data, pending, error, refresh } = await useLazyAsyncQuery(Posts)
</script>