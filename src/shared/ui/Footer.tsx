import { Heart } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t backdrop-blur-sm bg-white/50 dark:bg-gray-900/50 border-orange-100/50 dark:border-orange-900/50">
      <div className="p-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col gap-2 justify-center items-center text-sm text-gray-600 dark:text-gray-400">
          <p className="flex gap-1 items-center">
            Made with <Heart className="w-4 h-4 text-orange-500 dark:text-orange-400 fill-orange-500 dark:fill-orange-400" /> by Dasom
          </p>
          <p className="text-gray-400 dark:text-gray-500">© {currentYear} diffLog All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

