export type Page = 'home' | 'services' | 'how-it-works' | 'about' | 'faq' | 'contact' | 'blog' | 'legal' | 'blog-post';

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  date: string;
  img: string;
  excerpt: string;
  content: string;
}
