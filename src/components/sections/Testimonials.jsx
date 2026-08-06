import testimonials from "../../data/testimonials";

function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-slate-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="text-center">

          <p className="font-semibold uppercase tracking-[0.3em] text-blue-700">
            Testimonials
          </p>

          <h2
            className="mt-5 text-5xl font-bold"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            What Our Patients Say
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            Patient satisfaction is our greatest achievement.
            Here's what our patients say about their experience at
            Luster Dental Clinic.
          </p>

        </div>

        {/* Reviews */}

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {testimonials.map((item) => (

            <div
              key={item.id}
              className="
                rounded-3xl
                bg-white
                p-8
                shadow-md
              "
            >

              <p className="text-xl text-yellow-500">
                ⭐⭐⭐⭐⭐
              </p>

              <p className="mt-6 leading-8 text-slate-600">
                "{item.review}"
              </p>

              <h3 className="mt-8 text-lg font-semibold">
                {item.name}
              </h3>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;