import { BlogPost, BlogPostListItem } from '@/entities/blog-post';

// 프론트매터를 파싱하는 함수 (브라우저 호환)
const parseFrontmatter = (content: string): { data: Record<string, any>; content: string } => {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);
  
  if (!match) {
    return { data: {}, content };
  }
  
  const frontmatter = match[1];
  const markdownContent = match[2];
  
  // YAML 파싱 (간단한 버전)
  const data: Record<string, any> = {};
  const lines = frontmatter.split('\n');
  
  for (const line of lines) {
    const colonIndex = line.indexOf(':');
    if (colonIndex === -1) continue;
    
    const key = line.substring(0, colonIndex).trim();
    let value = line.substring(colonIndex + 1).trim();
    
    // 따옴표 제거
    if ((value.startsWith('"') && value.endsWith('"')) || 
        (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    
    // boolean 파싱
    if (value === 'true' || value === 'false') {
      data[key] = value === 'true';
    }
    // 배열 파싱
    else if (value.startsWith('[') && value.endsWith(']')) {
      const arrayContent = value.slice(1, -1);
      data[key] = arrayContent
        .split(',')
        .map(item => item.trim().replace(/^['"]|['"]$/g, ''))
        .filter(item => item.length > 0);
    } else {
      data[key] = value;
    }
  }
  
  return { data, content: markdownContent };
};

// 마크다운 파일을 파싱하여 BlogPost로 변환
export const parseMarkdown = (content: string, filename: string): BlogPost => {
  const { data, content: markdownContent } = parseFrontmatter(content);
  
  return {
    id: data.id || filename.replace('.md', ''),
    title: data.title || 'Untitled',
    content: markdownContent.trim(),
    excerpt: data.excerpt,
    createdAt: data.createdAt || new Date().toISOString().split('T')[0],
    updatedAt: data.updatedAt,
    tags: data.tags || [],
    category: data.category,
    published: data.published !== undefined ? data.published : true, // 기본값은 true (기존 글 호환성)
  };
};

// BlogPost를 BlogPostListItem으로 변환
export const toListItem = (post: BlogPost): BlogPostListItem => {
  return {
    id: post.id,
    title: post.title,
    excerpt: post.excerpt,
    createdAt: post.createdAt,
    tags: post.tags,
    category: post.category,
    published: post.published,
  };
};

// 모든 포스트를 가져오기 (Vite의 import.meta.glob 사용)
export const getAllPosts = (includeDrafts: boolean = false): BlogPost[] => {
  // Vite의 glob import를 사용하여 posts 폴더의 모든 마크다운 파일 가져오기
  // 프로젝트 루트 기준으로 /src/posts/*.md 경로 사용
  const modules = import.meta.glob('/src/posts/*.md', { 
    query: '?raw',
    import: 'default',
    eager: true 
  }) as Record<string, string>;
  
  const posts = Object.entries(modules).map(([path, content]) => {
    const filename = path.split('/').pop() || '';
    return parseMarkdown(content, filename);
  });
  
  // draft 필터링 (includeDrafts가 false면 published가 true인 것만)
  const filteredPosts = includeDrafts 
    ? posts 
    : posts.filter(post => post.published !== false);
  
  // 날짜순으로 정렬 (최신순)
  return filteredPosts.sort((a, b) => 
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
};

// 공개된 포스트만 가져오기 (편의 함수)
export const getPublishedPosts = (): BlogPost[] => {
  return getAllPosts(false);
};

// ID로 포스트 가져오기
export const getPostById = (id: string): BlogPost | null => {
  const posts = getAllPosts();
  return posts.find(post => post.id === id) || null;
};

