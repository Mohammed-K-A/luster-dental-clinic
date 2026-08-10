import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  dentalServices,
  facialServices,
} from "../../data/services";
import { FaTooth } from "react-icons/fa6";
import { Sparkles } from "lucide-react";

function Treatments() {
  const [activeTab, setActiveTab] = useState("facial");

  const isFacial = activeTab === "facial";

  const heading = isFacial
    ? "Facial Aesthetic Treatments"
    : "Complete Dental Care";

  const description = isFacial
    ? "Advanced facial aesthetic treatments designed to enhance your natural beauty, rejuvenate your skin, and boost your confidence."
    : "Comprehensive dental treatments to restore oral health, improve function, and create confident smiles.";

  const services = isFacial ? facialServices : dentalServices;

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
        ========================================= */}

        <div className="text-center">

          {/* Section Label */}

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
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
        ========================================= */}

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

            {/* Facial */}

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

                ${
                  isFacial
                    ? "bg-gradient-to-r from-amber-500 to-yellow-500 text-white shadow-lg"
                    : "text-slate-600 hover:text-amber-600"
                }
              `}
            >
              ✨ Facial Aesthetics
            </button>


            {/* Dental */}

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

                ${
                  !isFacial
                    ? "bg-gradient-to-r from-blue-700 to-blue-500 text-white shadow-lg"
                    : "text-slate-600 hover:text-blue-700"
                }
              `}
            >
              🦷 Dental Care
            </button>

          </div>

        </motion.div>


        {/* =========================================
            TREATMENT CARDS
        ========================================= */}

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
              mt-12
              grid
              items-stretch
              gap-6
              sm:mt-16
              sm:gap-8
              md:grid-cols-2
              lg:mt-20
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
                  y: -8,
                  transition: {
                    duration: 0.25,
                  },
                }}
                className={`
                  group
                  flex
                  min-h-[340px]
                  flex-col
                  rounded-[30px]
                  border
                  bg-white
                  p-1
                  transition-shadow
                  duration-500
                  hover:shadow-2xl

                  ${
                    isFacial
                      ? "border-amber-100 hover:border-amber-300"
                      : "border-blue-100 hover:border-blue-300"
                  }
                `}
              >

                {/* Card Content */}

                <div className="flex h-full flex-col p-7 sm:p-8 lg:p-10">

                  {/* Icon */}

                  <motion.div
                    whileHover={{
                      scale: 1.08,
                      rotate: 3,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className={`
                      mb-6
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-2xl
                      text-3xl

                      ${
                        isFacial
                          ? "bg-amber-100 text-amber-700"
                          : "bg-blue-100 text-blue-700"
                      }
                    `}
                  >
                    {isFacial ? (
                      <Sparkles size={30} />
                    ) : (
                      <FaTooth size={30} />
                    )}
                  </motion.div>


                  {/* Title */}

                  <h3 className="mt-2 text-xl font-bold sm:text-2xl">
                    {service.title}
                  </h3>


                  {/* Description */}

                  <p className="mt-5 text-base leading-7 text-slate-600 sm:mt-6 sm:text-lg sm:leading-8">
                    {service.description}
                  </p>


                  {/* Benefits */}

                  <ul className="mt-6 space-y-3 sm:mt-8 sm:space-y-4">

                    {service.benefits.map((item, benefitIndex) => (

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
                          delay: 0.15 + benefitIndex * 0.05,
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
                          className={
                            isFacial
                              ? "font-bold text-amber-700"
                              : "font-bold text-blue-700"
                          }
                        >
                          ✓
                        </span>

                        {item}

                      </motion.li>

                    ))}

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