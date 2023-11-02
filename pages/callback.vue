<script setup>
someEvent = console.log("bonjour")
</script>

<template>
    <MyComponent @some-event="callback" />
    <button @click="$emit('someEvent')">click
        me
    </button>
</template>
