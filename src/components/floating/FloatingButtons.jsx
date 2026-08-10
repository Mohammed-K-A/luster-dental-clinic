import { useEffect, useState } from "react";
import { FaWhatsapp, FaPhoneAlt, FaArrowUp } from "react-icons/fa";
import { motion, AnimatePresence } from "motion/react";
import { clinic, enquiryWhatsappLink } from "../../data/clinic";

function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Call Button */}

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
          delay: 0,
          ease: [0.22, 1, 0.36, 1],
        }}
        whileHover={{
          scale: 1.1,
          y: -2,
          boxShadow: "0 0 28px rgba(37, 99, 235, 0.7)",
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


      {/* Right Buttons */}

      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-4">

        {/* Scroll To Top */}

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
                scale: 1.1,
                y: -2,
              }}
              whileTap={{
                scale: 0.92,
              }}
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                bg-blue-700
                text-white
                shadow-xl
              "
              aria-label="Scroll to top"
            >
              <FaArrowUp />
            </motion.button>
          )}
        </AnimatePresence>


        {/* WhatsApp */}

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
            delay: 0,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={{
            scale: 1.1,
            y: -2,
            boxShadow: "0 0 28px rgba(34, 197, 94, 0.7)",
          }}
          whileTap={{
            scale: 0.92,
          }}
          className="
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
    </>
  );
}

export default FloatingButtons;