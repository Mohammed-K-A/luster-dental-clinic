import { useEffect, useState } from "react";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaArrowUp,
} from "react-icons/fa";
import { motion, AnimatePresence } from "motion/react";
import {
  clinic,
  enquiryWhatsappLink,
} from "../../data/clinic";

function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* =====================================================
          CALL BUTTON
      ====================================================== */}

      <motion.a
        href={`tel:${clinic.phone}`}
        initial={{
          opacity: 0,
          x: -30,
          scale: 0.8,
        }}
        animate={{
          opacity: 1,
          x: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        whileHover={{
          scale: 1.1,
          y: -2,
          boxShadow:
            "0 0 28px rgba(37, 99, 235, 0.7)",
        }}
        whileTap={{
          scale: 0.92,
        }}
        className="
          fixed
          bottom-6
          left-6
          z-50
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          bg-blue-700
          text-white
          shadow-[0_0_18px_rgba(37,99,235,0.45)]
        "
        aria-label="Call Luster Dental Clinic"
      >
        <FaPhoneAlt size={20} />
      </motion.a>


      {/* =====================================================
          RIGHT FLOATING BUTTONS
      ====================================================== */}

      <div
        className="
          fixed
          bottom-6
          right-6
          z-50
          flex
          flex-col
          items-center
          gap-4
        "
      >

        {/* =================================================
            SCROLL TO TOP
        ================================================== */}

        <AnimatePresence>
          {showTop && (
            <motion.button
              initial={{
                opacity: 0,
                scale: 0.7,
                y: 15,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.7,
                y: 15,
              }}
              transition={{
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              onClick={scrollToTop}
              whileHover={{
                scale: 1.12,
                y: -2,
              }}
              whileTap={{
                scale: 0.9,
              }}
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-blue-200/70
                bg-white/35
                text-blue-700
                shadow-[0_8px_25px_rgba(37,99,235,0.12)]
                backdrop-blur-xl
                backdrop-saturate-150
                transition-all
                duration-300
                hover:bg-white/60
                hover:shadow-[0_10px_30px_rgba(37,99,235,0.22)]
              "
              aria-label="Scroll to top"
            >
              <FaArrowUp size={18} />
            </motion.button>
          )}
        </AnimatePresence>


        {/* =================================================
            WHATSAPP
        ================================================== */}

        <div className="relative flex items-center justify-center">

          {/* Bubble / Pulse Rings */}

          <motion.span
            className="
              pointer-events-none
              absolute
              h-14
              w-14
              rounded-full
              border
              border-green-400/50
            "
            animate={{
              scale: [1, 1.35, 1],
              opacity: [0.45, 0, 0.45],
            }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />

          <motion.span
            className="
              pointer-events-none
              absolute
              h-14
              w-14
              rounded-full
              bg-green-400/20
            "
            animate={{
              scale: [1, 1.25, 1],
              opacity: [0.35, 0, 0.35],
            }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              delay: 0.6,
              ease: "easeOut",
            }}
          />

          {/* WhatsApp Button */}

          <motion.a
            href={enquiryWhatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            initial={{
              opacity: 0,
              x: 30,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              scale: 1.1,
              y: -2,
              boxShadow:
                "0 0 30px rgba(34,197,94,0.65)",
            }}
            whileTap={{
              scale: 0.92,
            }}
            className="
              relative
              z-10
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-full
              bg-green-500
              text-white
              shadow-[0_0_18px_rgba(34,197,94,0.45)]
            "
            aria-label="Contact Luster Dental Clinic on WhatsApp"
          >

            <FaWhatsapp size={26} />

          </motion.a>

        </div>

      </div>
    </>
  );
}

export default FloatingButtons;