<template>
    <section class="hero">
        <v-container class="d-flex justify-space-between align-center">
            <slot />
        </v-container>
    </section>
</template>
<style>
.hero{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 5% 0 5%;
    min-height: 80vh
}
</style>