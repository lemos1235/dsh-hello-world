/**
 * The `main` panel page: a card that greets the user and keeps one bit of
 * local state, so the demo also shows that a plugin page is ordinary React.
 */

import { useState } from 'react'
import type { PanelPageProps } from './types'

export function PanelPage({ t }: PanelPageProps) {
  const [clicks, setClicks] = useState(0)

  return (
    <div className="hw-page">
      <main className="hw-card">
        <p className="hw-eyebrow">{t('panel.eyebrow')}</p>
        <h1 className="hw-title">{t('panel.heading')}</h1>
        <p className="hw-body">{t('panel.body')}</p>
        <div className="hw-actions">
          <button
            type="button"
            className="hw-button"
            onClick={() => {
              setClicks((count) => count + 1)
            }}
          >
            {t('panel.click')}
          </button>
          <span className="hw-count">
            {t('panel.clicks')} {clicks}
          </span>
        </div>
        <p className="hw-hint">{t('panel.hint')}</p>
      </main>
    </div>
  )
}
