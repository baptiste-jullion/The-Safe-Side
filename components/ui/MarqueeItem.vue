<script setup>
import { RoughSVG } from "roughjs/bin/svg";

const frame = ref(null);
const container = ref(null);
const viewBox = ref();

onMounted(() => {
  viewBox.value = `0 0 ${container.value.getBoundingClientRect().width} 56`;
  const svg = new RoughSVG(frame.value);
  const node = svg.rectangle(
    0,
    3,
    container.value.getBoundingClientRect().width,
    50,
    {
      strokeWidth: 1.5,
      roughness: 1.5,
    },
  );
  frame.value.appendChild(node);
});
</script>

<template>
  <div ref="container" class="relative overflow-visible p-2">
    <slot></slot>
    <svg
      ref="frame"
      class="absolute left-0 top-0 z-10 size-full overflow-visible *:*:stroke-primary"
      :viewBox="viewBox"
    ></svg>
  </div>
</template>

<style scoped></style>
