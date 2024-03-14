<script setup lang="ts">
useSeoMeta({
  title: "Témoinages",
  description: "Découvrez tous les témoignages.",
});
</script>

<template>
  <section>
    <h1>
      Découvrez tous les
      <UiDecoratedText variant="Underline3">témoignages</UiDecoratedText>
    </h1>
  </section>
  <section class="flex flex-col gap-3">
    <h2>
      Nos contenus <UiDecoratedText variant="Underline1">longs</UiDecoratedText>
    </h2>
    <UiGridContent />
  </section>
  <section class="flex flex-col gap-3">
    <h2>
      Nos contenus
      <UiDecoratedText variant="Underline3">courts</UiDecoratedText>
    </h2>
    <UiGridContent vertical />
  </section>
</template>

<style scoped></style>
