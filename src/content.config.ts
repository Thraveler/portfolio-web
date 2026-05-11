import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    repo: z.string().url().optional(),
    url: z.string().url().optional(),
    status: z.enum(['active', 'archived', 'placeholder']),
    date: z.coerce.date(),
  }),
});

export const collections = { projects };
