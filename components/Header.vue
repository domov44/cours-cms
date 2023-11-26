<template>
    <v-navigation-drawer class="hidden-md-and-up" v-model="drawer" location="right" temporary>

        <v-list density="compact" nav>
            <ResponsiveMainMenu />
        </v-list>
    </v-navigation-drawer>
    <v-app-bar app color="background">
        <v-container class="d-flex justify-space-between align-center">
            <div style="width:100%;">
                <Logo />
            </div>
            <div style="width:100%;" class="d-flex align-center justify-end">
                <MainMenu />
                <v-app-bar-nav-icon variant="text" class="hidden-md-and-up" color="primary" @click.stop="drawer = !drawer">
                </v-app-bar-nav-icon>
                <SwitchTheme />
            </div>
        </v-container>
    </v-app-bar>
</template>

<script>
export default {
    data() {
        return {
            drawer: null,
        }
    },
}
</script>