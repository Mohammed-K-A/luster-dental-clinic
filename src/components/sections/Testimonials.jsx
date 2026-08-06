import testimonials from "../../data/testimonials";

function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <p className="text-blue-700 font-semibold uppercase">
            Testimonials
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            What Our Patients Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">

          {testimonials.map((item) => (
            <div key={item.id} className="border rounded-2xl p-6">

              <h3 className="font-semibold">
                {item.name}
              </h3>

              <p className="mt-3">
                ⭐⭐⭐⭐⭐
              </p>

              <p className="mt-4 text-slate-600">
                {item.review}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;