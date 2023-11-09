import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: 'dark',
      themes: {
        light: {
          colors: {
            primary: '#4B5695',
            secondary: '#E96B6A',
            background: '#efeefa',
            surface: '#efeefa',
            red: "#FF5c4E",
          },
        },
        dark: {
          colors: {
            primary: '#737EC9',
            secondary: '#3D387C',
            background: '#110f1d',
            surface: '#1a1d2a',
            success: '#3a956d',
          },
        },
      },
    },
  })
  app.vueApp.use(vuetify)
})