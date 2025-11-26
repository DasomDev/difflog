import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import { Layout } from '@/shared/layout';
import { BlogPost } from '@/entities/blog-post';

// 임시 데이터 - 나중에 실제 데이터로 교체
const mockPosts: BlogPost[] = [
  {
    id: '1',
    title: 'React Hooks 완벽 가이드',
    content: `# React Hooks 완벽 가이드

React Hooks는 함수형 컴포넌트에서 상태 관리와 생명주기 기능을 사용할 수 있게 해주는 기능입니다.

## useState

가장 기본적인 Hook입니다. 상태를 관리할 때 사용합니다.

\`\`\`tsx
const [count, setCount] = useState(0);
\`\`\`

## useEffect

컴포넌트가 렌더링된 후 실행되는 Hook입니다.

\`\`\`tsx
useEffect(() => {
  // 여기에 사이드 이펙트 코드 작성
}, [dependencies]);
\`\`\`
`,
    excerpt: 'React Hooks의 기본 개념부터 고급 사용법까지 알아봅니다.',
    createdAt: '2024-11-26',
    tags: ['React', 'Hooks', 'Frontend'],
    category: 'React',
  },
];

export const PostPage = () => {
  const { id } = useParams<{ id: string }>();
  const post = mockPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <Layout>
        <div className="py-12 sm:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-900 mb-4">
                포스트를 찾을 수 없습니다
              </h1>
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 underline transition-colors"
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
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-orange-600 mb-8 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>목록으로 돌아가기</span>
          </Link>

          <article className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-orange-100/50 overflow-hidden">
            <div className="p-8 sm:p-10 lg:p-12">
              <header className="mb-10 pb-8 border-b border-orange-100">
                {post.category && (
                  <span className="inline-block mb-6 px-4 py-2 text-xs font-semibold text-orange-700 bg-gradient-to-r from-orange-50 to-amber-50 rounded-full border border-orange-100">
                    {post.category}
                  </span>
                )}
                
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500 bg-clip-text text-transparent mb-6 leading-tight">
                  {post.title}
                </h1>
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-orange-500" />
                    <time>{formatDate(post.createdAt)}</time>
                  </div>

                  {post.tags && post.tags.length > 0 && (
                    <div className="flex items-center gap-2 flex-wrap">
                      <Tag className="w-4 h-4 text-orange-400" />
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-orange-50 text-orange-700 rounded-full border border-orange-100 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </header>

              <div className="prose prose-lg prose-gray max-w-none">
                <div className="whitespace-pre-wrap text-gray-800 leading-relaxed [&>h1]:text-3xl [&>h1]:font-bold [&>h1]:mt-8 [&>h1]:mb-4 [&>h1]:bg-gradient-to-r [&>h1]:from-orange-600 [&>h1]:to-amber-600 [&>h1]:bg-clip-text [&>h1]:text-transparent [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:mt-6 [&>h2]:mb-3 [&>h2]:text-orange-700 [&>p]:mb-4 [&>p]:leading-relaxed [&>code]:px-1.5 [&>code]:py-0.5 [&>code]:bg-orange-50 [&>code]:text-orange-700 [&>code]:rounded [&>code]:text-sm [&>code]:border [&>code]:border-orange-100 [&>pre]:bg-gradient-to-br [&>pre]:from-gray-900 [&>pre]:to-gray-800 [&>pre]:text-gray-100 [&>pre]:p-4 [&>pre]:rounded-lg [&>pre]:overflow-x-auto [&>pre]:my-4 [&>pre]:border [&>pre]:border-gray-700 [&>pre]:shadow-lg">
                  {post.content}
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </Layout>
  );
};

