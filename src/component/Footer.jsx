export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-beige-300 dark:border-brown-800 bg-beige-100 dark:bg-brown-950">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="font-serif italic text-2xl text-brown-900 dark:text-beige-100">MONA ASWAL</p>
        <p className="text-sm text-brown-500 dark:text-beige-400">
          © {new Date().getFullYear()} Mona Aswal. FMCG & Beauty Design Specialist.
        </p>
      </div>
    </footer>
  );
}