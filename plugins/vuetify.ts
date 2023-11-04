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
            accent: 'red',
            anchor: 'red',
            red: "#FF5c4E",
          },
        },
        dark: {
          colors: {
            primary: '#737EC9',
            secondary: '#3D387C',
            background: '#110f1d',
            surface: '#03010A',
          },
        },
      },
    },
  })
  app.vueApp.use(vuetify)
})