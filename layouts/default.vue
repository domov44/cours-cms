<template>
    <v-app>
        <Header/>
        <v-main class="d-flex flex-column align-center justify-center" style="min-height: 300px;">
            <NuxtPage />
        </v-main>
        <v-footer>Made with amour</v-footer>
    </v-app>
</template>
  
<style>
@media (min-width: 1920px) {
    .v-container {
        max-width: 1200px !important;
    }
}

a.v-btn.v-btn--elevated.v-theme--dark.bg-primary.v-btn--density-default.v-btn--size-large.v-btn--variant-elevated {
    color: rgb(var(--v-theme-background)) !important;
}

::selection{
    color:rgb(var(--v-theme-background));
    background: rgb(var(--v-theme-primary));
}
</style>