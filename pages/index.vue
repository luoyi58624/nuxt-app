<template>
  <main class="h-full flex justify-center items-center">
    <button type="button" class="m-button" @click="count++">count: {{ count }}</button>
    <NuxtLink to="/about"><button class="m-button">about页面</button></NuxtLink>
  </main>
</template>

<script setup lang="ts">
const count = ref(0)
</script>

<style scoped lang="scss"></style>
