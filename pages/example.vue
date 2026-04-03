<script setup>
const exampleUrl = 'https://npub1equrmqway3qxw3dkssymusxkwgwrqypfgeqx0lx9pgjam7gnj4ysaqhkj6.nsite.run'

useSeoMeta({
  title: 'Example | Nostr Boutique',
  description: 'View a live Nsite deployment that demonstrates the Nostr Boutique template direction.'
})
</script>

<template>
  <section class="fade-in-up grid gap-4 lg:grid-cols-[1fr_1.1fr]">
    <article class="surface-card p-6 sm:p-8">
      <span class="pill">Reference deployment</span>
      <h1 class="hero-title mt-4 text-4xl font-black leading-tight">See a live Gamma-style Nsite.</h1>
      <p class="mt-4 text-sm sm:text-base" :style="{ color: 'var(--muted)' }">
        This example is the public storefront used as a proof point for this landing site.
        You can open it directly and inspect how a Nostr-hosted merchant surface behaves.
      </p>

      <div class="mt-6 grid gap-3">
        <a
          :href="exampleUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="cta-primary inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-black"
        >
          Open live example
        </a>
        <NuxtLink to="/explore" class="inline-flex items-center justify-center rounded-full border px-5 py-2.5 text-sm font-bold" :style="{ borderColor: 'var(--line)' }">
          Explore related Nsites
        </NuxtLink>
      </div>

      <div class="mt-6 panel">
        <p class="text-xs font-extrabold uppercase tracking-[0.1em]" :style="{ color: 'var(--muted)' }">URL</p>
        <p class="mt-2 break-all text-sm">{{ exampleUrl }}</p>
      </div>
    </article>

    <article class="surface-card overflow-hidden p-3">
      <div class="mb-3 flex items-center gap-2 px-1">
        <span class="h-2.5 w-2.5 rounded-full bg-red-300" />
        <span class="h-2.5 w-2.5 rounded-full bg-amber-300" />
        <span class="h-2.5 w-2.5 rounded-full bg-emerald-300" />
        <div class="ml-2 rounded-full border px-3 py-1 text-xs" :style="{ borderColor: 'var(--line)', color: 'var(--muted)' }">
          nsite.run gateway preview
        </div>
      </div>

      <iframe
        title="Nostr Boutique Example Nsite"
        :src="exampleUrl"
        class="h-[68vh] w-full rounded-xl border"
        :style="{ borderColor: 'var(--line)' }"
        loading="lazy"
      />
    </article>
  </section>

  <section class="mt-6 grid gap-4 md:grid-cols-3">
    <article class="panel">
      <h2 class="text-base font-black">Real deployment</h2>
      <p class="mt-2 text-sm" :style="{ color: 'var(--muted)' }">Not a mockup. This is a live nsite URL visitors can test.</p>
    </article>
    <article class="panel">
      <h2 class="text-base font-black">Works on gateways</h2>
      <p class="mt-2 text-sm" :style="{ color: 'var(--muted)' }">Accessed through gateway infrastructure so regular browsers can render it.</p>
    </article>
    <article class="panel">
      <h2 class="text-base font-black">Template reference</h2>
      <p class="mt-2 text-sm" :style="{ color: 'var(--muted)' }">Use this as the baseline behavior while shaping your own storefront.</p>
    </article>
  </section>
</template>
