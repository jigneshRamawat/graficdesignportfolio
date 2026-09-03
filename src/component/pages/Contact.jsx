import { motion } from 'framer-motion';
import Footer from '../Footer';

export default function Contact() {
  return (
    <main className="pt-32 pb-12 bg-beige-100 dark:bg-brown-950 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 text-center mb-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <p className="text-terracotta tracking-[0.3em] text-sm font-medium mb-4">CONTACT</p>
          <h1 className="font-serif italic text-5xl md:text-7xl lg:text-8xl text-brown-900 dark:text-beige-100 mb-8">
            LET'S TALK
          </h1>
          <p className="text-brown-500 dark:text-beige-400 text-lg max-w-2xl mx-auto mb-12">
            Open for freelance packaging design, e-commerce projects, and FMCG brand collaborations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="p-8 rounded-2xl bg-white dark:bg-brown-900 border border-beige-300 dark:border-brown-800">
            <Mail className="mx-auto mb-4 text-terracotta" size={28} />
            <p className="text-sm text-brown-500 dark:text-beige-400 mb-1">Email</p>
            <a href="mailto:mona.aswal@email.com" className="text-brown-900 dark:text-beige-100 font-medium hover:text-terracotta transition">
              mona.aswal@email.com
            </a>
          </div>
          <div className="p-8 rounded-2xl bg-white dark:bg-brown-900 border border-beige-300 dark:border-brown-800">
            <MapPin className="mx-auto mb-4 text-terracotta" size={28} />
            <p className="text-sm text-brown-500 dark:text-beige-400 mb-1">Location</p>
            <p className="text-brown-900 dark:text-beige-100 font-medium">India</p>
          </div>
          <div className="p-8 rounded-2xl bg-white dark:bg-brown-900 border border-beige-300 dark:border-brown-800">
            <Instagram className="mx-auto mb-4 text-terracotta" size={28} />
            <p className="text-sm text-brown-500 dark:text-beige-400 mb-1">Social</p>
            <div className="flex justify-center gap-4 mt-2">
              <a href="#" className="hover:text-terracotta transition"><Instagram size={18} /></a>
              <a href="#" className="hover:text-terracotta transition"><Linkedin size={18} /></a>
              <a href="#" className="hover:text-terracotta transition"><Twitter size={18} /></a>
            </div>
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-left space-y-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-brown-600 dark:text-beige-400 mb-2">Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-brown-900 border border-beige-300 dark:border-brown-800 focus:border-terracotta focus:outline-none transition"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm text-brown-600 dark:text-beige-400 mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-brown-900 border border-beige-300 dark:border-brown-800 focus:border-terracotta focus:outline-none transition"
                placeholder="your@email.com"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm text-brown-600 dark:text-beige-400 mb-2">Project Details</label>
            <textarea
              rows={5}
              className="w-full px-4 py-3 rounded-lg bg-white dark:bg-brown-900 border border-beige-300 dark:border-brown-800 focus:border-terracotta focus:outline-none transition resize-none"
              placeholder="Tell me about your project..."
            />
          </div>
          <button
            type="submit"
            className="w-full py-4 rounded-full bg-brown-900 dark:bg-beige-100 text-beige-100 dark:text-brown-900 font-medium tracking-wide hover:bg-terracotta dark:hover:bg-terracotta transition"
          >
            SEND MESSAGE
          </button>
        </motion.form>
      </div>

      <Footer />
    </main>
  );
}