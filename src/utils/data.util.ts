import { BlogPostInstance } from '@/utils/types';

export const formatDate = (pubDate: string) => {
  const options: Intl.DateTimeFormatOptions = {
		weekday: 'short',
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	};

  return new Date(pubDate).toLocaleDateString('en-US', options);
}

export const sortPostsByDate = (a: BlogPostInstance, b: BlogPostInstance) => {
  const pubDateA = new Date(a.frontmatter.pubDate);
  const pubDateB = new Date(b.frontmatter.pubDate);
  if (pubDateA < pubDateB) {
    return 1;
  }
  if(pubDateA > pubDateB) {
    return -1;
  }
  return 0;
} 