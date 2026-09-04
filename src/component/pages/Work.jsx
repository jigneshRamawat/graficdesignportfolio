import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef, useState, createContext, useContext, useEffect } from "react";
import "./Work.css";
/* ============================================================
   1. THEME CONTEXT & PROVIDER
============================================================ */
const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);

/* ============================================================
   2. PROJECTS DATA
============================================================ */
const projects = [
  {
    brand: "NATURESENSE PROFESSIONAL",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800",
    resultTitle: "Increased 45%",
    resultText: "social engagement after launch.",
    resultNumber: "45%",
    resultLabel: "MORE ENGAGEMENT",
    reviewTitle: "Premium visuals",
    reviewText: "created with great attention.",
    reviewer: "ANDREW AMSTERDAM",
  },
  {
    brand: "STAY PROFESSIONAL",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=800",
    resultTitle: "Delivered 100+",
    resultText: "campaign assets in record time.",
    resultNumber: "3X",
    resultLabel: "FASTER",
    reviewTitle: "Beautiful visuals",
    reviewText: "delivered with remarkable speed.",
    reviewer: "TRACY MANHATTAN",
  },
  {
    brand: "MAMAEARTH",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=800",
    resultTitle: "Delivered 100+",
    resultText: "social engagement after launch.",
    resultNumber: "45%",
    resultLabel: "MORE ENGAGEMENT",
    reviewTitle: "Beautiful visuals",
    reviewText: "created with great attention.",
    reviewer: "JOHN BERLIN",
  },
  {
    brand: "REVLON COSMETICS",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
    resultTitle: "Increased 45%",
    resultText: "social engagement after launch.",
    resultNumber: "45%",
    resultLabel: "MORE ENGAGEMENT",
    reviewTitle: "Premium visuals",
    reviewText: "created with great attention.",
    reviewer: "ANDREW AMSTERDAM",
  },
];

