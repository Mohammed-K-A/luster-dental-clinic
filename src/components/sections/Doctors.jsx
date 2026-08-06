import doctors from "../../data/doctors";

function Doctors() {
  return (
    <section
      id="doctors"
      className="bg-slate-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="text-center">

          <p className="font-semibold uppercase tracking-[0.3em] text-blue-700">
            Meet Our Doctors
          </p>

          <h2
            className="mt-5 text-5xl font-bold"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Experienced Specialists
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Our dedicated team of dental professionals combines expertise,
            compassion, and modern technology to provide exceptional care for
            every patient.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-10 md:grid-cols-2">

          {doctors.map((doctor) => (

            <div
              key={doctor.id}
              className="
                overflow-hidden
                rounded-3xl
                bg-white
                shadow-md
              "
            >

              <img
                src={doctor.image}
                alt={doctor.name}
                className="h-[420px] w-full object-cover"
              />

              <div className="p-8">

                <h3 className="text-3xl font-semibold">
                  {doctor.name}
                </h3>

                <p className="mt-2 font-medium text-blue-700">
                  {doctor.qualification}
                </p>

                <p className="mt-2 text-slate-700">
                  {doctor.specialization}
                </p>

                <p className="mt-2 text-slate-500">
                  {doctor.experience}
                </p>

                <p className="mt-6 leading-7 text-slate-600">
                  Dedicated to providing personalized dental care with a focus
                  on patient comfort, advanced treatment methods, and lasting
                  oral health.
                </p>

                <a
                  href="#contact"
                  className="mt-8 inline-block font-semibold text-blue-700"
                >
                  Book Consultation →
                </a>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Doctors;