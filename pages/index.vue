<script setup>
const discoveredSites = ref([])
const statsLoading = ref(true)
const statsError = ref('')
const productsLoaded = ref(0)

const { fetchTemplateSites } = useNsiteExplore()

const imageBackedSites = computed(() => {
  return discoveredSites.value.filter((site) => typeof site.profileImage === 'string' && site.profileImage.trim() !== '')
})

const productsListed = computed(() => {
  return imageBackedSites.value.reduce((total, site) => total + (site.productCount || 0), 0)
})

const loadHomeStats = async () => {
  try {
    statsLoading.value = true
    statsError.value = ''
    discoveredSites.value = []
    productsLoaded.value = 0

    discoveredSites.value = await fetchTemplateSites({
      onProgress: ({ sites: nextSites }) => {
        discoveredSites.value = nextSites
        productsLoaded.value = nextSites
          .filter((site) => typeof site.profileImage === 'string' && site.profileImage.trim() !== '')
          .reduce((total, site) => total + (site.productCount || 0), 0)
      }
    })

    productsLoaded.value = productsListed.value
  } catch (error) {
    statsError.value = error.message || 'Could not load discovery stats right now.'
  } finally {
    statsLoading.value = false
  }
}

onMounted(async () => {
  await loadHomeStats()
})

useSeoMeta({
  title: 'Nostr Boutique',
  description: 'Host your own self sovereign shop.'
})
</script>

<template>
  <section class="w-full pb-14 text-center sm:pb-20">
    <div
      class="hero-panel relative w-full overflow-hidden bg-cover bg-center px-4 py-8 sm:px-8 sm:py-10"
    >
      <div class="mx-auto max-w-3xl">
        <NsiteClonePanel />
      </div>
    </div>

    <div class="mx-auto mt-8 w-full max-w-7xl px-2 text-left md:px-4 lg:px-0">
      <div class="mx-4 mb-8 sm:mx-6 md:mx-8 lg:mx-10">
        <div class="mb-4 flex items-center justify-between gap-3">
          <h2 class="text-lg font-black sm:text-xl">Live boutique stats</h2>
          <button
            type="button"
            class="rounded-full border px-3 py-1.5 text-xs font-bold"
            :style="{ borderColor: 'var(--line)' }"
            :disabled="statsLoading"
            @click="loadHomeStats"
          >
            {{ statsLoading ? 'Refreshing...' : 'Refresh' }}
          </button>
        </div>

        <div class="grid gap-3 sm:grid-cols-2">
          <FlipCounterCard
            label="Global amount"
            :value="discoveredSites.length"
            :active="true"
            accent="#7c3aed"
            shadow-color="#7c3aed"
            tone="rgba(124,58,237,0.08)"
            :loading="statsLoading"
          />
          <FlipCounterCard
            label="Products listed"
            :value="statsLoading ? productsLoaded : productsListed"
            :active="true"
            accent="#f59e0b"
            tone="rgba(245,158,11,0.08)"
            :loading="statsLoading"
          />
        </div>

        <p v-if="statsError" class="mt-3 text-xs text-red-500">{{ statsError }}</p>
      </div>

    </div>

  </section>
</template>
