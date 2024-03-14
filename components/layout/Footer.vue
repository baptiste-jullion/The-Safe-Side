<script setup lang="ts"></script>

<template>
  <footer class="container mt-auto flex flex-col pb-4 pt-6">
    <nav
      class="grid w-full grid-cols-1 gap-3 py-3 *:flex *:flex-col sm:grid-cols-2 lg:grid-cols-4 [&>div>a]:text-foreground-2 [&>div>h3]:mb-2 [&>div]:mt-2"
    >
      <div>
        <h3>Plan du site</h3>
        <NuxtLink to="/">accueil</NuxtLink>
        <NuxtLink to="/temoignages">témoignages</NuxtLink>
        <NuxtLink to="/qui-sommes-nous">qui sommes nous ?</NuxtLink>
        <NuxtLink to="/contact">contact</NuxtLink>
      </div>
      <div>
        <h3>Réseaux sociaux</h3>
        <NuxtLink target="_blank" to="https://www.tiktok.com/">tiktok</NuxtLink>
        <NuxtLink target="_blank" to="https://www.instagram.com/"
          >instagram</NuxtLink
        >
        <NuxtLink target="_blank" to="https://www.youtube.com/"
          >youtube</NuxtLink
        >
        <NuxtLink target="_blank" to="https://www.whatsapp.com/"
          >whatsapp</NuxtLink
        >
      </div>
      <div>
        <h3>Autres</h3>
        <NuxtLink to="#">mentions légales</NuxtLink>
        <NuxtLink to="#">politique de confidentialité</NuxtLink>
        <NuxtLink to="#">ressources</NuxtLink>
      </div>
      <AssetsLogo class="h-auto w-full" />
    </nav>
    <p class="text-center">
      Copyright © 2024 - The Safe Side. Tous droits réservés.
    </p>
  </footer>
</template>

<style scoped></style>
