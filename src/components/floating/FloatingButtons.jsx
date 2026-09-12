import { useEffect, useState } from "react";

import {
  FaWhatsapp,
  FaPhoneAlt,
  FaArrowUp,
  FaTimes,
} from "react-icons/fa";

import { motion, AnimatePresence } from "motion/react";

import {
  dentalWhatsappLink,
  facialWhatsappLink,
  clinic,
} from "../../data/clinic";


function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);
  const [showCallOptions, setShowCallOptions] = useState(false);
  const [showWhatsappOptions, setShowWhatsappOptions] = useState(false);

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

  const openWhatsapp = (whatsappLink) => {
    window.open(
      whatsappLink,
      "_blank",
      "noopener,noreferrer"
    );

    setShowWhatsappOptions(false);
  };

  return (
    <>
      {/* =====================================================
          CALL BUTTON + CALL OPTIONS
      ====================================================== */}

      <div
        className="
          fixed
          bottom-6
          left-6
          z-50
        "
      >
        {/* Call Options */}

        <AnimatePresence>
          {showCallOptions && (
            <motion.div
              initial={{
                opacity: 0,
                y: 15,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 15,
                scale: 0.95,
              }}
              transition={{
                duration: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                absolute
                bottom-[72px]
                left-0
                w-[270px]
                overflow-hidden
                rounded-3xl
                border
                border-white/70
                bg-white/90
                p-4
                shadow-[0_20px_50px_rgba(15,23,42,0.18)]
                backdrop-blur-xl
              "
            >
              {/* Header */}

              <div className="mb-3 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                    Call Luster Clinic
                  </p>

                  <p className="mt-1 text-sm font-bold text-slate-800">
                    Choose a clinic
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setShowCallOptions(false)}
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    bg-slate-100
                    text-slate-500
                    transition-colors
                    hover:bg-slate-200
                    hover:text-slate-700
                  "
                  aria-label="Close call options"
                >
                  <FaTimes size={13} />
                </button>
              </div>

              {/* Dental Clinic */}

              <motion.a
                href={`tel:${clinic.dentalPhone}`}
                onClick={() => setShowCallOptions(false)}
                whileHover={{
                  y: -2,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="
                  flex
                  items-center
                  gap-3
                  rounded-2xl
                  bg-blue-50
                  p-3
                  transition-colors
                  hover:bg-blue-100
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
                    bg-blue-700
                    text-white
                  "
                >
                  <FaPhoneAlt size={14} />
                </div>

                <div className="min-w-0">
                  <p className="text-xs font-semibold text-slate-500">
                    🦷 Dental Clinic
                  </p>

                  <p className="mt-0.5 text-sm font-bold text-slate-800">
                    {clinic.dentalPhoneDisplay}
                  </p>
                </div>
              </motion.a>

              {/* Facial Clinic */}

              <motion.a
                href={`tel:${clinic.facialPhone}`}
                onClick={() => setShowCallOptions(false)}
                whileHover={{
                  y: -2,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="
                  mt-3
                  flex
                  items-center
                  gap-3
                  rounded-2xl
                  bg-amber-50
                  p-3
                  transition-colors
                  hover:bg-amber-100
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
                    bg-amber-500
                    text-white
                  "
                >
                  <FaPhoneAlt size={14} />
                </div>

                <div className="min-w-0">
                  <p className="text-xs font-semibold text-slate-500">
                    ✨ Facial Aesthetic Clinic
                  </p>

                  <p className="mt-0.5 text-sm font-bold text-slate-800">
                    {clinic.facialPhoneDisplay}
                  </p>
                </div>
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Call Button + Bubble Effect */}

        <div className="relative flex items-center justify-center">

          {/* Blue Pulse Ring */}

          <motion.span
            className="
              pointer-events-none
              absolute
              h-14
              w-14
              rounded-full
              border
              border-blue-400/50
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

          {/* Blue Bubble */}

          <motion.span
            className="
              pointer-events-none
              absolute
              h-14
              w-14
              rounded-full
              bg-blue-400/20
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

          {/* Call Button */}

          <motion.button
            type="button"
            onClick={() => setShowCallOptions((prev) => !prev)}
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
              relative
              z-10
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
            aria-label="Choose clinic to call"
            aria-expanded={showCallOptions}
          >
            {showCallOptions ? (
              <FaTimes size={20} />
            ) : (
              <FaPhoneAlt size={20} />
            )}
          </motion.button>

        </div>
      </div>

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
                scale: 1.1,
                y: -2,
                boxShadow:
                  "0 0 28px rgba(37, 99, 235, 0.55)",
              }}
              whileTap={{
                scale: 0.92,
              }}
              className="
                relative
                z-10
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
                shadow-[0_0_18px_rgba(37,99,235,0.20)]
                backdrop-blur-xl
                backdrop-saturate-150
              "
              aria-label="Scroll to top"
            >
              <FaArrowUp size={18} />
            </motion.button>
          )}
        </AnimatePresence>

        {/* =================================================
            WHATSAPP + WHATSAPP OPTIONS
        ================================================== */}

        <div className="relative flex items-center justify-center">

          {/* WhatsApp Options */}

          <AnimatePresence>
            {showWhatsappOptions && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 15,
                  scale: 0.95,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  y: 15,
                  scale: 0.95,
                }}
                transition={{
                  duration: 0.25,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  absolute
                  bottom-[72px]
                  right-0
                  w-[270px]
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/70
                  bg-white/90
                  p-4
                  shadow-[0_20px_50px_rgba(15,23,42,0.18)]
                  backdrop-blur-xl
                "
              >
                {/* Header */}

                <div className="mb-3 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-green-600">
                      WhatsApp Luster Clinic
                    </p>

                    <p className="mt-1 text-sm font-bold text-slate-800">
                      Choose a clinic
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setShowWhatsappOptions(false)}
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      bg-slate-100
                      text-slate-500
                      transition-colors
                      hover:bg-slate-200
                      hover:text-slate-700
                    "
                    aria-label="Close WhatsApp options"
                  >
                    <FaTimes size={13} />
                  </button>
                </div>

                {/* Dental WhatsApp */}

                <motion.button
                  type="button"
                  onClick={() => openWhatsapp(dentalWhatsappLink)}
                  whileHover={{
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="
                    flex
                    w-full
                    items-center
                    gap-3
                    rounded-2xl
                    bg-green-50
                    p-3
                    text-left
                    transition-colors
                    hover:bg-green-100
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
                      bg-green-500
                      text-white
                    "
                  >
                    <FaWhatsapp size={17} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-slate-500">
                      🦷 Dental Clinic
                    </p>

                    <p className="mt-0.5 text-sm font-bold text-slate-800">
                      +91 88913 96707
                    </p>
                  </div>
                </motion.button>

                {/* Facial WhatsApp */}

                <motion.button
                  type="button"
                  onClick={() => openWhatsapp(facialWhatsappLink)}
                  whileHover={{
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="
                    mt-3
                    flex
                    w-full
                    items-center
                    gap-3
                    rounded-2xl
                    bg-green-50
                    p-3
                    text-left
                    transition-colors
                    hover:bg-green-100
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
                      bg-green-500
                      text-white
                    "
                  >
                    <FaWhatsapp size={17} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-slate-500">
                      ✨ Facial Aesthetic Clinic
                    </p>

                    <p className="mt-0.5 text-sm font-bold text-slate-800">
                      +91 73561 96707
                    </p>
                  </div>
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>

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

          <motion.button
            type="button"
            onClick={() =>
              setShowWhatsappOptions((prev) => !prev)
            }
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
            aria-label="Choose clinic for WhatsApp"
            aria-expanded={showWhatsappOptions}
          >
            {showWhatsappOptions ? (
              <FaTimes size={20} />
            ) : (
              <FaWhatsapp size={26} />
            )}
          </motion.button>
        </div>
      </div>
    </>
  );
}

export default FloatingButtons;