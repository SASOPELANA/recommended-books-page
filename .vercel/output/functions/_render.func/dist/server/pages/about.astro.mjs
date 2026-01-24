import { c as createComponent, m as maybeRenderHead, b as addAttribute, r as renderTemplate, a as renderComponent } from '../chunks/astro/server_DvA6j1nc.mjs';
import { $ as $$Layout } from '../chunks/Layout_D4foO-Bx.mjs';
export { renderers } from '../renderers.mjs';

const BooksImg = new Proxy({"src":"/_astro/books-recomendados.OhFqwyeO.jpg","width":556,"height":550,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/sergio/Escritorio/recommended-books-page/src/assets/images/books-recomendados.jpg";
							}
							
							return target[name];
						}
					});

const $$About$1 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative mt-8 bg-gradient-to-r from-gray-700 via-gray-500 to-gray-800 py-16 px-4 md:px-8 overflow-hidden -z-10"> <!-- SVG Pattern Background --> <div class="absolute inset-0 w-full h-full -z-10"> <svg class="w-full h-full" viewBox="0 0 1440 800" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"> <defs> <pattern id="dots" patternUnits="userSpaceOnUse" width="40" height="40" patternTransform="rotate(45)"> <circle cx="10" cy="10" r="2" fill="#3B82F6" opacity="0.1"></circle> </pattern> </defs> <rect width="1440" height="800" fill="url(#dots)"></rect> </svg> </div> <!-- Content Container --> <div class="max-w-7xl mx-auto relative z-20 grid md:grid-cols-2 gap-12 items-center"> <!-- Text Content --> <div class="p-8 bg-white bg-opacity-90 rounded-xl shadow-lg backdrop-blur-lg hover:scale-105 transform transition duration-300 ease-in-out"> <h2 class="text-4xl font-extrabold text-gray-800 mb-4">
Acerca de Nosotros
</h2> <p class="text-gray-600 mb-6 text-lg">
No vendemos solo libros: recomendamos historias. Clásicos, joyas ocultas
        y lecturas que llegan justo en el momento indicado. Porque siempre hay
        un libro esperando encontrarte.
</p> <div class="space-y-6"> <!-- Card for each feature --> <div class="flex items-center space-x-4 p-4 bg-gradient-to-tr from-gray-700 via-gray-500 to-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"> <div class="p-3 bg-white rounded-full shadow-lg hover:scale-110 transform transition duration-300"> <!-- Icon: Users --> <svg class="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24"> <path d="M17 20v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2H17z"></path> <circle cx="12" cy="8" r="4"></circle> </svg> </div> <div> <h3 class="text-xl font-semibold text-black">Equipo de Lectores</h3> <p class="text-gray-200 text-sm">
Un grupo apasionado de lectores y curadores, comprometidos con la
              excelencia en cada recomendación.
</p> </div> </div> <div class="flex items-center space-x-4 p-4 bg-gradient-to-tr from-gray-700 via-gray-500 to-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"> <div class="p-3 bg-white rounded-full shadow-lg hover:scale-110 transform transition duration-300"> <!-- Icon: Lightbulb --> <svg class="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 24 24"> <path d="M9 21h6v-1H9v1zm3-18a4 4 0 00-4 4c0 1.38.56 2.63 1.46 3.54A5.978 5.978 0 009 12h6a5.978 5.978 0 00-1.46-3.46A4 4 0 0015 7a4 4 0 00-4-4z"></path> </svg> </div> <div> <h3 class="text-xl font-semibold text-black">
Inovacion y Tecnologia
</h3> <p class="text-gray-200 text-sm">
Mezclamos creatividad y tecnología para ayudarte a encontrar
              libros que te van a encantar.
</p> </div> </div> <div class="flex items-center space-x-4 p-4 bg-gradient-to-tr from-gray-700 via-gray-500 to-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"> <div class="p-3 bg-white rounded-full shadow-lg hover:scale-110 transform transition duration-300"> <!-- Icon: User Group --> <svg class="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24"> <path d="M16 14c-1.33 0-2.53.53-3.41 1.39A4.993 4.993 0 0012 20c1.33 0 2.53-.53 3.41-1.39A4.993 4.993 0 0016 14zM8 14c-1.33 0-2.53.53-3.41 1.39A4.993 4.993 0 004 20c1.33 0 2.53-.53 3.41-1.39A4.993 4.993 0 008 14zM12 4c-2.21 0-4 1.79-4 4 0 1.66 1.34 3 3 3h2c1.66 0 3-1.34 3-3 0-2.21-1.79-4-4-4z"></path> </svg> </div> <div> <h3 class="text-xl font-semibold text-black">
Comunidad de Lectores
</h3> <p class="text-gray-200 text-sm">
Te escuchamos, nos adaptamos y te recomendamos libros pensando en
              vos.
</p> </div> </div> </div> </div> <!-- Image with Overlay & Hover Effect --> <div class="relative p-4"> <div class="absolute inset-0 bg-gradient-to-br from-gray-400 via-black/80 to-gray-600 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"></div> <img${addAttribute(BooksImg.src, "src")} alt="About Us" class="relative rounded-xl shadow-xl object-cover w-full h-full hover:opacity-90 transition-opacity duration-300"> </div> </div> </section>`;
}, "/home/sergio/Escritorio/recommended-books-page/src/components/About.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Sobre Nosotros" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AboutComponent", $$About$1, {})} ` })}`;
}, "/home/sergio/Escritorio/recommended-books-page/src/pages/about.astro", void 0);

const $$file = "/home/sergio/Escritorio/recommended-books-page/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$About,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
