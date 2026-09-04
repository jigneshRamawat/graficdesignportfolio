import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { X, Home, Briefcase, User, Mail } from 'lucide-react';
const navLinks = [
  { name: 'HOME', path: '/' },
  { name: 'WORK', path: '/work' },
  { name: 'ABOUT', path: '/about' },
  { name: 'CONTACT', path: '/contact' },
];

export default function MenuOverlay({ onClose, currentPath }) {
  return (
    <motion.div onClick={onClose}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-[60] bg-brown-950 text-beige-100 flex flex-col items-center justify-center"
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 md:right-12 p-3 rounded-full bg-terracotta hover:bg-terracotta-light transition"
      >
        <X size={24} />
      </button>

      <div className="text-center space-y-8">
        <p className="text-xs tracking-[0.3em] text-beige-400 mb-8">NAVIGATION</p>
        <div className="flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={onClose}
              className={`font-serif text-4xl md:text-5xl tracking-wide transition ${
                currentPath === link.path
                  ? 'inline-block bg-terracotta px-6 py-2 rounded-full text-white'
                  : 'hover:text-terracotta-light'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="absolute bottom-12 text-center space-y-6">
        <p className="text-xs tracking-[0.3em] text-beige-400">FOLLOW US</p>
<div className="flex gap-6 justify-center">
  <a
    href="#"
    className="hover:text-terracotta transition"
  >
    Instagram
  </a>

  <a
    href="#"
    className="hover:text-terracotta transition"
  >
    Twitter
  </a>

  <a
    href="#"
    className="hover:text-terracotta transition"
  >
    LinkedIn
  </a>
</div>
        <p className="text-sm text-beige-400 tracking-wide">mona.aswal@portfolio.com</p>
      </div>
    </motion.div>
  );
}