function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-100">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p className="text-blue-700 font-semibold uppercase">
            Contact
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Book Your Consultation
          </h2>

        </div>

        <div className="grid lg:grid-cols-2 gap-12 mt-14">

          <div>

            <h3 className="text-2xl font-semibold">
              Contact Information
            </h3>

            <p className="mt-6">
              📍 Valayamkulam, Kerala
            </p>

            <p className="mt-4">
              📞 +91 XXXXX XXXXX
            </p>

            <p className="mt-4">
              ✉️ info@lusterclinic.com
            </p>

            <p className="mt-4">
              🕒 Mon - Sat : 9:00 AM - 7:00 PM
            </p>

          </div>

          <div>

            <iframe
              title="Luster Clinic"
              src="https://www.google.com/maps/embed?pb="
              className="w-full h-[400px] rounded-2xl"
            ></iframe>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;