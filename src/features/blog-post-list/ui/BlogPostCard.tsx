import { Link } from 'react-router-dom';
import { Calendar, Tag } from 'lucide-react';
import { BlogPostListItem } from '@/entities/blog-post';

interface BlogPostCardProps {
  post: BlogPostListItem;
}

export const BlogPostCard = ({ post }: BlogPostCardProps) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <article className="group">
      <Link
        to={`/post/${post.id}`}
        className="block p-6 bg-white rounded-xl border border-gray-200 transition-all duration-200 sm:p-8 hover:border-blue-300 hover:shadow-lg"
      >
        <div className="flex flex-col gap-3">
          {post.category && (
            <span className="inline-block px-3 py-1 text-xs font-medium text-blue-700 bg-blue-50 rounded-full w-fit">
              {post.category}
            </span>
          )}
          
          <h2 className="text-xl font-bold text-gray-900 transition-colors sm:text-2xl group-hover:text-blue-600">
            {post.title}
          </h2>
          
          {post.excerpt && (
            <p className="leading-relaxed text-gray-600 line-clamp-3">
              {post.excerpt}
            </p>
          )}
          
          <div className="flex flex-col gap-3 pt-4 mt-4 border-t border-gray-100 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex gap-2 items-center text-sm text-gray-500">
              <Calendar className="w-4 h-4" />
              <time>{formatDate(post.createdAt)}</time>
            </div>
            
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 items-center">
                <Tag className="w-4 h-4 text-gray-400" />
                <div className="flex flex-wrap gap-2">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </Link>
    </article>
  );
};

