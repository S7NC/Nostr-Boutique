<script setup>
const sites = ref([])
const loading = ref(true)
const error = ref('')
const refreshedAt = ref(0)

const { fetchTemplateSites, defaultRelays, sourceNpub } = useNsiteExplore()

useSeoMeta({
  title: 'Explore | Nostr Boutique',
  description: 'Discover Nsites related to this template by scanning relay manifests with clone heuristics.'
})

const formatDate = (unixTimestamp) => {
  const date = new Date(unixTimestamp * 1000)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

const refreshSites = async () => {
  try {
    loading.value = true
    error.value = ''
    sites.value = await fetchTemplateSites()
    refreshedAt.value = Math.floor(Date.now() / 1000)
  } catch (err) {
    error.value = err.message || 'Could not load Nsite discovery right now.'
  } finally {
    loading.value = false
  }
}

const formatTime = (unixTimestamp) => {
  if (!unixTimestamp) return 'Not yet'
  return new Date(unixTimestamp * 1000).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit'
  })
}

onMounted(async () => {
  await refreshSites()
})
</script>

<template>
  <section class="fade-in-up">
    <div class="surface-card p-6 sm:p-8">
      <span class="pill">Heuristic discovery</span>
      <h1 class="hero-title mt-4 text-4xl font-black leading-tight">Explore Nsites using this template path.</h1>
      <p class="mt-3 max-w-3xl text-sm sm:text-base" :style="{ color: 'var(--muted)' }">
        This index scans relay manifests and looks for clone-link signals in <code>muse</code> and <code>thief</code>
        tags referencing source npub <code>{{ sourceNpub }}</code>.
      </p>

      <div class="mt-5 flex flex-wrap items-center gap-2">
        <button
          class="cta-primary rounded-full px-4 py-2 text-sm font-black"
          :disabled="loading"
          @click="refreshSites"
        >
          {{ loading ? 'Scanning relays...' : 'Refresh discovery' }}
        </button>
        <span class="pill">Last refresh: {{ formatTime(refreshedAt) }}</span>
      </div>

      <p class="mt-4 text-xs" :style="{ color: 'var(--muted)' }">Relays scanned: {{ defaultRelays.join(', ') }}</p>
    </div>
  </section>

  <section class="mt-6">
    <p v-if="loading" class="text-sm" :style="{ color: 'var(--muted)' }">Scanning relays for related Nsites...</p>
    <p v-else-if="error" class="rounded-xl border border-red-300 bg-red-500/10 px-4 py-3 text-sm text-red-300">{{ error }}</p>
    <p v-else-if="sites.length === 0" class="text-sm" :style="{ color: 'var(--muted)' }">
      No related Nsites found right now. Discovery is best-effort and improves as more manifests propagate.
    </p>

    <div v-else class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      <article v-for="site in sites" :key="site.id" class="surface-card p-5 fade-in-up">
        <div class="flex items-start justify-between gap-3">
          <h2 class="text-lg font-black">{{ site.title }}</h2>
          <span class="rounded-full px-2 py-1 text-xs font-semibold" :style="{ background: 'var(--line)' }">
            kind {{ site.kind }}
          </span>
        </div>
        <p class="mt-3 break-all text-xs" :style="{ color: 'var(--muted)' }">{{ site.npub }}</p>
        <p class="mt-1 text-xs" :style="{ color: 'var(--muted)' }">Updated {{ formatDate(site.createdAt) }}</p>

        <div class="mt-4 flex flex-wrap gap-2 text-sm">
          <a
            :href="site.nsiteRunUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="rounded-full border px-3 py-1.5 text-xs font-bold uppercase tracking-[0.08em]"
            :style="{ borderColor: 'var(--line)' }"
          >
            Open via nsite.run
          </a>
          <a
            :href="site.nsiteLolUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="rounded-full border px-3 py-1.5 text-xs font-bold uppercase tracking-[0.08em]"
            :style="{ borderColor: 'var(--line)' }"
          >
            Open via nsite.lol
          </a>
        </div>
      </article>
    </div>
  </section>
</template>
