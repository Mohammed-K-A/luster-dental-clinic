import { motion } from "motion/react";
import {
  FaUserMd,
  FaTeeth,
  FaShieldAlt,
  FaSmile,
  FaClock,
  FaAward,
  FaMapMarkerAlt,
} from "react-icons/fa";

const features = [
  {
    icon: <FaUserMd size={24} />,
    title: "Experienced Doctors",
    description:
      "Our experienced clinical team provides personalized dental and facial aesthetic care with a focus on safety, precision, and patient comfort.",
  },
  {
    icon: <FaTeeth size={24} />,
    title: "Advanced Technology",
    description:
      "Modern equipment and treatment techniques support precise, comfortable care across both facial aesthetics and dentistry.",
  },
  {
    icon: <FaShieldAlt size={24} />,
    title: "Safe & Sterile",
    description:
      "Strict sterilization protocols and infection control practices help maintain a safe and comfortable clinical environment.",
  },
  {
    icon: <FaSmile size={24} />,
    title: "Personalized Care",
    description:
      "Every patient receives a customized treatment approach based on their individual dental and facial aesthetic needs.",
  },
  {
    icon: <FaClock size={24} />,
    title: "Flexible Appointments",
    description:
      "Convenient appointment scheduling helps you plan your treatment with minimal waiting time.",
  },
  {
    icon: <FaAward size={24} />,
    title: "Trusted Care",
    description:
      "We are committed to providing quality dental and facial aesthetic treatments with attention to patient comfort and care.",
  },
];

