export interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt?: string;
  createdAt: string;
  updatedAt?: string;
  tags?: string[];
  category?: string;
  published?: boolean; // true면 공개, false면 draft (기본값: true)
}

export interface BlogPostListItem {
  id: string;
  title: string;
  excerpt?: string;
  createdAt: string;
  tags?: string[];
  category?: string;
  published?: boolean;
}

