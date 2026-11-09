/**
 * Locale dictionaries and slot identifiers for the Hello world demo.
 *
 * The sidebar entry id and the `main` panel key are the same value: the shell
 * renders the panel whose key matches the selected sidebar entry.
 */

/** Locale namespace owned by this plugin; also the slots' `locale` option. */
export const NS = 'helloWorld'

/** Sidebar entry id, `main` panel key, and the `data-dsh-panel-entry` marker. */
export const PANEL_ID = 'hello-world'

/** After the shipped sidebar entries (Plugins 0, Schedules 10). */
export const PANEL_ORDER = 20

/** English dictionary; its key set is the source of truth for the others. */
const en = {
  'panel.title': 'Hello world',
  'panel.eyebrow': 'Local plugin demo',
  'panel.heading': 'Hello, world!',
  'panel.body':
    'This page comes from a local DSH plugin: one sidebar entry, one main-panel page, built from the TypeScript sources in src/.',
  'panel.click': 'Click me',
  'panel.clicks': 'Clicks',
  'panel.hint': 'Edit src/client/PanelPage.tsx, run pnpm build, then refresh the page.',
}

/** Keys every dictionary must cover. */
export type DictKey = keyof typeof en

/** Simplified Chinese copy, checked complete against the English key set. */
const zh: Record<DictKey, string> = {
  'panel.title': 'Hello world 示例',
  'panel.eyebrow': '本地插件示例',
  'panel.heading': '你好，世界！',
  'panel.body':
    '这个页面来自一个本地 DSH 插件：一个侧边栏入口，一个由 src/ 下的 TypeScript 源码构建的主面板页面。',
  'panel.click': '点我一下',
  'panel.clicks': '点击次数',
  'panel.hint': '修改 src/client/PanelPage.tsx，执行 pnpm build，然后刷新页面。',
}

/** Dictionaries registered with the Client locale service. */
export const DICTS: Record<'en' | 'zh', Record<DictKey, string>> = { en, zh }
