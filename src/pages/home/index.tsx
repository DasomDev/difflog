import { Layout } from "@/shared/layout";
import { BlogPostList } from "@/features/blog-post-list";
import { BlogPostListItem } from "@/entities/blog-post";

// 임시 데이터 - 나중에 실제 데이터로 교체
const mockPosts: BlogPostListItem[] = [
  {
    id: "1",
    title: "React Hooks 완벽 가이드",
    excerpt: "React Hooks의 기본 개념부터 고급 사용법까지 알아봅니다. useState, useEffect, useContext 등 주요 Hook들을 실전 예제와 함께 설명합니다.",
    createdAt: "2024-11-26",
    tags: ["React", "Hooks", "Frontend"],
    category: "React",
  },
  {
    id: "2",
    title: "TypeScript 타입 시스템 이해하기",
    excerpt: "TypeScript의 타입 시스템을 깊이 있게 다룹니다. 제네릭, 유니온 타입, 타입 가드 등 고급 타입 기능들을 학습합니다.",
    createdAt: "2024-11-25",
    tags: ["TypeScript", "Programming"],
    category: "TypeScript",
  },
  {
    id: "3",
    title: "Vite로 빠른 개발 환경 구축하기",
    excerpt: "Vite를 사용하여 현대적인 프론트엔드 개발 환경을 만들어봅니다. 빠른 HMR과 최적화된 빌드 프로세스를 경험해보세요.",
    createdAt: "2024-11-24",
    tags: ["Vite", "Build Tool", "Frontend"],
    category: "Tooling",
  },
];

export const HomePage = () => {
  return (
    <Layout>
      <div className="py-12 sm:py-16 lg:py-20">
        <div className="px-4 mx-auto max-w-4xl sm:px-6 lg:px-8">
          {/* 히어로 섹션 */}
          <header className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
              개발 공부 기록
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-gray-600 sm:text-xl">
              React와 개발 공부를 기록하는 기술 블로그입니다.
              <br className="hidden sm:block" />
              배운 내용을 정리하고 공유합니다.
            </p>
          </header>

          {/* 포스트 목록 */}
          <div className="mb-8">
            <h2 className="mb-6 text-2xl font-semibold text-gray-900">최근 포스트</h2>
            <BlogPostList posts={mockPosts} />
          </div>
        </div>
      </div>
    </Layout>
  );
};
