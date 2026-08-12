import { useState } from "react";
import { motion } from "motion/react";

import { clinic, enquiryWhatsappLink } from "../../data/clinic";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaWhatsapp,
} from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

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


  /* =========================================
      FORM INPUT
  ========================================== */

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const numbersOnly = value
        .replace(/\D/g, "")
        .slice(0, 10);

      setFormData((prev) => ({
        ...prev,
        phone: numbersOnly,
      }));

      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  /* =========================================
      WHATSAPP APPOINTMENT
  ========================================== */

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = formData.name.trim();
    const phone = formData.phone.trim();
    const message = formData.message.trim();

    if (!name || !phone) {
      alert("Please enter your name and mobile number.");
      return;
    }

    if (phone.length !== 10) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    const whatsappMessage = `
Hello Luster Dental & Facial Aesthetic Clinic,

I would like to book an appointment.

Name: ${name}
Mobile Number: ${phone}
${message ? `Additional Message: ${message}` : ""}
    `.trim();

    // Luster Dental Clinic WhatsApp number
    const whatsappNumber = "918891396707";

    const whatsappUrl =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        whatsappMessage
      )}`;

    window.open(whatsappUrl, "_blank");
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
            Book Your Consultation
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
            Get in touch with us today and let our experienced team help
            you achieve radiant skin, enhanced confidence, and a healthier,
            brighter smile.
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


            {/* Phone */}

            <motion.div
              custom={1}
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

              <FaPhoneAlt
                className="mt-1 shrink-0 text-blue-700"
                size={20}
              />

              <div>

                <h3 className="font-semibold text-slate-800">
                  Phone
                </h3>

                <a
                  href="tel:+917356196707"
                  className="
                    mt-2
                    block
                    text-slate-600
                    transition-colors
                    duration-300
                    hover:text-blue-700
                  "
                >
                  +91 73561 96707
                </a>

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
              RIGHT - BOOK APPOINTMENT FORM
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
              h-full
              overflow-hidden
              rounded-[28px]
              border
              border-white/80
              bg-white/85
              p-6
              shadow-[0_20px_60px_rgba(15,23,42,0.10)]
              backdrop-blur-xl
              sm:rounded-[32px]
              sm:p-8
              lg:p-9
            "
          >

            {/* Glass Highlight */}

            <div
              className="
                pointer-events-none
                absolute
                inset-x-8
                top-0
                h-[2px]
                rounded-full
                bg-gradient-to-r
                from-transparent
                via-white
                to-transparent
              "
            />


            {/* Green Glow */}

            <div
              className="
                pointer-events-none
                absolute
                -right-24
                -top-24
                h-56
                w-56
                rounded-full
                bg-green-200/20
                blur-3xl
              "
            />


            <div className="relative z-10 flex h-full flex-col">

              {/* Form Heading */}

              <div
                className="
                  mb-7
                  flex
                  items-center
                  gap-3
                  sm:mb-8
                "
              >

                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-green-50
                    text-green-600
                  "
                >
                  <FaWhatsapp size={23} />
                </div>

                <h3
                  className="
                    text-2xl
                    font-bold
                    text-slate-800
                    sm:text-3xl
                  "
                >
                  Book Appointment
                </h3>

              </div>


              {/* =================================
                  FORM
              ================================== */}

              <form
                onSubmit={handleSubmit}
                className="
                  flex
                  flex-1
                  flex-col
                  space-y-5
                "
              >

                {/* Full Name */}

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name *"
                  required
                  autoComplete="name"
                  className="
                    h-16
                    w-full
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white/80
                    px-5
                    text-base
                    text-slate-800
                    outline-none
                    transition-all
                    duration-300
                    placeholder:text-slate-400
                    focus:border-blue-400
                    focus:ring-4
                    focus:ring-blue-100
                    sm:text-lg
                  "
                />


                {/* Mobile Number */}

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Mobile Number * (10 digits)"
                  required
                  inputMode="numeric"
                  maxLength={10}
                  autoComplete="tel"
                  className="
                    h-16
                    w-full
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white/80
                    px-5
                    text-base
                    text-slate-800
                    outline-none
                    transition-all
                    duration-300
                    placeholder:text-slate-400
                    focus:border-blue-400
                    focus:ring-4
                    focus:ring-blue-100
                    sm:text-lg
                  "
                />


                {/* Additional Message */}

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Additional Message (Optional)"
                  rows={4}
                  className="
                    w-full
                    resize-none
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white/80
                    px-5
                    py-5
                    text-base
                    leading-7
                    text-slate-800
                    outline-none
                    transition-all
                    duration-300
                    placeholder:text-slate-400
                    focus:border-blue-400
                    focus:ring-4
                    focus:ring-blue-100
                    sm:text-lg
                  "
                />


                {/* WhatsApp Button */}

                <motion.button
                  type="submit"
                  whileHover={{
                    y: -2,
                    scale: 1.01,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="
                    mt-auto
                    flex
                    min-h-[60px]
                    w-full
                    items-center
                    justify-center
                    gap-3
                    rounded-2xl
                    bg-gradient-to-r
                    from-green-500
                    to-green-600
                    px-5
                    text-base
                    font-bold
                    text-white
                    shadow-[0_12px_25px_rgba(22,163,74,0.20)]
                    transition-shadow
                    duration-300
                    hover:shadow-[0_16px_35px_rgba(22,163,74,0.30)]
                    sm:text-lg
                  "
                >

                  <FaWhatsapp size={24} />

                  Book Appointment on WhatsApp

                </motion.button>

              </form>


              {/* Contact Numbers */}

              <div
                className="
                  mt-7
                  flex
                  flex-col
                  items-center
                  justify-center
                  gap-3
                  border-t
                  border-slate-100
                  pt-6
                  text-center
                  text-sm
                  font-medium
                  text-slate-500
                  sm:mt-8
                  sm:flex-row
                  sm:gap-8
                  sm:text-base
                "
              >

                <a
                  href="tel:+917356196707"
                  className="
                    transition-colors
                    duration-300
                    hover:text-blue-700
                  "
                >
                  Call: +91 73561 96707
                </a>

                <a
                  href={enquiryWhatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    transition-colors
                    duration-300
                    hover:text-green-600
                  "
                >
                  WhatsApp: +91 88913 96707
                </a>

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