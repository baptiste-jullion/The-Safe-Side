<script setup lang="ts">
defineProps({
  variant: {
    type: String,
    default: "Underline1",
    options: ["Underline1", "Underline2", "Underline3"],
  },
});
</script>

<template>
  <span class="relative">
    <slot></slot>
    <AssetsDecorator
      class="absolute bottom-1 left-1/2 -z-10 w-full -translate-x-1/2 scale-110"
      :variant
  /></span>
</template>

<style scoped></style>
