import type React from 'react';

export interface PostFrontmatter {
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  category: 'AI Automation' | 'DevOps' | 'AI and DevOps';
}

export interface Post extends PostFrontmatter {
  slug: string;
  Component: React.ComponentType;
}

const modules = import.meta.glob<{
  frontmatter: PostFrontmatter;
  default: React.ComponentType;
}>('../content/mission-log/*.mdx', { eager: true });

export function getAllPosts(): Post[] {
  return Object.entries(modules)
    .map(([path, mod]) => {
      const slug = path
        .replace('../content/mission-log/', '')
        .replace('.mdx', '');
      return {
        ...mod.frontmatter,
        slug,
        Component: mod.default,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): Post | undefined {
  return getAllPosts().find(p => p.slug === slug);
}
