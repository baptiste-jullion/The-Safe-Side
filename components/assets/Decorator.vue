<script setup lang="ts">
defineProps({
  variant: {
    type: String,
    default: "Underline1",
    options: [
      "Underline1",
      "Underline2",
      "Underline3",
      "Arrow1",
      "Arrow2",
      "Arrow3",
      "Draw1",
      "Draw2",
      "Draw3",
    ],
  },
});
</script>

<template>
  <AssetsDecoratorsUnderline1 v-if="variant === 'Underline1'" />
  <AssetsDecoratorsUnderline2 v-else-if="variant === 'Underline2'" />
  <AssetsDecoratorsUnderline3 v-else-if="variant === 'Underline3'" />
  <AssetsDecoratorsArrow1 v-else-if="variant === 'Arrow1'" />
  <AssetsDecoratorsArrow2 v-else-if="variant === 'Arrow2'" />
  <AssetsDecoratorsArrow3 v-else-if="variant === 'Arrow3'" />
  <AssetsDecoratorsDraw1 v-else-if="variant === 'Draw1'" />
  <AssetsDecoratorsDraw2 v-else-if="variant === 'Draw2'" />
  <AssetsDecoratorsDraw3 v-else-if="variant === 'Draw3'" />
</template>

<style scoped></style>
