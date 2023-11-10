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
            primary: '#542DD6',
            secondary: '#858CFF',
            background: '#dddfff', 
            surface: '#f2f3ff',
            success: '#3a956d',
          },
        },
        dark: {
          colors: {
            primary: '#737EC9',
            secondary: '#3D387C',
            background: '#110f1d',
            surface: '#14161e',
            success: '#3a956d',
          },
        },
      },
    },
  })
  app.vueApp.use(vuetify)
})