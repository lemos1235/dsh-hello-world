/**
 * Package-owned stylesheet for the demo panel.
 *
 * Colors come only from the theme tokens the shell exposes, so light and dark
 * themes both read correctly without a second set of rules.
 */

export const PANEL_CSS = `
.hw-page{box-sizing:border-box;display:flex;align-items:center;justify-content:center;height:100%;min-height:0;overflow:auto;padding:32px;background:var(--dsw-alias-bg-base);color:var(--dsw-alias-label-primary);font-family:inherit;font-size:13px;line-height:1.5}
.hw-card{box-sizing:border-box;width:100%;max-width:520px;padding:32px 36px;border:1px solid var(--dsw-alias-border-l1);border-radius:16px;background:var(--dsw-alias-bg-layer-1)}
.hw-eyebrow{margin:0 0 10px;font-size:12px;font-weight:500;letter-spacing:.08em;text-transform:uppercase;color:var(--dsw-alias-label-secondary)}
.hw-title{margin:0 0 12px;font-size:32px;font-weight:650;line-height:1.2;letter-spacing:-.02em;color:var(--dsw-alias-brand-primary);overflow-wrap:anywhere}
.hw-body{margin:0 0 22px;font-size:14px;line-height:1.65;color:var(--dsw-alias-label-secondary);overflow-wrap:anywhere}
.hw-actions{display:flex;align-items:center;gap:14px;flex-wrap:wrap}
.hw-button{box-sizing:border-box;display:inline-flex;align-items:center;justify-content:center;height:34px;padding:0 16px;border:1px solid var(--dsw-alias-border-l2);border-radius:9px;background:var(--dsw-alias-bg-layer-2);color:var(--dsw-alias-label-primary);font:inherit;font-size:13px;font-weight:500;cursor:pointer}
.hw-button:hover{border-color:var(--dsw-alias-brand-primary);color:var(--dsw-alias-brand-primary)}
.hw-button:focus-visible{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:2px}
.hw-count{font-size:13px;color:var(--dsw-alias-label-secondary);font-variant-numeric:tabular-nums}
.hw-hint{margin:22px 0 0;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:12px;line-height:1.5;color:var(--dsw-alias-label-secondary);overflow-wrap:anywhere}
`
