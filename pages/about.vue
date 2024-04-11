<template>
  <main class="h-full flex justify-center items-center">
    <button class="m-button" @click="back">返回</button>
  
  </main>
</template>

<script setup lang="ts">
function back() {
  history.back()
}
</script>

<style scoped lang="scss"></style>
