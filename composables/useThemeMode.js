const THEME_STORAGE_KEY = 'nostr-boutique-theme'

export const useThemeMode = () => {
  const theme = useState('theme-mode', () => 'light')

  const applyTheme = (nextTheme) => {
    const safeTheme = nextTheme === 'dark' ? 'dark' : 'light'
    theme.value = safeTheme

    if (!process.client) return

    document.documentElement.setAttribute('data-theme', safeTheme)
    localStorage.setItem(THEME_STORAGE_KEY, safeTheme)
  }

  const initTheme = () => {
    if (!process.client) return

    const stored = localStorage.getItem(THEME_STORAGE_KEY)
    applyTheme(stored === 'dark' ? 'dark' : 'light')
  }

  const toggleTheme = () => {
    applyTheme(theme.value === 'dark' ? 'light' : 'dark')
  }

  return {
    theme,
    initTheme,
    toggleTheme
  }
}
