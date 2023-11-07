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
          <v-card-text>
            {{ currentURL }}
          </v-card-text>
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
    },
  };
  </script>
  
  