/* ============================================================
   3. WORK COMPONENT (Consumer of Theme Context)
============================================================ */
function WorkContent() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { theme, toggleTheme } = useTheme();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const progress = useTransform(scrollYProgress, [0, 1], [0, projects.length - 1]);

  useMotionValueEvent(progress, "change", (value) => {
    const index = Math.min(Math.max(Math.round(value), 0), projects.length - 1);
    setActiveIndex(index);
  });

  return (
    <main className="work-page pt-10">
      
      <header className="work-header ">
        <div className="work-title pt-10">
          <span className="title-small left-title">REAL WORLD</span>
          <h1 className="text-3xl">My Work <br /><br /><br /> For Real World Clients</h1>
          <span className="title-small right-title">FROM CLIENTS</span>
        </div>
        <p className="subtitle-trusted pt-10">TRUSTED BY BRANDS FOR PREMIUM AI VISUALS AND CREATIVE QUALITY.</p>
      </header>

      {/* ================= DESKTOP: PINNED SCROLL SECTION (unchanged) ================= */}
      <section
        ref={containerRef}
        className="reviews-scroll"
        style={{ height: `${projects.length * 100}vh` }}
      >
        <div className="reviews-sticky">
          <div className="reviews-content">
            {/* LEFT RESULTS COLUMN */}
            <Results projects={projects} progress={progress} />

            {/* CENTER IMAGE COLUMN */}
            <div className="review-image-wrapper">
              {projects.map((project, index) => (
                <ProjectImage key={project.brand} project={project} index={index} progress={progress} />
              ))}
            </div>

            {/* RIGHT REVIEWS COLUMN */}
            <Reviews projects={projects} progress={progress} />
          </div>

          {/* MOBILE INDICATOR (only relevant while pinned section is visible) */}
          <div className="mobile-progress">
            {projects.map((project, index) => (
              <span key={project.brand} className={activeIndex === index ? "active" : ""} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= MOBILE: EDITORIAL STACKED STORY (mobile only) ================= */}
      <section className="mobile-story">
        {projects.map((project, index) => (
          <MobileProjectStory key={project.brand} project={project} index={index} />
        ))}
      </section>
    </main>
  );
}

/* ============================================================
   4. DESKTOP SUB-COMPONENTS (unchanged)
============================================================ */
function Results({ projects, progress }) {
  return (
    <div className="results-column">
      <div className="side-label">RESULTS</div>
      <div className="results-stack">
        {projects.map((project, index) => (
          <ResultItem key={project.brand} project={project} index={index} progress={progress} />
        ))}
      </div>
    </div>
  );
}

function ResultItem({ project, index, progress }) {
  const opacity = useTransform(progress, [index - 0.5, index, index + 0.5], [0, 1, 0]);
  const y = useTransform(progress, [index - 0.5, index, index + 0.5], [50, 0, -50]);

  return (
    <motion.div className="result-item" style={{ opacity, y, position: "absolute" }}>
      <h3>{project.resultTitle}</h3>
      <p>{project.resultText}</p>
      <div className="result-number">{project.resultNumber}</div>
      <div className="result-label">{project.resultLabel}</div>
    </motion.div>
  );
}

function ProjectImage({ project, index, progress }) {
  const opacity = useTransform(progress, [index - 0.5, index, index + 0.5], [0, 1, 0]);
  const scale = useTransform(progress, [index - 0.5, index, index + 0.5], [1.08, 1, 0.94]);
  const y = useTransform(progress, [index - 0.5, index, index + 0.5], [35, 0, -35]);

  return (
    <motion.img
      src={project.image}
      alt={project.brand}
      className="review-image"
      style={{ opacity, scale, y, position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
    />
  );
}

function Reviews({ projects, progress }) {
  return (
    <div className="reviews-column">
      <div className="side-label">REVIEW</div>
      <div className="reviews-stack">
        {projects.map((project, index) => (
          <ReviewItem key={project.brand} project={project} index={index} progress={progress} />
        ))}
      </div>
    </div>
  );
}

function ReviewItem({ project, index, progress }) {
  const opacity = useTransform(progress, [index - 0.5, index, index + 0.5], [0, 1, 0]);
  const y = useTransform(progress, [index - 0.5, index, index + 0.5], [50, 0, -50]);

  return (
    <motion.div className="review-item" style={{ opacity, y, position: "absolute" }}>
      <h3>{project.reviewTitle}</h3>
      <p>{project.reviewText}</p>
      <div className="review-person">
        <div className="review-avatar">{project.reviewer.charAt(0)}</div>
        <span>{project.reviewer}</span>
      </div>
    </motion.div>
  );
}

/* ============================================================
   5. MOBILE-ONLY SUB-COMPONENT
   Renders one project as: RESULTS block -> image -> REVIEW block,
   using a simple whileInView reveal (not scroll-linked pinning).
============================================================ */
function MobileProjectStory({ project, index }) {
  const fadeUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.7, ease: "easeOut" },
  };

  return (
    <div className="mobile-project">
      {/* RESULTS block */}
      <motion.div className="mobile-block mobile-results" {...fadeUp}>
        <span className="side-label mobile-side-label">RESULTS</span>
        <div className="mobile-stat">{project.resultNumber}</div>
        <h3 className="mobile-headline">{project.resultTitle}</h3>
        <p className="mobile-support-text">{project.resultText}</p>
      </motion.div>

      <motion.img
        src={project.image}
        alt={project.brand}
        className="mobile-image"
        initial={{ opacity: 0, scale: 1.04 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      {/* REVIEW block */}
      <motion.div className="mobile-block mobile-review" {...fadeUp}>
        <span className="side-label mobile-side-label">REVIEW</span>
        <h3 className="mobile-headline mobile-headline-italic">{project.reviewTitle}</h3>
        <p className="mobile-support-text">{project.reviewText}</p>
        <div className="review-person mobile-reviewer">
          <div className="review-avatar">{project.reviewer.charAt(0)}</div>
          <span>{project.reviewer}</span>
        </div>
      </motion.div>
    </div>
  );
}

/* ============================================================
   6. DEFAULT EXPORT (Wrapped with ThemeProvider)
============================================================ */
export default function Work() {
  return (
    <ThemeProvider>
      <WorkContent />
    </ThemeProvider>
  );
}