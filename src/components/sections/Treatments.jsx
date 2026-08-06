import services from "../../data/services";

function Treatments() {
  return (
    <section id="treatments" className="py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p className="text-blue-700 font-semibold uppercase tracking-widest">
            Our Treatments
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Comprehensive Dental & Facial Care
          </h2>

          <p className="mt-5 text-slate-600 max-w-3xl mx-auto">
            We provide a wide range of dental and facial aesthetic
            treatments using modern technology and personalized care.
          </p>

        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((service) => (

            <div key={service.id}>

              <img
                src={service.image}
                alt={service.title}
                className="w-full rounded-2xl"
              />

              <h3 className="mt-5 text-xl font-semibold">
                {service.title}
              </h3>

              <p className="mt-3 text-slate-600">
                {service.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Treatments;