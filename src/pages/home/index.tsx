import { useEffect, useState } from "react";
import { Layout } from "@/shared/layout";
import { BlogPostList } from "@/features/blog-post-list";
import { BlogPostListItem } from "@/entities/blog-post";
import { getAllPosts, toListItem } from "@/shared/lib/markdown";

export const HomePage = () => {
  const [posts, setPosts] = useState<BlogPostListItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const allPosts = getAllPosts();
      const postListItems = allPosts.map(toListItem);
      setPosts(postListItems);
    } catch (error) {
      console.error('Failed to load posts:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
      <Layout>
        <div className="py-12 sm:py-16 lg:py-20">
          <div className="px-4 mx-auto max-w-4xl sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-gray-600">포스트를 불러오는 중...</p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="py-12 sm:py-16 lg:py-20">
        <div className="px-4 mx-auto max-w-4xl sm:px-6 lg:px-8">
          {/* 포스트 목록 */}
          <div className="mb-8">
            <h2 className="mb-8 text-2xl font-semibold text-gray-800">
              최근 포스트
            </h2>
            <BlogPostList posts={posts} />
          </div>
        </div>
      </div>
    </Layout>
  );
};
