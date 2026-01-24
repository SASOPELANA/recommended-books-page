import { defineCollection, z } from "astro:content";

// Define el esquema común para los libros
const bookSchema = {
  title: z.string(),
  author: z.string(),
  img: z.string(),
  readtime: z.number(),
  description: z.string(),
  buy: z.object({
    spain: z.string().url(),
    usa: z.string().url(),
  }),
};

// Define las colecciones
export const collections = {
  books: defineCollection({
    schema: z.object(bookSchema),
  }),
  "books-devs": defineCollection({
    schema: z.object(bookSchema),
  }),
};
