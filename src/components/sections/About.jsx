import { motion } from "motion/react";

function About() {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        py-20
        sm:py-24
        lg:py-28
      "
    >
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-7xl
          items-center
          gap-14
          px-5
          sm:px-6
          lg:grid-cols-2
          lg:gap-20
          lg:px-8
        "
      >

        {/* =====================================================
            LEFT IMAGE
        ====================================================== */}

        <motion.div
          className="relative order-2 lg:order-1"
          initial={{
            opacity: 0,
            x: -45,
            scale: 0.96,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
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
        >

          <motion.img
            src="/images/about/about.png"
            alt="About Luster Dental Clinic"
            className="
              w-full
              rounded-[28px]
              shadow-2xl
              sm:rounded-[32px]
            "
            whileHover={{
              scale: 1.015,
            }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
          />


          {/* =================================================
              EXPERIENCE CARD
          ================================================== */}

          <motion.div
            className="
              absolute
              -bottom-6
              right-3
              rounded-3xl
              bg-blue-700
              px-6
              py-5
              text-white
              shadow-xl
              sm:-bottom-8
              sm:right-4
              sm:px-8
              sm:py-6
            "
            initial={{
              opacity: 0,
              y: 25,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.6,
              delay: 0.45,
              ease: "easeOut",
            }}
          >

            <h3 className="text-3xl font-bold sm:text-4xl">
              15+
            </h3>

            <p className="mt-2 text-sm uppercase tracking-widest">
              Years Experience
            </p>

          </motion.div>

        </motion.div>


        {/* =====================================================
            RIGHT CONTENT
        ====================================================== */}

        <motion.div
          className="order-1 lg:order-2"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
        >

          {/* Section Badge */}

          <motion.p
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
            About Us
          </motion.p>


          {/* Heading */}

          <motion.h2
            variants={{
              hidden: {
                opacity: 0,
                y: 25,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
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
            Enhancing Your Natural Beauty

            <span className="block bg-gradient-to-r from-amber-500 to-blue-700 bg-clip-text text-transparent">
              With Confidence
            </span>
          </motion.h2>


          {/* Paragraph 1 */}

          <motion.p
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
              duration: 0.6,
              ease: "easeOut",
            }}
            className="
              mt-6
              text-base
              leading-7
              text-slate-600
              sm:mt-8
              sm:text-lg
              sm:leading-8
            "
          >
            At Luster Dental & Facial Aesthetic Clinic,
            we believe confidence begins with feeling good about
            your smile, skin, and overall appearance.
          </motion.p>


          {/* Paragraph 2 */}

          <motion.p
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
              duration: 0.6,
              ease: "easeOut",
            }}
            className="
              mt-5
              text-base
              leading-7
              text-slate-600
              sm:mt-6
              sm:text-lg
              sm:leading-8
            "
          >
            Our experienced team provides modern facial aesthetic
            treatments alongside advanced dental care in a comfortable,
            patient-focused environment.
          </motion.p>


          {/* Paragraph 3 */}

          <motion.p
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
              duration: 0.6,
              ease: "easeOut",
            }}
            className="
              mt-5
              text-base
              leading-7
              text-slate-600
              sm:mt-6
              sm:text-lg
              sm:leading-8
            "
          >
            Whether you visit us for facial rejuvenation, skin care,
            cosmetic dentistry, or routine dental care, our goal is to
            deliver exceptional results and a comfortable experience
            using modern technology and personalized treatment.
          </motion.p>


          {/* =================================================
              STATISTICS
          ================================================== */}

          <motion.div
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
            className="
              mt-10
              grid
              grid-cols-2
              gap-4
              sm:mt-12
              sm:gap-6
            "
          >

            {/* Happy Patients */}

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: 25,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
              whileHover={{
                y: -4,
              }}
              className="
                rounded-3xl
                bg-slate-50
                p-5
                transition-shadow
                duration-300
                hover:shadow-md
                sm:p-6
              "
            >

              <h3 className="text-3xl font-bold text-blue-700 sm:text-4xl">
                5000+
              </h3>

              <p className="mt-2">
                Happy Patients
              </p>

            </motion.div>


            {/* Patient Focused */}

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: 25,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
              whileHover={{
                y: -4,
              }}
              className="
                rounded-3xl
                bg-slate-50
                p-5
                transition-shadow
                duration-300
                hover:shadow-md
                sm:p-6
              "
            >

              <h3 className="text-3xl font-bold text-blue-700 sm:text-4xl">
                100%
              </h3>

              <p className="mt-2">
                Patient Focused
              </p>

            </motion.div>

          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}

export default About;