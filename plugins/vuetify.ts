import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      themes: {
        light: {
          colors: {
            primary: '#DA4167',
            secondary: '#574AE2',
          },
        },
      },
    },
  })
  app.vueApp.use(vuetify)
})