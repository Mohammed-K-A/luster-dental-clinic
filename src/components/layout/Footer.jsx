import logo from "../../assets/logo.png";
import { clinic, enquiryWhatsappLink } from "../../data/clinic";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

import { motion } from "motion/react";

function Footer() {
  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const socialItem = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <footer className="bg-slate-900 text-white">

      <motion.div
        className="
          mx-auto
          w-full
          max-w-7xl
          px-5
          py-16
          sm:px-6
          sm:py-20
        "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerContainer}
      >

        <div
          className="
            grid
            gap-12
            sm:gap-14
            lg:grid-cols-4
          "
        >

          {/* Logo / About */}

          <motion.div variants={fadeUp}>

            {/* Brand */}

            <div className="flex items-center gap-3 sm:gap-4">

              <img
                src={logo}
                alt="Luster Dental Clinic"
                className="h-16 w-16 object-contain sm:h-20 sm:w-20"
              />

              <div>

                <h2
                  className="
                    text-3xl
                    leading-none
                    text-white
                    sm:text-4xl
                  "
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Luster
                </h2>

                <p
                  className="
                    mt-1
                    uppercase
                    tracking-[0.08em]
                    text-slate-400
                    text-[7px]
                    sm:text-[9px]
                    lg:tracking-[0.16em]
                    lg:text-[10px]
                  "
                >
                  Dental & Facial Aesthetic Clinic
                </p>

              </div>

            </div>


            {/* Description */}

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400 sm:mt-6 sm:text-base sm:leading-8">
              Providing modern facial aesthetic treatments alongside advanced dental
              care, with compassionate service and personalized treatment
              for every patient.
            </p>

          </motion.div>


          {/* Quick Links */}

          <motion.div variants={fadeUp}>

            <h3 className="text-lg font-semibold sm:text-xl">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-slate-400 sm:mt-6 sm:space-y-4 sm:text-base">

              <li>
                <a
                  href="#home"
                  className="transition-colors hover:text-white"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="transition-colors hover:text-white"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#treatments"
                  className="transition-colors hover:text-white"
                >
                  Treatments
                </a>
              </li>

              <li>
                <a
                  href="#doctors"
                  className="transition-colors hover:text-white"
                >
                  Doctors
                </a>
              </li>

              <li>
                <a
                  href="#gallery"
                  className="transition-colors hover:text-white"
                >
                  Clinic Gallery
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="transition-colors hover:text-white"
                >
                  Contact
                </a>
              </li>

            </ul>

          </motion.div>


          {/* Treatments */}

          <motion.div variants={fadeUp}>

            <h3 className="text-lg font-semibold sm:text-xl">
              Treatments
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-slate-400 sm:mt-6 sm:space-y-4 sm:text-base">

              <li>Facial Aesthetics</li>
              <li>HydraFacial</li>
              <li>Chemical Peel</li>
              <li>PRP Therapy</li>
              <li>Skin Rejuvenation</li>
              <li>Dental Care</li>

            </ul>

          </motion.div>


          {/* Contact */}

          <motion.div variants={fadeUp}>

            <h3 className="text-lg font-semibold sm:text-xl">
              Contact
            </h3>

            <div className="mt-5 space-y-5 text-sm text-slate-400 sm:mt-6 sm:text-base">

              {/* Address */}

              <div className="flex items-start gap-3">

                <FaMapMarkerAlt
                  className="mt-1 shrink-0 text-blue-400"
                />

                <span className="leading-7">
                  {clinic.address}
                </span>

              </div>


              {/* Phone */}

              <a
                href={`tel:${clinic.phone}`}
                className="
                  flex
                  items-start
                  gap-3
                  transition-colors
                  hover:text-white
                "
              >

                <FaPhoneAlt className="mt-1 shrink-0 text-blue-400" />

                <span>
                  +91 73561 96707
                </span>

              </a>


              {/* Email */}

              <a
                href={`mailto:${clinic.email}`}
                className="
                  flex
                  items-start
                  gap-3
                  break-all
                  transition-colors
                  hover:text-white
                "
              >

                <FaEnvelope className="mt-1 shrink-0 text-blue-400" />

                <span>
                  {clinic.email}
                </span>

              </a>

            </div>


            {/* Social Media */}

            <motion.div
              className="mt-7 flex gap-3 sm:mt-8 sm:gap-4"
              variants={staggerContainer}
            >

              {/* Facebook */}

              <motion.a
                variants={socialItem}
                href="https://www.facebook.com/profile.php?id=61566852566840"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                whileHover={{
                  scale: 1.1,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-blue-700
                "
              >
                <FaFacebookF />
              </motion.a>


              {/* Instagram */}

              <motion.a
                variants={socialItem}
                href="https://www.instagram.com/luster.clinic"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                whileHover={{
                  scale: 1.1,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-pink-600
                "
              >
                <FaInstagram />
              </motion.a>


              {/* WhatsApp */}

              <motion.a
                variants={socialItem}
                href={enquiryWhatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                whileHover={{
                  scale: 1.1,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-green-600
                "
              >
                <FaWhatsapp />
              </motion.a>

            </motion.div>

          </motion.div>

        </div>

      </motion.div>


      {/* Bottom */}

      <motion.div
        className="border-t border-slate-800"
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        transition={{
          duration: 0.8,
          delay: 0.2,
        }}
      >

        <div
          className="
            mx-auto
            flex
            w-full
            max-w-7xl
            items-center
            justify-center
            px-5
            py-5
            text-center
            text-xs
            text-slate-500
            sm:px-6
            sm:text-sm
          "
        >

          <p>
            © 2026 Luster Dental Clinic. All Rights Reserved.
          </p>

        </div>

      </motion.div>

    </footer>
  );
}

export default Footer;