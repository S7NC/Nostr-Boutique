import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  title: "Nostr Boutique",

  compatibilityDate: "2025-12-01",

  vite: {
    vue: {
      customElement: true
    },
    plugins: [
      tailwindcss()
    ]
  },

  app: {
    head: {
      title: "Nostr Boutique",
      meta: [
        { name: 'description', content: 'Nostr Boutique landing site for sovereign Gamma-style storefronts and Nsite onboarding.' }
      ],
      script: [
        {
          id: 'theme-init',
          children: "(function(){try{var t=localStorage.getItem('nostr-boutique-theme');document.documentElement.setAttribute('data-theme',t==='dark'?'dark':'light')}catch(e){document.documentElement.setAttribute('data-theme','light')}})();"
        }
      ]
    }
  },

  devtools: { enabled: true },

  css: ['~/assets/tailwind.css'],

  modules: [
    "@pinia/nuxt"
  ]
})
