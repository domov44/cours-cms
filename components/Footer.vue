<template>
    <v-footer>
        <v-container class="d-flex justify-space-between align-center">
            <div style="width:100%;">
                <v-img class="mx-2"
                    src="https://www.nexus-corp.fr/wp-content/uploads/2022/08/Logo-Nexus-Corp-version-3D.svg"
                    max-height="180" max-width="180" contain>
                </v-img>
            </div>
            <MainMenu />
        </v-container>
        <v-container class="d-flex justify-space-between align-center">
            <div style="width:60%;">
                <p>Made with by <NuxtLink color="primary" size="large" to="/blog">
                        Ronan Scotet
                    </Nuxtlink>
                </p>
            </div>
            <div style="width:40%; display:flex; gap:10px;">
                <NuxtLink color="primary" size="large" to="/blog">
                    LinkeDin
                </Nuxtlink>
                <NuxtLink color="primary" size="large" to="/blog">
                    Discord
                </Nuxtlink>
                <NuxtLink color="primary" size="large" to="/blog">
                    Github
                </Nuxtlink>
            </div>
        </v-container>
    </v-footer>
</template>

<style>
.v-footer {
    display: block !important;
}

a{
    text-decoration: none;
    position: relative;
    display: inline-block;
    padding-top: 1px;
    padding-bottom: 1px;
    line-height: 1.2;
    color: var(--color-title);
}

a::after {
    content: '';
    background-color: red;
    width: 100%;
    height: 2px;
    position: absolute;
    top: 100%;
    left: 0;
    transition: 0.3s;
    border-radius: 20px;
}

a:hover::after {
    width: 10%;
}
</style>