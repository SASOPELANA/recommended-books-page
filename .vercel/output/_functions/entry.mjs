import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_BI6AAHj0.mjs';
import { manifest } from './manifest_DM9HKzsI.mjs';

const serverIslandMap = new Map([
	['BookScore', () => import('./chunks/BookScore_D7pA_icd.mjs')],
	['BuyButton', () => import('./chunks/BuyButton_B1MxpUFT.mjs')],
]);;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/books/_id_.astro.mjs');
const _page4 = () => import('./pages/books-devs/_slug_.astro.mjs');
const _page5 = () => import('./pages/booksdevs.astro.mjs');
const _page6 = () => import('./pages/contact.astro.mjs');
const _page7 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.16.14_@vercel+functions@2.2.13_jiti@2.6.1_lightningcss@1.30.2_rollup@4.56.0_typescript@5.9.3_yaml@2.8.2/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/books/[id].astro", _page3],
    ["src/pages/books-devs/[slug].astro", _page4],
    ["src/pages/booksDevs.astro", _page5],
    ["src/pages/contact.astro", _page6],
    ["src/pages/index.astro", _page7]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "c5e1b791-a3da-4880-86d2-de0194410d03",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
