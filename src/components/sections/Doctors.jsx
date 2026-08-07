import doctors from "../../data/doctors";
import { FaArrowRight } from "react-icons/fa6";

function Doctors() {
  return (
    <section
      id="doctors"
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
            Meet Our Doctors
          </p>

          <h2
            className="mt-6 text-5xl font-bold"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Experienced Dental Experts
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Our experienced dentists combine expertise, compassion,
            and advanced technology to provide exceptional dental care.
          </p>

        </div>

        {/* Doctor Cards */}

        <div className="mt-20 grid gap-10 lg:grid-cols-2">

          {doctors.map((doctor) => (

            <div
              key={doctor.id}
              className="
                group
                overflow-hidden
                rounded-[32px]
                bg-slate-50
                shadow-md
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-2xl
              "
            >

              {/* Image */}

              <div className="overflow-hidden">

                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="
                    h-[480px]
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />

              </div>

              {/* Content */}

              <div className="p-8">

                <span
                  className="
                    rounded-full
                    bg-blue-100
                    px-4
                    py-2
                    text-sm
                    font-semibold
                    text-blue-700
                  "
                >
                  {doctor.qualification}
                </span>

                <h3 className="mt-5 text-3xl font-bold">
                  {doctor.name}
                </h3>

                <p className="mt-3 text-lg font-medium text-blue-700">
                  {doctor.specialization}
                </p>

                <p className="mt-2 text-slate-500">
                  {doctor.experience}
                </p>

                <p className="mt-6 leading-8 text-slate-600">
                  Dedicated to delivering personalized dental care,
                  ensuring patient comfort, precision treatment,
                  and long-term oral health.
                </p>

                <a
                  href="#contact"
                  className="
                    mt-8
                    inline-flex
                    items-center
                    gap-2
                    font-semibold
                    text-blue-700
                    transition-all
                    duration-300
                    group-hover:gap-4
                  "
                >
                  Book Consultation

                  <FaArrowRight />

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