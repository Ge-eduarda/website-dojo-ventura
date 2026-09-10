import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Content Collections — Astro v5/v6/v7 (loader-based, sem type:'content' legado)
 */

const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    title: z.string().min(3),
    description: z.string().min(10),
    icon: z.string().default('sparkles'),
    order: z.number().default(0),
    featured: z.boolean().default(false),
    benefits: z.array(z.string()).min(1),
    ctaText: z.string().default('Saiba Mais'),
  }),
});

const testimonials = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/testimonials' }),
  schema: z.object({
    author: z.string().min(2),
    role: z.string().min(2),
    company: z.string().min(2),
    avatar: z.string().optional(),
    rating: z.number().min(1).max(5).default(5),
    verified: z.boolean().default(true),
    highlight: z.string().optional(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string().min(5),
    description: z.string().min(10),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('SanBernarda Studio'),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const faq = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/faq' }),
  schema: z.object({
    question: z.string().min(5),
    order: z.number().default(0),
    category: z.string().default('Geral'),
  }),
});

export const collections = { services, testimonials, blog, faq };
