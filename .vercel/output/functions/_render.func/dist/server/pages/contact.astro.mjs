import { c as createComponent, m as maybeRenderHead, r as renderTemplate, a as renderComponent } from '../chunks/astro/server_CEh6I2h_.mjs';
import { $ as $$Layout } from '../chunks/Layout_Bxtjy7rD.mjs';
export { renderers } from '../renderers.mjs';

const $$Form = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<form action="https://formsubmit.co/sopekof@gmail.com" method="POST"> <div class="mx-2 md:mx-14 mt-10 border-2 border-blue-400 rounded-lg"> <div class="mt-10 text-center font-bold">Contactarnos</div> <div class="mt-3 text-center text-4xl font-bold">Envíanos un mensaje</div> <div class="p-2 md:p-8"> <div class="flex gap-4"> <div class="w-1/2"> <input type="text" name="name" id="name" class="mt-1 block w-full truncate rounded-md border border-slate-300 text-gray-900 font-semibold bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="Nombre completo " required> </div> <div class="w-1/2"> <input type="email" name="email" id="email" class="peer mt-1 block w-full rounded-md border border-slate-300 text-gray-900 font-semibold bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="Email" required> <p class="text-[#dc143c] font-bold hidden peer-[&:not(:placeholder-shown):invalid]:block mt-1 text-sm">
Por favor ingresa un email valido
</p> </div> </div> <div class="my-6 flex gap-4"> <select name="category" id="category" class="block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 font-semibold text-gray-800 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"> <option value="" disabled selected class="font-semibold text-slate-300">Seleccionar Categoría</option> <option value="general" class="font-semibold text-slate-800">Consulta General</option> <option value="suggestion" class="font-semibold text-slate-800">Sugerencia de Libro</option> <option value="support" class="font-semibold text-slate-800">Soporte Técnico</option> </select> <select name="job_type" id="job_type" class="block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 font-semibold text-gray-800 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"> <option class="font-semibold text-slate-800">Full Time</option> <option class="font-semibold text-slate-800">Part Time</option> <option class="font-semibold text-slate-800">Remote</option> <option class="font-semibold text-slate-800">Freelance</option> </select> </div> <div class="my-6"> <input type="text" id="phone-input" class="mt-1 block w-full rounded-md border border-slate-300 text-gray-900 font-semibold bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" placeholder="Teléfono: xxxxxxxxxx" required> <p class="mt-2.5 text-sm text-body">
El teléfono debe tener el formato xxxxxxxxxx
</p> </div> <div class=""> <textarea name="textarea" id="message" cols="30" rows="10" placeholder="Escribe tu mensaje..." class="mb-10 h-40 w-full resize-none rounded-md border border-slate-300 p-5 font-semibold text-gray-900" required></textarea> </div> <div class="text-center"> <button type="submit" class="cursor-pointer rounded-lg bg-blue-700 px-8 py-5 text-sm font-semibold text-white hover:bg-white hover:text-blue-700">Enviar Mensaje</button> </div> <input type="hidden" name="_next" value="https://books-recomendados.vercel.app/"> <input type="hidden" name="_captcha" value="false"> </div> </div> </form>`;
}, "/home/sergio/Escritorio/recommended-books-page/src/components/Form.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Medios de contacto" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section> ${renderComponent($$result2, "Form", $$Form, {})} </section> ` })}`;
}, "/home/sergio/Escritorio/recommended-books-page/src/pages/contact.astro", void 0);

const $$file = "/home/sergio/Escritorio/recommended-books-page/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
