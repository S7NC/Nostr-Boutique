<script setup>
useSeoMeta({
  title: 'Nostr Boutique',
  description: 'Host your own self sovereign shop.'
})
</script>

<template>
  <section class="w-full max-w-3xl text-center">
    <div class="flex justify-center">
      <SiteBrand />
    </div>

    <div class="mx-auto mt-10 grid max-w-xl gap-3 sm:grid-cols-2">
      <NuxtLink to="/example" class="cta-primary inline-flex items-center justify-center border px-6 py-3 text-sm font-bold transition hover:opacity-90">
        I have a key
      </NuxtLink>
      <NuxtLink to="/explain" class="cta-accent inline-flex items-center justify-center border px-6 py-3 text-sm font-bold transition hover:opacity-80">
        I'm new here
      </NuxtLink>
    </div>
  </section>
</template>
