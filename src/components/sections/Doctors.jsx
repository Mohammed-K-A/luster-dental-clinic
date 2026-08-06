import doctors from "../../data/doctors";

function Doctors() {
  return (
    <section id="doctors" className="py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p className="text-blue-700 font-semibold uppercase tracking-widest">
            Meet Our Doctors
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Experienced Professionals You Can Trust
          </h2>

          <p className="mt-5 text-slate-600 max-w-3xl mx-auto">
            Our team is committed to delivering exceptional dental
            and facial aesthetic care with compassion, precision,
            and the latest technology.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-10 mt-14">

          {doctors.map((doctor) => (

            <div key={doctor.id}>

              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full rounded-3xl"
              />

              <h3 className="mt-5 text-2xl font-semibold">
                {doctor.name}
              </h3>

              <p className="mt-2">
                {doctor.qualification}
              </p>

              <p className="mt-1">
                {doctor.specialization}
              </p>

              <p className="mt-1 text-blue-700 font-medium">
                {doctor.experience}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Doctors;