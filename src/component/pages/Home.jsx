import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import heroimg from "../../img/hero.png";
import videow from "../../img/videowhhy.mp4";

const heroBg = heroimg;
const videowhy = videow;

const leftFloaters = [
  {
    src: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/e9dfc8182177123.6528d3fc3e2a7.gif",
    className: "w-20 h-28 md:w-28 md:h-50 lg:w-32 lg:h-auto ",
  },
  {
    src: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/a34f68235601925.68dabc45a02db.gif",
    className: "w-28 h-20 md:w-36 md:h-28 lg:w-44 lg:h-34",
  },
  {
    src: "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/72b088181666185.651fcec369283.jpg",
    className: "w-20 h-28 md:w-28 md:h-40 lg:w-32 lg:h-35",
  },
  {
    src: "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/c122a2179893519.6503c9f0ed848.jpg",
    className: "w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-50",
  },
  {
    src: "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/a57158177422847.64d5e3dc20114.jpg",
    className: "w-28 h-36 md:w-36 md:h-44 lg:w-40 lg:h-40",
  },
];

const rightFloaters = [
  {
    src: "https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/c10d6c162510421.63d75bc1396df.jpg",
    className: "w-24 h-32 md:w-32 md:h-40 lg:w-40 lg:h-auto",
  },
  {
    src: "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/6057f8151702743.6310947a5843e.jpg",
    className: "w-20 h-24 md:w-28 md:h-32 lg:w-32 lg:h-auto",
  },
  {
    src: "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/337e98151011043.6304ad5c136af.jpg",
    className: "w-28 h-36 md:w-32 md:h-44 lg:w-100 lg:h-auto",
  },
  {
    src: "https://mir-s3-cdn-cf.behance.net/project_modules/hd_webp/32398a148635523.62d8ef8e6ec34.jpg",
    className: "w-24 h-28 md:w-36 md:h-36 lg:w-100 lg:h-auto",
  },
  {
    src: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/18256c148644563.62d9149fd58b4.jpg",
    className: "w-28 h-20 md:w-40 md:h-28 lg:w-44 lg:h-auto",
  },
];

