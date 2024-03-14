<script setup>
defineProps({
  label: String,
  type: String,
  placeholder: String,
  required: Boolean,
  name: String,
  options: Array,
});
</script>

<template>
  <div class="relative">
    <label
      :for="name"
      class="-translate-y-1.5 absolute left-1 top-0 rounded-full bg-background px-1 text-foreground-2"
      >{{ label }} <span v-if="required" class="text-primary">*</span></label
    >
    <input
      v-if="['text', 'email', 'number'].includes(type)"
      :type
      :placeholder
      :required
      class="w-full rounded-md border-2 border-primary bg-background p-2"
      :id="name"
    />
    <select
      v-else-if="type === 'select'"
      :required
      class="w-full rounded-md border-2 border-primary bg-background p-2"
      :id="name"
    >
      <option value="" disabled selected hidden>{{ placeholder }}</option>
      <option v-for="option in options" :value="option">
        {{ option }}
      </option>
    </select>
    <textarea
      v-if="type === 'textarea'"
      class="w-full resize-y rounded-md border-2 border-primary bg-background p-2"
      :placeholder
      :required
      rows="6"
      :id="name"
    ></textarea>
  </div>
</template>

<style scoped></style>
