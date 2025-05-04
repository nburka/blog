import { z } from 'zod';

export const postFrontMatterSchema = z.object({
  author: z.string(),
  date: z.string(),
  featureImagePath: z.string().optional(),
  socialImagePath: z.string().optional(),
  tags: z.array(z.string()).optional(),
  thanks: z.array(z.string()).optional(),
  title: z.string(),
  urlSlug: z.string(),
  hideOnFrontPage: z.boolean().optional()
});

export type PostFrontMatter = z.infer<typeof postFrontMatterSchema>;
