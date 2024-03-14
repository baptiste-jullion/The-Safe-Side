<script setup lang="ts">
defineProps({
  to: { type: String, required: true },
  block: { type: Boolean, default: false },
  semi: { type: Boolean, default: false },
  target: { type: String, default: "_self" },
});
</script>

<template>
  <NuxtLink
    :to="to"
    :class="block ? 'block' : semi ? 'w-1/2' : 'w-fit'"
    :target="target"
    class="h-fit rounded-lg bg-primary px-3 py-2 text-center text-background"
  >
    <slot></slot>
  </NuxtLink>
</template>

<style scoped></style>
