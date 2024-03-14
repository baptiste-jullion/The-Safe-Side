<script setup lang="ts"></script>

<template>
  <header class="container flex flex-col">
    <p class="p-1 text-center">
      Témoin ou victime de cyberharcèlement ?
      <a
        target="_blank"
        class="text-primary underline"
        href="https://www.service-public.fr/particuliers/vosdroits/F32239"
      >
        Clique ici pour savoir quoi faire</a
      >.
    </p>
    <div class="flex justify-between">
      <NuxtLink
        to="/"
        class="size-fit"
        aria-label="The Safe Side logo, redirect to homepage"
      >
        <AssetsLogo />
      </NuxtLink>
      <nav
        class="hidden items-center gap-4 sm:flex [&>.router-link-active]:text-primary"
      >
        <NuxtLink to="/">accueil</NuxtLink>
        <NuxtLink to="/temoignages">témoignages</NuxtLink>
        <NuxtLink to="/qui-sommes-nous">qui sommes nous ?</NuxtLink>
        <NuxtLink to="/contact">contact</NuxtLink>
      </nav>
    </div>
  </header>
</template>

<style scoped></style>
