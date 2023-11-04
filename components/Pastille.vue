<template>
    <span class="pastille">
        <slot />
    </span>
</template>
<style>
.pastille{
    background: calc(rgb(var(--v-theme-primary) * var(--v-focus-opacity)));
    color:red !important;
}
</style>