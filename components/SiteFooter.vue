<template>
  <footer class="border-t" :style="{ borderColor: 'var(--line)' }">
    <div class="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6">
      <div class="grid gap-4 sm:grid-cols-[1.2fr_1fr] sm:items-end">
      <div>
        <SiteBrand compact />
      </div>
      <div class="flex flex-wrap items-center gap-2 text-sm sm:justify-end">
        <NuxtLink to="/" class="pill">Home</NuxtLink>
        <NuxtLink to="/example" class="pill">Example</NuxtLink>
        <NuxtLink to="/explore" class="pill">Explore</NuxtLink>
        <NuxtLink to="/explain" class="pill">Explain</NuxtLink>
      </div>
      </div>
    </div>
  </footer>
</template>
