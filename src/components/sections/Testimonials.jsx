import testimonials from "../../data/testimonials";
import { FaQuoteLeft } from "react-icons/fa";

function Testimonials() {
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

        <div className="mt-20 grid gap-8 md:grid-cols-3">

          {testimonials.map((item) => (

            <div
              key={item.id}
              className="
                rounded-[32px]
                bg-slate-50
                p-8
                shadow-md
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-xl
              "
            >

              <FaQuoteLeft
                className="text-blue-700"
                size={34}
              />

              <p className="mt-6 text-yellow-500 text-lg">
                ⭐⭐⭐⭐⭐
              </p>

              <p className="mt-6 leading-8 text-slate-600">
                "{item.review}"
              </p>

              <div className="mt-8">

                <h3 className="text-xl font-bold">
                  {item.name}
                </h3>

                <p className="text-slate-500">
                  Happy Patient
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;