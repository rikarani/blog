type Author = {
  id: number;
  role_id: number;
  name: string;
  username: string;
  email: string;
  created_at: string;
  updated_at: string;
};

type Category = {
  id: number;
  name: string;
  slug: string;
  created_at: string;
  updated_at: string;
};

export type Post = {
  id: string;
  user_id: number;
  category_id: number;
  title: string;
  quote: string;
  excerpt: string;
  content: string;
  created_at: string;
  updated_at: string;
  author: Author;
  category: Category;
};
