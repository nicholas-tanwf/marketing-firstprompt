import { useEffect, useMemo, useState } from 'react'
import { DeckShell } from './deck/DeckShell.jsx'
import { SlideRenderer } from './deck/SlideRenderer.jsx'
import { SECTIONS, SLIDES } from './content/deck.content.js'

const LOCALE_KEY = 'deck-locale'

function App() {
  const sections = useMemo(() => SECTIONS, [])
  const slides = useMemo(() => SLIDES, [])
  const [activeSectionId, setActiveSectionId] = useState(sections[0]?.id)
  const [locale, setLocale] = useState('en')

  // Keep slide selection resilient on static hosting (hash-based).
  useEffect(() => {
    const applyHash = () => {
      const id = window.location.hash?.replace('#', '')?.trim()
      if (!id) return
      if (sections.some((s) => s.id === id)) setActiveSectionId(id)
    }

    applyHash()
    window.addEventListener('hashchange', applyHash)
    return () => window.removeEventListener('hashchange', applyHash)
  }, [sections])

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(LOCALE_KEY)
      if (stored === 'en' || stored === 'zh') {
        setLocale(stored)
        return
      }
    } catch {
      // ignore
    }

    const langs = navigator.languages?.length ? navigator.languages : [navigator.language]
    const prefersZh = langs.some((l) => String(l).toLowerCase().startsWith('zh'))
    setLocale(prefersZh ? 'zh' : 'en')
  }, [])

  const toggleLocale = () => {
    setLocale((prev) => {
      const next = prev === 'zh' ? 'en' : 'zh'
      try {
        window.localStorage.setItem(LOCALE_KEY, next)
      } catch {
        // ignore
      }
      return next
    })
  }

  const selectSection = (id) => {
    setActiveSectionId(id)
    try {
      window.history.replaceState(null, '', `#${id}`)
    } catch {
      // ignore
    }
  }

  return (
    <DeckShell
      sections={sections}
      activeSectionId={activeSectionId}
      onSelectSection={selectSection}
      locale={locale}
      onToggleLocale={toggleLocale}
    >
      <SlideRenderer
        slides={slides}
        activeSectionId={activeSectionId}
        locale={locale}
      />
    </DeckShell>
  )
}

export default App
