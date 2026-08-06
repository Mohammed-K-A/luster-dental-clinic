import services from "../../data/services";

function Treatments() {
  return (
    <section
      id="treatments"
      className="bg-slate-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="text-center">

          <p className="font-semibold uppercase tracking-[0.3em] text-blue-700">
            Our Treatments
          </p>

          <h2
            className="mt-5 text-5xl font-bold"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Complete Dental Solutions
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            From routine dental care to advanced cosmetic and facial
            aesthetic treatments, we provide personalized solutions
            for every smile.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {services.map((service) => (

            <div
              key={service.id}
              className="
                overflow-hidden
                rounded-3xl
                bg-white
                shadow-md
              "
            >

              <img
                src={service.image}
                alt={service.title}
                className="h-56 w-full object-cover"
              />

              <div className="p-6">

                <h3 className="text-xl font-semibold">
                  {service.title}
                </h3>

                <p className="mt-4 text-slate-600">
                  {service.description}
                </p>

                <button
                  className="
                    mt-6
                    font-semibold
                    text-blue-700
                  "
                >
                  Learn More →
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Treatments;