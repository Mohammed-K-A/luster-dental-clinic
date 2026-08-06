function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Image */}

          <div>
            <img
              src="/images/about/about.png"
              alt="About Luster Dental Clinic"
              className="w-full rounded-3xl"
            />
          </div>

          {/* Right Content */}

          <div>

            <p className="text-blue-700 font-semibold uppercase tracking-widest">
              About Us
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              Your Trusted Dental & Facial Aesthetic Clinic
            </h2>

            <p className="mt-6 text-slate-600">
              Luster Dental Clinic is committed to providing high-quality
              dental and facial aesthetic treatments with a focus on
              patient comfort, safety, and long-term oral health.
            </p>

            <p className="mt-4 text-slate-600">
              Our experienced team combines advanced technology with
              compassionate care to deliver personalized treatment
              solutions for patients of all ages.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6">

              <div>
                <h3 className="font-semibold">Our Mission</h3>

                <p className="mt-2 text-slate-600">
                  To provide exceptional dental care with honesty,
                  compassion, and modern technology.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">Our Vision</h3>

                <p className="mt-2 text-slate-600">
                  To become the most trusted dental and facial
                  aesthetic clinic in the region.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;