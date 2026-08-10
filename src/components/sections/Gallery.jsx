import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import gallery from "../../data/gallery";
import {
  FaExpand,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const showPrevious = (e) => {
    e.stopPropagation();

    const newIndex =
      selectedIndex === 0
        ? gallery.length - 1
        : selectedIndex - 1;

    setSelectedIndex(newIndex);
    setSelectedImage(gallery[newIndex]);
  };

  const showNext = (e) => {
    e.stopPropagation();

    const newIndex =
      selectedIndex === gallery.length - 1
        ? 0
        : selectedIndex + 1;

    setSelectedIndex(newIndex);
    setSelectedImage(gallery[newIndex]);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!selectedImage) return;

      if (event.key === "Escape") {
        setSelectedImage(null);
      }

      if (event.key === "ArrowLeft") {
        showPrevious(event);
      }

      if (event.key === "ArrowRight") {
        showNext(event);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage, selectedIndex]);

  return (
    <section
      id="gallery"
      className="
        py-20
        sm:py-24
        lg:py-28
      "
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Heading */}

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
          >
            Clinic Gallery
          </motion.p>

          <motion.h2
            className="
              mt-5
              text-4xl
              font-bold
              leading-tight
              sm:mt-6
              sm:text-5xl
            "
            style={{ fontFamily: "var(--font-heading)" }}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Explore Our Clinic
          </motion.h2>

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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Discover our modern facilities, advanced dental technology,
            comfortable treatment rooms and welcoming environment.
          </motion.p>
        </motion.div>


        {/* Gallery */}

        <motion.div
          className="
            mt-12
            grid
            gap-5
            sm:mt-16
            sm:gap-8
            md:grid-cols-2
            lg:mt-20
            lg:grid-cols-3
          "
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
                staggerChildren: 0.12,
              },
            },
          }}
        >
          {gallery.map((item) => (
            <motion.div
              key={item.id}
              onClick={() => {
                setSelectedImage(item);
                setSelectedIndex(
                  gallery.findIndex(
                    (image) => image.id === item.id
                  )
                );
              }}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 45,
                  scale: 0.97,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                },
              }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -6,
                transition: {
                  duration: 0.3,
                },
              }}
              className="
                group
                relative
                cursor-pointer
                overflow-hidden
                rounded-[32px]
                shadow-md
              "
            >
              {/* Image */}

              <motion.img
                src={item.image}
                alt={item.title}
                className="
                  h-64
                  w-full
                  object-cover
                  sm:h-72
                  lg:h-80
                "
                whileHover={{
                  scale: 1.08,
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />


              {/* Overlay */}

              <motion.div
                className="
                  absolute
                  inset-0
                  flex
                  flex-col
                  items-center
                  justify-center
                  bg-blue-900/70
                "
                initial={{
                  opacity: 0,
                }}
                whileHover={{
                  opacity: 1,
                }}
                transition={{
                  duration: 0.35,
                  ease: "easeOut",
                }}
              >
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.7,
                    y: 10,
                  }}
                  whileHover={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <FaExpand
                    className="text-white"
                    size={28}
                  />
                </motion.div>

                <motion.h3
                  className="
                    mt-4
                    px-4
                    text-center
                    text-xl
                    font-semibold
                    text-white
                    sm:mt-5
                    sm:text-2xl
                  "
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  whileHover={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.35,
                    delay: 0.05,
                  }}
                >
                  {item.title}
                </motion.h3>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>


        {/* Fullscreen Gallery */}

        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="
                fixed
                inset-0
                z-[100]
                flex
                items-center
                justify-center
                bg-black/90
                p-6
              "
              onClick={() => setSelectedImage(null)}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.3,
              }}
            >

              {/* Close Button */}

              <motion.button
                onClick={() => setSelectedImage(null)}
                className="
                  absolute
                  right-6
                  top-6
                  z-10
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  bg-white/10
                  text-white
                  transition-colors
                  hover:bg-white/20
                "
                aria-label="Close gallery"
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                whileHover={{
                  scale: 1.1,
                }}
                whileTap={{
                  scale: 0.9,
                }}
                transition={{
                  duration: 0.3,
                }}
              >
                <FaTimes size={22} />
              </motion.button>


              {/* Previous Button */}

              <motion.button
                onClick={showPrevious}
                className="
                  absolute
                  left-4
                  top-1/2
                  flex
                  h-12
                  w-12
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  bg-white/10
                  text-white
                  transition-colors
                  hover:bg-white/20
                  md:left-8
                "
                aria-label="Previous image"
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                whileHover={{
                  scale: 1.1,
                }}
                whileTap={{
                  scale: 0.9,
                }}
                transition={{
                  duration: 0.3,
                }}
              >
                <FaChevronLeft size={22} />
              </motion.button>


              {/* Image */}

              <motion.img
                key={selectedImage.id}
                src={selectedImage.image}
                alt={selectedImage.title}
                className="
                  max-h-[75vh]
                  max-w-[88vw]
                  rounded-2xl
                  object-contain
                  shadow-2xl
                  sm:max-h-[85vh]
                  sm:max-w-[90vw]
                "
                onClick={(e) => e.stopPropagation()}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.95,
                }}
                transition={{
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />


              {/* Next Button */}

              <motion.button
                onClick={showNext}
                className="
                  absolute
                  right-4
                  top-1/2
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  bg-white/10
                  text-white
                  transition-colors
                  hover:bg-white/20
                  md:right-8
                "
                aria-label="Next image"
                initial={{
                  opacity: 0,
                  x: 20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                whileHover={{
                  scale: 1.1,
                }}
                whileTap={{
                  scale: 0.9,
                }}
                transition={{
                  duration: 0.3,
                }}
              >
                <FaChevronRight size={22} />
              </motion.button>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

export default Gallery;