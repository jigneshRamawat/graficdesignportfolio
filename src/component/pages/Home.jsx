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
    src: "https://imgs.search.brave.com/V1Cp9bOdJzbYTuyQqqhg5J_p8U_J2FVuq_RxxPn0JOk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly/mZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNjkx/NTcyOTc1L3Bob3Rv/L2Nvc21ldGljcy5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/Wlc2SnpYYXM3RGlu/WkV6LTd5RDZSMlNW/LTlsWlZUMjNEVWxL/RnNwcExFdz0",
    className: "w-20 h-28 md:w-28 md:h-36 lg:w-32 lg:h-40",
  },
  {
    src: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=500&q=80",
    className: "w-28 h-20 md:w-36 md:h-28 lg:w-44 lg:h-32",
  },
  {
    src: "https://imgs.search.brave.com/QfOMKsPd_r14IQqEcWaMPMSvATJi8_mjzLgAzbWqVtc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLmd1/aW0uY28udWsvaW1n/L21lZGlhL2NlNzk2/MDU0ZGI5OThlYzA2/MzE5NzcxODU0ZmYw/NTgwMGJmZTY3MTEv/M18wXzI0OTVfMTk5/Ni9tYXN0ZXIvMjQ5/NS5qcGc_d2lkdGg9/NDY1JmRwcj0xJnM9/bm9uZSZjcm9wPTU6/NA",
    className: "w-20 h-28 md:w-28 md:h-40 lg:w-32 lg:h-48",
  },
  {
    src: "https://imgs.search.brave.com/_OYv3tX7SZ_zOFL4O98PwaPlxv9uwgRYmGwg-o3mF8g/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMudm9ndWUuY29t/L3Bob3Rvcy82YThl/ZjgwNTdlOTdmYjI0/MGU3MTQ2NmYvNDoz/L3dfMTYwMCxjX2xp/bWl0LzA4MjUyNl9h/Z2VzcG90c19wb2xh/cm9pZF9iZWF1dHlo/b2xkaW5nLmpwZw",
    className: "w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36",
  },
  {
    src: "https://imgs.search.brave.com/yV5Hd1Qe5rCEKJWaNoZX9i71agMU-u_d-D1Jj_goFhE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDkv/OTY5LzYxNi9zbWFs/bC9hLXNlcmVuZS1h/bmQtY296eS1zY2Vu/ZS1mZWF0dXJpbmct/eW91bmctd29tYW4t/d2l0aC1zb2Z0LW1h/a2V1cC1zdXJyb3Vu/ZGVkLWJ5LWJlYXV0/eS1wcm9kdWN0cy1h/bmQtZmVzdGl2ZS1k/ZWNvcmF0aW9ucy1w/aG90by5qcGc",
    className: "w-28 h-36 md:w-36 md:h-44 lg:w-40 lg:h-52",
  },
];

