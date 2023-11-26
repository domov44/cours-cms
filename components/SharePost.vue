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
        </v-card-title>
        <v-card-actions>
          <v-text-field :model-value="currentURL" label="URL" variant="outlined" readonly></v-text-field>
        </v-card-actions>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" variant="tonal" size="large" @click="copyURL">
            Copier
          </v-btn>
          <v-btn @click="closePopup" class="close-button" size="large">
            Annuler
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      popup: false,
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
