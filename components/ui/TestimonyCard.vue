<script setup>
import { RoughSVG } from "roughjs/bin/svg";

const props = defineProps({
  vertical: { type: Boolean, default: false },
  image: { type: String, required: true },
  video: { type: String, required: true },
});

const frame = ref(null);

onMounted(() => {
  const svg = new RoughSVG(frame);
  const node = svg.rectangle(
    0,
    0,
    props.vertical ? 105 : 200,
    props.vertical ? 200 : 105,
    {
      strokeWidth: 1.5,
      roughness: 1.5,
    },
  );
  frame.value.appendChild(node);
});
</script>

<template>
  <NuxtLink target="_blank" :to="video" class="[&:hover>article>img]:scale-110">
    <article
      :class="vertical ? 'aspect-short' : 'aspect-video'"
      class="relative w-full overflow-hidden rounded-lg"
    >
      <img
        :src="image"
        alt=""
        class="absolute left-0 top-0 size-full object-cover transition-transform duration-300 ease-in-out"
      />
      <h3 class="absolute bottom-3 left-4 z-10 max-w-[72%] text-background">
        <slot></slot>
      </h3>
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="absolute right-3 top-3 size-4"
      >
        <path
          d="M34.788 26.091L15.699 37.167C14.079 38.106 12 36.969 12 35.076V12.924C12 11.034 14.076 9.89401 15.699 10.836L34.788 21.912C35.1565 22.1224 35.4628 22.4265 35.6759 22.7934C35.889 23.1604 36.0012 23.5772 36.0012 24.0015C36.0012 24.4258 35.889 24.8426 35.6759 25.2096C35.4628 25.5765 35.1565 25.8806 34.788 26.091Z"
          class="fill-primary"
        />
      </svg>
      <svg
        ref="frame"
        class="absolute left-0 top-0 z-10 size-full scale-95 overflow-visible *:*:stroke-primary"
        :viewBox="vertical ? '0 0 105 200' : '0 0 200 105'"
      ></svg>
      <div
        class="absolute bottom-0 left-0 z-[2] size-full bg-gradient-to-t from-foreground-1/40 to-foreground-1/0"
      ></div>
    </article>
  </NuxtLink>
</template>

<style scoped></style>
