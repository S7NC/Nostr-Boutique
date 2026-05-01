<script setup>
useSeoMeta({
  title: 'Code | Nostr Boutique',
  description: 'Browse the main repositories behind Nostr Boutique and the Merchant Portal.'
})

const selectedRepo = ref('shop-front')

const repos = {
  'shop-front': {
    key: 'shop-front',
    label: 'Shop Front',
    name: 'nostr-boutique-shop-front',
    description: 'Public storefront and discovery experience for Nostr Boutique.',
    branch: 'master',
    updated: 'updated recently',
    nostrUrl: 'nostr://npub1000000k94d2xgnfdyqkvvgmc4x2d798y67k2llk4szq7jarqhz2s540a03/relay.ngit.dev/nostr-boutique-shop-front',
    webUrl: 'https://gitworkshop.dev/npub1000000k94d2xgnfdyqkvvgmc4x2d798y67k2llk4szq7jarqhz2s540a03/relay.ngit.dev/nostr-boutique-shop-front',
    cloneCmd: 'git clone nostr://npub1000000k94d2xgnfdyqkvvgmc4x2d798y67k2llk4szq7jarqhz2s540a03/relay.ngit.dev/nostr-boutique-shop-front',
    tree: [
      { type: 'dir', name: 'assets/', age: '2d ago' },
      { type: 'dir', name: 'components/', age: '2d ago' },
      { type: 'dir', name: 'composables/', age: '2d ago' },
      { type: 'dir', name: 'data/', age: '3d ago' },
      { type: 'dir', name: 'layouts/', age: '1d ago' },
      { type: 'dir', name: 'pages/', age: '1d ago' },
      { type: 'dir', name: 'public/', age: '3d ago' },
      { type: 'file', name: 'App.vue', age: '2d ago' },
      { type: 'file', name: 'nuxt.config.js', age: '3d ago' },
      { type: 'file', name: 'package.json', age: '3d ago' },
      { type: 'file', name: 'README.md', age: '2d ago' }
    ]
  },
  'merchant-portal': {
    key: 'merchant-portal',
    label: 'Merchant Portal',
    name: 'nostr-boutique-merchant-portal',
    description: 'Admin and merchant operations Nsite for managing listings and flow.',
    branch: 'master',
    updated: 'updated recently',
    nostrUrl: 'nostr://npub1000000k94d2xgnfdyqkvvgmc4x2d798y67k2llk4szq7jarqhz2s540a03/relay.ngit.dev/nostr-boutique-merchant-portal',
    webUrl: 'https://gitworkshop.dev/npub1000000k94d2xgnfdyqkvvgmc4x2d798y67k2llk4szq7jarqhz2s540a03/relay.ngit.dev/nostr-boutique-merchant-portal',
    cloneCmd: 'git clone nostr://npub1000000k94d2xgnfdyqkvvgmc4x2d798y67k2llk4szq7jarqhz2s540a03/relay.ngit.dev/nostr-boutique-merchant-portal',
    tree: [
      { type: 'dir', name: 'assets/', age: '2d ago' },
      { type: 'dir', name: 'components/', age: '2d ago' },
      { type: 'dir', name: 'composables/', age: '2d ago' },
      { type: 'dir', name: 'layouts/', age: '2d ago' },
      { type: 'dir', name: 'pages/', age: '1d ago' },
      { type: 'dir', name: 'plugins/', age: '2d ago' },
      { type: 'dir', name: 'public/', age: '3d ago' },
      { type: 'file', name: 'App.vue', age: '2d ago' },
      { type: 'file', name: 'nuxt.config.js', age: '3d ago' },
      { type: 'file', name: 'package.json', age: '3d ago' },
      { type: 'file', name: 'README.md', age: '2d ago' }
    ]
  }
}

const currentRepo = computed(() => repos[selectedRepo.value] || repos['shop-front'])
</script>

