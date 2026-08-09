function About() {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        bg-white 
        py-20
        sm:py-24
        lg:py-28
      "
    >
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-7xl
          items-center
          gap-14
          px-5
          sm:px-6
          lg:grid-cols-2
          lg:gap-20
        "
      >

        {/* Left Image */}

        <div className="relative order-2 lg:order-1">

          <img
            src="/images/about/about.png"
            alt="About Luster Dental Clinic"
            className="
              w-full
              rounded-[28px]
              shadow-2xl
              sm:rounded-[32px]
            "
          />

          {/* Experience Card */}

          <div
            className="
              absolute
              -bottom-6
              right-3
              rounded-3xl
              bg-blue-700
              px-6
              py-5
              text-white
              shadow-xl
              sm:-bottom-8
              sm:right-4
              sm:px-8
              sm:py-6
            "
          >

            <h3 className="text-3xl font-bold sm:text-4xl">
              15+
            </h3>

            <p className="mt-2 text-sm uppercase tracking-widest">
              Years Experience
            </p>

          </div>

        </div>

        {/* Right */}

        <div className="order-1 lg:order-2">

          <p
            className="
              inline-flex
              rounded-full
              bg-blue-100
              px-4
              py-2
              text-xs
              font-semibold
              uppercase
              tracking-[0.15em]
              text-blue-700
              sm:px-5
              sm:text-sm
              sm:tracking-[0.2em]
            "
          >
            About Us
          </p>

          <h2
            className="
              mt-5
              text-4xl
              font-bold
              leading-tight
              sm:text-5xl
              lg:mt-6
            "
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Caring For
            <span className="block text-blue-700">
              Every Smile
            </span>
          </h2>

          <p className="mt-6 text-base leading-7 text-slate-600 sm:mt-8 sm:text-lg sm:leading-8">
            At Luster Dental & Facial Aesthetic Clinic,
            we believe confidence begins with a healthy
            smile and radiant skin.
          </p>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:mt-6 sm:text-lg sm:leading-8">
            Our experienced team provides advanced dental
            care alongside modern facial aesthetic
            treatments in a comfortable, patient-focused
            environment.
          </p>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:mt-6 sm:text-lg sm:leading-8">
            Whether you visit us for routine dental care,
            cosmetic dentistry, or facial rejuvenation,
            our goal is to deliver exceptional care using
            the latest technology.
          </p>

          {/* Statistics */}

          <div className="mt-10 grid grid-cols-2 gap-4 sm:mt-12 sm:gap-6">

            <div className="rounded-3xl bg-slate-50 p-5 sm:p-6">

              <h3 className="text-3xl font-bold text-blue-700 sm:text-4xl">
                5000+
              </h3>

              <p className="mt-2">
                Happy Patients
              </p>

            </div>

            <div className="rounded-3xl bg-slate-50 p-5 sm:p-6">

              <h3 className="text-3xl font-bold text-blue-700 sm:text-4xl">
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