import { defineCollection } from 'astro:content';
import { z } from 'zod';
import { glob } from 'astro/loaders';

/** Category values used to group and filter features. */
export const FEATURE_CATEGORIES = [
  'Tracking',
  'Insights',
  'Money',
  'Privacy & Security',
  'Personalization',
  'Productivity',
  'Data',
] as const;

const md = (dir: string) => glob({ pattern: '**/*.md', base: `./content/${dir}` });

const features = defineCollection({
  loader: md('features'),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    category: z.enum(FEATURE_CATEGORIES),
    order: z.number(),
    description: z.string(),
    pro: z.boolean().default(false),
    beta: z.boolean().default(false),
    signature: z.boolean().default(false),
    related: z.array(z.string()).optional(),
    iconName: z.string().optional(),
  }),
});

const docs = defineCollection({
  loader: md('docs'),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    order: z.number().optional(),
    last_updated: z.coerce.date().optional(),
    toc: z.boolean().default(true),
  }),
});

const pages = defineCollection({
  loader: md('pages'),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
  }),
});

const changelog = defineCollection({
  loader: md('changelog'),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    version: z.string().optional(),
    summary: z.string().optional(),
    latest: z.boolean().default(false),
    points: z.array(z.string()).optional(),
  }),
});

export const collections = { features, docs, pages, changelog };
