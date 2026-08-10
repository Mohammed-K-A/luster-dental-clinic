import { useEffect, useState } from "react";
import testimonials from "../../data/testimonials";
import {
  FaQuoteLeft,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";


function Testimonials() {

  const [currentIndex, setCurrentIndex] = useState(0);

  const showPrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0
        ? testimonials.length - 1
        : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === testimonials.length - 1
          ? 0
          : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const showNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1
        ? 0
        : prev + 1
    );
  };

  return (
    <section
      id="testimonials"
      className="
        bg-white
        py-20
        sm:py-24
        lg:py-28
      "
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">

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
            Testimonials
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
            What Our Patients Say
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:mt-6 sm:text-lg sm:leading-8">
            Our patients trust us for compassionate care,
            advanced treatment and outstanding results.
          </p>

        </div>

        {/* Cards */}

        <div className="relative mx-auto mt-12 max-w-4xl sm:mt-16 lg:mt-20">

          {/* Testimonial Card */}

          <div
            className="
              rounded-[28px]
              bg-slate-50
              p-7
              text-center
              shadow-md
              transition-all
              duration-500
              sm:rounded-[32px]
              sm:p-10
              md:p-14
            "
          >

            <FaQuoteLeft
              className="mx-auto text-blue-700"
              size={32}
            />

            {/* Rating */}

            <p className="mt-5 text-base tracking-[0.2em] text-yellow-500 sm:mt-6 sm:text-lg">
              ★★★★★
            </p>

            {/* Review */}

            <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-slate-600 sm:mt-8 sm:text-lg sm:leading-9">
              "{testimonials[currentIndex].review}"
            </p>

            {/* Patient */}

            <div className="mt-7 sm:mt-8">

              <h3 className="text-xl font-bold">
                {testimonials[currentIndex].name}
              </h3>

              <p className="mt-1 text-slate-500">
                Happy Patient
              </p>

            </div>

          </div>


          {/* Previous */}

          <button
            onClick={showPrevious}
            className="
              absolute
              left-2
              top-1/2
              flex
              h-10
              w-10
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              bg-white
              text-blue-700
              shadow-lg
              transition-all
              hover:scale-110
              sm:left-0
              sm:h-12
              sm:w-12
              sm:-translate-x-6
            "
            aria-label="Previous testimonial"
          >
            <FaChevronLeft />
          </button>


          {/* Next */}

          <button
            onClick={showNext}
            className="
              absolute
              right-2
              top-1/2
              flex
              h-10
              w-10
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              bg-white
              text-blue-700
              shadow-lg
              transition-all
              hover:scale-110
              sm:right-0
              sm:h-12
              sm:w-12
              sm:translate-x-6
            "
            aria-label="Next testimonial"
          >
            <FaChevronRight />
          </button>

        </div>

        <div className="mt-7 flex justify-center gap-2 sm:mt-8">

          {testimonials.map((_, index) => (

            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`
                h-2.5
                rounded-full
                transition-all
                duration-300
                ${currentIndex === index
                  ? "w-8 bg-blue-700"
                  : "w-2.5 bg-slate-300"
                }
              `}
              aria-label={`Go to testimonial ${index + 1}`}
            />

          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;