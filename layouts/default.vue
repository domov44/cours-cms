<template>
    <v-app>
        <v-app-bar app>
            <v-container class="d-flex justify-space-between align-center">
                <div style="width:100%;">
                    <v-img class="mx-2"
                        src="https://www.nexus-corp.fr/wp-content/uploads/2022/08/Logo-Nexus-Corp-version-3D.svg"
                        max-height="180" max-width="180" contain>
                    </v-img>
                </div>
                <MainMenu />
            </v-container>
        </v-app-bar>
        <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
            <NuxtPage />
        </v-main>
        <v-footer>Made with amour</v-footer>
    </v-app>
</template>
  
<style scoped>
:deep(.v-toolbar__content) {}
</style>