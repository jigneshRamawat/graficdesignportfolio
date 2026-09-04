import { motion } from 'framer-motion';
import Footer from '../Footer';
import {
  Image,
  PenTool,
  Sparkles,
  Package,
  ShoppingBag,
  Award,
} from "lucide-react";

const experience = [
  {
    year: '2017 — 2023',
    title: 'NatureSense Professional & Stay Professional',
    role: 'Packaging Designer',
    desc: '6 years designing salon-exclusive packaging for haircare, makeup, and skincare lines. Developed skin-science-inspired visual systems for professional-grade products.',
  },
  {
    year: '2023 — 2024',
    title: 'Mamaearth',
    role: 'Packaging Designer',
    desc: 'Created natural-beauty-focused packaging for retail skincare lines. Emphasized sustainability cues and ingredient-forward storytelling.',
  },
  {
    year: '2024 — Present',
    title: 'Revlon Cosmetics',
    role: 'E-commerce Designer',
    desc: 'Designed high-converting digital assets for global cosmetics e-commerce. Focused on product page visuals, campaign banners, and digital brand consistency.',
  },
];

const skills = [
  {
    name: "Adobe Photoshop",
    level: "Expert",
    icon: Image,
  },
  {
    name: "Adobe Illustrator",
    level: "Expert",
    icon: PenTool,
  },
  {
    name: "Adobe Firefly",
    level: "Advanced",
    icon: Sparkles,
  },
  {
    name: "Packaging Design",
    level: "Expert",
    icon: Package,
  },
  {
    name: "E-commerce Design",
    level: "Expert",
    icon: ShoppingBag,
  },
  {
    name: "Brand Identity",
    level: "Advanced",
    icon: Award,
  },
];
const categories = ['Haircare', 'Makeup', 'Skincare Retail', 'Professional Salon', 'Skin Science'];

export default function About() {
  return (
    <main className="pt-32 pb-12 bg-beige-100 dark:bg-brown-950 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid md:grid-cols-2 gap-16 items-start mb-32"
        >
          <div>
            <p className="text-terracotta tracking-[0.3em] text-sm font-medium mb-4">ABOUT</p>
            <h1 className="font-serif italic text-5xl md:text-7xl text-brown-900 dark:text-beige-100 mb-8 leading-tight">
              MONA ASWAL
            </h1>
            <p className="text-brown-600 dark:text-beige-300 leading-relaxed mb-6 text-lg">
              Graphic Designer with <strong>8 years of experience</strong> specializing in FMCG and beauty
              brand visuals. I bridge the gap between strategic brand positioning and premium packaging
              design.
            </p>
            <p className="text-brown-500 dark:text-beige-400 leading-relaxed mb-8">
              My expertise spans <strong>haircare, makeup, and skincare</strong> — from retail shelves to
              professional salon-exclusive lines. I design with a deep understanding of skin science
              aesthetics, material textures, and the subtle psychology of beige & brown luxury.
            </p>

            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <span
                  key={cat}
                  className="px-4 py-2 bg-beige-200 dark:bg-brown-800 text-brown-800 dark:text-beige-200 rounded-full text-sm"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>

          <div className="relative h-[500px] rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1596462502278-27bfdd403348?w=800&q=80"
              alt="Mona Aswal workspace"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-brown-900/10" />
          </div>
        </motion.div>

        {/* Experience Timeline */}
        <div className="mb-32">
          <h2 className="font-serif text-4xl md:text-5xl text-brown-900 dark:text-beige-100 mb-16 text-center">
            Experience
          </h2>
          <div className="space-y-12">
            {experience.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row gap-6 md:gap-12 border-l-2 border-beige-300 dark:border-brown-800 pl-8 relative"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-terracotta" />
                <div className="md:w-1/4">
                  <p className="text-terracotta font-medium tracking-wide">{exp.year}</p>
                </div>
                <div className="md:w-3/4">
                  <h3 className="font-serif text-2xl text-brown-900 dark:text-beige-100 mb-1">{exp.title}</h3>
                  <p className="text-brown-500 dark:text-beige-400 text-sm mb-3">{exp.role}</p>
                  <p className="text-brown-600 dark:text-beige-300 leading-relaxed">{exp.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="grid md:grid-cols-2 gap-16 mb-24">
          <div>
            <h3 className="font-serif text-3xl text-brown-900 dark:text-beige-100 mb-8">Tools & Skills</h3>
            <div className="space-y-4">
{skills.map((skill) => {
  const Icon = skill.icon;

  return (
    <div
      key={skill.name}
      className="flex items-center gap-4 py-4 border-b border-beige-300 dark:border-brown-800"
    >
      <Icon
        size={28}
        strokeWidth={1.5}
        className="text-terracotta"
      />

      <span className="flex-1 text-brown-800 dark:text-beige-200 font-medium">
        {skill.name}
      </span>

      <span className="text-terracotta text-sm tracking-wide">
        {skill.level}
      </span>
    </div>
  );
})}
            </div>
          </div>
          <div className="bg-brown-900 dark:bg-brown-800 rounded-2xl p-10 text-beige-100 flex flex-col justify-center">
            <p className="font-serif italic text-3xl md:text-4xl mb-6 leading-tight">
              "Design is not just what it looks like. Design is how it works on the shelf."
            </p>
            <p className="text-beige-400 text-sm tracking-wide">
              — FMCG Design Philosophy
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}