<template>
  <section class="fade-in-up">
    <div class="surface-card p-6 sm:p-8">
      <h1 class="text-3xl font-black sm:text-4xl">Code</h1>
      <p class="mt-2 text-sm sm:text-base" :style="{ color: 'var(--muted)' }">
        Browse the main repositories powering Nostr Boutique.
      </p>

      <div class="mt-5 inline-flex rounded-full border p-1" :style="{ borderColor: 'var(--line)', background: 'var(--bg-soft)' }">
        <button
          v-for="repo in Object.values(repos)"
          :key="repo.key"
          type="button"
          class="rounded-full px-4 py-2 text-xs font-black uppercase tracking-[0.08em] transition sm:text-sm"
          :style="selectedRepo === repo.key
            ? { background: 'var(--menu-active-underline)', color: '#fff' }
            : { color: 'var(--text)' }"
          @click="selectedRepo = repo.key"
        >
          {{ repo.label }}
        </button>
      </div>

      <div class="mt-4 space-y-1 text-xs sm:text-sm" :style="{ color: 'var(--muted)' }">
        <p class="font-semibold" :style="{ color: 'var(--text)' }">Repository links</p>
        <a :href="currentRepo.webUrl" target="_blank" rel="noopener noreferrer" class="block break-all underline underline-offset-4">
          {{ currentRepo.webUrl }}
        </a>
        <a :href="currentRepo.nostrUrl" class="block break-all underline underline-offset-4">
          {{ currentRepo.nostrUrl }}
        </a>
      </div>
    </div>
  </section>

  <section class="mt-6">
    <div class="surface-card overflow-hidden">
      <div class="border-b px-4 py-3 sm:px-5" :style="{ borderColor: 'var(--line)' }">
        <div class="flex flex-wrap items-center gap-2 text-sm">
          <span class="font-black">{{ currentRepo.name }}</span>
          <span class="rounded-full border px-2 py-0.5 text-xs" :style="{ borderColor: 'var(--line)', color: 'var(--muted)' }">{{ currentRepo.branch }}</span>
          <span class="text-xs" :style="{ color: 'var(--muted)' }">{{ currentRepo.updated }}</span>
        </div>
        <p class="mt-2 text-sm" :style="{ color: 'var(--muted)' }">{{ currentRepo.description }}</p>

        <div class="mt-3 flex flex-wrap gap-2">
          <a :href="currentRepo.webUrl" target="_blank" rel="noopener noreferrer" class="inline-flex rounded-full border px-3 py-1.5 text-xs font-bold" :style="{ borderColor: 'var(--line)' }">
            Open on GitWorkshop
          </a>
          <a :href="currentRepo.nostrUrl" class="inline-flex rounded-full border px-3 py-1.5 text-xs font-bold" :style="{ borderColor: 'var(--line)' }">
            Open nostr://
          </a>
        </div>
      </div>

      <div class="border-b px-4 py-2 text-xs font-semibold" :style="{ borderColor: 'var(--line)', color: 'var(--muted)', background: 'var(--bg-soft)' }">
        Files
      </div>

      <div>
        <div
          v-for="entry in currentRepo.tree"
          :key="`${currentRepo.key}-${entry.name}`"
          class="grid grid-cols-[1fr_auto] items-center gap-3 border-b px-4 py-2.5 font-mono text-sm sm:px-5"
          :style="{ borderColor: 'var(--line)' }"
        >
          <div class="flex items-center gap-2 min-w-0">
            <span aria-hidden="true">{{ entry.type === 'dir' ? '📁' : '📄' }}</span>
            <span class="block truncate">{{ entry.name }}</span>
          </div>
          <span class="text-xs" :style="{ color: 'var(--muted)' }">{{ entry.age }}</span>
        </div>
      </div>

      <div class="px-4 py-3 sm:px-5">
        <p class="text-xs font-semibold uppercase tracking-[0.08em]" :style="{ color: 'var(--muted)' }">Clone with ngit</p>
        <code class="mt-2 block overflow-x-auto rounded-lg border px-3 py-2 text-xs sm:text-sm" :style="{ borderColor: 'var(--line)', background: 'var(--bg-soft)' }">
          {{ currentRepo.cloneCmd }}
        </code>
      </div>
    </div>
  </section>
</template>
