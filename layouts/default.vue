<script setup lang="ts"></script>

<template>
  <LayoutHeader />
  <main class="container">
    <slot></slot>
    <nav
      class="fixed right-3 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-2 rounded-full bg-primary px-1 py-2 shadow md:flex"
    >
      <NuxtLink
        target="_blank"
        aria-label="Tiktok logo, redirect to The Safe Side Tiktok page"
        to="https://www.tiktok.com/"
      >
        <AssetsIconsTiktok />
      </NuxtLink>
      <NuxtLink
        target="_blank"
        aria-label="Instagram logo, redirect to The Safe Side Instagram page"
        to="https://www.instagram.com/"
      >
        <AssetsIconsInstagram />
      </NuxtLink>
      <NuxtLink
        target="_blank"
        aria-label="Youtube logo, redirect to The Safe Side Youtube page"
        to="https://www.youtube.com/"
      >
        <AssetsIconsYoutube />
      </NuxtLink>
      <NuxtLink
        target="_blank"
        aria-label="Whatsapp logo, redirect to The Safe Side Whatsapp page"
        to="https://www.whatsapp.com/"
      >
        <AssetsIconsWhatsapp />
      </NuxtLink>
    </nav>
  </main>
  <LayoutFooter />
</template>

<style scoped></style>
