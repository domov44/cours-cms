<script setup>
import { useTheme } from 'vuetify'
const theme = useTheme()
function toggleTheme () {
  const newTheme = theme.global.current.value.dark ? 'light' : 'dark'
  theme.global.name.value = newTheme

  localStorage.setItem('theme', newTheme)
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    theme.global.name.value = savedTheme
  }
})
</script>

<template>
    <v-btn icon="mdi-weather-sunny" @click="toggleTheme"></v-btn>
</template>