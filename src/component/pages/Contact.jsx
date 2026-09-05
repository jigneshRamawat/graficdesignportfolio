import { useRef, useEffect, useState, useCallback } from "react";

import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";

import {
  Mail,
  MapPin,
  ArrowRight,
  Sparkles,
} from "lucide-react";

import Footer from "../Footer";

/* ============================================================
   ANIMATION PRESETS
============================================================ */

const easeLuxury = [0.25, 0.1, 0.25, 1];

const fadeUpStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const fadeUpItem = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: easeLuxury,
    },
  },
};


/* ============================================================
   HERO
   WATER DROP / LIQUID LENS EFFECT
============================================================ */

function ContactHero() {
  const containerRef = useRef(null);

  /* ---------------- SCROLL ---------------- */

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const heroScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 0.95]
  );

  const heroOpacity = useTransform(
    scrollYProgress,
    [0, 0.6],
    [1, 0.5]
  );


  /* ---------------- MOUSE ---------------- */

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const smoothX = useSpring(mouseX, {
    damping: 35,
    stiffness: 120,
    mass: 0.4,
  });

  const smoothY = useSpring(mouseY, {
    damping: 35,
    stiffness: 120,
    mass: 0.4,
  });


  /* ---------------- IMAGE PARALLAX ---------------- */

  const imgX = useTransform(
    smoothX,
    [0, 1],
    [-10, 10]
  );

  const imgY = useTransform(
    smoothY,
    [0, 1],
    [-10, 10]
  );


  /* ---------------- TEXT PARALLAX ---------------- */

  const textX = useTransform(
    smoothX,
    [0, 1],
    [6, -6]
  );

  const textY = useTransform(
    smoothY,
    [0, 1],
    [6, -6]
  );


  /* ---------------- DROP POSITION ---------------- */

  const dropX = useTransform(
    smoothX,
    [0, 1],
    ["0%", "100%"]
  );

  const dropY = useTransform(
    smoothY,
    [0, 1],
    ["0%", "100%"]
  );


  /* ---------------- WATER STATE ---------------- */

  const [isHovering, setIsHovering] = useState(false);
  const [isMoving, setIsMoving] = useState(false);

  const lastMove = useRef(0);


  /* ---------------- MOUSE EVENTS ---------------- */

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const isTouch =
      window.matchMedia("(pointer: coarse)").matches;

    const reducedMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

    if (isTouch || reducedMotion) return;


    let moveTimer;


    const handleMove = (e) => {
      const rect =
        container.getBoundingClientRect();

      const x =
        (e.clientX - rect.left) /
        rect.width;

      const y =
        (e.clientY - rect.top) /
        rect.height;

      mouseX.set(Math.max(0, Math.min(1, x)));
      mouseY.set(Math.max(0, Math.min(1, y)));

      setIsHovering(true);
      setIsMoving(true);

      clearTimeout(moveTimer);

      moveTimer = setTimeout(() => {
        setIsMoving(false);
      }, 120);


      lastMove.current = Date.now();
    };


    const handleEnter = () => {
      setIsHovering(true);
    };


    const handleLeave = () => {
      setIsHovering(false);
      setIsMoving(false);
    };


    container.addEventListener(
      "mousemove",
      handleMove
    );

    container.addEventListener(
      "mouseenter",
      handleEnter
    );

    container.addEventListener(
      "mouseleave",
      handleLeave
    );


    return () => {
      container.removeEventListener(
        "mousemove",
        handleMove
      );

      container.removeEventListener(
        "mouseenter",
        handleEnter
      );

      container.removeEventListener(
        "mouseleave",
        handleLeave
      );

      clearTimeout(moveTimer);
    };
  }, [mouseX, mouseY]);


  return (
    <section
      ref={containerRef}
      className="
        relative
        h-screen
        w-full
        overflow-hidden
        bg-brown-950
      "
    >

      {/* ====================================================
          MAIN HERO IMAGE
      ==================================================== */}

      <motion.div
        style={{
          scale: heroScale,
          opacity: heroOpacity,
        }}
        className="absolute inset-0"
      >

        <motion.div
          className="absolute inset-[-20px]"
          style={{
            x: imgX,
            y: imgY,
          }}
        >

          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1920&q=90"
            alt="Creative Director Editorial Portrait"
            className="
              w-full
              h-full
              object-cover
              object-center
            "
            loading="eager"
          />

        </motion.div>


        {/* ==================================================
            DARK CINEMATIC OVERLAY
        ================================================== */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-black/50
            via-black/20
            to-black/70
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-black/30
            via-transparent
            to-black/30
          "
        />


        {/* ==================================================
            WATER DROP / LIQUID LENS
        ================================================== */}

        <AnimatePresence>
          {isHovering && (
            <motion.div
              className="
                absolute
                pointer-events-none
                z-30
              "
              style={{
                left: dropX,
                top: dropY,
                x: "-50%",
                y: "-50%",
              }}
              initial={{
                opacity: 0,
                scale: 0.65,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.7,
              }}
              transition={{
                duration: 0.35,
                ease: easeLuxury,
              }}
            >

              {/* ============================================
                  RIPPLE
              ============================================ */}

              <motion.div
                className="
                  absolute
                  inset-[-35px]
                  rounded-full
                  border
                  border-white/30
                "
                animate={{
                  scale: isMoving
                    ? [1, 1.08, 1]
                    : 1,

                  opacity: isMoving
                    ? [0.15, 0.35, 0.15]
                    : 0.15,
                }}
                transition={{
                  duration: 1.2,
                  repeat: isMoving
                    ? Infinity
                    : 0,
                  ease: "easeOut",
                }}
              />


              {/* ============================================
                  SECOND RIPPLE
              ============================================ */}

              <motion.div
                className="
                  absolute
                  inset-[-15px]
                  rounded-full
                  border
                  border-white/20
                "
                animate={{
                  scale: isMoving
                    ? [1, 1.15, 1]
                    : 1,
                }}
                transition={{
                  duration: 0.9,
                  repeat: isMoving
                    ? Infinity
                    : 0,
                }}
              />


              {/* ============================================
                  WATER DROP
              ============================================ */}

              <div
                className="
                  relative
                  w-52
                  h-52
                  md:w-64
                  md:h-64
                  rounded-full
                  overflow-hidden

                  border
                  border-white/40

                  bg-white/5

                  shadow-[0_0_60px_rgba(255,255,255,0.18)]
                  backdrop-blur-[2px]
                "
              >

                {/* Glass distortion background */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-white/[0.06]
                    backdrop-blur-[6px]
                  "
                />


                {/* ==========================================
                    WATER REFLECTION
                ========================================== */}

                <div
                  className="
                    absolute
                    -top-10
                    -left-10
                    w-32
                    h-32
                    rounded-full
                    bg-white/20
                    blur-2xl
                  "
                />


                <div
                  className="
                    absolute
                    bottom-5
                    right-8
                    w-16
                    h-16
                    rounded-full
                    bg-white/10
                    blur-xl
                  "
                />


                {/* ==========================================
                    HIGHLIGHT
                ========================================== */}

                <div
                  className="
                    absolute
                    top-5
                    left-8
                    w-14
                    h-7
                    rounded-full
                    bg-white/40
                    blur-md
                    rotate-[-25deg]
                  "
                />


                {/* ==========================================
                    INNER RING
                ========================================== */}

                <div
                  className="
                    absolute
                    inset-3
                    rounded-full
                    border
                    border-white/20
                  "
                />

              </div>


              {/* ============================================
                  SMALL WATER DROPLETS
              ============================================ */}

              <motion.span
                className="
                  absolute
                  -top-5
                  right-8
                  w-3
                  h-3
                  rounded-full
                  bg-white/40
                  blur-[1px]
                "
                animate={{
                  y: [0, -5, 0],
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />

              <motion.span
                className="
                  absolute
                  bottom-3
                  -left-4
                  w-2
                  h-2
                  rounded-full
                  bg-white/30
                "
                animate={{
                  y: [0, 5, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
              />

            </motion.div>
          )}
        </AnimatePresence>

      </motion.div>


      {/* ====================================================
          HERO CONTENT
      ==================================================== */}

      <motion.div
        style={{
          x: textX,
          y: textY,
        }}
        className="
          relative
          z-40
          h-full
          flex
          flex-col
          items-center
          justify-center
          text-center
          px-6
          pointer-events-none
        "
      >

        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.3,
          }}
          className="
            text-white/70
            tracking-[0.4em]
            text-[10px]
            md:text-xs
            font-medium
            mb-8
            uppercase
          "
        >
          Human × Design
        </motion.p>


        <h1
          className="
            font-serif
            italic
            text-white
            leading-[0.88]
            tracking-tight
          "
        >

          {[
            "LET'S",
            "CREATE",
            "TOGETHER",
          ].map((word, i) => (

            <motion.span
              key={word}
              initial={{
                opacity: 0,
                y: 60,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1.2,
                delay: 0.5 + i * 0.15,
                ease: easeLuxury,
              }}
              className="
                block
                text-6xl
                sm:text-7xl
                md:text-8xl
                lg:text-[9rem]
                xl:text-[10rem]
              "
            >
              {word}
            </motion.span>

          ))}

        </h1>


        {/* ================================================
            HERO CTA
        ================================================ */}

        <motion.a
          href="#contact-form"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1.5,
            duration: 0.8,
          }}
          className="
            pointer-events-auto
            mt-10
            group
            inline-flex
            items-center
            gap-3
            rounded-full
            border
            border-white/30
            bg-white/10
            backdrop-blur-md
            px-7
            py-3
            text-[10px]
            tracking-[0.3em]
            text-white
            uppercase
            hover:bg-white
            hover:text-brown-900
            transition-all
            duration-500
          "
        >
          Start A Project

          <ArrowRight
            size={15}
            strokeWidth={1.5}
            className="
              group-hover:translate-x-1
              transition-transform
            "
          />
        </motion.a>

      </motion.div>


      {/* ====================================================
          SCROLL INDICATOR
      ==================================================== */}

      <motion.div
        className="
          absolute
          bottom-10
          left-1/2
          -translate-x-1/2
          z-40
          flex
          flex-col
          items-center
          gap-3
        "
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.8,
        }}
      >

        <span
          className="
            text-[9px]
            tracking-[0.4em]
            text-white/50
            uppercase
          "
        >
          Scroll
        </span>

        <motion.div
          className="
            w-px
            h-10
            bg-white/30
            origin-top
          "
          animate={{
            scaleY: [1, 0.4, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 2.5,
            ease: "easeInOut",
          }}
        />

      </motion.div>

    </section>
  );
}


/* ============================================================
   INTRO
============================================================ */

function ContactIntro() {
  return (
    <section
      className="
        relative
        z-10
        bg-beige-100
        dark:bg-brown-950
        py-32
        md:py-48
        px-6
      "
    >

      <motion.div
        className="max-w-5xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          margin: "-80px",
        }}
        variants={fadeUpStagger}
      >

        <motion.p
          variants={fadeUpItem}
          className="
            text-terracotta
            tracking-[0.35em]
            text-[10px]
            md:text-xs
            font-medium
            mb-10
            uppercase
          "
        >
          Why Work Together
        </motion.p>


        <motion.h2
          variants={fadeUpItem}
          className="
            font-serif
            text-4xl
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
            text-brown-900
            dark:text-beige-100
            leading-[1.1]
            mb-10
          "
        >
          Every great project
          <br />
          starts with a{" "}
          <span className="text-terracotta italic">
            conversation.
          </span>
        </motion.h2>


        <motion.p
          variants={fadeUpItem}
          className="
            text-brown-500
            dark:text-beige-400
            text-base
            md:text-lg
            leading-relaxed
            max-w-2xl
            mx-auto
          "
        >
          Tell me about your brand, campaign,
          product or creative vision and let's
          build something memorable together.
        </motion.p>

      </motion.div>

    </section>
  );
}


