<script setup>
useSeoMeta({
  title: 'Explain | Nostr Boutique',
  description: 'Understand Nostr, Nsites, and gateways in plain language.'
})

const normalizeImagePath = (path = '') => {
  return path.replace(/^\/?&\//, '/')
}

const stepImages = {
  one: normalizeImagePath('/1.png'),
  two: normalizeImagePath('/3.png'),
  three: normalizeImagePath('/4.png')
}
</script>

<template>
  <section class="fade-in-up">
    <div class="surface-card p-6 sm:p-8">
      <span class="pill">Beginner friendly guide</span>
      <h1 class="hero-title mt-4 text-4xl font-black leading-tight">What are Nostr, Nsites, and gateways?</h1>
      <p class="mt-3 max-w-3xl text-sm sm:text-base" :style="{ color: 'var(--muted)' }">
        If you are new to this stack, this page gives the practical mental model for how a sovereign storefront appears online.
      </p>
    </div>
  </section>

  <section class="mt-6">
    <h2 class="text-center text-2xl font-black sm:text-3xl">How to get started</h2>
    <p class="mx-auto mt-2 max-w-3xl text-center text-sm" :style="{ color: 'var(--muted)' }">
      Three practical steps to launch a sovereign storefront on Nostr.
    </p>

    <div class="mt-6 space-y-4">
      <article class="overflow-hidden rounded-2xl border md:grid md:grid-cols-2" :style="{ borderColor: 'var(--line)', background: 'var(--bg-soft)' }">
        <div class="md:h-full" :style="{ background: 'color-mix(in oklab, var(--bg) 95%, var(--text) 5%)' }">
          <img :src="stepImages.one" alt="Step 1" class="block h-24 w-full object-cover md:h-full lg:h-64">
        </div>
        <div class="p-5">
          <p class="text-xs font-extrabold uppercase tracking-[0.1em]" :style="{ color: 'var(--brand)' }">Step 1</p>
          <h3 class="mt-2 text-lg font-black">The key is your identity</h3>
          <p class="mt-2 text-sm" :style="{ color: 'var(--muted)' }">
            Your Nostr keypair is your account and ownership layer - simple, portable, and merchant-owned.
          </p>
          <p class="mt-2 text-sm" :style="{ color: 'var(--muted)' }">
            Decentralized products, merchant-owned identity, no platform lock-in.
          </p>
        </div>
      </article>

      <article class="overflow-hidden rounded-2xl border md:grid md:grid-cols-2" :style="{ borderColor: 'var(--line)', background: 'var(--bg-soft)' }">
        <div class="order-0 md:order-2 md:h-full" :style="{ background: 'color-mix(in oklab, var(--bg) 95%, var(--text) 5%)' }">
          <img :src="stepImages.two" alt="Step 2" class="block h-24 w-full object-cover md:h-full lg:h-64">
        </div>
        <div class="order-1 p-5 md:order-1">
          <p class="text-xs font-extrabold uppercase tracking-[0.1em]" :style="{ color: 'var(--brand)' }">Step 2</p>
          <h3 class="mt-2 text-lg font-black">Clone your storefront and choose checkout</h3>
          <p class="mt-2 text-sm" :style="{ color: 'var(--muted)' }">
            Clone a storefront and start accepting Bitcoin payments, or enable a simple PayPal checkout.
          </p>
          <p class="mt-2 text-sm" :style="{ color: 'var(--muted)' }">
            Your site is addressable through Nostr and uses Blossom servers for storage.
          </p>
          <p class="mt-2 text-sm" :style="{ color: 'var(--muted)' }">
            Publish your site manifest to multiple relays for reach and redundancy.
          </p>
        </div>
      </article>

      <article class="overflow-hidden rounded-2xl border md:grid md:grid-cols-2" :style="{ borderColor: 'var(--line)', background: 'var(--bg-soft)' }">
        <div class="md:h-full" :style="{ background: 'color-mix(in oklab, var(--bg) 95%, var(--text) 5%)' }">
          <img :src="stepImages.three" alt="Step 3" class="block h-24 w-full object-cover md:h-full lg:h-64">
        </div>
        <div class="p-5">
          <p class="text-xs font-extrabold uppercase tracking-[0.1em]" :style="{ color: 'var(--brand)' }">Step 3</p>
          <h3 class="mt-2 text-lg font-black">Operate across gateways and clients</h3>
          <p class="mt-2 text-sm" :style="{ color: 'var(--muted)' }">
            Your storefront and merchant portal stay accessible through multiple gateways.
          </p>
          <p class="mt-2 text-sm" :style="{ color: 'var(--muted)' }">
            Accessible via Nostr Gateways <code>npub*.nsite.cloud</code>, <code>npub*.nsite.lol</code>, and <code>npub*.nsite.run</code>.
          </p>
          <p class="mt-2 text-sm" :style="{ color: 'var(--muted)' }">
            Maintain products through interoperable Nostr clients, with the freedom to switch tools anytime.
          </p>
          <div class="mt-4 flex flex-wrap gap-2">
            <a
              href="https://plebeian.market"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center rounded-full border px-4 py-2 text-xs font-bold"
              :style="{ borderColor: 'var(--line)' }"
            >
              Plebeian.market
            </a>
            <a
              href="https://shopstr.store"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center rounded-full border px-4 py-2 text-xs font-bold"
              :style="{ borderColor: 'var(--line)' }"
            >
              shopstr.store
            </a>
            <a
              href="https://conduit.market"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center rounded-full border px-4 py-2 text-xs font-bold"
              :style="{ borderColor: 'var(--line)' }"
            >
              conduit.market
            </a>
          </div>
        </div>
      </article>
    </div>
  </section>

  <section class="mt-6 grid gap-4 md:grid-cols-3">
    <article class="panel fade-in-up">
      <p class="text-xs font-extrabold uppercase tracking-[0.1em]" :style="{ color: 'var(--brand)' }">01</p>
      <h2 class="mt-2 text-xl font-black">Nostr</h2>
      <p class="mt-3 text-sm" :style="{ color: 'var(--muted)' }">
        Nostr is an open protocol for signed events. Your account is your keypair, not a username in one company database.
      </p>
    </article>

    <article class="panel fade-in-up">
      <p class="text-xs font-extrabold uppercase tracking-[0.1em]" :style="{ color: 'var(--brand)' }">02</p>
      <h2 class="mt-2 text-xl font-black">Nsite</h2>
      <p class="mt-3 text-sm" :style="{ color: 'var(--muted)' }">
        An Nsite is site content and metadata published over Nostr-compatible rails. It can be cloned to another key and updated without platform lock-in.
      </p>
    </article>

    <article class="panel fade-in-up">
      <p class="text-xs font-extrabold uppercase tracking-[0.1em]" :style="{ color: 'var(--brand)' }">03</p>
      <h2 class="mt-2 text-xl font-black">Gateway</h2>
      <p class="mt-3 text-sm" :style="{ color: 'var(--muted)' }">
        A gateway is the web-facing domain that resolves Nsite data into regular HTTP pages, such as <code>*.nsite.cloud</code>, <code>*.nsite.run</code>, and <code>*.nsite.lol</code>.
      </p>
    </article>
  </section>

  <section class="mt-6 fade-in-up">
    <div class="surface-card p-6 sm:p-8">
      <h2 class="text-2xl font-black sm:text-3xl">Tips for managing and key safety</h2>
      <p class="mt-2 text-sm" :style="{ color: 'var(--muted)' }">
        Treat your key like the password to your store. Keep it private, backed up, and controlled.
      </p>

      <div class="mt-5 grid gap-4 md:grid-cols-2">
        <article class="rounded-xl border p-4" :style="{ borderColor: 'var(--line)', background: 'var(--bg-soft)' }">
          <h3 class="text-base font-black">Safety checklist</h3>
          <ul class="mt-3 space-y-2 text-sm" :style="{ color: 'var(--muted)' }">
            <li>- Clear your clipboard after copying your key.</li>
            <li>- Store your key in a secure password manager.</li>
            <li>- Keep backup copies in separate safe places.</li>
            <li>- Never paste your nsec into unknown websites.</li>
          </ul>
        </article>

        <article class="rounded-xl border p-4" :style="{ borderColor: 'var(--line)', background: 'var(--bg-soft)' }">
          <h3 class="text-base font-black">Browser signer (Nos2x)</h3>
          <p class="mt-2 text-sm" :style="{ color: 'var(--muted)' }">
            Use a browser extension signer so websites can request signatures without directly handling your key.
          </p>
          <div class="mt-4 flex flex-wrap gap-2">
            <a
              href="https://chrome.google.com/webstore/detail/nos2x/kpgefcfmnafjgpblomihpgmejjdanjjp"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.08em]"
              :style="{ borderColor: 'var(--line)' }"
            >
              Nos2x for Chrome
            </a>
            <a
              href="https://diegogurpegui.com/nos2x-fox/"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.08em]"
              :style="{ borderColor: 'var(--line)' }"
            >
              Nos2x for Firefox
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>

  <section class="mt-6 grid gap-4 lg:grid-cols-[1.2fr_1fr]">
    <article class="surface-card p-6">
      <h2 class="text-2xl font-black">Simple flow</h2>
      <ol class="mt-4 space-y-2 text-sm" :style="{ color: 'var(--muted)' }">
        <li>1. Merchant controls a Nostr keypair.</li>
        <li>2. Merchant publishes storefront manifest and content pointers.</li>
        <li>3. Relays and servers distribute the data.</li>
        <li>4. Gateway resolves and renders the storefront for browsers.</li>
      </ol>
    </article>

    <article class="surface-card p-6">
      <h2 class="text-2xl font-black">Why it matters</h2>
      <ul class="mt-4 space-y-2 text-sm" :style="{ color: 'var(--muted)' }">
        <li>- Lower platform dependence.</li>
        <li>- Easier migration and cloning.</li>
        <li>- User-owned merchant identity.</li>
        <li>- Open ecosystem interoperability.</li>
      </ul>
      <NuxtLink to="/example" class="mt-5 inline-flex rounded-full border px-4 py-2 text-sm font-bold" :style="{ borderColor: 'var(--line)' }">
        See a live example
      </NuxtLink>
    </article>
  </section>

  <section class="mt-6">
    <div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
      <article class="rounded-2xl border px-4 py-4 text-center" :style="{ borderColor: 'var(--line)', background: 'var(--bg-soft)' }">
        <p class="text-2xl">💳</p>
        <p class="mt-2 text-sm font-bold leading-6">No credit card or monthly fees!</p>
      </article>

      <article class="rounded-2xl border px-4 py-4 text-center" :style="{ borderColor: 'var(--line)', background: 'var(--bg-soft)' }">
        <p class="text-2xl">📵</p>
        <p class="mt-2 text-sm font-bold leading-6">No email address or phone number!</p>
      </article>

      <article class="rounded-2xl border px-4 py-4 text-center" :style="{ borderColor: 'var(--line)', background: 'var(--bg-soft)' }">
        <p class="text-2xl">⚡</p>
        <p class="mt-2 text-sm font-bold leading-6">As close to one-click deploy as possible.</p>
      </article>

      <article class="rounded-2xl border px-4 py-4 text-center" :style="{ borderColor: 'var(--line)', background: 'var(--bg-soft)' }">
        <p class="text-2xl">🛠️</p>
        <p class="mt-2 text-sm font-bold leading-6">No technical skills required.</p>
      </article>
    </div>
  </section>
</template>
