<template></template>

<script setup>
const props = defineProps(['meta_seo']);

useSeoMeta({
  title: `Nexinu - ${props.meta_seo.seo[0].seo.title}`,
  ogTitle: `Nexinu - ${props.meta_seo.seo[0].seo.title}`,
  description: `${props.meta_seo.seo[0].seo.description}`,
  ogDescription: `${props.meta_seo.seo[0].seo.description}`,
  ogImage: `${props.meta_seo.seo[0].seo.image.url}`,
  twitterCard: 'summary_large_image',
});
</script>
