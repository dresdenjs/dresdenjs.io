import type { MarkdownInstance, MDXInstance } from 'astro';

export type MeetupEvent =
  | MarkdownInstance<Record<string, any>>
  | MDXInstance<Record<string, any>>;
