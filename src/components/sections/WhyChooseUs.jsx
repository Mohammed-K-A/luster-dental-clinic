import { motion } from "motion/react";
import {
  FaUserMd,
  FaTeeth,
  FaShieldAlt,
  FaSmile,
  FaClock,
  FaAward,
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
      "Strict sterilization protocols and infection control for complete patient safety.",
  },
  {
    icon: <FaSmile size={24} />,
    title: "Personalized Care",
    description:
      "Every patient receives a customized treatment plan based on their unique needs.",
  },
  {
    icon: <FaClock size={24} />,
    title: "Flexible Appointments",
    description:
      "Convenient appointment scheduling with minimal waiting time.",
  },
  {
    icon: <FaAward size={24} />,
    title: "Trusted Care",
    description:
      "Committed to delivering quality facial aesthetic and dental treatments you can trust.",
  },
];

function WhyChooseUs() {
  return (
    <section
      id="why-us"
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
            Why Choose Us
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
            We combine clinical excellence, modern technology and compassionate
            care across facial aesthetics and dentistry, creating a comfortable
            experience tailored to every patient.
          </motion.p>

        </div>


        {/* =========================================
            FEATURES
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
                  duration: 0.25,
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
                "
              >
                {item.icon}
              </motion.div>


              {/* Title */}

              <h3 className="mt-5 text-xl font-semibold sm:mt-6 sm:text-2xl">
                {item.title}
              </h3>


              {/* Description */}

              <p className="mt-3 text-sm leading-7 text-slate-600 sm:mt-4 sm:text-base">
                {item.description}
              </p>

            </motion.div>

          ))}

        </motion.div>

      </div>
    </section>
  );
}

export default WhyChooseUs;