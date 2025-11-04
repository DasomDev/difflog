import { createBrowserRouter } from 'react-router-dom'
// import { HomePage } from '@/pages/HomePage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            React + Vite + TypeScript + Tailwind
          </h1>
          <p className="text-gray-600">
            프로젝트가 성공적으로 설정되었습니다! 🎉
          </p>
        </div>
      </div>
    ),
  },
  // 새로운 라우트 추가 예시:
  // {
  //   path: '/about',
  //   element: <AboutPage />,
  // },
])
