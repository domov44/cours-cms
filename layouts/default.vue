<template>
    <v-app>
        <v-app-bar title="My site" app>
            <v-btn to="/se-connecter" variant="tonal" type="submit" color="primary" class="mt-2">Se connecter</v-btn>
        </v-app-bar>
        <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
            <NuxtPage />
        </v-main>
        <v-footer>Made with amour</v-footer>
    </v-app>
</template>
  