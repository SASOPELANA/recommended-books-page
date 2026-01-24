import { c as createComponent, a as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DJ6Zegtw.mjs';
import { $ as $$Layout } from '../chunks/Layout_DqB6TdSc.mjs';
export { renderers } from '../renderers.mjs';

const $$BooksDevs = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Libros para desarrolladores" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section> <h1>Libros para desarrolladores</h1> </section> ` })}`;
}, "/home/sergio/Escritorio/recommended-books-page/src/pages/booksDevs.astro", void 0);

const $$file = "/home/sergio/Escritorio/recommended-books-page/src/pages/booksDevs.astro";
const $$url = "/booksDevs";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$BooksDevs,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