function WhyChooseUs() {
  return (
    <section
      id="why-us"
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

        {/* =========================================================
            SECTION HEADING
        ========================================================== */}

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
            Why Choose Us
          </motion.p>


          {/* Main Heading */}

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
              text-slate-900
              sm:text-5xl
            "
            style={{
              fontFamily: "var(--font-heading)",
            }}
          >
            Advanced Care
            <br />
            With Confidence
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
            At Luster Dental & Facial Aesthetic Clinic, we combine
            clinical expertise, modern technology and personalized care
            to provide comfortable and quality treatment for every patient.
          </motion.p>

        </div>


        {/* =========================================================
            WHY CHOOSE US FEATURES
        ========================================================== */}

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
                staggerChildren: 0.1,
                delayChildren: 0.25,
              },
            },
          }}
          className="
            mt-12
            grid
            gap-5
            sm:mt-16
            sm:gap-8
            md:grid-cols-2
            lg:grid-cols-3
          "
        >

          {features.map((item, index) => (

            <motion.div
              key={index}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 30,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.55,
                    ease: "easeOut",
                  },
                },
              }}
              whileHover={{
                y: -7,
                transition: {
                  duration: 0.2,
                  ease: "easeOut",
                },
              }}
              className="
                group
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-6
                shadow-sm
                transition-shadow
                duration-300
                hover:shadow-xl
                sm:p-8
              "
            >

              {/* Icon */}

              <motion.div
                whileHover={{
                  scale: 1.08,
                  rotate: 4,
                }}
                transition={{
                  duration: 0.25,
                  ease: "easeOut",
                }}
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-blue-100
                  text-blue-700
                  transition-colors
                  duration-300
                  group-hover:bg-blue-700
                  group-hover:text-white
                "
              >
                {item.icon}
              </motion.div>


              {/* Title */}

              <h3
                className="
                  mt-5
                  text-xl
                  font-semibold
                  text-slate-900
                  transition-colors
                  duration-300
                  group-hover:text-blue-700
                  sm:mt-6
                  sm:text-2xl
                "
              >
                {item.title}
              </h3>


              {/* Description */}

              <p
                className="
                  mt-3
                  text-sm
                  leading-7
                  text-slate-600
                  sm:mt-4
                  sm:text-base
                "
              >
                {item.description}
              </p>

            </motion.div>

          ))}

        </motion.div>


        {/* =========================================================
            LOCAL SEO SECTION
        ========================================================== */}

        <motion.div
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
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            delay: 0.15,
            ease: "easeOut",
          }}
          className="
            relative
            mt-16
            overflow-hidden
            rounded-[32px]
            border
            border-blue-100
            bg-gradient-to-br
            from-blue-50
            via-white
            to-cyan-50
            p-6
            shadow-sm
            sm:mt-20
            sm:p-10
            lg:p-12
          "
        >
          {/* Decorative Glow */}

          <div
            className="
              pointer-events-none
              absolute
              -right-24
              -top-24
              h-56
              w-56
              rounded-full
              bg-blue-200/25
              blur-3xl
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -bottom-24
              -left-24
              h-56
              w-56
              rounded-full
              bg-cyan-200/20
              blur-3xl
            "
          />

          <div className="relative z-10">

            {/* =====================================================
                LOCATION
            ====================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                x: -12,
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
              }}
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-white/90
                px-4
                py-2
                text-xs
                font-semibold
                text-blue-700
                shadow-sm
                ring-1
                ring-blue-100
                backdrop-blur-sm
                sm:px-5
                sm:py-2.5
                sm:text-sm
              "
            >
              <FaMapMarkerAlt
                size={13}
                className="shrink-0"
              />

              <span>
                Valayamkulam, Kerala
              </span>
            </motion.div>


            {/* =====================================================
                HEADING
            ====================================================== */}

            <h3
              className="
                mt-5
                max-w-4xl
                text-[1.75rem]
                font-bold
                leading-[1.2]
                text-slate-900
                sm:mt-6
                sm:text-4xl
                lg:text-[2.7rem]
              "
              style={{
                fontFamily: "var(--font-heading)",
              }}
            >
              Dental & Facial Aesthetic Care in Valayamkulam
            </h3>


            {/* =====================================================
                DESCRIPTION
            ====================================================== */}

            <p
              className="
                mt-4
                max-w-5xl
                text-[15px]
                leading-1.65
                text-slate-600
                sm:mt-5
                sm:text-lg
                sm:leading-8
              "
            >
              Luster Dental & Facial Aesthetic Clinic provides comprehensive dental and facial aesthetic treatments in Valayamkulam. From dental implants, root canal treatment, braces and teeth whitening to HydraFacial, chemical peels, PRP therapy and skin rejuvenation, our clinic brings modern dental and aesthetic care together under one roof.
            </p>


            {/* =====================================================
                SEO SERVICE PILLS
            ====================================================== */}

            <div
              className="
                mt-7
                grid
                grid-cols-2
                gap-2.5
                sm:mt-8
                sm:flex
                sm:flex-wrap
                sm:gap-3
              "
            >
              {[
                "Dental Clinic in Valayamkulam",
                "Dental Implants",
                "Root Canal Treatment",
                "Teeth Whitening",
                "Braces & Aligners",
                "Facial Aesthetic Treatments in Valayamkulam",
                "HydraFacial",
                "Skin Rejuvenation",
                "Chemical Peels",
                "PRP Therapy",
              ].map((service, index) => {
                const isLong =
                  service === "Dental Clinic in Valayamkulam" ||
                  service ===
                  "Facial Aesthetic Treatments in Valayamkulam";

                return (
                  <motion.span
                    key={service}
                    initial={{
                      opacity: 0,
                      y: 8,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.35,
                      delay: index * 0.04,
                    }}
                    whileHover={{
                      y: -2,
                      scale: 1.01,
                      boxShadow:
                        "0 8px 24px rgba(37, 99, 235, 0.10)",
                    }}
                    className={`
                      relative
                      inline-flex
                      min-h-[38px]
                      items-center
                      justify-center
                      overflow-hidden
                      rounded-full
                      border
                      border-white/70
                      bg-white/40
                      px-3
                      py-2
                      text-center
                      text-[10px]
                      font-medium
                      leading-4
                      text-slate-600

                      shadow-[0_4px_15px_rgba(15,23,42,0.06),inset_0_1px_0_rgba(255,255,255,0.9)]

                      backdrop-blur-xl
                      backdrop-saturate-150

                      transition-all
                      duration-300

                      hover:border-blue-100/80
                      hover:bg-white/55
                      hover:text-blue-700

                      ${isLong ? "col-span-2" : ""}

                      sm:min-h-0
                      sm:w-fit
                      sm:px-5
                      sm:py-2.5
                      sm:text-sm
                    `}
                  >

                    {/* Glass Highlight */}

                    <span
                      className="
                        pointer-events-none
                        absolute
                        inset-x-4
                        top-0
                        h-px
                        rounded-full
                        bg-white/90
                        opacity-80
                      "
                    />

                    {/* Soft Glass Reflection */}

                    <span
                      className="
                        pointer-events-none
                        absolute
                        -left-6
                        top-1/2
                        h-8
                        w-16
                        -translate-y-1/2
                        rotate-[-20deg]
                        rounded-full
                        bg-white/20
                        blur-md
                      "
                    />

                    <span className="relative z-10">
                      {service}
                    </span>

                  </motion.span>
                );
              })}
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default WhyChooseUs;