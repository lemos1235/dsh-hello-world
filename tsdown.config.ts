/**
 * dsh-hello-world dual-half build, following the dsh bundle convention:
 *
 * 1. the Host half — plain ESM under `lib/`, imported by the Loader row the
 *    bundle patch inserts;
 * 2. the browser half — one CJS bundle wrapped in the `window.__ModuleLoader__.load`
 *    factory the Client module table materializes (React comes from the module
 *    table, never bundled).
 *
 * The browser bundle is emitted at the package root instead of `lib/` on
 * purpose: the `./client` export path of an already-installed bundle must stay
 * valid, so `pnpm build` + a page refresh is enough to pick up new UI code.
 */
export default [
  {
    entry: ['src/index.ts'],
    format: 'esm',
    platform: 'node',
    target: 'es2024',
    outDir: 'lib',
    clean: true,
    outputOptions: {
      entryFileNames: 'index.mjs',
    },
  },
  {
    name: 'dsh-hello-world/client',
    entry: { client: 'src/client/index.tsx' },
    outDir: '.',
    format: 'cjs',
    platform: 'browser',
    dts: false,
    clean: false,
    external: [/@deepseek-ai\/dsh-client-/, /^react($|\/)/, /^react-dom($|\/)/],
    outputOptions: {
      entryFileNames: 'client.js',
      banner: 'window.__ModuleLoader__.load({ id: "@local/dsh-hello-world", factory: (require) => {',
      footer: 'return module.exports; } });',
      intro: 'var module = { exports: {} }; var exports = module.exports;',
    },
  },
]