/* ============================================================
   SERVICES
============================================================ */

const services = [
  "BRAND DESIGN",
  "PACKAGING",
  "E-COMMERCE",
  "PRODUCT VISUALS",
  "SOCIAL MEDIA",
  "CAMPAIGNS",
];


function ServiceSelector() {
  return (
    <section
      className="
        relative
        z-10
        bg-beige-100
        dark:bg-brown-950
        pb-24
        md:pb-36
        px-6
      "
    >

      <motion.div
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          margin: "-60px",
        }}
        variants={fadeUpStagger}
      >

        <motion.p
          variants={fadeUpItem}
          className="
            text-terracotta
            tracking-[0.35em]
            text-[10px]
            md:text-xs
            font-medium
            mb-12
            text-center
            uppercase
          "
        >
          What Are We Creating?
        </motion.p>


        <div
          className="
            flex
            flex-wrap
            justify-center
            gap-x-8
            gap-y-5
            md:gap-x-14
            md:gap-y-6
          "
        >

          {services.map((service) => (

            <motion.button
              key={service}
              variants={fadeUpItem}
              className="
                group
                flex
                items-center
                gap-3
                cursor-default
              "
              whileHover={{
                x: 5,
              }}
              transition={{
                duration: 0.35,
                ease: easeLuxury,
              }}
            >

              <span
                className="
                  relative
                  flex
                  h-3.5
                  w-3.5
                  items-center
                  justify-center
                "
              >

                <span
                  className="
                    absolute
                    inset-0
                    rounded-full
                    border
                    border-brown-300
                    dark:border-beige-600
                    group-hover:border-terracotta
                    transition-colors
                    duration-400
                  "
                />

                <span
                  className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-terracotta
                    scale-0
                    group-hover:scale-100
                    transition-transform
                    duration-300
                  "
                />

              </span>

              <span
                className="
                  text-xs
                  md:text-sm
                  tracking-[0.2em]
                  text-brown-600
                  dark:text-beige-400
                  group-hover:text-terracotta
                  transition-colors
                  duration-400
                  uppercase
                "
              >
                {service}
              </span>

            </motion.button>

          ))}

        </div>

      </motion.div>

    </section>
  );
}


