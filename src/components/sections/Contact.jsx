import { useEffect, useState } from "react";
import { motion } from "motion/react";

import { clinic } from "../../data/clinic";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";

function Contact() {
  const [highlightPhone, setHighlightPhone] = useState(false);

  /* =========================================
      HIGHLIGHT PHONE CARD
  ========================================== */

  useEffect(() => {
    const handleHighlightPhone = () => {
      const phoneCard = document.getElementById("contact-phone");

      if (phoneCard) {
        phoneCard.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }

      setHighlightPhone(true);

      const timer = setTimeout(() => {
        setHighlightPhone(false);
      }, 3000);

      return () => clearTimeout(timer);
    };

    window.addEventListener(
      "luster:highlight-phone",
      handleHighlightPhone
    );

    return () => {
      window.removeEventListener(
        "luster:highlight-phone",
        handleHighlightPhone
      );
    };
  }, []);


  /* =========================================
      CARD ANIMATION
  ========================================== */

  const cardVariants = {
    hidden: {
      opacity: 0,
      x: -35,
    },

    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };


  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        py-20
        sm:py-24
        lg:py-28
      "
    >

      {/* =========================================
          BACKGROUND GLOW
      ========================================== */}

      <motion.div
        className="
          pointer-events-none
          absolute
          -left-32
          top-20
          h-80
          w-80
          rounded-full
          bg-blue-200/25
          blur-3xl
        "
        animate={{
          y: [0, -15, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="
          pointer-events-none
          absolute
          -right-32
          bottom-20
          h-80
          w-80
          rounded-full
          bg-cyan-200/20
          blur-3xl
        "
        animate={{
          y: [0, 15, 0],
          x: [0, -10, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />


      {/* =========================================
          MAIN CONTAINER
      ========================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-7xl
          px-5
          sm:px-6
          lg:px-8
        "
      >

        {/* =========================================
            SECTION HEADING
        ========================================== */}

        <motion.div
          className="text-center"
          initial={{
            opacity: 0,
            y: 35,
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
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
              delay: 0.1,
            }}
          >
            Contact Us
          </motion.p>


          {/* Heading */}

          <motion.h2
            className="
              mt-5
              text-4xl
              font-bold
              leading-tight
              text-slate-900
              sm:mt-6
              sm:text-5xl
            "
            style={{
              fontFamily: "var(--font-heading)",
            }}
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Get In Touch With Our Clinic
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
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Have questions about a treatment or ready to schedule a
            consultation? Call our clinic directly and our team will
            be happy to assist you.
          </motion.p>

        </motion.div>


        {/* =========================================
            LEFT + RIGHT CONTENT
        ========================================== */}

        <div
          className="
            mt-12
            grid
            items-stretch
            gap-8
            sm:mt-16
            sm:gap-10
            lg:mt-20
            lg:grid-cols-2
            lg:gap-12
          "
        >

          {/* =========================================
              LEFT - CONTACT DETAILS
          ========================================== */}

          <div
            className="
              flex
              h-full
              flex-col
              gap-6
            "
          >

            {/* Address */}

            <motion.div
              custom={0}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              whileHover={{
                y: -3,
                boxShadow:
                  "0 14px 30px rgba(15, 23, 42, 0.08)",
              }}
              className="
                flex
                min-h-[110px]
                flex-1
                items-start
                gap-4
                rounded-3xl
                bg-slate-50
                p-5
                shadow-sm
                transition-shadow
                duration-300
                sm:gap-5
                sm:p-6
              "
            >

              <FaMapMarkerAlt
                className="mt-1 shrink-0 text-blue-700"
                size={22}
              />

              <div className="min-w-0">

                <h3 className="font-semibold text-slate-800">
                  Address
                </h3>

                <p
                  className="
                    mt-2
                    break-words
                    text-sm
                    leading-7
                    text-slate-600
                    sm:text-base
                  "
                >
                  {clinic.address}
                </p>

              </div>

            </motion.div>


            {/* =========================================
                PHONE
            ========================================== */}

            <motion.div
              id="contact-phone"
              className={`
                rounded-2xl
                border
                bg-white
                p-6
                shadow-sm
                transition-all
                duration-500
                ${highlightPhone
                  ? "border-blue-500 shadow-[0_0_35px_rgba(37,99,235,0.35)] ring-4 ring-blue-100"
                  : "border-slate-200"
                }
              `}
              whileHover={{
                y: -4,
                boxShadow: "0 15px 35px rgba(15, 23, 42, 0.08)",
              }}
            >
              <div className="flex items-center gap-4">
                <div
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-blue-50
                    text-blue-700
                  "
                >
                  <FaPhoneAlt />
                </div>

                <div>
                  <h3 className="text-base font-semibold text-slate-900">
                    Phone
                  </h3>

                  <p className="mt-1 text-sm text-slate-600">
                    <a
                      href="tel:+918089650707"
                      className="transition-colors hover:text-blue-700"
                    >
                      +91 80896 50707
                    </a>
                    <span className="mx-1">,</span>
                    <a
                      href="tel:+917356196707"
                      className="transition-colors hover:text-blue-700"
                    >
                      +91 73561 96707
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>


            {/* Email */}

            <motion.div
              custom={2}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              whileHover={{
                y: -3,
                boxShadow:
                  "0 14px 30px rgba(15, 23, 42, 0.08)",
              }}
              className="
                flex
                min-h-[110px]
                flex-1
                items-start
                gap-5
                rounded-3xl
                bg-slate-50
                p-6
                shadow-sm
                transition-shadow
                duration-300
              "
            >

              <FaEnvelope
                className="mt-1 shrink-0 text-blue-700"
                size={20}
              />

              <div className="min-w-0">

                <h3 className="font-semibold text-slate-800">
                  Email
                </h3>

                <a
                  href={`mailto:${clinic.email}`}
                  className="
                    mt-2
                    block
                    break-all
                    text-sm
                    text-slate-600
                    transition-colors
                    duration-300
                    hover:text-blue-700
                    sm:text-base
                  "
                >
                  {clinic.email}
                </a>

              </div>

            </motion.div>


            {/* Working Hours */}

            <motion.div
              custom={3}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              whileHover={{
                y: -3,
                boxShadow:
                  "0 14px 30px rgba(15, 23, 42, 0.08)",
              }}
              className="
                flex
                min-h-[110px]
                flex-1
                items-start
                gap-5
                rounded-3xl
                bg-slate-50
                p-6
                shadow-sm
                transition-shadow
                duration-300
              "
            >

              <FaClock
                className="mt-1 shrink-0 text-blue-700"
                size={20}
              />

              <div>

                <h3 className="font-semibold text-slate-800">
                  Working Hours
                </h3>

                <p className="mt-2 text-slate-600">
                  Monday – Saturday
                  <br />
                  9:00 AM – 8:00 PM
                </p>

              </div>

            </motion.div>

          </div>


          {/* =========================================
              RIGHT - CALL TO ACTION
          ========================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
              scale: 0.97,
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
              duration: 0.8,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              flex
              min-h-[480px]
              h-full
              overflow-hidden
              rounded-[28px]
              border
              border-white/80
              bg-white/85
              p-7
              shadow-[0_20px_60px_rgba(15,23,42,0.10)]
              backdrop-blur-xl
              sm:rounded-[32px]
              sm:p-9
              lg:p-10
            "
          >

            {/* Decorative Glow */}

            <div
              className="
                pointer-events-none
                absolute
                -right-24
                -top-24
                h-64
                w-64
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
                h-64
                w-64
                rounded-full
                bg-cyan-200/20
                blur-3xl
              "
            />


            <div
              className="
                relative
                z-10
                flex
                w-full
                flex-col
                justify-center
              "
            >

              {/* Icon */}

              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-blue-50
                  text-blue-700
                "
              >
                <FaPhoneAlt size={24} />
              </div>


              {/* Heading */}

              <h3
                className="
                  mt-7
                  text-3xl
                  font-bold
                  leading-tight
                  text-slate-900
                  sm:text-4xl
                "
                style={{
                  fontFamily: "var(--font-heading)",
                }}
              >
                Ready to Get Started?
              </h3>


              {/* Description */}

              <p
                className="
                  mt-4
                  text-base
                  leading-7
                  text-slate-600
                  sm:text-lg
                  sm:leading-8
                "
              >
                Speak directly with our clinic team to discuss your
                treatment, ask your questions, and schedule a
                consultation.
              </p>


              {/* Call Options */}

              <div className="mt-8 space-y-4">

                {/* Dental */}

                <motion.a
                  href="tel:+918089650707"
                  whileHover={{
                    y: -3,
                    scale: 1.01,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="
                    flex
                    items-center
                    justify-between
                    gap-4
                    rounded-2xl
                    border
                    border-blue-100
                    bg-blue-50/70
                    px-5
                    py-4
                    transition-all
                    duration-300
                    hover:border-blue-200
                    hover:bg-blue-50
                    hover:shadow-lg
                  "
                >

                  <div className="flex items-center gap-4">

                    <div
                      className="
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-blue-700
                        text-white
                      "
                    >
                      <FaPhoneAlt size={16} />
                    </div>

                    <div>

                      <p className="text-sm font-semibold text-slate-500">
                        🦷 Dental Clinic
                      </p>

                      <p className="mt-1 font-bold text-slate-800">
                        +91 80896 50707
                      </p>

                    </div>

                  </div>

                  <FaArrowRight
                    className="shrink-0 text-blue-700"
                    size={15}
                  />

                </motion.a>


                {/* Facial */}

                <motion.a
                  href="tel:+917356196707"
                  whileHover={{
                    y: -3,
                    scale: 1.01,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="
                    flex
                    items-center
                    justify-between
                    gap-4
                    rounded-2xl
                    border
                    border-amber-100
                    bg-amber-50/60
                    px-5
                    py-4
                    transition-all
                    duration-300
                    hover:border-amber-200
                    hover:bg-amber-50
                    hover:shadow-lg
                  "
                >

                  <div className="flex items-center gap-4">

                    <div
                      className="
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-amber-500
                        text-white
                      "
                    >
                      <FaPhoneAlt size={16} />
                    </div>

                    <div>

                      <p className="text-sm font-semibold text-slate-500">
                        ✨ Facial Aesthetic Clinic
                      </p>

                      <p className="mt-1 font-bold text-slate-800">
                        +91 73561 96707
                      </p>

                    </div>

                  </div>

                  <FaArrowRight
                    className="shrink-0 text-amber-600"
                    size={15}
                  />

                </motion.a>

              </div>


              {/* Bottom Note */}

              <div
                className="
                  mt-7
                  rounded-2xl
                  border
                  border-slate-100
                  bg-slate-50/70
                  px-5
                  py-4
                  text-center
                "
              >
                <p className="text-sm leading-6 text-slate-500">
                  Our team will guide you to the right treatment and
                  help arrange your consultation.
                </p>
              </div>

            </div>

          </motion.div>

        </div>


        {/* =========================================
            GOOGLE MAP
            BELOW BOTH COLUMNS
        ========================================== */}

        <motion.div
          className="
            mt-10
            overflow-hidden
            rounded-[28px]
            shadow-xl
            sm:mt-12
            sm:rounded-[32px]
            lg:mt-14
          "
          initial={{
            opacity: 0,
            y: 35,
            scale: 0.98,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          <iframe
            title="Luster Dental Clinic Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.997942909173!2d76.05026409999999!3d10.734641400000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7bffdf5648923%3A0xb6b324d452fcbe0a!2sLUSTER%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1786276127435!5m2!1sen!2sin"
            className="
              h-[320px]
              w-full
              border-0
              sm:h-[400px]
              md:h-[450px]
              lg:h-[500px]
            "
            loading="lazy"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />

        </motion.div>

      </div>

    </section>
  );
}

export default Contact;