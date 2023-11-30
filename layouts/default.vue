<template>
    <v-app>
        <Html lang="fr">
        <VitePwaManifest />
        <Header />
        <v-main class="d-flex flex-column align-center justify-center" style="min-height: 300px;">
            <NuxtPage />
        </v-main>
        <Footer />

        </Html>
    </v-app>
</template>
