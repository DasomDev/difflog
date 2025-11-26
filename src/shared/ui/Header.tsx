import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 backdrop-blur-sm bg-white/80">
      <div className="px-4 py-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center">
          <Link
            to="/"
            className="flex gap-2 items-center text-xl font-bold text-gray-900 transition-colors hover:text-blue-600"
          >
            <BookOpen className="w-6 h-6" />
            <span className="hidden sm:inline">개발 공부 기록</span>
            <span className="sm:hidden">기록</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

