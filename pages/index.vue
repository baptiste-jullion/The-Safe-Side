<script setup>
const marqueeItems = ref([
  "troubles du sommeil",
  "sentiment d'isolement",
  "souffrance psychologique",
  "dépression",
  "anxiété",
  "difficultés scolaires",
  "perte de confiance en soi",
  "acte suicidaire",
]);

useSeoMeta({
  title: "Accueil",
  description:
    "Des conseils, des témoignages, des ressources : Tout pour vous aider à lutter contre le cyberharcèlement.",
});
</script>

<template>
  <section class="grid grid-cols-2 lg:grid-cols-3">
    <div class="col-span-2 flex flex-col justify-center gap-2">
      <h1>
        Ensemble, <br />
        <UiDecoratedText>brisons</UiDecoratedText>
        le silence !
      </h1>
      <p class="mt-6">
        Des conseils, des témoignages, des ressources :<br />
        Tout pour vous aider à lutter contre le cyberharcèlement.
      </p>
      <UiCTA to="/contact" class="w-full max-w-[300px] lg:!w-1/3"
        >Parlez-nous !</UiCTA
      >
    </div>
    <div class="col-span-1 hidden items-center justify-center py-4 lg:flex">
      <AssetsLogo class="h-auto w-full" />
    </div>
  </section>
  <section class="flex flex-col gap-3">
    <h2>
      Les victimes en
      <UiDecoratedText variant="Underline2">parlent</UiDecoratedText>
    </h2>
    <UiGridContent />
    <UiGridContent vertical />
    <UiCTA class="mt-4 self-center" to="/temoignages">
      Découvrir tous les témoignages
    </UiCTA>
  </section>
  <section class="flex flex-col gap-3">
    <h2>
      Le
      <UiDecoratedText variant="Underline3">cyberharcèlement</UiDecoratedText>,
      c’est quoi ?
    </h2>
    <div class="grid grid-cols-12 gap-3">
      <p class="col-span-full md:col-span-5">
        Le <strong>cyberharcèlement</strong>, c'est quand quelqu'un utilise les
        <strong>technologies numériques</strong> pour
        <strong>faire du mal</strong> à une autre personne. Cela peut se
        produire sur les <strong>réseaux sociaux</strong>, les
        <strong>jeux en ligne</strong>, les <strong>forums</strong>, etc.
      </p>
      <AssetsDecorator
        variant="Arrow1"
        class="col-span-2 hidden h-fit w-full self-end md:block"
      />
      <AssetsDecorator
        variant="Draw1"
        class="col-span-2 col-start-10 col-end-13 hidden h-fit w-full md:block"
      />
      <AssetsDecorator
        variant="Draw2"
        class="col-span-2 col-start-2 col-end-4 hidden h-fit w-full md:block"
      />
      <AssetsDecorator
        variant="Arrow2"
        class="col-span-2 col-start-5 col-end-7 hidden h-fit w-full scale-90 self-end md:block"
      />
      <p class="col-span-full md:col-span-5 md:col-start-7">
        Il peut prendre <strong>différentes formes</strong> et se traduit
        notamment par des <strong>insultes</strong>, des
        <strong>moqueries</strong> ou des <strong>menaces</strong> mais aussi
        par la <strong>diffusion de rumeurs</strong> et de
        <strong>photos compromettantes</strong> ou d’<strong
          >exclusion d’un groupe en ligne</strong
        >.
      </p>
      <p class="col-span-full md:col-start-5 md:col-end-8">
        Le <strong>cyberharcèlement</strong> peut avoir de
        <strong>graves conséquences</strong> sur les <strong>victimes</strong>,
        comme...
      </p>
      <NuxtMarquee
        id="marquee"
        class="col-span-full gap-3 overflow-y-visible py-3 *:*:gap-3 *:gap-3 *:*:*:overflow-y-visible *:*:overflow-y-visible *:overflow-y-visible"
      >
        <UiMarqueeItem v-for="text in marqueeItems">{{ text }}</UiMarqueeItem>
      </NuxtMarquee>
      <AssetsDecorator
        variant="Arrow3"
        class="col-start-3 col-end-5 hidden h-fit w-full scale-90 md:block"
      />
      <p
        class="col-span-full self-end md:col-start-5 md:col-end-10 lg:col-end-9"
      >
        Si tu es <strong>victime</strong> de cyberharcèlement, il est
        <strong>important</strong> de <strong>ne pas rester seul⸱e</strong>,
        voici quelques <strong>conseils</strong> :
      </p>
      <ul
        class="col-span-full list-disc text-foreground-2 md:col-start-5 md:col-end-10"
      >
        <li>ne réponds pas aux harceleurs</li>
        <li>
          conserve les preuves du harcèlement (captures d’écran, messages, etc)
        </li>
        <li>parles-en à un adulte de confiance (parent, enseignant, etc.)</li>
        <li>
          signale le harcèlement à la plateforme de signalement du site web ou
          de l'application
        </li>
        <li>porte plainte auprès de la police ou de la gendarmerie</li>
      </ul>
      <AssetsDecorator
        variant="Draw3"
        class="col-span-2 col-start-11 col-end-13 ml-auto hidden h-fit w-2/3 md:block"
      />
      <UiCTA
        block
        target="_blank"
        class="col-span-full md:col-start-5 md:col-end-10 lg:col-end-9 xl:col-end-8"
        to="https://www.service-public.fr/particuliers/vosdroits/F32239"
      >
        Accéder à plus d'informations
      </UiCTA>
    </div>
  </section>
</template>

<style scoped>
#marquee {
  mask: linear-gradient(
    to right,
    transparent 0%,
    black 10%,
    black 90%,
    transparent 100%
  );
}
</style>
