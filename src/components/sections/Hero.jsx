import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { bookingWhatsappLink } from "../../data/clinic";

function Hero() {

  

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
      "
    >

      {/* Background Blur */}




      {/* Main Content */}

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
          lg:grid-cols-2
          lg:gap-16
          lg:px-8
        "
      >

        {/* Left Content */}

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
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
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
              max-w-2xl
              text-4xl
              font-bold
              leading-[1.08]
              tracking-tight
              text-slate-900
              sm:text-5xl
              lg:mt-6
              lg:text-7xl
            "
            style={{ fontFamily: "var(--font-heading)" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: "easeOut",
            }}
          >
            Reveal Your Natural Beauty.

            <span className="block bg-gradient-to-r from-amber-500 via-yellow-500 to-blue-700 bg-clip-text text-transparent">
              Smile With Confidence.
            </span>
          </motion.h1>


          {/* Subheading */}

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
            "
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
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
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.3,
              ease: "easeOut",
            }}
          >
            At Luster Dental & Facial Aesthetic Clinic, we bring modern facial
            aesthetic treatments and advanced dental care together, helping
            you achieve radiant skin, enhanced features, a healthy smile,
            and renewed confidence through personalized care.
          </motion.p>


          {/* Buttons */}

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
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.4,
              ease: "easeOut",
            }}
          >

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
                boxShadow: "0 12px 25px rgba(37, 99, 235, 0.25)",
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


          {/* Features */}

          <motion.div
            className="
              mt-10
              grid
              gap-4
              sm:mt-12
              sm:grid-cols-3
            "
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.5,
                },
              },
            }}
          >

            {[
              "✨ Advanced Facial Aesthetics",
              "🦷 Advanced Dental Care",
              "❤️ Personalized Treatment",
            ].map((feature) => (

              <motion.div
                key={feature}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 20,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -4,
                  transition: {
                    duration: 0.2,
                  },
                }}
                className="
                  rounded-2xl
                  bg-white
                  p-5
                  shadow-sm
                  transition-shadow
                  duration-300
                  hover:shadow-md
                "
              >
                <h3 className="font-semibold">
                  {feature}
                </h3>
              </motion.div>

            ))}

          </motion.div>

        </div>


        {/* Right Image */}

        <motion.div
          className="flex justify-center"
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

          <motion.img
            src="/images/hero/hero.png"
            alt="Luster Dental Clinic"
            className="
              mt-4
              w-full
              max-w-md
              rounded-[28px]
              border-4
              border-white
              shadow-2xl
              sm:mt-6
              sm:max-w-xl
              lg:mt-0
              lg:max-w-2xl
            "
            whileHover={{
              scale: 1.015,
            }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
          />

        </motion.div>

      </div>
    </section>
  );
}

export default Hero;