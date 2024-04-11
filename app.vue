<script setup lang="ts">
const count = ref(0)
</script>
<template>
  <main className="h-full flex justify-center items-center bg-gray-700">
    <button
      type="button"
      className="transition-all bg-sky-500 text-white rounded px-6 py-2 hover:bg-sky-600"
      @click="count++">
      count: {{ count }}
    </button>
  </main>
</template>
