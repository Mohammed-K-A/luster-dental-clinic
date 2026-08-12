import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  dentalServices,
  facialServices,
} from "../../data/services";
import { Sparkles, Smile } from "lucide-react";

function Treatments() {
  const [activeTab, setActiveTab] = useState("facial");

  const isFacial = activeTab === "facial";

  const heading = isFacial
    ? "Facial Aesthetic Treatments"
    : "Complete Dental Care";

  const description = isFacial
    ? "Advanced facial aesthetic treatments designed to enhance your natural beauty, rejuvenate your skin, and boost your confidence."
    : "Comprehensive dental treatments to restore oral health, improve function, and create confident smiles.";

  const services = isFacial
    ? facialServices
    : dentalServices;

  return (
    <section
      id="treatments"
      className="
        py-20
        sm:py-24
        lg:py-28
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-7xl
          px-5
          sm:px-6
          lg:px-8
        "
      >

        {/* =========================================
            HEADING
        ========================================== */}

        <div className="text-center">

          {/* Section Label */}

          <motion.p
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
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
          >
            Our Treatments
          </motion.p>


          {/* Dynamic Heading + Description */}

          <AnimatePresence mode="wait">

            <motion.div
              key={activeTab}
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
                y: -12,
              }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
              }}
            >

              <h2
                className="
                  mt-5
                  text-4xl
                  font-bold
                  leading-tight
                  sm:text-5xl
                  lg:mt-6
                "
                style={{
                  fontFamily: "var(--font-heading)",
                }}
              >
                {heading}
              </h2>

              <p
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
              >
                {description}
              </p>

            </motion.div>

          </AnimatePresence>

        </div>


        {/* =========================================
            TREATMENT TABS
        ========================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.6,
            delay: 0.15,
            ease: "easeOut",
          }}
          className="
            mt-10
            mb-10
            flex
            justify-center
            sm:mt-14
            sm:mb-12
          "
        >

          <div
            className="
              flex
              w-full
              max-w-md
              rounded-3xl
              bg-slate-100
              p-2
              shadow-sm
              sm:w-auto
              sm:max-w-none
              sm:rounded-full
            "
          >

            {/* Facial Aesthetics */}

            <button
              onClick={() => setActiveTab("facial")}
              className={`
                flex-1
                rounded-full
                px-4
                py-3
                text-sm
                font-semibold
                transition-all
                duration-300
                sm:flex-none
                sm:px-8
                sm:text-base

                ${isFacial
                  ? "bg-gradient-to-r from-amber-500 to-yellow-500 text-white shadow-lg"
                  : "text-slate-600 hover:text-amber-600"
                }
              `}
            >
              <span className="inline-flex items-center justify-center gap-2">
                <Sparkles
                  size={18}
                  strokeWidth={2}
                />

                Facial Aesthetics
              </span>
            </button>


            {/* Dental Care */}

            <button
              onClick={() => setActiveTab("dental")}
              className={`
                flex-1
                rounded-full
                px-4
                py-3
                text-sm
                font-semibold
                transition-all
                duration-300
                sm:flex-none
                sm:px-8
                sm:text-base

                ${!isFacial
                  ? "bg-gradient-to-r from-blue-700 to-blue-500 text-white shadow-lg"
                  : "text-slate-600 hover:text-blue-700"
                }
              `}
            >
              <span className="inline-flex items-center justify-center gap-2">
                <Smile
                  size={18}
                  strokeWidth={2}
                />

                Dental Care
              </span>
            </button>

          </div>

        </motion.div>


        {/* =========================================
            TREATMENT CARDS
        ========================================== */}

        <AnimatePresence mode="wait">

          <motion.div
            key={activeTab}
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -15,
            }}
            transition={{
              duration: 0.45,
              ease: "easeOut",
            }}
            className="
              mt-10
              grid
              items-stretch
              gap-6
              sm:mt-14
              sm:gap-8
              md:grid-cols-2
              lg:mt-16
              lg:grid-cols-3
            "
          >

            {services.map((service, index) => (

              <motion.div
                key={service.id}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -6,
                  transition: {
                    duration: 0.2,
                    ease: "easeOut",
                  },
                }}
                className={`
                  group
                  flex
                  min-h-[600px]
                  flex-col
                  overflow-hidden
                  rounded-[30px]
                  border
                  bg-white/80
                  shadow-sm
                  backdrop-blur-sm
                  transition-all
                  duration-300

                  ${isFacial
                    ? `
                        border-amber-100
                        hover:border-amber-300
                        hover:shadow-[0_20px_45px_rgba(245,158,11,0.16)]
                      `
                    : `
                        border-blue-100
                        hover:border-blue-300
                        hover:shadow-[0_20px_45px_rgba(37,99,235,0.16)]
                      `
                  }
                `}
              >

                {/* =================================
                    TREATMENT IMAGE
                ================================== */}

                <div
                  className="
                    relative
                    flex
                    h-60
                    w-full
                    items-center
                    justify-center
                    overflow-hidden
                    bg-slate-50
                    p-3
                    sm:h-64
                    sm:p-4
                  "
                >

                  <motion.img
                    src={service.image}
                    alt={`${service.title} treatment at Luster Dental & Facial Aesthetic Clinic`}
                    loading="lazy"
                    className="
                      h-full
                      w-full
                      object-contain
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-[1.04]
                    "
                  />

                  {/* Soft Image Overlay */}

                  <div
                    className={`
                      pointer-events-none
                      absolute
                      inset-0
                      transition-opacity
                      duration-500

                      ${isFacial
                        ? "bg-gradient-to-t from-amber-500/5 via-transparent to-white/10"
                        : "bg-gradient-to-t from-blue-500/5 via-transparent to-white/10"
                      }
                    `}
                  />

                </div>


                {/* =================================
                    CARD CONTENT
                ================================== */}

                <div
                  className="
                    flex
                    flex-1
                    flex-col
                    p-7
                    sm:p-8
                  "
                >

                  {/* Title */}

                  <h3
                    className={`
                      min-h-[58px]
                      text-xl
                      font-bold
                      transition-colors
                      duration-300
                      sm:text-2xl

                      ${isFacial
                        ? "group-hover:text-amber-700"
                        : "group-hover:text-blue-700"
                      }
                    `}
                  >
                    {service.title}
                  </h3>


                  {/* Description */}

                  <p
                    className="
                      mt-4
                      text-base
                      leading-7
                      text-slate-600
                      sm:mt-5
                      sm:text-lg
                      sm:leading-8
                    "
                  >
                    {service.description}
                  </p>


                  {/* Benefits */}

                  <ul
                    className="
                      mt-7
                      space-y-3
                      sm:mt-8
                      sm:space-y-4
                    "
                  >

                    {service.benefits.map(
                      (item, benefitIndex) => (

                        <motion.li
                          key={benefitIndex}
                          initial={{
                            opacity: 0,
                            x: -8,
                          }}
                          animate={{
                            opacity: 1,
                            x: 0,
                          }}
                          transition={{
                            duration: 0.3,
                            delay:
                              0.15 +
                              benefitIndex * 0.05,
                          }}
                          className="
                            flex
                            items-start
                            gap-3
                            text-sm
                            leading-6
                            text-slate-600
                            sm:text-base
                          "
                        >

                          <span
                            className={`
                              mt-0.5
                              font-bold
                              ${isFacial
                                ? "text-amber-600"
                                : "text-blue-700"
                              }
                            `}
                          >
                            ✓
                          </span>

                          {item}

                        </motion.li>

                      )
                    )}

                  </ul>




                </div>

              </motion.div>

            ))}

          </motion.div>

        </AnimatePresence>

      </div>
    </section>
  );
}

export default Treatments;