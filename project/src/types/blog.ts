export interface Author {
  id: string;
  name: string;
  email: string;
  avatar: string;
  bio: string;
  social: {
    twitter: string;
    github: string;
    linkedin: string;
  };
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: Author;
  publishedAt: string;
  readingTime: number;
  categories: string[];
  tags: string[];
  featured: boolean;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  postCount: number;
}