/**
 * Hello world demo, browser half (`@local/dsh-hello-world/client`).
 *
 * Two additive slot registrations make the feature:
 *  - `sidebar.panellist` id {@link PANEL_ID} — the sidebar button; the shell
 *    dispatches that id as the main-panel key when the button is clicked;
 *  - `main` key {@link PANEL_ID} — the page rendered in the centre column.
 *
 * Everything is registered on the plugin Fiber, so disabling the bundle
 * removes the entry, the page and the stylesheet together.
 */

import { DICTS, NS, PANEL_ID, PANEL_ORDER } from './locale'
import { PANEL_CSS } from './styles'
import { PanelIcon } from './PanelIcon'
import { PanelPage } from './PanelPage'
import type { ClientContext } from './types'

/** Services this module needs from the Client runtime. */
export const inject = ['slots', 'locale']

export function apply(ctx: ClientContext): void {
  ctx.effect(() => ctx.locale.register(NS, 'en', DICTS.en), 'hello-world: en dictionary')
  ctx.effect(() => ctx.locale.register(NS, 'zh', DICTS.zh), 'hello-world: zh dictionary')

  // Package-owned stylesheet, removed with the Fiber.
  ctx.effect(() => {
    const style = document.createElement('style')
    style.setAttribute('data-plugin', NS)
    style.textContent = PANEL_CSS
    document.head.appendChild(style)
    return () => style.remove()
  }, 'hello-world: panel styles')

  const t = ctx.locale.bind(NS)

  ctx.slots.inject('sidebar.panellist', () => ctx.slots.register({
    name: 'sidebar.panellist',
    id: PANEL_ID,
    order: PANEL_ORDER,
    label: () => t('panel.title'),
    locale: NS,
  }, PanelIcon))

  ctx.slots.inject('main', () => ctx.slots.register({
    name: 'main',
    key: PANEL_ID,
    locale: NS,
    inject: () => ({ t }),
  }, PanelPage))
}
