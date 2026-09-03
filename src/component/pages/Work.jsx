import { motion } from 'framer-motion';
import Footer from '../Footer';

const projects = [
  {
    brand: 'NATURESENSE PROFESSIONAL',
    role: 'Senior Packaging Designer',
    duration: '6 Years',
    category: 'Packaging • Haircare & Skincare',
    image: 'https://imgs.search.brave.com/QehywX5JzKbL3X7V5QbTpW6J_JmcEEIAOG6lgIYVXgY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9iZWF1/dHliYXNrZXRzLmlu/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIy/LzA2L0FydGJvYXJk/LTEtY29weS0yLTUu/d2VicA',
    tags: ['Salon Professional', 'Skin Science', 'Haircare'],
  },
  {
    brand: 'STAY PROFESSIONAL',
    role: 'Packaging Designer',
    duration: '6 Years',
    category: 'Packaging • Professional Beauty',
    image: 'https://imgs.search.brave.com/wqlGx0AC9Hs33tX623KEBJnNjklC-t_9lpGI_TZRUPA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9ob3Vz/ZW9mYmVhdXR5aW5k/aWEuY29tL2Nkbi9z/aG9wL2ZpbGVzL0hv/dXNlX29mX0JlYXV0/eV9QaWdtZW50YXRp/b25fU2VydW1fMzBt/bF9BbHBoYV9BcmJ1/dGluX05pYWNpbmFt/aWRlX2Zvcl9EYXJr/X1Nwb3RzLmpwZz92/PTE3NzI4Njg3MTkm/d2lkdGg9MTA4MA',
    tags: ['Salon Exclusive', 'Makeup', 'Skincare'],
  },
  {
    brand: 'MAMAEARTH',
    role: 'Packaging Designer',
    duration: '1 Year',
    category: 'Packaging • Natural Beauty',
    image: 'https://imgs.search.brave.com/zIOJOzFqaUD_yXO2dWbBVxUb2JCTOh1u25p9b1-JpeI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9iZWF1/dHktbWFrZXVwLW5h/aWwtYXJ0LWNvbmNl/cHQtYmVhdXRpZnVs/LWZhc2hpb24tbW9k/ZWwtd29tYW4tc29m/dC1zbW9reS1leWUt/Zm91bmRhdGlvbi11/bmJsZW1pc2hlZC1z/a2luLTcxOTYyMTY5/LmpwZw',
    tags: ['Retail', 'Natural Ingredients', 'Skincare'],
  },
  {
    brand: 'REVLON COSMETICS',
    role: 'E-commerce Designer',
    duration: '1 Year',
    category: 'E-commerce • Cosmetics',
    image: 'https://imgs.search.brave.com/j9Si2_Ze_DnJ10TmF88nL9lkTb0UJ7fGkT7-5rPdKmg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9iZWF1/dHliYXNrZXRzLmlu/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIy/LzA2L0FydGJvYXJk/LTEtY29weS0zLTUu/d2VicA',
    tags: ['Digital', 'Makeup', 'Global Brand'],
  },
];

export default function Work() {
  return (
    <main className="pt-32 pb-12 bg-beige-100 dark:bg-brown-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20 text-center"
        >
          <p className="text-terracotta tracking-[0.3em] text-sm font-medium mb-4">PORTFOLIO</p>
          <h1 className="font-serif italic text-5xl md:text-7xl lg:text-8xl text-brown-900 dark:text-beige-100 mb-6">
            SELECTED WORK
          </h1>
          <p className="text-brown-500 dark:text-beige-400 max-w-2xl mx-auto">
            A curated collection of packaging and e-commerce design for leading FMCG & beauty brands.
          </p>
        </motion.div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.brand}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16 items-center`}
            >
              <div className="w-full md:w-3/5 h-[400px] md:h-[550px] rounded-2xl overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.brand}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="w-full md:w-2/5 space-y-6">
                <div>
                  <p className="text-terracotta text-sm tracking-wide mb-2">{project.category}</p>
                  <h2 className="font-serif text-4xl md:text-5xl text-brown-900 dark:text-beige-100 mb-2">
                    {project.brand}
                  </h2>
                  <p className="text-brown-500 dark:text-beige-400 font-medium">{project.role} • {project.duration}</p>
                </div>
                <p className="text-brown-600 dark:text-beige-300 leading-relaxed">
                  Crafted premium visual identities and packaging systems tailored for {project.tags.join(', ')}.
                  Focused on shelf impact, material innovation, and brand storytelling.
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 rounded-full border border-brown-300 dark:border-brown-700 text-xs tracking-wide text-brown-600 dark:text-beige-400"
                    >
                      {tag.toUpperCase()}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="mt-32">
        <Footer />
      </div>
    </main>
  );
}