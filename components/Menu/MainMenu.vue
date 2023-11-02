<template>
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn v-on="on" variant="text">
          Button
        </v-btn>
      </template>
      <v-list>
        <!-- Ajoutez ici les éléments de menu -->
        <v-list-item @click="menuItemClicked('Option 1')">Option 1</v-list-item>
        <v-list-item @click="menuItemClicked('Option 2')">Option 2</v-list-item>
        <v-list-item @click="menuItemClicked('Option 3')">Option 3</v-list-item>
      </v-list>
    </v-menu>
  </template>
  
  <script>
  export default {
    methods: {
      menuItemClicked(option) {
        // Vous pouvez ajouter votre logique pour gérer les actions des éléments du menu ici
        console.log(`Option sélectionnée : ${option}`);
      },
    },
  };
  </script>
  