import doctors from "../../data/doctors";
import { FaArrowRight } from "react-icons/fa6";
import { bookingWhatsappLink } from "../../data/clinic";

function Doctors() {
  return (
    <section
      id="doctors"
      className="
        bg-white 
        py-20
        sm:py-24
        lg:py-28
      "
    >
      <div
        className="
          mx-auto 
          w-full
          max-w-7xl 
          px-5
          sm:px-6
        "
      >

        {/* Heading */}

        <div className="text-center">

          <p
            className="
              inline-flex
              rounded-full
              bg-blue-100
              px-4
              py-1
              text-xs
              font-semibold
              uppercase
              tracking-[0.3em]
              text-blue-700
              sm:px-5
              sm:py-1.5
              sm:text-sm
            "
          >
            Meet Our Doctors
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
            Experienced Dental Experts
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:mt-6 sm:text-lg sm:leading-8">
            Our experienced dentists combine expertise, compassion,
            and advanced technology to provide exceptional dental care.
          </p>

        </div>

        {/* Doctor Cards */}

        <div
          className="
            mt-12
            grid
            gap-6
            sm:mt-16
            sm:gap-8
            lg:mt-20
            lg:grid-cols-2
          "
        >

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
                    h-[360px]
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                    sm:h-[420px]
                    lg:h-[480px]
                  "
                />

              </div>

              {/* Content */}

              <div className="p-6 sm:p-8">

                <span
                  className="
                    inline-flex
                    rounded-full
                    bg-blue-100
                    px-3
                    py-1.5
                    text-xs
                    font-semibold
                    text-blue-700
                    sm:px-4
                    sm:py-2
                    sm:text-sm
                  "
                >
                  {doctor.qualification}
                </span>

                <h3 className="mt-4 text-2xl font-bold sm:mt-5 sm:text-3xl">
                  {doctor.name}
                </h3>

                <p className="mt-2 text-base font-medium text-blue-700 sm:mt-3 sm:text-lg">
                  {doctor.specialization}
                </p>

                <p className="mt-2 text-sm text-slate-500 sm:text-base">
                  {doctor.experience}
                </p>

                <p className="mt-5 text-sm leading-7 text-slate-600 sm:mt-6 sm:text-base sm:leading-8">
                  Dedicated to delivering personalized dental care,
                  ensuring patient comfort, precision treatment,
                  and long-term oral health.
                </p>

                <a
                  href={bookingWhatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
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