/* ============================================================
   CONTACT FORM
   PREMIUM HIGHLIGHTED FORM
============================================================ */

const projectTypes = [
  "IMAGES",
  "VIDEOS",
  "PRODUCT VISUALS",
  "SHORT-FORM VIDEOS",
];


function ContactForm() {

  const [selectedType, setSelectedType] =
    useState("");

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      phone: "",
      details: "",
    });


  const [focusedField, setFocusedField] =
    useState("");


  const handleChange = useCallback(
    (e) => {
      setFormData((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    },
    []
  );


  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      console.log({
        ...formData,
        projectType: selectedType,
      });
    },
    [formData, selectedType]
  );


  const inputClasses = `
    w-full
    px-8
    py-5
    rounded-full
    bg-white/30
    dark:bg-white/[0.03]

    border
    border-brown-300/40
    dark:border-beige-300/20

    text-brown-900
    dark:text-beige-100

    placeholder:text-brown-400/50
    dark:placeholder:text-beige-400/40

    placeholder:uppercase
    placeholder:text-xs
    placeholder:tracking-wider

    focus:border-terracotta
    focus:bg-white/50
    dark:focus:bg-white/[0.06]

    focus:outline-none

    transition-all
    duration-500

    text-sm
    md:text-base
  `;


  return (
    <section
      id="contact-form"
      className="
        relative
        z-10
        bg-beige-100
        dark:bg-brown-950
        py-24
        md:py-36
        px-6
        overflow-hidden
      "
    >

      {/* ==================================================
          FORM AMBIENT GLOW
      ================================================== */}

      <div
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[500px]
          h-[500px]
          rounded-full
          bg-terracotta/10
          blur-[120px]
          pointer-events-none
        "
      />


      <motion.div
        className="relative max-w-4xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          margin: "-80px",
        }}
        variants={fadeUpStagger}
      >

        {/* ==================================================
            FORM CARD
        ================================================== */}

        <motion.div
          variants={fadeUpItem}
          className="
            relative
            rounded-[2rem]
            border
            border-brown-300/50
            dark:border-beige-200/10

            bg-white/30
            dark:bg-white/[0.025]

            backdrop-blur-xl

            px-6
            py-12
            md:px-12
            md:py-16

            shadow-[0_30px_100px_rgba(70,45,30,0.08)]
          "
        >

          {/* TOP ACCENT */}

          <div
            className="
              absolute
              top-0
              left-1/2
              -translate-x-1/2
              w-32
              h-px
              bg-terracotta
            "
          />


          {/* ==================================================
              HEADER
          ================================================== */}

          <div className="text-center mb-16">

            <motion.div
              variants={fadeUpItem}
              className="
                inline-flex
                items-center
                gap-2
                text-terracotta
                text-[10px]
                tracking-[0.3em]
                uppercase
                mb-6
              "
            >
              <Sparkles size={12} />

              Let's Talk

            </motion.div>


            <motion.h2
              variants={fadeUpItem}
              className="
                font-serif
                text-4xl
                md:text-5xl
                lg:text-6xl
                text-brown-900
                dark:text-beige-100
                mb-6
              "
            >
              Let's start something{" "}
              <span className="italic text-terracotta">
                great.
              </span>
            </motion.h2>


            <motion.p
              variants={fadeUpItem}
              className="
                text-brown-500
                dark:text-beige-400
                text-sm
                md:text-base
              "
            >
              Tell me about your brand, project,
              timeline and creative vision.
            </motion.p>

          </div>


          {/* ==================================================
              FORM
          ================================================== */}

          <motion.form
            variants={fadeUpItem}
            onSubmit={handleSubmit}
            className="space-y-6"
            noValidate
          >

            {/* NAME + EMAIL */}

            <div
              className="
                grid
                md:grid-cols-2
                gap-6
              "
            >

              <div>

                <label
                  htmlFor="name"
                  className="sr-only"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() =>
                    setFocusedField("name")
                  }
                  onBlur={() =>
                    setFocusedField("")
                  }
                  className={`
                    ${inputClasses}
                    ${
                      focusedField === "name"
                        ? "ring-1 ring-terracotta/20"
                        : ""
                    }
                  `}
                  placeholder="ENTER NAME"
                  required
                />

              </div>


              <div>

                <label
                  htmlFor="email"
                  className="sr-only"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() =>
                    setFocusedField("email")
                  }
                  onBlur={() =>
                    setFocusedField("")
                  }
                  className={`
                    ${inputClasses}
                    ${
                      focusedField === "email"
                        ? "ring-1 ring-terracotta/20"
                        : ""
                    }
                  `}
                  placeholder="YOUR@EMAIL.COM"
                  required
                />

              </div>

            </div>


            {/* PHONE */}

            <div>

              <label
                htmlFor="phone"
                className="sr-only"
              >
                Phone
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="ENTER NUMBER"
                className={inputClasses}
              />

            </div>


            {/* =================================================
                PROJECT TYPE
            ================================================= */}

            <div className="py-5">

              <p
                className="
                  text-[10px]
                  tracking-[0.3em]
                  text-brown-400
                  dark:text-beige-500
                  mb-6
                  uppercase
                "
              >
                Project Type
              </p>


              <div
                className="
                  flex
                  flex-wrap
                  gap-5
                  md:gap-8
                "
              >

                {projectTypes.map((type) => (

                  <button
                    key={type}
                    type="button"
                    onClick={() =>
                      setSelectedType(type)
                    }
                    className="
                      group
                      flex
                      items-center
                      gap-3
                      focus:outline-none
                    "
                    aria-pressed={
                      selectedType === type
                    }
                  >

                    <span
                      className="
                        relative
                        flex
                        h-5
                        w-5
                        items-center
                        justify-center
                      "
                    >

                      <span
                        className={`
                          absolute
                          inset-0
                          rounded-full
                          border
                          transition-all
                          duration-300

                          ${
                            selectedType === type
                              ? "border-terracotta bg-terracotta"
                              : "border-brown-300 dark:border-beige-600 group-hover:border-terracotta"
                          }
                        `}
                      />

                      {selectedType === type && (
                        <motion.span
                          initial={{
                            scale: 0,
                          }}
                          animate={{
                            scale: 1,
                          }}
                          className="
                            h-2
                            w-2
                            rounded-full
                            bg-white
                          "
                        />
                      )}

                    </span>


                    <span
                      className={`
                        text-xs
                        tracking-wide
                        transition-colors
                        duration-300

                        ${
                          selectedType === type
                            ? "text-terracotta font-medium"
                            : "text-brown-600 dark:text-beige-400 group-hover:text-terracotta"
                        }
                      `}
                    >
                      {type}
                    </span>

                  </button>

                ))}

              </div>

            </div>


            {/* =================================================
                DETAILS
            ================================================= */}

            <div>

              <label
                htmlFor="details"
                className="sr-only"
              >
                Project Details
              </label>

              <textarea
                id="details"
                name="details"
                rows={5}
                value={formData.details}
                onChange={handleChange}
                className={`
                  ${inputClasses}
                  rounded-3xl
                  py-6
                  resize-none
                `}
                placeholder="TELL ME ABOUT YOUR PROJECT..."
              />

            </div>


            {/* =================================================
                SUBMIT
            ================================================= */}

            <motion.button
              type="submit"
              whileHover={{
                scale: 1.015,
              }}
              whileTap={{
                scale: 0.985,
              }}
              className="
                group
                relative
                overflow-hidden

                w-full
                py-5
                px-8
                rounded-full

                bg-brown-900
                dark:bg-beige-100

                text-beige-100
                dark:text-brown-900

                font-medium
                tracking-wide

                hover:bg-terracotta

                transition-colors
                duration-500

                flex
                items-center
                justify-center
                gap-3

                text-sm
                md:text-base
              "
            >

              <span className="relative z-10">
                GET IN TOUCH
              </span>

              <ArrowRight
                size={18}
                strokeWidth={1.5}
                className="
                  relative
                  z-10
                  group-hover:translate-x-1
                  transition-transform
                  duration-300
                "
              />

            </motion.button>

          </motion.form>

        </motion.div>

      </motion.div>

    </section>
  );
}


