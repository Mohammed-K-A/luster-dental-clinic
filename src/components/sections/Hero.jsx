import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { bookingWhatsappLink } from "../../data/clinic";
import {
  Sparkles,
  Smile,
  HeartHandshake,
} from "lucide-react";

function Hero() {
  const typingTexts = [
    "Smile With Confidence.",
    "Glow With Confidence.",
    "Live With Confidence.",
  ];

  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  /* =========================
     TYPING ANIMATION
  ========================== */

  useEffect(() => {
    let index = 0;
    let deleting = false;
    let timeout;

    const currentText = typingTexts[textIndex];

    const animateText = () => {
      if (!deleting) {
        setDisplayText(currentText.slice(0, index + 1));
        index++;

        if (index === currentText.length) {
          setIsTyping(false);

          timeout = setTimeout(() => {
            deleting = true;
            setIsTyping(true);
            animateText();
          }, 1800);

          return;
        }

        timeout = setTimeout(animateText, 80);
      } else {
        setDisplayText(currentText.slice(0, index - 1));
        index--;

        if (index === 0) {
          deleting = false;

          const nextIndex =
            (textIndex + 1) % typingTexts.length;

          setTextIndex(nextIndex);

          timeout = setTimeout(animateText, 400);

          return;
        }

        timeout = setTimeout(animateText, 45);
      }
    };

    animateText();

    return () => clearTimeout(timeout);
  }, [textIndex]);

  return (
    <section
      id="home"
      className="
        relative
        flex
        min-h-screen
        items-center
        overflow-hidden
        pt-40
        pb-20
        sm:pt-44
        sm:pb-24
        lg:pt-36
        lg:min-h-[92vh]
      "
    >

      {/* =========================
          BACKGROUND BLUR
      ========================== */}

      <motion.div
        className="
          absolute
          -left-32
          top-32
          h-80
          w-80
          rounded-full
          bg-blue-200/30
          blur-3xl
        "
        animate={{
          y: [0, -12, 0],
          x: [0, 8, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="
          absolute
          right-0
          top-20
          h-96
          w-96
          rounded-full
          bg-cyan-200/20
          blur-3xl
        "
        animate={{
          y: [0, 14, 0],
          x: [0, -8, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />


      {/* =========================
          MAIN CONTENT
      ========================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          w-full
          max-w-7xl
          items-center
          gap-12
          px-5
          sm:px-6
          lg:grid-cols-[1.1fr_0.9fr]
          lg:gap-10
          lg:px-8
        "
      >

        {/* =========================
            LEFT CONTENT
        ========================== */}

        <div>

          {/* Welcome Badge */}

          <motion.p
            className="
              inline-flex
              rounded-full
              bg-blue-100
              px-4
              py-2
              text-xs
              font-semibold
              uppercase
              tracking-[0.15em]
              text-blue-700
              sm:px-5
              sm:text-sm
              sm:tracking-[0.2em]
            "
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
          >
            Welcome to Luster Dental Clinic
          </motion.p>


          {/* Main Heading */}

          <motion.h1
            className="
              mt-6
              max-w-[800px]
              text-4xl
              font-bold
              leading-[1.08]
              tracking-tight
              text-slate-900
              sm:text-5xl
              lg:mt-6
              lg:text-7xl
            "
            style={{
              fontFamily: "var(--font-heading)",
            }}
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: "easeOut",
            }}
          >

            {/* Static Heading */}

            Reveal Your Natural Beauty.

            {/* Animated Heading */}

            <span
              className="
                block
                min-h-[1.08em]
                whitespace-nowrap
                bg-gradient-to-r
                from-amber-500
                via-yellow-500
                to-blue-700
                bg-clip-text
                text-transparent
              "
            >
              {displayText}

              {/* Cursor */}

              {isTyping && (
                <span
                  className="
                    ml-1
                    inline-block
                    h-[0.85em]
                    w-[2px]
                    translate-y-[0.08em]
                    bg-blue-700
                    align-middle
                    animate-pulse
                  "
                />
              )}
            </span>

          </motion.h1>


          {/* =========================
              SUBHEADING
          ========================== */}

          <motion.h2
            className="
              mt-5
              text-xl
              font-semibold
              leading-snug
              text-slate-700
              sm:text-2xl
              lg:mt-6
              lg:text-3xl
              lg:whitespace-nowrap
            "
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease: "easeOut",
            }}
          >
            Advanced Facial Aesthetic & Dental Care
            <br />
            Under One Roof
          </motion.h2>


          {/* Description */}

          <motion.p
            className="
              mt-6
              max-w-xl
              text-base
              leading-7
              text-slate-600
              sm:mt-8
              sm:text-lg
              sm:leading-8
            "
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.3,
              ease: "easeOut",
            }}
          >
            At Luster Dental & Facial Aesthetic Clinic, we bring modern
            facial aesthetic treatments and advanced dental care together,
            helping you achieve radiant skin, enhanced features, a healthy
            smile, and renewed confidence through personalized care.
          </motion.p>


          {/* =========================
              BUTTONS
          ========================== */}

          <motion.div
            className="
              mt-8
              flex
              flex-col
              gap-3
              sm:mt-10
              sm:flex-row
              sm:flex-wrap
              sm:gap-5
            "
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.4,
              ease: "easeOut",
            }}
          >

            {/* Book Consultation */}

            <motion.a
              href={bookingWhatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                w-full
                items-center
                justify-center
                rounded-full
                bg-gradient-to-r
                from-blue-700
                to-blue-600
                px-7
                py-3.5
                font-semibold
                text-white
                shadow-lg
                sm:w-auto
              "
              whileHover={{
                y: -3,
                scale: 1.02,
                boxShadow:
                  "0 12px 25px rgba(37, 99, 235, 0.25)",
              }}
              whileTap={{
                scale: 0.98,
              }}
              transition={{
                duration: 0.2,
              }}
            >
              Book Consultation
            </motion.a>


            {/* View Treatments */}

            <motion.a
              href="#treatments"
              className="
                inline-flex
                w-full
                items-center
                justify-center
                rounded-full
                border
                border-slate-300
                bg-white
                px-7
                py-3.5
                font-semibold
                text-slate-800
                sm:w-auto
              "
              whileHover={{
                y: -3,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.98,
              }}
              transition={{
                duration: 0.2,
              }}
            >
              View Treatments
            </motion.a>

          </motion.div>

        </div>


        {/* =========================
            RIGHT IMAGE - GLASSMORPHISM
        ========================== */}

        <motion.div
          className="
            flex
            justify-center
            lg:translate-x-12
            xl:translate-x-12
          "
          initial={{
            opacity: 0,
            scale: 0.94,
            y: 20,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.25,
            ease: "easeOut",
          }}
        >

          {/* Glass Frame */}

          <div
            className="
              relative
              w-full
              max-w-md
              rounded-[32px]
              border
              border-white/70
              bg-white/20
              p-2
              shadow-[0_25px_60px_rgba(30,64,175,0.18)]
              backdrop-blur-md
              sm:max-w-xl
              sm:p-2.5
              lg:max-w-2xl
              lg:rounded-[36px]
              lg:p-3
            "
          >

            {/* Soft Glass Glow */}

            <div
              className="
                pointer-events-none
                absolute
                -inset-2
                -z-10
                rounded-[38px]
                bg-blue-300/20
                blur-2xl
              "
            />

            {/* Image */}

            <motion.img
              src="/images/hero/hero.png"
              alt="Luster Dental Clinic"
              className="
                relative
                z-10
                block
                w-full
                rounded-[25px]
                border
                border-white/60
                object-cover
                shadow-[0_15px_40px_rgba(15,23,42,0.12)]
                sm:rounded-[28px]
                lg:rounded-[30px]
              "
              whileHover={{
                scale: 1.015,
              }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
            />

            {/* Glass Highlight */}

            <div
              className="
                pointer-events-none
                absolute
                inset-x-6
                top-3
                z-20
                h-px
                rounded-full
                bg-white/80
                blur-[1px]
              "
            />

          </div>

        </motion.div>


        {/* =========================
            FEATURES
            FULL WIDTH + CENTERED
        ========================== */}

        <motion.div
          className="
            col-span-1
            mx-auto
            mt-10
            grid
            w-full
            max-w-[280px]
            grid-cols-1
            gap-4

            sm:mt-12

            md:max-w-[650px]
            md:grid-cols-3
            md:gap-6

            lg:col-span-2
            lg:mt-16
            lg:max-w-[760px]
            lg:gap-8
          "
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
                delayChildren: 0.5,
              },
            },
          }}
        >
          {[
            {
              icon: Sparkles,
              title: "Advanced Facial Aesthetics",
            },
            {
              icon: Smile,
              title: "Advanced Dental Care",
            },
            {
              icon: HeartHandshake,
              title: "Personalized Treatment",
            },
          ].map((feature) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 18,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                transition={{
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -2,
                }}
                className="
                  group
                  flex
                  w-full
                  items-center
                  justify-start
                  gap-3
                  py-2
                  transition-all
                  duration-300
                  md:justify-center
                  md:gap-4
                "
              >

                {/* Icon */}

                <motion.div
                  whileHover={{
                    scale: 1.08,
                    rotate: 3,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-blue-50
                    text-blue-700
                    ring-1
                    ring-blue-100
                    transition-colors
                    duration-300
                    group-hover:bg-blue-100
                  "
                >
                  <Icon
                    size={21}
                    strokeWidth={1.8}
                  />
                </motion.div>

                {/* Text */}

                <h3
                  className="
                    text-left
                    text-sm
                    font-semibold
                    leading-5
                    text-slate-700
                    transition-colors
                    duration-300
                    group-hover:text-blue-700
                    sm:text-base
                  "
                >
                  {feature.title}
                </h3>

              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;