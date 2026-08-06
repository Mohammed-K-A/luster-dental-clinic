function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-28"
    >
      <div className="mx-auto max-w-7xl w-full px-6">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left */}

          <div>

            <p className="text-blue-700 font-semibold uppercase tracking-widest">
              Welcome to Luster Dental Clinic
            </p>

            <h1 className="mt-5 text-5xl font-bold">
              Advanced Dental &
              <br />
              Facial Aesthetic Care
            </h1>

            <p className="mt-6 text-lg text-slate-600">
              We provide comprehensive dental and facial aesthetic
              treatments using modern technology and a patient-first
              approach to help you smile with confidence.
            </p>

            <div className="mt-8 flex gap-4">

              <a
                href="#contact"
                className="rounded-full bg-blue-700 px-6 py-3 text-white"
              >
                Book Consultation
              </a>

              <a
                href="tel:+918089650707"
                className="rounded-full border border-slate-300 px-6 py-3"
              >
                Call Now
              </a>

            </div>

            <div className="mt-10 space-y-3">

              <p>✔ Experienced Dental Professionals</p>

              <p>✔ Modern Equipment & Technology</p>

              <p>✔ Personalized Treatment Plans</p>

            </div>

          </div>

          {/* Right */}

          <div>

            <img
              src="/images/hero/hero.png"
              alt="Luster Dental Clinic"
              className="w-full rounded-3xl"
            />

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;