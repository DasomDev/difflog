export interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt?: string;
  createdAt: string;
  updatedAt?: string;
  tags?: string[];
  category?: string;
}

export interface BlogPostListItem {
  id: string;
  title: string;
  excerpt?: string;
  createdAt: string;
  tags?: string[];
  category?: string;
}

