<script setup>
const route = useRoute()
const publisherNpub = 'npub1000000k94d2xgnfdyqkvvgmc4x2d798y67k2llk4szq7jarqhz2s540a03'
const copyLabel = ref('Copy npub')

const isActive = (path) => route.path === path

const shortNpub = (npub = '') => {
  if (!npub || npub.length <= 24) return npub
  return `${npub.slice(0, 16)}...${npub.slice(-8)}`
}

const copyNpub = async () => {
  if (!process.client || !navigator?.clipboard) return

  try {
    await navigator.clipboard.writeText(publisherNpub)
    copyLabel.value = 'Copied'
    setTimeout(() => {
      copyLabel.value = 'Copy npub'
    }, 1400)
  } catch {
    copyLabel.value = 'Copy failed'
    setTimeout(() => {
      copyLabel.value = 'Copy npub'
    }, 1400)
  }
}
</script>

<template>
  <footer class="border-t" :style="{ borderColor: 'var(--line)', background: 'var(--chrome-bg)' }">
    <div class="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6">
      <div class="grid gap-4 sm:grid-cols-[1.2fr_1fr] sm:items-end">
        <div class="flex justify-center sm:justify-start">
          <SiteBrand compact />
        </div>
        <div class="flex flex-wrap items-center justify-center gap-2 text-sm sm:flex-nowrap sm:justify-end">
          <NuxtLink to="/" class="px-2 py-1 text-sm font-semibold" :style="isActive('/') ? { color: 'var(--text)', boxShadow: 'inset 0 -2px 0 var(--menu-active-underline)' } : { color: 'var(--text)' }">Home</NuxtLink>
          <NuxtLink to="/example" class="px-2 py-1 text-sm font-semibold" :style="isActive('/example') ? { color: 'var(--text)', boxShadow: 'inset 0 -2px 0 var(--menu-active-underline)' } : { color: 'var(--text)' }">Example</NuxtLink>
          <NuxtLink to="/themes" class="px-2 py-1 text-sm font-semibold" :style="isActive('/themes') ? { color: 'var(--text)', boxShadow: 'inset 0 -2px 0 var(--menu-active-underline)' } : { color: 'var(--text)' }">Themes</NuxtLink>
          <NuxtLink to="/explore" class="px-2 py-1 text-sm font-semibold" :style="isActive('/explore') ? { color: 'var(--text)', boxShadow: 'inset 0 -2px 0 var(--menu-active-underline)' } : { color: 'var(--text)' }">Explore</NuxtLink>
          <NuxtLink to="/code" class="px-2 py-1 text-sm font-semibold" :style="isActive('/code') ? { color: 'var(--text)', boxShadow: 'inset 0 -2px 0 var(--menu-active-underline)' } : { color: 'var(--text)' }">Code</NuxtLink>
          <NuxtLink to="/explain" class="px-2 py-1 text-sm font-semibold" :style="isActive('/explain') ? { color: 'var(--text)', boxShadow: 'inset 0 -2px 0 var(--menu-active-underline)' } : { color: 'var(--text)' }">Explain</NuxtLink>
          <a
            href="https://portal.nostr.boutique"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center rounded-full px-3 py-1.5 text-xs font-black text-white"
            :class="'shrink-0'"
            :style="{ background: 'linear-gradient(90deg, #7c3aed 0%, #a855f7 100%)', color: '#fff' }"
          >
            Merchants
          </a>
        </div>
      </div>

      <div class="mt-5 flex flex-col items-center gap-2 text-xs" :style="{ color: 'var(--muted)' }">
        <p class="text-center">
          <span class="sm:hidden">{{ shortNpub(publisherNpub) }}</span>
          <span class="hidden sm:inline">{{ publisherNpub }}</span>
        </p>
        <button
          type="button"
          class="rounded-full border px-3 py-1 text-[11px] font-bold"
          :style="{ borderColor: 'var(--line)' }"
          @click="copyNpub"
        >
          {{ copyLabel }}
        </button>
      </div>
      <p class="mt-4 text-center text-xs" :style="{ color: 'var(--muted)' }">
        © Nostr.boutique 2026
      </p>
      </div>
  </footer>
</template>
