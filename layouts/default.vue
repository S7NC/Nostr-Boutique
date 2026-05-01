<script setup>
const route = useRoute()
const { initTheme } = useThemeMode()
const isHome = computed(() => route.path === '/')
const isMenuOpen = ref(false)

const links = [
  { to: '/', label: 'Home' },
  { to: '/example', label: 'Example' },
  { to: '/themes', label: 'Themes' },
  { to: '/explore', label: 'Explore' },
  { to: '/code', label: 'Code' },
  { to: '/explain', label: 'Explain' }
]

onMounted(() => {
  initTheme()
})

watch(() => route.path, () => {
  isMenuOpen.value = false
})

const isActive = (path) => route.path === path
</script>

<template>
  <div class="site-shell flex min-h-screen flex-col">
    <header class="border-b" :style="{ borderColor: 'var(--line)', background: 'var(--chrome-bg)' }">
      <div class="mx-auto w-full max-w-6xl px-4 pt-3.5 pb-2.5 sm:px-6">
        <div class="flex items-center justify-between gap-3">
          <SiteBrand compact />

          <nav class="hidden min-w-0 flex-1 items-center justify-center gap-2 overflow-x-auto min-[950px]:flex min-[950px]:gap-3" style="scrollbar-width: none;">
            <NuxtLink
              v-for="link in links"
              :key="link.to"
              :to="link.to"
              class="shrink-0 px-3 py-1.5 text-center text-xs font-bold whitespace-nowrap transition sm:px-4 sm:py-2 sm:text-sm"
              :style="isActive(link.to) ? { color: 'var(--text)', boxShadow: 'inset 0 -3px 0 var(--menu-active-underline)' } : { color: 'var(--text)' }"
            >
              {{ link.label }}
            </NuxtLink>

            <a
              href="https://portal.nostr.boutique"
              target="_blank"
              rel="noopener noreferrer"
              class="ml-1 inline-flex shrink-0 items-center justify-center rounded-full px-4 py-2 text-sm font-black text-white transition hover:opacity-90"
              :style="{ background: 'linear-gradient(90deg, #7c3aed 0%, #a855f7 100%)', color: '#fff' }"
            >
              Merchants
            </a>
          </nav>

          <div class="flex items-center gap-2">
            <SiteThemeToggle />
            <button
              type="button"
              class="inline-flex h-9 w-9 items-center justify-center border min-[950px]:hidden"
              :style="{ borderColor: 'var(--line)' }"
              :aria-expanded="isMenuOpen ? 'true' : 'false'"
              aria-label="Toggle navigation menu"
              @click="isMenuOpen = !isMenuOpen"
            >
              <svg
                v-if="!isMenuOpen"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                class="h-4 w-4"
                aria-hidden="true"
              >
                <path d="M4 6h16" />
                <path d="M4 12h16" />
                <path d="M4 18h16" />
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                class="h-4 w-4"
                aria-hidden="true"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
        </div>

        <nav v-if="isMenuOpen" class="mt-3 grid grid-cols-2 gap-2 min-[950px]:hidden">
          <NuxtLink
            v-for="link in links"
            :key="`mobile-${link.to}`"
            :to="link.to"
            class="px-3 py-2 text-center text-xs font-bold transition"
            :style="isActive(link.to) ? { color: 'var(--text)', boxShadow: 'inset 0 -3px 0 var(--menu-active-underline)' } : { color: 'var(--text)' }"
          >
            {{ link.label }}
          </NuxtLink>
          <a
            href="https://portal.nostr.boutique"
            target="_blank"
            rel="noopener noreferrer"
            class="col-span-2 inline-flex items-center justify-center rounded-full px-3 py-2 text-center text-xs font-black text-white"
            :style="{ background: 'linear-gradient(90deg, #7c3aed 0%, #a855f7 100%)', color: '#fff' }"
          >
            Merchants
          </a>
        </nav>
      </div>
    </header>

    <main :class="isHome ? 'w-full flex-1' : 'mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6'">
      <slot />
    </main>

    <SiteFooter />
    <ChatAvatar />
  </div>
</template>
