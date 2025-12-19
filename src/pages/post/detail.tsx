import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import { Layout } from '@/shared/layout';
import { BlogPost } from '@/entities/blog-post';
import { getPostById } from '@/shared/lib/markdown';
import { MarkdownRenderer } from '@/shared/ui/MarkdownRenderer';

export const PostPage = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }
    
    try {
      const foundPost = getPostById(id);
      setPost(foundPost);
    } catch (error) {
      console.error('Failed to load post:', error);
    } finally {
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return (
      <Layout>
        <div className="py-12 sm:py-16">
          <div className="px-4 mx-auto max-w-4xl sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-gray-600 dark:text-gray-400">포스트를 불러오는 중...</p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (!post) {
    return (
      <Layout>
        <div className="py-12 sm:py-16">
          <div className="px-4 mx-auto max-w-4xl sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100">
                포스트를 찾을 수 없습니다
              </h1>
              <Link
                to="/"
                className="inline-flex gap-2 items-center text-orange-600 underline transition-colors dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300"
              >
                홈으로 돌아가기
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <Layout>
      <div className="py-8 sm:py-12 lg:py-16">
        <div className="px-4 mx-auto max-w-3xl sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex gap-2 items-center mb-8 text-gray-600 transition-colors dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>목록으로 돌아가기</span>
          </Link>

          <article className="overflow-hidden rounded-2xl border shadow-lg backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 border-orange-100/50 dark:border-orange-900/50">
            <div className="p-8 sm:p-10 lg:p-12">
              <header className="pb-8 mb-10 border-b border-orange-100 dark:border-orange-900/50">
                {post.category && (
                  <span className="inline-block px-4 py-2 mb-6 text-xs font-semibold text-orange-700 bg-gradient-to-r from-orange-50 to-amber-50 rounded-full border border-orange-100 dark:text-orange-300 dark:from-orange-900/30 dark:to-amber-900/30 dark:border-orange-800">
                    {post.category}
                  </span>
                )}
                
                <h1 className="mb-6 text-3xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500 dark:from-orange-400 dark:via-amber-400 dark:to-orange-300 sm:text-4xl lg:text-5xl">
                  {post.title}
                </h1>
                
                <div className="flex flex-col gap-4 text-sm text-gray-600 dark:text-gray-400 sm:flex-row sm:items-center">
                  <div className="flex gap-2 items-center">
                    <Calendar className="w-4 h-4 text-orange-500 dark:text-orange-400" />
                    <time>{formatDate(post.createdAt)}</time>
                  </div>

                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 items-center">
                      <Tag className="w-4 h-4 text-orange-400 dark:text-orange-500" />
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 font-medium text-orange-700 bg-orange-50 rounded-full border border-orange-100 dark:text-orange-300 dark:bg-orange-900/30 dark:border-orange-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </header>

              <MarkdownRenderer content={post.content} />
            </div>
          </article>
        </div>
      </div>
    </Layout>
  );
};

