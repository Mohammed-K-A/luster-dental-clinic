function About() {
  return (
    <section
      id="about"
      className="bg-white py-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        {/* Left */}

        <div>

          <img
            src="/images/about/about.png"
            alt="About Luster Dental Clinic"
            className="w-full rounded-[30px]"
          />

        </div>

        {/* Right */}

        <div>

          <p className="font-semibold uppercase tracking-[0.3em] text-blue-700">
            About Us
          </p>

          <h2
            className="mt-5 text-5xl font-bold leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Your Smile
            <br />
            Our Commitment
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            At Luster Dental Clinic, we combine advanced dental
            technology with compassionate care to provide exceptional
            treatment for patients of every age.
          </p>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Our experienced team focuses on personalized treatment,
            patient comfort, and long-lasting oral health using
            modern techniques and internationally accepted standards.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-8">

            <div>
              <h3 className="text-xl font-semibold">
                Our Mission
              </h3>

              <p className="mt-3 text-slate-600">
                Deliver high-quality dental care with honesty,
                compassion and innovation.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Our Vision
              </h3>

              <p className="mt-3 text-slate-600">
                To become one of Kerala's most trusted dental &
                facial aesthetic clinics.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;