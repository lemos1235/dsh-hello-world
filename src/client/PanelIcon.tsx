/**
 * Sidebar glyph for the demo panel: a speech bubble with two text lines.
 * Inherits the button's `currentColor`, so the selected and hover states are
 * the shell's, not the plugin's.
 */

import type { PanelIconProps } from './types'
import { PANEL_ID } from './locale'

export function PanelIcon({ size }: PanelIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={true}
      focusable="false"
      data-dsh-panel-entry={PANEL_ID}
      style={{ display: 'block' }}
    >
      <path d="M4.5 7.5A3 3 0 0 1 7.5 4.5h9a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3h-5.2l-3.9 3.1A.9.9 0 0 1 6 18.9v-2.5a3 3 0 0 1-1.5-2.6z" />
      <path d="M8.5 9h7" />
      <path d="M8.5 12h4.5" />
    </svg>
  )
}
