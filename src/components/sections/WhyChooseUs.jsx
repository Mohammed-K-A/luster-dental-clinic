import {
  FaUserMd,
  FaTeeth,
  FaShieldAlt,
  FaSmile,
  FaClock,
  FaAward,
} from "react-icons/fa";

const features = [
  {
    icon: <FaUserMd size={28} />,
    title: "Experienced Doctors",
    description:
      "Our experienced clinical team provides personalized dental and facial aesthetic care with a focus on safety, precision, and patient comfort.",
  },
  {
    icon: <FaTeeth size={28} />,
    title: "Advanced Technology",
    description:
      "Modern equipment and treatment techniques support precise, comfortable care across both facial aesthetics and dentistry.",
  },
  {
    icon: <FaShieldAlt size={28} />,
    title: "Safe & Sterile",
    description:
      "Strict sterilization protocols and infection control for complete patient safety.",
  },
  {
    icon: <FaSmile size={28} />,
    title: "Personalized Care",
    description:
      "Every patient receives a customized treatment plan based on their unique needs.",
  },
  {
    icon: <FaClock size={28} />,
    title: "Flexible Appointments",
    description:
      "Convenient appointment scheduling with minimal waiting time.",
  },
  {
    icon: <FaAward size={28} />,
    title: "Trusted Care",
    description:
      "Committed to delivering quality facial aesthetic and dental treatments you can trust.",
  },
];

function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="
        bg-white
        py-20
        sm:py-24
        lg:py-28
      "
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Heading */}

        <div className="text-center">

          {/* Section Label */}

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
            Why Choose Us
          </p>

          {/* Heading */}

          <h2
            className="
              mt-5
              text-4xl
              font-bold
              leading-tight
              text-slate-900
              sm:text-5xl
            "
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Advanced Care
            <br />
            With Confidence
          </h2>

          {/* Description */}

          <p
            className="
              mx-auto
              mt-5
              max-w-3xl
              text-base
              leading-7
              text-slate-600
              sm:mt-6
              sm:text-lg
              sm:leading-8
            "
          >
            We combine clinical excellence, modern technology and compassionate
            care across facial aesthetics and dentistry, creating a comfortable
            experience tailored to every patient.
          </p>

        </div>

        {/* Features */}

        <div
          className="
            mt-12
            grid
            gap-5
            sm:mt-16
            sm:gap-8
            md:grid-cols-2
            lg:grid-cols-3
          "
        >

          {features.map((item, index) => (

            <div
              key={index}
              className="
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-6
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
                sm:p-8
              "
            >

              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-blue-100
                  text-blue-700
                "
              >
                {item.icon}
              </div>

              <h3 className="mt-5 text-xl font-semibold sm:mt-6 sm:text-2xl">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600 sm:mt-4 sm:text-base">
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;