<script setup>
import { ref } from 'vue'
const items = ["Un", "deux"]
const username = ref()
const isActive = ref(true)
const hasError = ref(false)

const imageSrc = ref("https://reltim.com/wp-content/uploads/2023/07/Illu-article-non-conformite-Qualiopi-_-comment-reagir-_-400x250.jpg")

</script>

<template>
    <div v-for="item in items" :key="item.id">
        {{ item }}
    </div>

    <img :src="imageSrc" />
    <input type="text" v-model="username" />
    <p>rendu: {{ username }}</p>

    <div class="static" :class="{
        active: isActive,
        'text-danger': hasError
    }">Test
    </div>
    <MyComponent greeting-message="hello" />
</template>

<style scoped>
.static {
    color: green;
}

.text-danger {
    color: red;
}
</style>