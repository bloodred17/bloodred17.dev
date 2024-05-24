import { MarkdownInstance } from 'astro/dist/@types/astro';
import { MDXInstance } from 'astro';

export type BlogPostInstance = MarkdownInstance<any> | MDXInstance<any>;