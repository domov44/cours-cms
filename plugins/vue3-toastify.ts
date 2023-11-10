import Vue3Toastify, { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Vue3Toastify, {
    autoClose: 3000,
    theme: 'dark', 
    position: 'top-center',
    transition: 'zoom',
    variant: 'tonal'
  });

  return {
    provide: { toast },
  };
});
