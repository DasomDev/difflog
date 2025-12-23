import { BlogPostCard } from './BlogPostCard';
import { BlogPostListItem } from '@/entities/blog-post';

interface BlogPostListProps {
  posts: BlogPostListItem[];
}

export const BlogPostList = ({ posts }: BlogPostListProps) => {
  if (posts.length === 0) {
    return (
      <div className="py-16 text-center">
        <p className="text-lg font-medium text-gray-500">아직 작성된 포스트가 없습니다.</p>
        {/* <p className="mt-2 text-sm text-gray-400">첫 번째 포스트를 작성해보세요!</p> */}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      {posts.map((post) => (
        <BlogPostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

