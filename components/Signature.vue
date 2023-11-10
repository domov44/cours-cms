<template>
    <div v-if="!pending" style="width:60%;">
        <div class="text" v-html=data.footer.signature[0].richtext></div>
    </div>
</template>
<script setup>
// SSR
import Footer from '@/cms/queries/footer'
const { data, pending, error, refresh } = useAsyncQuery(Footer)
</script>