/* ============================================================
   CONTACT INFORMATION
============================================================ */

function ContactInfo() {

  const socials = [
    {
      name: "Instagram",
      href: "#",
    },
    {
      name: "LinkedIn",
      href: "#",
    },
    {
      name: "Behance",
      href: "#",
    },
  ];


  return (
    <section
      className="
        relative
        z-10
        bg-beige-100
        dark:bg-brown-950
        pb-32
        md:pb-40
        px-6
      "
    >

      <motion.div
        className="max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          margin: "-60px",
        }}
        variants={fadeUpStagger}
      >

        <div
          className="
            border-t
            border-brown-200
            dark:border-brown-800
            pt-16
            md:pt-20
          "
        >

          <div
            className="
              grid
              md:grid-cols-3
              gap-12
              md:gap-8
            "
          >

            {/* EMAIL */}

            <motion.div variants={fadeUpItem}>

              <p
                className="
                  text-[10px]
                  tracking-[0.35em]
                  text-brown-400
                  dark:text-beige-500
                  mb-4
                  uppercase
                "
              >
                Email
              </p>

              <a
                href="mailto:mona.aswal@email.com"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  text-brown-900
                  dark:text-beige-100
                  hover:text-terracotta
                  transition-colors
                  duration-300
                "
              >

                <Mail
                  size={14}
                  strokeWidth={1.5}
                  className="
                    text-brown-400
                    dark:text-beige-500
                    group-hover:text-terracotta
                    transition-colors
                  "
                />

                <span
                  className="
                    text-sm
                    md:text-base
                    tracking-wide
                  "
                >
                  mona.aswal@email.com
                </span>

              </a>

            </motion.div>


            {/* LOCATION */}

            <motion.div variants={fadeUpItem}>

              <p
                className="
                  text-[10px]
                  tracking-[0.35em]
                  text-brown-400
                  dark:text-beige-500
                  mb-4
                  uppercase
                "
              >
                Location
              </p>

              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  text-brown-900
                  dark:text-beige-100
                "
              >

                <MapPin
                  size={14}
                  strokeWidth={1.5}
                  className="
                    text-brown-400
                    dark:text-beige-500
                  "
                />

                <span
                  className="
                    text-sm
                    md:text-base
                    tracking-wide
                  "
                >
                  India
                </span>

              </div>

            </motion.div>


            {/* SOCIAL */}

            <motion.div variants={fadeUpItem}>

              <p
                className="
                  text-[10px]
                  tracking-[0.35em]
                  text-brown-400
                  dark:text-beige-500
                  mb-4
                  uppercase
                "
              >
                Social
              </p>


              <div className="flex items-center gap-5">

                {socials.map((social) => (

                  <a
                    key={social.name}
                    href={social.href}
                    className="
                      text-sm
                      tracking-wide
                      text-brown-900
                      dark:text-beige-100
                      hover:text-terracotta
                      transition-colors
                      duration-300
                    "
                  >
                    {social.name}
                  </a>

                ))}

              </div>

            </motion.div>

          </div>

        </div>

      </motion.div>

    </section>
  );
}


/* ============================================================
   MAIN
============================================================ */

export default function Contact() {

  return (
    <main
      className="
        bg-beige-100
        dark:bg-brown-950
      "
    >

      <ContactHero />

      <ContactIntro />

      <ServiceSelector />

      <ContactForm />

      <ContactInfo />

      <Footer />

    </main>
  );
}