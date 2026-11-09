/**
 * The narrow slice of the Client plugin context this demo touches, plus the
 * prop shapes of the two slots it registers. Declared locally so the bundle
 * needs no Harness types at build time (React is the only external import).
 */

import type { ComponentType } from 'react'

/** Translate function bound to one locale namespace. */
export type Translate = (key: string) => string

/** Props the sidebar hands a `sidebar.panellist` icon component. */
export interface PanelIconProps {
  /** Requested square edge in pixels. */
  size: number
  /** Whether this panel is selected in the main column. */
  active: boolean
}

/** Props this plugin injects into its `main` page component. */
export interface PanelPageProps {
  t: Translate
}

/** What a slot registration may receive back from the owner. */
type SlotDisposer = () => void

/** Plugin context subset: lifecycle, slots, locale. */
export interface ClientContext {
  /** Run a resource setup on the plugin Fiber and dispose it with the plugin. */
  effect(callback: () => void | (() => void), label?: string): () => void
  slots: {
    /** Wait until the slot exists, then run the registration callback. */
    inject(slot: string, callback: () => SlotDisposer): SlotDisposer
    /** Register one slot occupant; returns the disposer. */
    register(options: Record<string, unknown>, component: ComponentType<any>): SlotDisposer
  }
  locale: {
    /** Register one locale dictionary; returns the disposer. */
    register(namespace: string, locale: string, dict: Record<string, string>): SlotDisposer
    /** Bind a namespace to a translate function. */
    bind(namespace: string): Translate
  }
}
