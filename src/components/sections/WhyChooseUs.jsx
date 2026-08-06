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
    icon: <FaUserMd size={30} />,
    title: "Experienced Doctors",
    description:
      "Our highly qualified dentists provide personalized treatment with years of clinical expertise.",
  },
  {
    icon: <FaTeeth size={30} />,
    title: "Advanced Technology",
    description:
      "Modern equipment and digital dentistry ensure precise diagnosis and comfortable treatment.",
  },
  {
    icon: <FaShieldAlt size={30} />,
    title: "Safe & Sterile",
    description:
      "Strict sterilization protocols and infection control for complete patient safety.",
  },
  {
    icon: <FaSmile size={30} />,
    title: "Personalized Care",
    description:
      "Every patient receives a customized treatment plan based on their unique needs.",
  },
  {
    icon: <FaClock size={30} />,
    title: "Flexible Appointments",
    description:
      "Convenient appointment scheduling with minimal waiting time.",
  },
  {
    icon: <FaAward size={30} />,
    title: "Trusted Care",
    description:
      "Committed to delivering quality dental and facial aesthetic treatments you can trust.",
  },
];

function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="py-24 bg-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="text-center">

          <p className="font-semibold uppercase tracking-[0.3em] text-blue-700">
            Why Choose Us
          </p>

          <h2
            className="mt-5 text-5xl font-bold"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Experience Dentistry
            <br />
            With Confidence
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            We combine clinical excellence, modern technology and compassionate
            care to provide a comfortable dental experience for every patient.
          </p>

        </div>

        {/* Features */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {features.map((item, index) => (

            <div
              key={index}
              className="
                rounded-3xl
                border
                border-slate-200
                p-8
                shadow-sm
              "
            >

              <div className="text-blue-700">
                {item.icon}
              </div>

              <h3 className="mt-6 text-2xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-4 text-slate-600 leading-7">
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