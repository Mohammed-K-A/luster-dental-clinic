import { useEffect, useState } from "react";
import gallery from "../../data/gallery";
import { FaExpand, FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

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
        bg-slate-50
        py-20
        sm:py-24
        lg:py-28
      "
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6">

        {/* Heading */}

        <div className="text-center">

          <p
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
          >
            Clinic Gallery
          </p>

          <h2
            className="
              mt-5
              text-4xl
              font-bold
              leading-tight
              sm:mt-6
              sm:text-5xl
            "
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Explore Our Clinic
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:mt-6 sm:text-lg sm:leading-8">
            Discover our modern facilities, advanced dental technology,
            comfortable treatment rooms and welcoming environment.
          </p>

        </div>

        {/* Gallery */}

        <div
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
        >

          {gallery.map((item) => (

            <div
              key={item.id}
              onClick={() => {
                setSelectedImage(item);
                setSelectedIndex(
                  gallery.findIndex((image) => image.id === item.id)
                );
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

              <img
                src={item.image}
                alt={item.title}
                className="
                  h-64
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-110
                  sm:h-72
                  lg:h-80
                "
              />

              {/* Overlay */}

              <div
                className="
                  absolute
                  inset-0
                  flex
                  flex-col
                  items-center
                  justify-center
                  bg-blue-900/70
                  opacity-0
                  transition-all
                  duration-500
                  group-hover:opacity-100
                "
              >

                <FaExpand
                  className="text-white"
                  size={28}
                />

                <h3 className="mt-4 px-4 text-xl font-semibold text-center text-white sm:mt-5 sm:text-2xl">
                  {item.title}
                </h3>

              </div>

            </div>

          ))}

        </div>

        {selectedImage && (

          <div
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
          >

            {/* Close */}

            <button
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
              transition-all
              hover:bg-white/20
            "
              aria-label="Close gallery"
            >
              <FaTimes size={22} />
            </button>


            <button
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
                transition-all
                hover:bg-white/20
                md:left-8
              "
              aria-label="Previous image"
            >
              <FaChevronLeft size={22} />
            </button>


            {/* Image */}

            <img
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
            />

            <button
              onClick={showNext}
              className="
                absolute
                right-4
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
                transition-all
                hover:bg-white/20
                md:right-8
              "
              aria-label="Next image"
            >
              <FaChevronRight size={22} />
            </button>

          </div>

        )}

      </div>
    </section>
  );
}

export default Gallery;