import { c as createComponent, m as maybeRenderHead, b as addAttribute, r as renderTemplate, i as renderScript, d as createAstro, a as renderComponent, j as renderHead, k as renderSlot } from './astro/server_DJ6Zegtw.mjs';
/* empty css                         */
import 'clsx';

const LibroIcon = new Proxy({"src":"/_astro/pila-de-libros.CnCFOrNG.png","width":512,"height":512,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/sergio/Escritorio/recommended-books-page/src/assets/icons/pila-de-libros.png";
							}
							
							return target[name];
						}
					});

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="bg-neutral-primary-soft rounded-base shadow-xs border border-default m-4 mt-16"> <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8"> <div class="sm:flex sm:items-center sm:justify-between"> <a href="/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"> <img${addAttribute(LibroIcon.src, "src")} class="h-7" alt="Libros Logo"> <span class="text-heading self-center text-2xl font-semibold whitespace-nowrap">Libros</span> </a> <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-body sm:mb-0"> <li> <a href="/about" class="hover:underline me-4 md:me-6 hover:text-brand">Nosotros</a> </li> <li> <a href="#" class="hover:underline me-4 md:me-6 hover:text-brand">Politica de Privacidad</a> </li> <li> <a href="https://github.com/SASOPELANA" target="_blank" rel="noopener noreferrer" class="hover:underline me-4 md:me-6 hover:text-brand">GitHub</a> </li> <li> <a href="/contact" class="hover:underline hover:text-brand">Contacto</a> </li> </ul> </div> <hr class="my-6 border-default sm:mx-auto lg:my-8"> <span class="block text-sm text-body sm:text-center">© ${year} <a href="https://portafolio-web-tl1w.vercel.app/" target="_blank" rel="noopener noreferrer" class="hover:underline hover:text-brand">SergioDevs™</a>. Todos los derechos reservados.</span> </div> </footer>`;
}, "/home/sergio/Escritorio/recommended-books-page/src/components/Footer.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="bg-neutral-primary fixed w-full z-20 top-0 start-0 border-b border-default"> <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"> <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse"> <img${addAttribute(LibroIcon.src, "src")} class="h-7" alt="Flowbite Logo"> <span class="self-center text-xl text-heading font-semibold whitespace-nowrap">Libros</span> </a> <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary" aria-controls="navbar-default" aria-expanded="false"> <span class="sr-only">Open main menu</span> <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14"></path></svg> </button> <div class="hidden w-full md:block md:w-auto" id="navbar-default"> <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary"> <li> <a href="/" class="block py-2 px-3 text-white bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0" aria-current="page">Inicio</a> </li> <li> <a href="/booksDevs" class="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Libros Devs</a> </li> <li> <a href="/about" class="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Nosotros</a> </li> <li> <a href="/contact" class="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Contacto</a> </li> </ul> </div> </div> </nav>`;
}, "/home/sergio/Escritorio/recommended-books-page/src/components/Header.astro", void 0);

const $$Astro$1 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/home/sergio/Escritorio/recommended-books-page/node_modules/.pnpm/astro@5.16.14_@vercel+functions@2.2.13_jiti@2.6.1_lightningcss@1.30.2_rollup@4.56.0_typescript@5.9.3_yaml@2.8.2/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/sergio/Escritorio/recommended-books-page/node_modules/.pnpm/astro@5.16.14_@vercel+functions@2.2.13_jiti@2.6.1_lightningcss@1.30.2_rollup@4.56.0_typescript@5.9.3_yaml@2.8.2/node_modules/astro/components/ClientRouter.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="es" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.png"><title>${title}</title>${renderComponent($$result, "ClientRouter", $$ClientRouter, { "data-astro-cid-sckkx6r4": true })}<!-- Scripts para Flowbite -->${renderScript($$result, "/home/sergio/Escritorio/recommended-books-page/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")}${renderHead()}</head> <body class="flex flex-col min-h-screen pt-20 font-Montserrat" data-astro-cid-sckkx6r4> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-sckkx6r4": true })} <main class="container mx-auto flex-grow flex flex-col items-center" data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-sckkx6r4": true })} </body></html>`;
}, "/home/sergio/Escritorio/recommended-books-page/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
