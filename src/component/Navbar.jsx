import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import MenuOverlay from './MenuOverlay';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <>
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-auto">
        <div className="flex items-center gap-2 md:gap-6 px-5 py-3 rounded-full bg-beige-200/90 dark:bg-brown-900/90 backdrop-blur-md border border-beige-300 dark:border-brown-800 shadow-xl">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-beige-300 dark:hover:bg-brown-800 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} className="text-beige-100" /> : <Moon size={18} className="text-brown-900" />}
          </button>

          <Link to="/" className="font-serif italic text-xl md:text-2xl tracking-wide text-brown-900 dark:text-beige-100 px-2">
            DESIGN X FMCG
          </Link>

          <button
            onClick={() => setOpen(true)}
            className="p-2 rounded-full bg-terracotta hover:bg-terracotta-dark text-white transition-colors shadow-md"
            aria-label="Open menu"
          >
            <Menu size={18} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && <MenuOverlay onClose={() => setOpen(false)} currentPath={pathname} />}
      </AnimatePresence>
    </>
  );
}