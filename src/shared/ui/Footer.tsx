import { Heart } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-white border-t border-gray-200">
      <div className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col gap-2 justify-center items-center text-sm text-gray-600">
          <p className="flex gap-1 items-center">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by Dasom
          </p>
          <p className="text-gray-400">© {currentYear} 개발 공부 기록. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

