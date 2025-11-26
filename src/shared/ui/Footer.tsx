import { Heart } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t backdrop-blur-sm bg-white/50 border-orange-100/50">
      <div className="p-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col gap-2 justify-center items-center text-sm text-gray-600">
          <p className="flex gap-1 items-center">
            Made with <Heart className="w-4 h-4 text-orange-500 fill-orange-500" /> by Dasom
          </p>
          <p className="text-gray-400">© {currentYear} diffLog All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

