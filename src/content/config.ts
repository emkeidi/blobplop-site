import { z, defineCollection } from 'astro:content';

// TODO move the schema to another folder and import it here
// This will be more useful with more schemas and to get logic out of here

const blobCollection = defineCollection({
	schema: ({ image }) =>
		z.object({
			draft: z.boolean(),
			title: z.string(),
			description: z
				.string()
				.max(
					160,
					'For best SEO results, please limit the description to 160 characters or less =)',
				),
			date: z.coerce.date(),
			updated: z.date().optional(),
			author: z.enum(['Matthew Davis', 'MarvinBot']),
			cover: image().refine((img) => img.width >= 1080, {
				message: 'Cover image must be at least 1080 pixels wide.',
			}),
			coverAlt: z.string(),
			category: z.enum(['General', 'Learning', 'Random']),
			tags: z.array(z.string()).optional(),
		}),
});

export const collections = { blobs: blobCollection };
