import { bookingWhatsappLink } from "../../data/clinic";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaWhatsapp,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-white py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="text-center">

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
            Contact Us
          </p>

          <h2
            className="mt-6 text-5xl font-bold"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Book Your Consultation
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Get in touch with us today and let our experienced team help
            you achieve a healthier, brighter smile.
          </p>

        </div>

        {/* Content */}

        <div className="mt-20 grid gap-12 lg:grid-cols-2">

          {/* Left */}

          <div className="space-y-6">

            <div className="flex items-start gap-5 rounded-3xl bg-slate-50 p-6 shadow-sm">

              <FaMapMarkerAlt
                className="mt-1 text-blue-700"
                size={22}
              />

              <div>
                <h3 className="font-semibold">
                  Address
                </h3>

                <p className="mt-2 text-slate-600">
                  First Floor, KVM Complex, Kuttippuram-Thrissur Rd, Valayamkulam, Kerala
                </p>
              </div>

            </div>

            <div className="flex items-start gap-5 rounded-3xl bg-slate-50 p-6 shadow-sm">

              <FaPhoneAlt
                className="mt-1 text-blue-700"
                size={20}
              />

              <div>

                <h3 className="font-semibold">
                  Phone
                </h3>

                <a
                  href="tel:+918089650707"
                  className="mt-2 block text-slate-600"
                >
                  +91 73561 96707
                </a>

              </div>

            </div>

            <div className="flex items-start gap-5 rounded-3xl bg-slate-50 p-6 shadow-sm">

              <FaEnvelope
                className="mt-1 text-blue-700"
                size={20}
              />

              <div>

                <h3 className="font-semibold">
                  Email
                </h3>

                <a
                  href="mailto:mylusterdc@gmail.com"
                  className="mt-2 block text-slate-600"
                >
                  mylusterdc@gmail.com
                </a>

              </div>

            </div>

            <div className="flex items-start gap-5 rounded-3xl bg-slate-50 p-6 shadow-sm">

              <FaClock
                className="mt-1 text-blue-700"
                size={20}
              />

              <div>

                <h3 className="font-semibold">
                  Working Hours
                </h3>

                <p className="mt-2 text-slate-600">
                  Monday – Saturday
                  <br />
                  9:00 AM – 8:00 PM
                </p>

              </div>

            </div>

            {/* Buttons */}

            <div className="flex flex-wrap gap-4 pt-4">

              <a
                href="tel:+917356196707"
                className="
                  rounded-full
                  bg-blue-700
                  px-8
                  py-4
                  font-semibold
                  text-white
                "
              >
                Call Now
              </a>

              <a
                href={bookingWhatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="
    inline-flex
    items-center
    gap-2
    rounded-full
    bg-green-600
    px-8
    py-4
    font-semibold
    text-white
    transition-all
    duration-300
    hover:-translate-y-1
    hover:bg-green-700
  "
              >
                <FaWhatsapp />

                Book via WhatsApp

              </a>

            </div>

          </div>

          {/* Map */}

          <div className="overflow-hidden rounded-[32px] shadow-xl">

            <iframe
              title="Luster Dental Clinic"
              src="https://www.google.com/maps/embed?pb="
              className="h-[650px] w-full border-0"
              loading="lazy"
            ></iframe>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;