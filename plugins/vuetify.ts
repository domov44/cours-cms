import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: 'light',
      themes: {
        light: {
          colors: {
            primary: '#4B5695',
            secondary: '#E96B6A',
            background: '#efeefa',
            surface: '#efeefa',
            accent: 'red',
            anchor: 'red',
            red: "#FF5c4E",
          },
        },
        dark: {
          colors: {
            primary: '#DA4167',
            secondary: '#574AE2',
            background: '#161316',
            surface: '#161316',
          },
        },
      },
    },
  })
  app.vueApp.use(vuetify)
})