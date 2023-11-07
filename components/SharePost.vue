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
    <v-alert v-model="alert"  type="success" border="start" closable class="alert">
      URL copiée avec succès !
    </v-alert>
  </div>
</template>

<style>
.alert {
  z-index: 999999;
  position: fixed;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  width: 400px;
}
</style>

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
      this.alert = true; // Affiche l'alerte de succès

      // Fermer la popup après avoir copié le texte
      this.closePopup();

      // Fermer l'alerte après 5 secondes
      setTimeout(() => {
        this.alert = false;
      }, 3000);
    },
  },
};
</script>
