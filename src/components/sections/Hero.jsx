import { bookingWhatsappLink } from "../../data/clinic";

function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        flex
        min-h-screen
        items-center
        overflow-hidden
        bg-gradient-to-br
        from-white
        via-blue-50
        to-white
        pt-40
        pb-20
        sm:pt-44
        sm:pb-24
        lg:pt-36
      "
    >
    
      

      {/* Background Blur */}

      <div className="absolute -left-32 top-32 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl"></div>

      <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-cyan-200/20 blur-3xl"></div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">

        {/* Left Content */}

        <div>

          <p className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-blue-700 sm:px-5 sm:text-sm sm:tracking-[0.2em]">
            Welcome to Luster Dental Clinic
          </p>

          <h1
            className="
              mt-6
              max-w-2xl
              text-4xl
              font-bold
              leading-[1.08]
              tracking-tight
              text-slate-900
              sm:text-5xl
              lg:mt-6
              lg:text-7xl
            "
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Reveal Your Natural Beauty.

            <span className="block bg-gradient-to-r from-amber-500 via-yellow-500 to-blue-700 bg-clip-text text-transparent">
              Smile With Confidence.
            </span>
          </h1>

          <h2
            className="mt-5 text-xl font-semibold leading-snug text-slate-700 sm:text-2xl lg:mt-6 lg:text-3xl"
          >
            Advanced Facial Aesthetic & Dental Care
            <br />
            Under One Roof
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:mt-8 sm:text-lg sm:leading-8">
            At Luster Dental & Facial Aesthetic Clinic, we bring modern facial
            aesthetic treatments and advanced dental care together, helping
            you achieve radiant skin, enhanced features, a healthy smile,
            and renewed confidence through personalized care.
          </p>

          {/* Buttons */}

          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-5">

            <a
              href={bookingWhatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                w-full
                items-center
                justify-center
                rounded-full
                bg-gradient-to-r
                from-blue-700
                to-blue-600
                px-7
                py-3.5
                font-semibold
                text-white
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
                sm:w-auto
              "
            >
              Book Consultation
            </a>

            <a
              href="#treatments"
              className="
              inline-flex
              w-full
              items-center
              justify-center
              rounded-full
              border
              border-slate-300
              bg-white
              px-7
              py-3.5
              font-semibold
              text-slate-800
              transition-all
              duration-300
              hover:border-blue-700
              hover:text-blue-700
              hover:shadow-lg
              sm:w-auto
            "
            >
              View Treatments
            </a>

          </div>

          {/* Features */}

          <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-3">

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="font-semibold">
                ✨ Advanced Facial Aesthetics
              </h3>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="font-semibold">
                🦷 Advanced Dental Care
              </h3>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
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
              mt-4
              w-full
              max-w-md
              rounded-[28px]
              border-4
              border-white
              shadow-2xl
              sm:mt-6
              sm:max-w-xl
              lg:mt-0
              lg:max-w-2xl
            "
          />

        </div>

      </div>
    </section>
  );
}

export default Hero;