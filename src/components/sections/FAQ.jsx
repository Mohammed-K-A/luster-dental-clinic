import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

import faq from "../../data/faq";
import { FaChevronDown } from "react-icons/fa";

function FAQ() {
  const [active, setActive] = useState(-1);

  return (
    <section
      id="faq"
      className="
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
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.1,
            }}
          >
            Frequently Asked Questions
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
            Got Questions?
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
            Here are some of the most common questions our patients ask.
          </motion.p>
        </motion.div>


        {/* =========================
            FAQ ACCORDION
        ========================== */}

        <div
          className="
            mx-auto
            mt-12
            max-w-5xl
            space-y-4
            sm:mt-16
            sm:space-y-5
          "
        >

          {faq.map((item, index) => (

            <motion.div
              key={index}
              className="
                overflow-hidden
                rounded-3xl
                border
                border-slate-200
                bg-white
              "
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -2,
                boxShadow:
                  "0 12px 30px rgba(15, 23, 42, 0.07)",
              }}
            >

              {/* Question */}

              <motion.button
                onClick={() =>
                  setActive(active === index ? -1 : index)
                }
                className="
                  flex
                  w-full
                  items-center
                  justify-between
                  gap-4
                  p-5
                  text-left
                  sm:gap-6
                  sm:p-6
                "
                whileTap={{
                  scale: 0.99,
                }}
              >

                <motion.h3
                  className="
                    text-base
                    font-semibold
                    leading-6
                    sm:text-lg
                  "
                  animate={{
                    color:
                      active === index
                        ? "#2563EB"
                        : "#0F172A",
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                >
                  {item.question}
                </motion.h3>


                {/* Chevron */}

                <motion.span
                  className="shrink-0"
                  animate={{
                    rotate: active === index ? 180 : 0,
                    color:
                      active === index
                        ? "#2563EB"
                        : "#64748B",
                  }}
                  transition={{
                    duration: 0.3,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <FaChevronDown />
                </motion.span>

              </motion.button>


              {/* Answer */}

              <AnimatePresence initial={false}>

                {active === index && (

                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0,
                    }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{
                      height: {
                        duration: 0.35,
                        ease: [0.22, 1, 0.36, 1],
                      },
                      opacity: {
                        duration: 0.25,
                      },
                    }}
                  >

                    <div className="px-5 pb-5 sm:px-6 sm:pb-6">

                      <motion.p
                        className="
                          text-sm
                          leading-7
                          text-slate-600
                          sm:text-base
                        "
                        initial={{
                          opacity: 0,
                          y: -8,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          duration: 0.3,
                          delay: 0.08,
                        }}
                      >
                        {item.answer}
                      </motion.p>

                    </div>

                  </motion.div>

                )}

              </AnimatePresence>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default FAQ;