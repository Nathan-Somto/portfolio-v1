/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string
    readonly VITE_EMAILJS_PUBLIC_KEY: string
    readonly VITE_EMAILJS_SERVICE_ID: string
    readonly VITE_EMAILJS_TEMPLATE_ID: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}

declare module '*.mp3' {
  const src: string;
  export default src;
}

declare module '*.mdx' {
  import type React from 'react';
  export const frontmatter: {
    title: string;
    date: string;
    tags: string[];
    excerpt: string;
    category: string;
    [key: string]: unknown;
  };
  const MDXContent: React.ComponentType;
  export default MDXContent;
}