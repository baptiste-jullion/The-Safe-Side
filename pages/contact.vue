<script setup>
useSeoMeta({
  title: "Contact",
  description: "Unissons nos forces pour un monde numérique plus respectueux.",
});

const handleForm = (event) => {
  const form = event.target;
  useMail().send({
    from: "The Safe Side",
    subject: form.elements.topic.value,
    html: `
      <h1>Nouveau message</h1>
      <p>Nom : ${form.elements.lastname.value}</p>
      <p>Prénom : ${form.elements.firstname.value}</p>
      <p>Email : ${form.elements.email.value}</p>
      <p>Téléphone : ${form.elements.phone.value}</p>
      <p>Message : ${form.elements.message.value}</p>
    `,
  });
  form.reset();
  alert("Votre message a bien été envoyé !");
};
</script>

<template>
  <section class="grid grid-cols-1 items-center gap-3 lg:grid-cols-2">
    <div class="flex flex-col gap-2">
      <h1>
        Prêt à <UiDecoratedText>agir</UiDecoratedText> ? <br />
        Contactez-nous !
      </h1>
      <div class="mt-6">
        <p>Unissons nos forces pour un monde numérique plus respectueux.</p>
        <h2>Nos coordonnés</h2>
        <p>The Safe Side</p>
        <p>
          Téléphone :
          <NuxtLink to="tel:+33678912345">+33 (0)6 78 91 23 45</NuxtLink>
        </p>
        <p>
          Email :
          <NuxtLink to="mailto:contact@thesafeside.fr">
            contact@thesafeside.fr
          </NuxtLink>
        </p>
        <p>
          <NuxtLink
            to="https://maps.app.goo.gl/U9Vu2PGQHZvZMBma9"
            target="_blank"
          >
            123 Avenue du Rhône <br />
            74000 Annecy, France
          </NuxtLink>
        </p>
      </div>
    </div>
    <div>
      <form
        class="grid grid-cols-1 gap-3 max-sm:*:col-span-full sm:grid-cols-2"
        @submit.prevent="handleForm"
      >
        <UiFormField
          type="text"
          label="Nom"
          placeholder="ex. Doe"
          name="lastname"
        />
        <UiFormField
          type="text"
          label="Prénom"
          placeholder="ex. John"
          name="firstname"
        />
        <UiFormField
          type="email"
          label="Email"
          placeholder="ex. johndoe@thesafesi.de"
          name="email"
          required
        />
        <UiFormField
          type="number"
          label="Téléphone"
          placeholder="ex. 0612457812"
          name="phone"
        />
        <UiFormField
          class="col-span-full"
          type="select"
          label="Sujet"
          placeholder="Choisir un sujet"
          name="topic"
          required
          :options="['Témoignage', 'Partenariat', 'Autre']"
        />
        <UiFormField
          class="col-span-full"
          type="textarea"
          label="Message"
          placeholder="Votre message..."
          name="message"
          required
        />
        <button
          type="submit"
          class="col-start-2 h-fit rounded-lg !bg-primary px-3 py-2 text-center text-background"
        >
          Envoyer
        </button>
      </form>
    </div>
  </section>
</template>

<style scoped></style>
