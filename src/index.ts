/**
 * Host half of the Hello world demo plugin (`@local/dsh-hello-world`).
 *
 * The demo is UI-only, so the Host side registers nothing: the browser half
 * (`src/client/`) owns the sidebar entry and the panel page. The module stays a
 * real Host plugin so the bundle patch has a row to mount, and so a grown
 * version has a place for storage, HTTP routes or model tools.
 */
export function apply(): void {}
