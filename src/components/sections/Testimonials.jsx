import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import testimonials from "../../data/testimonials";

import {
  FaQuoteLeft,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const showPrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const showNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="testimonials"
      className="
        bg-white
        py-20
        sm:py-24
        lg:py-28
      "
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* =========================
            HEADING
        ========================== */}

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {/* Section Label */}

          <motion.p
            className="
              inline-flex
              rounded-full
              bg-blue-100
              px-5
              py-2
              text-sm
              font-semibold
              uppercase
              tracking-[0.2em]
              text-blue-700
            "
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.1,
            }}
          >
            Testimonials
          </motion.p>

          {/* Heading */}

          <motion.h2
            className="
              mt-5
              text-4xl
              font-bold
              leading-tight
              sm:mt-6
              sm:text-5xl
            "
            style={{ fontFamily: "var(--font-heading)" }}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            What Our Patients Say
          </motion.h2>

          {/* Description */}

          <motion.p
            className="
              mx-auto
              mt-5
              max-w-3xl
              text-base
              leading-7
              text-slate-600
              sm:mt-6
              sm:text-lg
              sm:leading-8
            "
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Our patients trust us for compassionate care,
            advanced treatment and outstanding results.
          </motion.p>
        </motion.div>


        {/* =========================
            TESTIMONIAL CARD
        ========================== */}

        <motion.div
          className="
            relative
            mx-auto
            mt-12
            max-w-4xl
            px-10
            sm:mt-16
            sm:px-0
            lg:mt-20
          "
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          {/* Card */}

          <motion.div
            className="
              rounded-[28px]
              bg-slate-50
              p-7
              text-center
              shadow-md
              sm:rounded-[32px]
              sm:p-10
              md:p-14
            "
            whileHover={{
              y: -4,
              boxShadow:
                "0 20px 45px rgba(15, 23, 42, 0.10)",
            }}
            transition={{
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            {/* Quote Icon */}

            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.35,
                type: "spring",
                stiffness: 180,
                damping: 15,
              }}
            >
              <FaQuoteLeft
                className="mx-auto text-blue-700"
                size={32}
              />
            </motion.div>


            {/* Rating */}

            <motion.p
              className="
                mt-5
                text-base
                tracking-[0.2em]
                text-yellow-500
                sm:mt-6
                sm:text-lg
              "
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.45,
              }}
            >
              ★★★★★
            </motion.p>


            {/* =========================
                CHANGING TESTIMONIAL
            ========================== */}

            <div className="relative mt-7 min-h-[150px] sm:mt-8 sm:min-h-[165px]">

              <AnimatePresence mode="wait">

                <motion.div
                  key={currentIndex}
                  initial={{
                    opacity: 0,
                    y: 18,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -18,
                  }}
                  transition={{
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute inset-x-0 top-0"
                >

                  {/* Review */}

                  <p
                    className="
                      mx-auto
                      max-w-2xl
                      text-base
                      leading-7
                      text-slate-600
                      sm:text-lg
                      sm:leading-9
                    "
                  >
                    "{testimonials[currentIndex].review}"
                  </p>


                  {/* Patient */}

                  <div className="mt-7 sm:mt-8">

                    <h3 className="text-xl font-bold">
                      {testimonials[currentIndex].name}
                    </h3>

                    <p className="mt-1 text-slate-500">
                      Happy Patient
                    </p>

                  </div>

                </motion.div>

              </AnimatePresence>

            </div>

          </motion.div>


          {/* =========================
              PREVIOUS BUTTON
          ========================== */}

          <motion.button
            onClick={showPrevious}
            className="
              absolute
              left-0
              top-1/2
              flex
              h-9
              w-9
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              bg-white
              text-blue-700
              shadow-lg
              sm:h-12
              sm:w-12
              sm:-translate-x-6
            "
            aria-label="Previous testimonial"
            whileHover={{
              scale: 1.1,
              boxShadow:
                "0 10px 25px rgba(15, 23, 42, 0.15)",
            }}
            whileTap={{
              scale: 0.92,
            }}
            transition={{
              duration: 0.2,
            }}
          >
            <FaChevronLeft />
          </motion.button>


          {/* =========================
              NEXT BUTTON
          ========================== */}

          <motion.button
            onClick={showNext}
            className="
              absolute
              right-0
              top-1/2
              flex
              h-9
              w-9
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              bg-white
              text-blue-700
              shadow-lg
              sm:h-12
              sm:w-12
              sm:translate-x-6
            "
            aria-label="Next testimonial"
            whileHover={{
              scale: 1.1,
              boxShadow:
                "0 10px 25px rgba(15, 23, 42, 0.15)",
            }}
            whileTap={{
              scale: 0.92,
            }}
            transition={{
              duration: 0.2,
            }}
          >
            <FaChevronRight />
          </motion.button>

        </motion.div>


        {/* =========================
            DOTS
        ========================== */}

        <motion.div
          className="
            mt-7
            flex
            justify-center
            gap-2
            sm:mt-8
          "
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.4,
          }}
        >

          {testimonials.map((_, index) => (

            <motion.button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`
                h-2.5
                rounded-full
                ${
                  currentIndex === index
                    ? "w-8 bg-blue-700"
                    : "w-2.5 bg-slate-300"
                }
              `}
              aria-label={`Go to testimonial ${index + 1}`}
              animate={{
                width: currentIndex === index ? 32 : 10,
                opacity: currentIndex === index ? 1 : 0.7,
              }}
              transition={{
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                scale: 1.15,
              }}
              whileTap={{
                scale: 0.9,
              }}
            />

          ))}

        </motion.div>

      </div>
    </section>
  );
}

export default Testimonials;