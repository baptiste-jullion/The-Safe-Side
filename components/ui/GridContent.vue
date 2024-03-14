<script setup>
const props = defineProps({
  vertical: { type: Boolean, default: false },
});
const { strapiBaseUri } = useRuntimeConfig().public;
const response = await useFetch(`/api/testimonies?vertical=${props.vertical}`);
const testimonies = JSON.parse(JSON.stringify(response.data.value)).data;
</script>

<template>
  <div
    :class="
      vertical ? 'grid-cols-2 lg:grid-cols-5' : 'grid-cols-1 lg:grid-cols-3'
    "
    class="grid justify-center gap-3"
  >
    <UiTestimonyCard
      :vertical
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
