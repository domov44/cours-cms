<template>
    <v-navigation-drawer v-model="drawer" temporary>
        <v-list-item prepend-avatar="https://randomuser.me/api/portraits/men/78.jpg" title="Nexinu"></v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
            <v-list-item to="/" prepend-icon="mdi-view-dashboard" title="Home" value="home"></v-list-item>
            <v-list-item to="/blog/" prepend-icon="mdi-forum" title="Blog" value="about"></v-list-item>
        </v-list>
    </v-navigation-drawer>
    <v-app-bar app color="background">
        <v-container class="d-flex justify-space-between align-center">
            <div style="width:100%;">
                <Logo />
            </div>
            <div style="width:100%;" class="d-flex align-center justify-end">
                <MainMenu />
                <v-btn class="hidden-md-and-up" color="primary" @click.stop="drawer = !drawer">
                    Menu
                </v-btn>
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