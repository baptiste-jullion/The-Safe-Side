<script setup lang="ts">
useSeoMeta({
  title: "Qui sommes nous ?",
  description: "Donner du pouvoir aux voix contre le cyberharcèlement.",
});
</script>

<template>
  <section class="grid grid-cols-1 items-center lg:grid-cols-2">
    <div>
      <h1>@TheSafeSide</h1>
      <p class="mt-6">Donner du pouvoir aux voix contre le cyberharcèlement.</p>
    </div>
    <div class="flex items-center justify-center">
      <img src="/qui-sommes-nous.webp" alt="" />
    </div>
  </section>
  <section class="flex flex-col gap-3">
    <h2>
      Le néo-média
      <UiDecoratedText variant="Underline2">engagé</UiDecoratedText> contre le
      cyberharcèlement.
    </h2>
    <div class="grid grid-cols-1 items-center gap-3 md:grid-cols-2">
      <p>
        <strong>The Safe Side</strong> est le nouveau média en ligne
        <strong>engagé</strong> pour la
        <strong>lutte contre le cyberharcèlement</strong> et les dérives des
        réseaux sociaux. The Safe Side est déstiné aux
        <strong>jeunes de 10 à 18 ans</strong>
        ainsi qu’à leurs <strong>parents</strong> et
        <strong>encadrants</strong>.
      </p>
      <img src="/media-engage.webp" alt="" class="w-full object-cover" />
    </div>
  </section>
  <section class="flex flex-col gap-3">
    <h2>
      Nos <UiDecoratedText variant="Underline3">missions</UiDecoratedText>
    </h2>
    <p>
      The Safe Side se bat pour un
      <strong>monde numérique sans cyberharcèlement</strong>. Pour atteindre cet
      objectif, nous nous fixons les <strong>missions</strong> suivantes :
    </p>
    <div
      class="grid grid-cols-1 gap-6 *:flex *:flex-col *:gap-3 lg:grid-cols-3 [&>div>ul]:list-disc"
    >
      <div>
        <h3>Sensibiliser et informer</h3>
        <ul>
          <li>
            en diffusant des contenus pédagogiques et informatifs sur le
            cyberharcèlement, ses différentes formes et ses impacts.
          </li>
          <li>
            en organisant des conférences, des ateliers et des événements de
            sensibilisation auprès des jeunes, des parents et des
            professionnels.
          </li>
          <li>
            en réalisant des campagnes de communication pour alerter sur les
            dangers du cyberharcèlement et promouvoir un usage responsable des
            réseaux sociaux.
          </li>
        </ul>
      </div>
      <div>
        <h3>Donner du pouvoir aux voix</h3>
        <ul>
          <li>
            en offrant une plateforme d'expression aux victimes de
            cyberharcèlement pour partager leurs témoignages et briser le
            silence.
          </li>
          <li>
            en mettant en avant des initiatives positives et des solutions
            concrètes pour lutter contre le cyberharcèlement.
          </li>
          <li>
            en encourageant les jeunes à s'exprimer et à se mobiliser contre ce
            fléau.
          </li>
        </ul>
      </div>
      <div>
        <h3>Accompagner et soutenir</h3>
        <ul>
          <li>
            en proposant un soutien psychologique et juridique aux victimes de
            cyberharcèlement.
          </li>
          <li>
            en mettant à disposition des ressources et des outils pour prévenir
            et gérer le cyberharcèlement.
          </li>
          <li>
            en formant les parents et les encadrants à la gestion des situations
            de cyberharcèlement.
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
