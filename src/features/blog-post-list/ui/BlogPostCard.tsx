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
        className="block p-6 rounded-2xl border backdrop-blur-sm transition-all duration-300 bg-white/80 dark:bg-gray-800/80 border-orange-100/50 dark:border-orange-900/50 sm:p-8 hover:border-orange-200 dark:hover:border-orange-800 hover:shadow-xl hover:shadow-orange-100/50 dark:hover:shadow-orange-900/50 hover:-translate-y-1"
      >
        <div className="flex flex-col gap-4">
          {post.category && (
            <span className="inline-block px-3 py-1.5 text-xs font-semibold text-orange-700 dark:text-orange-300 bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-900/30 dark:to-amber-900/30 rounded-full w-fit border border-orange-100 dark:border-orange-800">
              {post.category}
            </span>
          )}
          
          <h2 className="text-xl font-bold text-gray-900 transition-colors dark:text-gray-100 sm:text-2xl group-hover:text-orange-600 dark:group-hover:text-orange-400 group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:to-amber-600 dark:group-hover:from-orange-400 dark:group-hover:to-amber-400 group-hover:bg-clip-text group-hover:text-transparent">
            {post.title}
          </h2>
          
          {post.excerpt && (
            <p className="leading-relaxed text-gray-700 dark:text-gray-300 line-clamp-3">
              {post.excerpt}
            </p>
          )}
          
          <div className="flex flex-col gap-3 pt-4 mt-2 border-t border-orange-50 dark:border-orange-900/50 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex gap-2 items-center text-sm text-gray-600 dark:text-gray-400">
              <Calendar className="w-4 h-4 text-orange-500 dark:text-orange-400" />
              <time>{formatDate(post.createdAt)}</time>
            </div>
            
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 items-center">
                <Tag className="w-4 h-4 text-orange-400 dark:text-orange-500" />
                <div className="flex flex-wrap gap-2">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-medium bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors border border-orange-100 dark:border-orange-800"
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

