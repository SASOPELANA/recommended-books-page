import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_BtnZBYKS.mjs';
import { manifest } from './manifest_Btf0eYo6.mjs';

const serverIslandMap = new Map([
	['BookScore', () => import('./chunks/BookScore_ufZa9ovX.mjs')],
	['BuyButton', () => import('./chunks/BuyButton_DdcSQDgM.mjs')],
]);;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/books/_id_.astro.mjs');
const _page3 = () => import('./pages/booksdevs.astro.mjs');
const _page4 = () => import('./pages/contact.astro.mjs');
const _page5 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.16.14_@vercel+functions@2.2.13_jiti@2.6.1_lightningcss@1.30.2_rollup@4.56.0_typescript@5.9.3_yaml@2.8.2/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/books/[id].astro", _page2],
    ["src/pages/booksDevs.astro", _page3],
    ["src/pages/contact.astro", _page4],
    ["src/pages/index.astro", _page5]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "5f3e1787-be96-4a0a-a901-df4793f1a4d1",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
