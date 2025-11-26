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
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 underline"
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
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>목록으로 돌아가기</span>
          </Link>

          <article className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-8 sm:p-10 lg:p-12">
              <header className="mb-8 pb-8 border-b border-gray-200">
                {post.category && (
                  <span className="inline-block mb-4 px-3 py-1 text-xs font-medium text-blue-700 bg-blue-50 rounded-full">
                    {post.category}
                  </span>
                )}
                
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  {post.title}
                </h1>
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <time>{formatDate(post.createdAt)}</time>
                  </div>

                  {post.tags && post.tags.length > 0 && (
                    <div className="flex items-center gap-2 flex-wrap">
                      <Tag className="w-4 h-4" />
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </header>

              <div className="prose prose-lg prose-gray max-w-none">
                <div className="whitespace-pre-wrap text-gray-800 leading-relaxed [&>h1]:text-3xl [&>h1]:font-bold [&>h1]:mt-8 [&>h1]:mb-4 [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:mt-6 [&>h2]:mb-3 [&>p]:mb-4 [&>code]:px-1.5 [&>code]:py-0.5 [&>code]:bg-gray-100 [&>code]:rounded [&>code]:text-sm [&>pre]:bg-gray-900 [&>pre]:text-gray-100 [&>pre]:p-4 [&>pre]:rounded-lg [&>pre]:overflow-x-auto [&>pre]:my-4">
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

