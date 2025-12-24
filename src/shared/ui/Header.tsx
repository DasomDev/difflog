import { Link } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b shadow-sm backdrop-blur-md border-orange-100/50 dark:border-orange-900/50 bg-white/70 dark:bg-gray-900/70">
      <div className="px-4 py-5 mx-auto max-w-4xl sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center">
          <Link
            to="/"
            className="flex gap-2 items-center text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600 transition-all duration-300 dark:from-orange-400 dark:to-amber-400 hover:from-orange-500 hover:to-amber-500"
          >
            <span className="sm:inline">diffLog</span>
          </Link>
          <Link to="/playground" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">playground</Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
};
