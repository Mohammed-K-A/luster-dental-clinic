import { bookingWhatsappLink } from "../../data/clinic";

function Hero() {
  return (
    <section
      id="home"
      className="relative
        min-h-screen
        flex
        items-center
        overflow-hidden
        bg-gradient-to-br
        from-white
        via-blue-50
        to-white
        pt-32
        pb-20"
    >

      {/* Background Blur */}

      <div className="absolute -left-32 top-32 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl"></div>

      <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-cyan-200/20 blur-3xl"></div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">

        {/* Left Content */}

        <div>

          <p className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
            Welcome to Luster Dental Clinic
          </p>

          <h1
            className="
              mt-6
              max-w-2xl
              text-5xl
              font-bold
              leading-[1.1]
              tracking-tight
              text-slate-900
              lg:text-7xl
            "
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Healthy Smiles.

            <span className="block bg-gradient-to-r from-blue-700 to-amber-500 bg-clip-text text-transparent">
              Radiant Confidence.
            </span>
          </h1>

          <h2
            className="mt-6 text-2xl font-semibold text-slate-700 lg:text-3xl"
          >
            Advanced Dental & Facial Aesthetic Care
            <br />
            Under One Roof
          </h2>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
            At Luster Dental & Facial Aesthetic Clinic, we combine
            advanced dentistry with modern facial aesthetic treatments,
            helping you achieve a healthy smile, glowing skin, and
            renewed confidence through personalized care.
          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-wrap gap-5">

            <a
              href={bookingWhatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="
                rounded-full
                bg-gradient-to-r
                from-blue-700
                to-blue-600
                px-9
                py-4
                font-semibold
                text-white
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
              "
            >
              Book Consultation
            </a>

            <a
              href="#treatments"
              className="
              rounded-full
              border
              border-slate-300
              bg-white
              px-9
              py-4
              font-semibold
              text-slate-800
              transition-all
              duration-300
              hover:border-blue-700
              hover:text-blue-700
              hover:shadow-lg
            "
            >
              View Treatments
            </a>

          </div>

          {/* Features */}

          <div className="mt-12 grid gap-5 sm:grid-cols-3">

            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <h3 className="font-semibold">
                🦷 Advanced Dental Care
              </h3>
            </div>

            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <h3 className="font-semibold">
                ✨ Facial Aesthetic Experts
              </h3>
            </div>

            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <h3 className="font-semibold">
                ❤️ Personalized Treatment
              </h3>
            </div>

          </div>

        </div>

        {/* Right */}

        <div className="flex justify-center">

          <img
            src="/images/hero/hero.png"
            alt="Luster Dental Clinic"
            className="
              w-full
              max-w-xl
              rounded-[32px]
              border-8
              border-white
              shadow-2xl
              lg:max-w-2xl
            "
          />

        </div>

      </div>
    </section>
  );
}

export default Hero;