const rightFloaters = [
  {
    src: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=500&q=80",
    className: "w-24 h-32 md:w-32 md:h-40 lg:w-40 lg:h-48",
  },
  {
    src: "https://images.unsplash.com/photo-1583209814683-c023dd293cc6?w=500&q=80",
    className: "w-20 h-24 md:w-28 md:h-32 lg:w-32 lg:h-36",
  },
  {
    src: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=500&q=80",
    className: "w-28 h-36 md:w-32 md:h-44 lg:w-36 lg:h-48",
  },
  {
    src: "https://images.unsplash.com/photo-1559563362-c667ba5f5480?w=500&q=80",
    className: "w-24 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40",
  },
  {
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80",
    className: "w-28 h-20 md:w-40 md:h-28 lg:w-44 lg:h-32",
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
    img: "https://imgs.search.brave.com/7hhuaN9XErWaoje9f0budeCmda0lbknTbvA6QcOYaH8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLmd1/aW0uY28udWsvaW1n/L21lZGlhL2NlNThm/YTQwNWUxYWIyZGU3/YzAzNTE5OGE0MGY1/ZDRiMjYyZjIwODYv/MF8wXzUwMDBfNDAw/MC9tYXN0ZXIvNTAw/MC5qcGc_d2lkdGg9/NDY1JmRwcj0xJnM9/bm9uZSZjcm9wPTU6/NA",
    desc: "Every design decision is rooted in market research and consumer psychology to maximize shelf impact and brand recall.",
  },
  {
    title: "CREATIVE",
    img: "https://imgs.search.brave.com/v4xHqQwJauNB364mSfXilxy4zpuwXm_QV2C8awB1V9Y/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9ncm91/cC1iZWF1dHktcHJv/ZHVjdHMtYXJyYW5n/ZWQtY2lyY3VsYXIt/cGVkZXN0YWwtdmFy/aW91cy10dWJlcy1i/cnVzaGVzLXBvc2l0/aW9uZWQtYXJvdW5k/LWNlbnRlcnBpZWNl/LXNvZnQtNDIzNDUz/MTU5LmpwZw",
    desc: "Blending skin-science aesthetics with bold visual storytelling for unforgettable beauty brand moments.",
  },
  {
    title: "CONSISTENT",
    img: "https://imgs.search.brave.com/_a7PIL1aI0kQDnBsDLZjUjwwtrievRR3Z2WQ6LKoJUU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9iZWF1/dHliYXNrZXRzLmlu/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIy/LzA2L0FydGJvYXJk/LTEtMzAweDMwMC53/ZWJw",
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
  =====================================================

  IMPORTANT:
  92vw width means:

  100vw - 92vw = 8vw

  8vw / 2 = 4vw

  So left = 4vw gives PERFECT CENTER.
  */

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

            MOBILE:
            width 92vw
            left 4vw
            = CENTER

            DESKTOP:
            width 48vw
            left 48vw
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
              SEQUENTIAL IMAGES
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

            /* ------------------------------
               IMAGE OPACITY
            ------------------------------ */

            const opacity = useTransform(
              scrollYProgress,
              [start, start + 0.04],
              [0.5, 1]
            );

            return (
              <motion.div
                key={i}
                style={{
                  y,
                  scale,
                  opacity,
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

                <div
                  className="
                    absolute
                    inset-0
                    bg-brown-950/40
                    md:bg-brown-950/30
                  "
                />

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
    img: "https://imgs.search.brave.com/V1Cp9bOdJzbYTuyQqqhg5J_p8U_J2FVuq_RxxPn0JOk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNjkx/NTcyOTc1L3Bob3Rv/L2Nvc21ldGljcy5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/Wlc2SnpYYXM3RGlu/WkV6LTd5RDZSMlNW/LTlsWlZUMjNEVWxL/RnNwcExFdz0",
    category: "FMCG / BEAUTY",
  },
  {
    title: "E-COMMERCE DESIGN",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    category: "DIGITAL / RETAIL",
  },
  {
    title: "CAMPAIGN IMAGERY",
    img: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&q=80",
    category: "BRAND / VISUAL",
  },
  {
    title: "BRAND IDENTITY",
    img: "https://images.unsplash.com/photo-1559563362-c667ba5f5480?w=800&q=80",
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
        {services.map((service, i) => {
          const start = i / count;
          const end = (i + 1) / count;

          const opacity = useTransform(
            scrollYProgress,
            [start, start + 0.05, end - 0.05, end],
            [0, 1, 1, 0]
          );
          const scale = useTransform(
            scrollYProgress,
            [start, end],
            [1.1, 1.2]
          );

          return (
            <motion.div
              key={i}
              style={{ opacity, scale }}
              className="absolute inset-0 z-0"
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-brown-950/60" />
            </motion.div>
          );
        })}

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
                <h2 className="font-serif text-3xl md:text-6xl lg:text-7xl text-white tracking-wide drop-shadow-lg">
                  {service.title}
                </h2>
              </motion.div>
            );
          })}
        </div>

        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
          <div className="relative w-[75vw] md:w-[28vw] lg:w-[22vw] h-[45vh] md:h-[65vh] rounded-2xl overflow-hidden shadow-2xl bg-brown-900">
            {services.map((service, i) => {
              const start = i / count;
              const end = (i + 1) / count;

              const y = useTransform(
                scrollYProgress,
                [start, end],
                ["100%", "0%"]
              );
              const scale = useTransform(
                scrollYProgress,
                [start, start + 0.08],
                [0.92, 1]
              );
              const opacity = useTransform(
                scrollYProgress,
                [start, start + 0.03],
                [0.8, 1]
              );

              return (
                <motion.div
                  key={i}
                  style={{ y, scale, opacity, zIndex: i + 1 }}
                  className="absolute inset-0"
                >
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brown-950/50 to-transparent" />
                </motion.div>
              );
            })}
          </div>
        </div>

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