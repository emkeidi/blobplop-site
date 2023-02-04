import { z, defineCollection } from 'astro:content';

// TODO move the schema to another folder and import it here
// This will be more useful with more schemas and to get logic out of here

const blobCollection = defineCollection({
  schema: z.object({
    isDraft: z.boolean(),
    title: z.string(),
    date: z.date(),
    author: z.enum(['Matthew Davis']),
    image: z
      .object({
        src: z.string(),
        alt: z.string()
      })
      .optional(),
    description: z
      .string()
      .max(160, 'For best SEO results, please limit the description to 160 characters or less =)'),
    category: z.enum(['General', 'Learning', 'Random'])
  })
});

export const collections = { blobs: blobCollection };
