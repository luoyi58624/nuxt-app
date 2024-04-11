<template>
  <main class="w-full h-full text-center">
    <button type="button" class="m-button mt-4" @click="count++">count: {{ count }}</button>
    <br />
    <button type="button" class="m-button mt-4" @click="toggleDark()">
      {{ isDark ? '亮色模式' : '暗色模式' }}
    </button>
    <br />
    <button class="btn mt-4" @click="count++">count: {{ count }}</button>
    <br />
    <NuxtLink to="/about"><button class="m-button mt-4">about页面</button></NuxtLink>
  </main>
</template>

<script setup lang="ts">
const count = ref(0)
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<style scoped lang="scss"></style>
