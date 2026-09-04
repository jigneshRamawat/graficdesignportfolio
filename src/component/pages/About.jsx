import { motion } from 'framer-motion';
import Footer from '../Footer';
import monaimg from '../../img/mona.png'
import {
  Image,
  PenTool,
  Sparkles,
  Package,
  ShoppingBag,
  Award,
} from "lucide-react";
import { useState } from 'react';

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
    image: "https://www.adobe.com/federal/assets/svgs/adobe-logo.svg",
  },
  {
    name: "Adobe Illustrator",
    level: "Expert",
    image: "https://images.sftcdn.net/images/t_app-icon-s/p/f51224f2-96d0-11e6-8c51-00163ec9f5fa/2560350344/adobe-illustrator-ICON.png",
  },
  {
    name: "Adobe Firefly",
    level: "Advanced",
    image: "https://imgs.search.brave.com/3EASLuMii_oT95dvLqKLVvZdXoyG-4rFnae-9iGldBQ/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvYzFhNWRkMDk1/MmU3ZDRkN2I2MTVl/OGYxMzNmMjg4Yzcw/MjQzYjVlZWFkZmY5/ZWEwMmY0OWNkYmZj/ZGE2YzNmOC9maXJl/Zmx5LmFkb2JlLmNv/bS8",
  },
  {
    name: "Packaging Design",
    level: "Expert",
    image: "https://imgs.search.brave.com/8SwSTYkfFnewAhOiTo_J3LSyEC9uA3r-uX3w3QJth9M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/bWFnbmlmaWMuY29t/L3ByZW1pdW0tdmVj/dG9yL3BhY2thZ2lu/Zy12ZWN0b3ItbG9n/by1kZXNpZ25fNDEw/NDI5LTYwMTcuanBn/P3NlbXQ9YWlzX2h5/YnJpZCZ3PTc0MCZx/PTgw",
  },
  {
    name: "E-commerce Design",
    level: "Expert",
    image: "https://imgs.search.brave.com/3Rd9fFHj3qqVFHMw9EMSumAi63-QHvLfu1aBsmCSb2s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMDYv/NTQ3LzE2OC9zbWFs/bC9jcmVhdGl2ZS1t/b2Rlcm4tYWJzdHJh/Y3QtZWNvbW1lcmNl/LWxvZ28tZGVzaWdu/LWNvbG9yZnVsLWdy/YWRpZW50LW9ubGlu/ZS1zaG9wcGluZy1i/YWctbG9nby1kZXNp/Z24tdGVtcGxhdGUt/ZnJlZS12ZWN0b3Iu/anBn",
  },
  {
    name: "Brand Identity",
    level: "Advanced",
    image: "https://imgs.search.brave.com/S9qvEYmGRg0HI42kc5-w3F8CLBsFOsHce0GHUYjw9m0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/bWFnbmlmaWMuY29t/L2ZyZWUtdmVjdG9y/L3Byb2R1Y3QtYnJh/bmQtYnVpbGRpbmct/Y29ycG9yYXRlLWlk/ZW50aXR5LWRlc2ln/bi1zdHVkaW8tZGVz/aWduZXJzLWZsYXQt/Y2hhcmFjdGVycy10/ZWFtd29yay1jb29w/ZXJhdGlvbi1jb2xs/YWJvcmF0aW9uLWNv/bXBhbnktbmFtZV8z/MzU2NTctMTgyLmpw/Zz9zZW10PWFpc19o/eWJyaWQmdz03NDAm/cT04MA",
  },
];
const categories = ['Haircare', 'Makeup', 'Skincare Retail', 'Professional Salon', 'Skin Science'];

export default function About() {

  const [mouse, setMouse] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setMouse({ x, y });
  };



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

          <div className="relative border-4  rounded-t-full  h-[500px] rounded-2xl overflow-hidden">
            <img
              src={monaimg}
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
  

  return (
    <div
      key={skill.name}
      className="flex items-center gap-4 py-4 border-b border-beige-300 dark:border-brown-800"
    >
<img
  src={skill.image}
  alt={skill.name}
  className="w-8 h-8 object-contain"
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
    <div
      onMouseMove={handleMouseMove}
      className="
        relative
        overflow-hidden
        bg-brown-900
        dark:bg-brown-800
        rounded-2xl
        p-10
        text-beige-100
        flex
        flex-col
        justify-center
        min-h-[350px]
      "
    >

      {/* HEAVY SMOKE 1 */}
      <motion.div
        animate={{
          left: `${mouse.x}%`,
          top: `${mouse.y}%`,
        }}
        transition={{
          type: "spring",
          stiffness: 215,
          damping: 18,
          mass: 1.5,
        }}
        className="
          absolute
          pointer-events-none
          w-[300px]
          h-[300px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-terracotta/40
          blur-[80px]
        "
      />

      {/* HEAVY SMOKE 2 */}
      <motion.div
        animate={{
          left: `${mouse.x - 10}%`,
          top: `${mouse.y + 8}%`,
        }}
        transition={{
          type: "spring",
          stiffness: 128,
          damping: 25,
          mass: 2,
        }}
        className="
          absolute
          pointer-events-none
          w-[260px]
          h-[260px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-orange-400/25
          blur-[70px]
        "
      />

      {/* HEAVY SMOKE 3 */}
      <motion.div
        animate={{
          left: `${mouse.x + 12}%`,
          top: `${mouse.y - 10}%`,
        }}
        transition={{
          type: "spring",
          stiffness: 122,
          damping: 30,
          mass: 2.5,
        }}
        className="
          absolute
          pointer-events-none
          w-[220px]
          h-[220px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-beige-100/20
          blur-[65px]
        "
      />

      {/* SMOKE CLOUD */}
      <motion.div
        animate={{
          left: `${mouse.x}%`,
          top: `${mouse.y}%`,
          scale: [1, 1.2, 1],
        }}
        transition={{
          left: {
            type: "spring",
            stiffness: 15,
            damping: 25,
          },
          top: {
            type: "spring",
            stiffness: 15,
            damping: 25,
          },
          scale: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="
          absolute
          pointer-events-none
          w-[180px]
          h-[180px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-brown-950/50
          blur-[50px]
        "
      />

      {/* CONTENT */}
      <div className="relative z-10">

        <p className="font-serif italic text-3xl md:text-4xl mb-6 leading-tight">
          "Design is not just what it looks like. Design is how it works on the shelf."
        </p>

        <p className="text-beige-400 text-sm tracking-wide">
          — FMCG Design Philosophy
        </p>

      </div>

    </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}