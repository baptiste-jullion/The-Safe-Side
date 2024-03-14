<script setup lang="ts">
defineProps({
  to: { type: "String", required: true },
  block: { type: "Boolean", default: false },
});
</script>

<template>
  <NuxtLink :to="to">
    <slot></slot>
  </NuxtLink>
</template>

<style scoped></style>
