import { motion } from "motion/react";
import doctors from "../../data/doctors";
import { FaArrowRight } from "react-icons/fa6";
import { bookingWhatsappLink } from "../../data/clinic";

function Doctors() {
  return (
    <section
      id="doctors"
      className="
        bg-white
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
            initial={{
              opacity: 0,
              y: 18,
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
              py-1
              text-xs
              font-semibold
              uppercase
              tracking-[0.3em]
              text-blue-700
              sm:px-5
              sm:py-1.5
              sm:text-sm
            "
          >
            Meet Our Doctors
          </motion.p>


          {/* Heading */}

          <motion.h2
            initial={{
              opacity: 0,
              y: 22,
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
              duration: 0.7,
              delay: 0.1,
              ease: "easeOut",
            }}
            className="
              mt-5
              text-4xl
              font-bold
              leading-tight
              sm:mt-6
              sm:text-5xl
            "
            style={{
              fontFamily: "var(--font-heading)",
            }}
          >
            Experienced Dental & Aesthetic Experts
          </motion.h2>


          {/* Description */}

          <motion.p
            initial={{
              opacity: 0,
              y: 18,
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
              duration: 0.7,
              delay: 0.2,
              ease: "easeOut",
            }}
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
            Our experienced clinical team combines expertise, compassion,
            and modern technology to provide exceptional dental and facial
            aesthetic care.
          </motion.p>

        </div>


        {/* =========================================
            DOCTOR CARDS
        ========================================= */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.25,
              },
            },
          }}
          className="
            mt-12
            grid
            gap-6
            sm:mt-16
            sm:gap-8
            lg:mt-20
            lg:grid-cols-2
          "
        >

          {doctors.map((doctor) => (

            <motion.div
              key={doctor.id}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 35,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.7,
                    ease: "easeOut",
                  },
                },
              }}
              whileHover={{
                y: -8,
                transition: {
                  duration: 0.3,
                  ease: "easeOut",
                },
              }}
              className="
                group
                overflow-hidden
                rounded-[32px]
                bg-slate-50
                shadow-md
                transition-shadow
                duration-500
                hover:shadow-2xl
              "
            >

              {/* =========================================
                  IMAGE
              ========================================= */}

              <div className="overflow-hidden">

                <motion.img
                  src={doctor.image}
                  alt={doctor.name}
                  initial={{
                    scale: 1.04,
                  }}
                  whileInView={{
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.9,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    scale: 1.05,
                    transition: {
                      duration: 0.7,
                      ease: "easeOut",
                    },
                  }}
                  className="
                    h-[360px]
                    w-full
                    object-cover
                    sm:h-[420px]
                    lg:h-[480px]
                  "
                />

              </div>


              {/* =========================================
                  CONTENT
              ========================================= */}

              <div className="p-6 sm:p-8">

                {/* Qualification */}

                <motion.span
                  initial={{
                    opacity: 0,
                    x: -10,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2,
                  }}
                  className="
                    inline-flex
                    rounded-full
                    bg-blue-100
                    px-3
                    py-1.5
                    text-xs
                    font-semibold
                    text-blue-700
                    sm:px-4
                    sm:py-2
                    sm:text-sm
                  "
                >
                  {doctor.qualification}
                </motion.span>


                {/* Name */}

                <h3 className="mt-4 text-2xl font-bold sm:mt-5 sm:text-3xl">
                  {doctor.name}
                </h3>


                {/* Specialization */}

                <p className="mt-2 text-base font-medium text-blue-700 sm:mt-3 sm:text-lg">
                  {doctor.specialization}
                </p>


                {/* Experience */}

                <p className="mt-2 text-sm text-slate-500 sm:text-base">
                  {doctor.experience}
                </p>


                {/* Description */}

                <p className="mt-5 text-sm leading-7 text-slate-600 sm:mt-6 sm:text-base sm:leading-8">
                  Dedicated to delivering personalized care with attention
                  to patient comfort, precision treatment, natural-looking
                  results, and long-term wellbeing.
                </p>


                {/* CTA */}

                <motion.a
                  href={bookingWhatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover="hover"
                  className="
                    mt-8
                    inline-flex
                    items-center
                    gap-2
                    font-semibold
                    text-blue-700
                  "
                >
                  Book Consultation

                  <motion.span
                    variants={{
                      hover: {
                        x: 5,
                      },
                    }}
                    transition={{
                      duration: 0.25,
                      ease: "easeOut",
                    }}
                  >
                    <FaArrowRight />
                  </motion.span>

                </motion.a>

              </div>

            </motion.div>

          ))}

        </motion.div>

      </div>
    </section>
  );
}

export default Doctors;