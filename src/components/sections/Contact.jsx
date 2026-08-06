function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="text-center">

          <p className="font-semibold uppercase tracking-[0.3em] text-blue-700">
            Contact Us
          </p>

          <h2
            className="mt-5 text-5xl font-bold"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Book Your Appointment
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            We'd love to hear from you. Contact us today and schedule
            your consultation.
          </p>

        </div>

        {/* Content */}

        <div className="mt-16 grid gap-12 lg:grid-cols-2">

          {/* Left */}

          <div className="space-y-6 rounded-3xl bg-white p-10 shadow-md">

            <h3 className="text-2xl font-semibold">
              Contact Information
            </h3>

            <p>
              📍 Valayamkulam, Kerala
            </p>

            <p>
              📞 +91 80896 50707
            </p>

            <p>
              ✉️ info@lusterclinic.com
            </p>

            <p>
              🕒 Monday - Saturday
              <br />
              9:00 AM – 7:00 PM
            </p>

            <a
              href="#"
              className="inline-block rounded-full bg-blue-700 px-8 py-4 text-white"
            >
              Book Consultation
            </a>

          </div>

          {/* Right */}

          <div className="overflow-hidden rounded-3xl shadow-md">

            <iframe
              title="Luster Dental Clinic"
              src="https://www.google.com/maps/embed?pb="
              className="h-[450px] w-full border-0"
              loading="lazy"
            ></iframe>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;