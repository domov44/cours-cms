<script setup>
import { ref, onMounted } from 'vue'
import { useTheme } from 'vuetify'

const theme = useTheme()
const icon = ref(getIcon())

function toggleTheme() {
  const newTheme = theme.global.current.value.dark ? 'light' : 'dark'
  updateTheme(newTheme)
  notify();
}

function updateTheme(newTheme) {
  theme.global.name.value = newTheme
  localStorage.setItem('theme', newTheme)
  icon.value = getIcon()
}

function getIcon() {
  return theme.global.current.value.dark ? 'mdi-weather-sunny' : 'mdi-weather-night'
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    updateTheme(savedTheme)
  }
})

const notify = () => {
  useNuxtApp().$toast.success('Nouveau thème appliqué');
};
</script>

<template>
  <v-btn icon :class="{'dark-icon': theme.global.current.value.dark}" @click="toggleTheme">
    <v-icon>{{ icon }}</v-icon>
  </v-btn>
</template>