function MarqueeColumn({ images, direction = "down", duration = 50 }) {
  const createGroup = (groupIndex) => (
    <div
      key={`group-${groupIndex}`}
      className="flex flex-col items-center gap-8 md:gap-12 lg:gap-16 py-8 md:py-12"
    >
      {images.map((image, index) => (
        <motion.div
          key={`${groupIndex}-${index}`}
          className={`
            ${image.className}
            shrink-0
            overflow-hidden
            rounded-xl
            md:rounded-2xl
            shadow-2xl
            bg-white/10
            backdrop-blur-sm
          `}
          animate={{
            rotate: index % 2 === 0 ? [-5, 10, -2] : [2, -10, 2],
            scale: index % 3 === 0 ? [0.7, 1.25, 1, 0.7] : [0.8, 1, 1.25, 0.82],
          }}
          transition={{
            duration: 15 + (index % 3),
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <img
            src={image.src}
            alt="Portfolio work"
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
            loading="lazy"
          />
        </motion.div>
      ))}
    </div>
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute top-0 left-0 w-full flex flex-col"
        initial={{ y: direction === "down" ? "-50%" : "0%" }}
        animate={{ y: direction === "down" ? ["-60%", "0%"] : ["0%", "-50%"] }}
        transition={{
          duration,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        {createGroup(0)}
        {createGroup(1)}
      </motion.div>
    </div>
  );
}

const whyItems = [
  {
    title: "STRATEGIC",
    img: "https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/407e00146586979.62b303109c6a1.jpg",
    desc: "Every design decision is rooted in market research and consumer psychology to maximize shelf impact and brand recall.",
  },
  {
    title: "CREATIVE",
    img: "https://mir-s3-cdn-cf.behance.net/project_modules/hd_webp/225778142870939.626fbcc9d5fb2.jpg",
    desc: "Blending skin-science aesthetics with bold visual storytelling for unforgettable beauty brand moments.",
  },
  {
    title: "CONSISTENT",
    img: "https://mir-s3-cdn-cf.behance.net/project_modules/hd_webp/6a8168141503259.625548e274f6b.jpg",
    desc: "Cohesive design systems that maintain brand integrity across packaging, digital, and retail touchpoints.",
  },
];

function WhyStack() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const SHRINK_START = 0;
  const SHRINK_END = 0.45;

  const VIDEO_FADE_START = 0.05;
  const VIDEO_FADE_END = 0.35;

  const IMAGE_START = 0.01;
  const IMAGE_DURATION = 0.2;

  const isMobile =
    typeof window !== "undefined" &&
    window.innerWidth < 768;

  /* =====================================================
     DESKTOP VALUES
  ===================================================== */

  const desktopWidth = useTransform(
    scrollYProgress,
    [SHRINK_START, SHRINK_END],
    ["100vw", "48vw"]
  );

  const desktopHeight = useTransform(
    scrollYProgress,
    [SHRINK_START, SHRINK_END],
    ["100vh", "65vh"]
  );

  const desktopLeft = useTransform(
    scrollYProgress,
    [SHRINK_START, SHRINK_END],
    ["0vw", "48vw"]
  );

  const desktopTop = useTransform(
    scrollYProgress,
    [SHRINK_START, SHRINK_END],
    ["0vh", "15vh"]
  );

  /* =====================================================
     MOBILE VALUES
  ===================================================== */

  const mobileWidth = useTransform(
    scrollYProgress,
    [SHRINK_START, SHRINK_END],
    ["100vw", "92vw"]
  );

  const mobileHeight = useTransform(
    scrollYProgress,
    [SHRINK_START, SHRINK_END],
    ["100vh", "52vh"]
  );

  const mobileLeft = useTransform(
    scrollYProgress,
    [SHRINK_START, SHRINK_END],
    ["0vw", "4vw"]
  );

  const mobileTop = useTransform(
    scrollYProgress,
    [SHRINK_START, SHRINK_END],
    ["0vh", "28vh"]
  );

  /*
  =====================================================
  CHOOSE RESPONSIVE VALUES
  =====================================================
  */

  const rightWidth = isMobile
    ? mobileWidth
    : desktopWidth;

  const rightHeight = isMobile
    ? mobileHeight
    : desktopHeight;

  const rightLeft = isMobile
    ? mobileLeft
    : desktopLeft;

  const rightTop = isMobile
    ? mobileTop
    : desktopTop;

  /* =====================================================
     LEFT CONTENT
  ===================================================== */

  const leftOpacity = useTransform(
    scrollYProgress,
    [0.05, 0.15, 0.95, 1],
    [0, 1, 1, 0.8]
  );

  const leftX = useTransform(
    scrollYProgress,
    [0.05, 0.2],
    [-40, 0]
  );

  /* =====================================================
     VIDEO
  ===================================================== */

  const videoOpacity = useTransform(
    scrollYProgress,
    [VIDEO_FADE_START, VIDEO_FADE_END],
    [1, 0]
  );

  return (
    <div
      ref={containerRef}
      className="
        relative
        h-[280vh]
        md:h-[300vh]
        bg-white
        dark:bg-brown-900
      "
    >

      {/* =================================================
          STICKY SCREEN
      ================================================= */}

      <div
        className="
          sticky
          top-0
          h-screen
          w-full
          overflow-hidden
          flex
          flex-col
          md:flex-row
          items-center
        "
      >

        {/* =================================================
            LEFT TEXT
        ================================================= */}

        <motion.div
          style={{
            opacity: leftOpacity,
            x: leftX,
          }}
          className="
            relative
            z-20

            flex
            items-center
            justify-center

            h-full
            w-full
            md:w-1/2

            p-6
            md:p-12

            pointer-events-none
            md:pointer-events-auto
          "
        >

          <div
            className="
              relative
              w-full
              h-[360px]
              md:h-[300px]

              pointer-events-auto
            "
          >

            {whyItems.map((item, i) => {

              const start =
                IMAGE_START +
                i * IMAGE_DURATION;

              const end =
                start +
                IMAGE_DURATION;

              /* ------------------------------
                 TEXT OPACITY
              ------------------------------ */

              const opacity = useTransform(
                scrollYProgress,
                [
                  Math.max(0, start - 0.05),
                  start + 0.05,
                  Math.max(0, end - 0.05),
                  Math.min(1, end + 0.02),
                ],
                [0, 1, 1, 0]
              );

              /* ------------------------------
                 TEXT X
              ------------------------------ */

              const x = useTransform(
                scrollYProgress,
                [
                  start,
                  start + 0.05,
                  end - 0.05,
                  end,
                ],
                [-30, 0, 0, 20]
              );

              /* ------------------------------
                 TEXT Y
              ------------------------------ */

              const y = useTransform(
                scrollYProgress,
                [start, start + 1.05],
                [15, 0]
              );

              return (
                <motion.div
                  key={i}
                  style={{
                    opacity,
                    x,
                    y,
                  }}
                  className="
                    absolute
                    inset-0
                    flex
                    flex-col
                    justify-end
                    md:justify-center
                    text-center
                    md:text-left
                    md:bg-transparent
                    p-6
                    md:p-0
                    rounded-2xl
                    backdrop-blur-sm
                    md:backdrop-blur-none
                  "
                >

                  <span
                    className="
                      text-terracotta
                      text-xs
                      tracking-[0.3em]
                      font-medium
                      mb-2
                    "
                  >
                    0{i + 1} / 0{whyItems.length}
                  </span>

                  <h3
                    className="
                      font-serif

                      text-2xl
                      sm:text-4xl
                      md:text-5xl
                      lg:text-6xl

                      text-white
                      font-bold
                      md:text-brown-900

                      dark:md:text-beige-100

                      mb-3

                      drop-shadow-md
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      text-gray-200
                      md:text-brown-600

                      dark:md:text-beige-300

                      text-xs
                      sm:text-sm
                      md:text-base
                      lg:text-lg

                      leading-relaxed

                      max-w-md

                      mx-auto
                      md:mx-0

                      mb-4

                      drop-shadow
                    "
                  >
                    {item.desc}
                  </p>

                </motion.div>
              );
            })}

          </div>

        </motion.div>


        {/* =================================================
            RIGHT / IMAGE PANEL
        ================================================= */}

        <motion.div
          style={{
            width: rightWidth,
            height: rightHeight,
            left: rightLeft,
            top: rightTop,
          }}
          className="
            absolute
            z-10

            overflow-hidden

            rounded-none
            md:rounded-2xl

            shadow-2xl

            bg-brown-950

            max-w-full
          "
        >

          {/* =================================================
              VIDEO
          ================================================= */}

          <motion.div
            style={{
              opacity: videoOpacity,
              zIndex: 0,
            }}
            className="absolute inset-0"
          >

            <video
              autoPlay
              muted
              loop
              playsInline
              className="
                w-full
                h-full
                object-cover
              "
              poster={whyItems[0].img}
            >

              <source
                src={videowhy}
                type="video/mp4"
              />

            </video>

            <div
              className="
                absolute
                inset-0
                bg-brown-950/30
                md:bg-brown-950/20
              "
            />

          </motion.div>


          {/* =================================================
              SEQUENTIAL IMAGES — NO OPACITY, NO OVERLAY
          ================================================= */}

          {whyItems.map((item, i) => {

            const start =
              IMAGE_START +
              i * IMAGE_DURATION;

            const end =
              start +
              IMAGE_DURATION;

            /* ------------------------------
               IMAGE SLIDE
            ------------------------------ */

            const y = useTransform(
              scrollYProgress,
              [start, end],
              ["100%", "0%"]
            );

            /* ------------------------------
               IMAGE SCALE
            ------------------------------ */

            const scale = useTransform(
              scrollYProgress,
              [start, start + 0.05],
              [0.95, 1]
            );

            return (
              <motion.div
                key={i}
                style={{
                  y,
                  scale,
                  zIndex: i + 1,
                }}
                className="
                  absolute
                  inset-0
                  w-full
                  h-full
                  overflow-hidden
                "
              >

                <img
                  src={item.img}
                  alt={item.title}
                  className="
                    block

                    w-full
                    h-full

                    object-cover

                    object-center
                  "
                />

                {/* OVERLAY REMOVED — PURE IMAGE */}

              </motion.div>
            );
          })}

        </motion.div>

      </div>

    </div>
  );
}
const services = [
  {
    title: "PACKAGING DESIGN",
    img: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/6aafa8235601925.68dabc45a0823.gif",
    category: "FMCG / BEAUTY",
  },
  {
    title: "E-COMMERCE DESIGN",
    img: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/9d2a2c123821755.60f6bfe2592a2.jpg",
    category: "DIGITAL / RETAIL",
  },
  {
    title: "CAMPAIGN IMAGERY",
    img: "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/b42937120847607.60b9b1b4cfe76.jpg",
    category: "BRAND / VISUAL",
  },
  {
    title: "BRAND IDENTITY",
    img: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/f858ab135075989.61e13695921e6.jpg",
    category: "SYSTEM / DESIGN",
  },
];
function ServicesStack() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const count = services.length;

  return (
    <div ref={containerRef} className="relative h-[400vh] bg-brown-950">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col">
        {/* =================================================
            BACKGROUND IMAGES — SLIDE UP, NO OPACITY
        ================================================= */}
        {services.map((service, i) => {
          const start = i / count;
          const end = (i + 1) / count;

          const y = useTransform(
            scrollYProgress,
            [start, end],
            [i === 0 ? "0%" : "100%", "0%"]
          );
          const scale = useTransform(
            scrollYProgress,
            [start, end],
            [1.1, 1.2]
          );

          return (
            <motion.div
              key={i}
              style={{ y, scale, zIndex: i }}
              className="absolute inset-0"
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-full object-cover bg-center"
              />
              {/* Subtle edge gradient for text readability — NOT a solid dark wash */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30" />
            </motion.div>
          );
        })}

        {/* =================================================
            TITLE TEXT
        ================================================= */}
        <div className="relative z-20 flex-1 flex flex-col items-center justify-center pt-20">
          {services.map((service, i) => {
            const start = i / count;
            const end = (i + 1) / count;

            const opacity = useTransform(
              scrollYProgress,
              [start, start + 0.04, end - 0.04, end],
              [0, 1, 1, 0]
            );
            const y = useTransform(
              scrollYProgress,
              [start, start + 0.06, end - 0.06, end],
              [-30, 0, 0, -30]
            );

            return (
              <motion.div
                key={i}
                style={{ opacity, y }}
                className="absolute text-center px-4"
              >
                <h2 className="font-serif text-3xl md:text-6xl lg:text-7xl text-white tracking-wide drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                  {service.title}
                </h2>
              </motion.div>
            );
          })}
        </div>

        {/* =================================================
            CENTER CARD — PURE IMAGES, NO OPACITY, NO OVERLAY
        ================================================= */}
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
          <div className="relative w-[75vw] md:w-[28vw] lg:w-[45vw] h-[45vh] md:h-[65vh] rounded-2xl overflow-hidden shadow-2xl bg-brown-900">
            {services.map((service, i) => {
              const start = i / count;
              const end = (i + 1) / count;

              const y = useTransform(
                scrollYProgress,
                [start, end],
                [i === 0 ? "0%" : "100%", "0%"]
              );
              const scale = useTransform(
                scrollYProgress,
                [start, start + 0.08],
                [0.92, 1]
              );

              return (
                <motion.div
                  key={i}
                  style={{ y, scale, zIndex: i + 1 }}
                  className="absolute inset-0"
                >
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  {/* GRADIENT OVERLAY REMOVED — PURE IMAGE */}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* =================================================
            FOOTER INFO
        ================================================= */}
        <div className="relative z-20 pb-8 px-6 md:px-12">
          <div className="flex justify-between items-end border-t border-white/20 pt-6">
            {services.map((service, i) => {
              const start = i / count;
              const end = (i + 1) / count;

              const opacity = useTransform(
                scrollYProgress,
                [start, start + 0.03, end - 0.03, end],
                [0, 1, 1, 0]
              );

              return (
                <motion.div
                  key={i}
                  style={{ opacity }}
                  className="absolute left-6 right-6 md:left-12 md:right-12 flex justify-between items-end"
                >
                  <div>
                    <p className="text-[10px] tracking-[0.3em] text-white/50 mb-1">
                      SERVICE
                    </p>
                    <p className="text-xs md:text-sm text-white/90 tracking-wide">
                      0{i + 1} / 0{count}
                    </p>
                  </div>
                  <div className="text-center hidden md:block">
                    <p className="text-[10px] tracking-[0.3em] text-white/50 mb-1">
                      CATEGORY
                    </p>
                    <p className="text-xs md:text-sm text-white/90 tracking-wide">
                      {service.category}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] tracking-[0.3em] text-white/50 mb-1">
                      EXPERTISE
                    </p>
                    <p className="text-xs md:text-sm text-white/90 tracking-wide">
                      {service.title}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const name = "MONA ASWAL";

  return (
    <main>
      {/* ==================== HERO ==================== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-beige-100 dark:bg-brown-950 pt-28 pb-16 px-4">
        {/* CENTER PORTRAIT */}
        <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
          <div className="relative w-[92vw] md:w-[55vw] lg:w-[45vw] h-[65vh] md:h-[110vh]">
            <img
              src={heroBg}
              alt="Mona Aswal"
              className="w-full h-full object-cover object-top rounded-2xl opacity-90 dark:opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-beige-100 via-transparent to-beige-100 dark:from-brown-950/20 dark:to-brown-950/70 rounded-2xl" />
          </div>
        </div>

        {/* LEFT MARQUEE */}
        <div className="absolute left-0 top-0 w-[23vw] lg:w-[22vw] h-full z-[2] overflow-hidden hidden lg:block">
          <MarqueeColumn images={leftFloaters} direction="down" duration={24} />
        </div>

        {/* RIGHT MARQUEE */}
        <div className="absolute right-0 top-0 w-[23vw] lg:w-[22vw] h-full z-[2] overflow-hidden hidden lg:block">
          <MarqueeColumn images={rightFloaters} direction="up" duration={34} />
        </div>

        {/* TOP FADE */}
        <div className="absolute top-0 left-0 right-0 h-32 z-[5] pointer-events-none bg-gradient-to-b from-beige-100 to-transparent dark:from-brown-950" />

        {/* BOTTOM FADE */}
        <div className="absolute bottom-0 left-0 right-0 h-32 z-[5] pointer-events-none bg-gradient-to-t from-beige-100 to-transparent dark:from-brown-950" />

        {/* CENTER TEXT */}
        <div className="relative z-10 text-center pt-[10rem] md:pt-[25rem] max-w-5xl mx-auto pointer-events-none">
          <motion.h1 className="font-serif italic text-4xl sm:text-6xl md:text-8xl lg:text-[7rem] lg:mt-1 sm:mt-1 mt-[25rem] text-brown-900 dark:text-beige-100 leading-[0.9] mb-4 drop-shadow-lg flex justify-center flex-wrap">
            {name.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, rotateX: -90, y: 20 }}
                animate={{ opacity: 1, rotateX: 0, y: 0 }}
                transition={{
                  delay: 0.5 + index * 0.3,
                  duration: 0.5,
                  ease: "easeOut",
                }}
                style={{
                  display: "inline-block",
                  fontWeight: "bold",
                  transformOrigin: "bottom",
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-serif text-xl sm:text-3xl md:text-5xl lg:text-7xl text-brown-800 dark:text-beige-200 mb-6 md:mb-8 drop-shadow-md"
          >
            Graphic Designer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="max-w-xl mx-auto text-xs sm:text-sm md:text-base text-brown-900 dark:text-beige-100 leading-relaxed font-medium drop-shadow-sm px-4"
          >
            8 years crafting premium visuals for beauty & FMCG brands.
            Specializing in packaging, e-commerce, and campaign design for
            haircare, makeup, and skincare.
          </motion.p>
        </div>

        {/* BOTTOM LEFT LABEL */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration:  1}}
          className="absolute bottom-6 left-6 md:left-12 z-10 hidden sm:block"
        >
          <p className="text-xs tracking-[0.2em] text-brown-600 dark:text-beige-400 font-medium">
            VISUAL STORIES
          </p>
        </motion.div>
      </section>

      {/* ==================== WHY HEADER ==================== */}
{/* ==================== WHY HEADER ==================== */}
      <section className="pt-20 md:pt-40 px-6 bg-white dark:bg-brown-900">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2, // Controls the delay between each layer appearing
              },
            },
          }}
          className="max-w-6xl mx-auto text-center mb-6 md:mb-0"
        >
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
            className="text-terracotta tracking-[0.3em] text-sm font-medium mb-6"
          >
            WHY MONA ASWAL
          </motion.p>
          
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
            className="font-serif text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-brown-900 dark:text-beige-100 mb-6 leading-tight"
          >
            Skip traditional agencies.
            <br />
            <span className="text-brown-500 dark:text-beige-400">
              Premium beauty visuals delivered with precision.
            </span>
          </motion.h2>
          
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
            className="text-brown-400 dark:text-beige-500 tracking-wide text-xs md:text-sm max-w-2xl mx-auto px-2"
          >
            CREATING SCALABLE DESIGN SYSTEMS THAT REDUCE PRODUCTION COSTS,
            ACCELERATE CAMPAIGNS.
          </motion.p>
        </motion.div>
      </section>
      {/* ==================== WHY STACK ==================== */}
      <WhyStack />

      {/* ==================== SERVICES HEADER ==================== */}
      <section className="py-20 md:py-32 px-6 bg-beige-100 dark:bg-brown-950">
        <div className="max-w-6xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-terracotta tracking-[0.3em] text-sm font-medium mb-6"
          >
            EXPERTISE
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif italic text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-brown-900 dark:text-beige-100 mb-4"
          >
            SERVICES
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-terracotta font-serif text-lg md:text-2xl"
          >
            SINCE 2017
          </motion.p>
        </div>
      </section>

      {/* ==================== SERVICES STACK ==================== */}
      <ServicesStack />

      {/* ==================== CTA ==================== */}
      <section className="py-20 px-6 bg-beige-100 dark:bg-brown-950 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Link
            to="/work"
            className="inline-block px-8 py-4 rounded-full bg-brown-900 dark:bg-beige-100 text-beige-100 dark:text-brown-900 font-medium tracking-wide hover:bg-terracotta dark:hover:bg-terracotta transition"
          >
            VIEW ALL PROJECTS
          </Link>
        </motion.div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <Footer />
    </main>
  );
}