//import { strapiLoader } from "@sensinum/astro-strapi-loader";
import { glob } from "astro/loaders";
import {z} from "astro/zod";
import { defineCollection } from "astro:content";
import { optional } from "astro:schema";

/* if (!import.meta.env.STRAPI_URL) {
  throw new Error('Unconfigured Environment Variable: "STRAPI_URL"');
} */

/* const stories = defineCollection({
  loader: strapiLoader("stories", {
    url: import.meta.env.STRAPI_URL,
    idGenerator: (data) => data.slug as string,
  }),
}); */

const story = defineCollection({
  loader: glob({pattern: "**/*.md", base: "./src/data/story"}),
  schema: z.object({
    volume: z.number(),
    slug: z.string(),
    title: z.string(),
    author: z.string(),
    spotifyEmbedURL: optional(z.string()),
    excerpt: optional(z.string()),
    quote: optional(z.string())
  })
})

export const collections = {
  story,
};
