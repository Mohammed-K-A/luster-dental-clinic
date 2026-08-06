function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">

        {/* Left Content */}

        <div>

          <p className="font-semibold uppercase tracking-[0.3em] text-blue-700">
            Welcome to Luster Dental Clinic
          </p>

          <h1
            className="mt-6 text-5xl font-bold leading-tight lg:text-7xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Creating
            <span className="block text-blue-700">
              Healthy Smiles
            </span>
            For Every Family
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
            Experience advanced dental and facial aesthetic care with
            modern technology, experienced professionals, and a
            patient-first approach.
          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="#contact"
              className="rounded-full bg-blue-700 px-8 py-4 font-semibold text-white"
            >
              Book Consultation
            </a>

            <a
              href="tel:+918089650707"
              className="rounded-full border border-slate-300 px-8 py-4 font-semibold"
            >
              Call Now
            </a>

          </div>

          {/* Features */}

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">

            <div>
              <h3 className="font-semibold">Experienced Doctors</h3>
            </div>

            <div>
              <h3 className="font-semibold">Modern Equipment</h3>
            </div>

            <div>
              <h3 className="font-semibold">Patient First Care</h3>
            </div>

          </div>

        </div>

        {/* Right */}

        <div className="flex justify-center">

          <img
            src="/images/hero/hero.png"
            alt="Luster Dental Clinic"
            className="w-full rounded-[30px]"
          />

        </div>

      </div>
    </section>
  );
}

export default Hero;