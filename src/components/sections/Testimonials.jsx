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
      className="bg-white py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

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
            className="mt-6 text-5xl font-bold"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            What Our Patients Say
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Our patients trust us for compassionate care,
            advanced treatment and outstanding results.
          </p>

        </div>

        {/* Cards */}

        <div className="relative mx-auto mt-20 max-w-4xl">

          {/* Testimonial Card */}

          <div
            className="
              rounded-[32px]
              bg-slate-50
              p-10
              text-center
              shadow-md
              transition-all
              duration-500
              md:p-14
            "
          >

            <FaQuoteLeft
              className="mx-auto text-blue-700"
              size={40}
            />

            {/* Rating */}

            <p className="mt-6 text-lg tracking-widest text-yellow-500">
              ★★★★★
            </p>

            {/* Review */}

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-9 text-slate-600">
              "{testimonials[currentIndex].review}"
            </p>

            {/* Patient */}

            <div className="mt-8">

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
              left-0
              top-1/2
              flex
              h-12
              w-12
              -translate-x-6
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              bg-white
              text-blue-700
              shadow-lg
              transition-all
              hover:scale-110
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
              right-0
              top-1/2
              flex
              h-12
              w-12
              translate-x-6
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              bg-white
              text-blue-700
              shadow-lg
              transition-all
              hover:scale-110
            "
            aria-label="Next testimonial"
          >
            <FaChevronRight />
          </button>

        </div>

        <div className="mt-8 flex justify-center gap-2">

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