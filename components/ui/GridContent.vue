<script setup>
const { strapiBaseUri } = useRuntimeConfig().public;
const response = await useFetch("/api/testimonies?vertical=false");
const testimonies = JSON.parse(JSON.stringify(response.data.value)).data;
</script>

<template>
  <div class="grid grid-cols-1 justify-center gap-3 lg:grid-cols-3">
    <UiTestimonyCard
      v-for="testimony in testimonies"
      :image="
        strapiBaseUri +
        testimony.attributes.Preview.data.attributes.formats.small.url
      "
      :video="strapiBaseUri + testimony.attributes.Video.data.attributes.url"
    >
      {{ testimony.attributes.Name }}
    </UiTestimonyCard>
  </div>
</template>

<style scoped></style>
