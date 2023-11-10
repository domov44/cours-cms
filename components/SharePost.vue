<template>
  <div>
    <v-btn @click="openPopup" color="primary" size="large">
      Partager l'article
    </v-btn>
    <v-dialog v-model="popup" max-width="500px">
      <v-card>
        <v-card-title>
          Partager l'article
          <v-spacer></v-spacer>
          <v-btn icon @click="closePopup" class="close-button">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <div>
          <v-text-field :model-value="currentURL" label="URL" variant="outlined" readonly></v-text-field>
          <v-btn color="primary" size="large" @click="copyURL">
            Copier
          </v-btn>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      popup: false,
      alert: false,
    };
  },
  computed: {
    currentURL() {
      return window.location.href;
    },
  },
  methods: {
    openPopup() {
      this.popup = true;
    },
    closePopup() {
      this.popup = false;
    },
    copyURL() {
      const urlField = document.querySelector('.v-text-field input');
      urlField.select();
      document.execCommand('copy');

      // afficher l'alert de confirmation
      notify();

      // Fermer la popup après avoir copié le texte
      this.closePopup();
    },
  },
};


const notify = () => {
  useNuxtApp().$toast.success('URL copiée');
};

</script>
