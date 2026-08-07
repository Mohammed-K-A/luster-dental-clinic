function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-28"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">

        {/* Left Image */}

        <div className="relative">

          <img
            src="/images/about/about.png"
            alt="About Luster Dental Clinic"
            className="rounded-[32px] shadow-2xl"
          />

          {/* Experience Card */}

          <div
            className="
              absolute
              -bottom-8
              -right-6
              rounded-3xl
              bg-blue-700
              px-8
              py-6
              text-white
              shadow-xl
            "
          >

            <h3 className="text-4xl font-bold">
              15+
            </h3>

            <p className="mt-2 text-sm uppercase tracking-widest">
              Years Experience
            </p>

          </div>

        </div>

        {/* Right */}

        <div>

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
            About Us
          </p>

          <h2
            className="mt-6 text-5xl font-bold leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Caring For
            <span className="block text-blue-700">
              Every Smile
            </span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            At Luster Dental & Facial Aesthetic Clinic,
            we believe confidence begins with a healthy
            smile and radiant skin.
          </p>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Our experienced team provides advanced dental
            care alongside modern facial aesthetic
            treatments in a comfortable, patient-focused
            environment.
          </p>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Whether you visit us for routine dental care,
            cosmetic dentistry, or facial rejuvenation,
            our goal is to deliver exceptional care using
            the latest technology.
          </p>

          {/* Statistics */}

          <div className="mt-12 grid grid-cols-2 gap-6">

            <div className="rounded-3xl bg-slate-50 p-6">

              <h3 className="text-4xl font-bold text-blue-700">
                5000+
              </h3>

              <p className="mt-2">
                Happy Patients
              </p>

            </div>

            <div className="rounded-3xl bg-slate-50 p-6">

              <h3 className="text-4xl font-bold text-blue-700">
                100%
              </h3>

              <p className="mt-2">
                Patient Focused
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;