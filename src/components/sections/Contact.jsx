import { clinic, bookingWhatsappLink } from "../../data/clinic";

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
      className="
        bg-white
        py-20
        sm:py-24
        lg:py-28
      "
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6">

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
            className="
              mt-5
              text-4xl
              font-bold
              leading-tight
              sm:mt-6
              sm:text-5xl
            "
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Book Your Consultation
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:mt-6 sm:text-lg sm:leading-8">
            Get in touch with us today and let our experienced team help
            you achieve a healthier, brighter smile.
          </p>

        </div>

        {/* Content */}

        <div
          className="
            mt-12
            grid
            gap-8
            sm:mt-16
            sm:gap-10
            lg:mt-20
            lg:grid-cols-2
            lg:gap-12
          "
        >

          {/* Left */}

          <div className="space-y-6">

            {/* Address */}

            <div className="
              flex
              items-start
              gap-4
              rounded-3xl
              bg-slate-50
              p-5
              shadow-sm
              sm:gap-5
              sm:p-6
            ">

              <FaMapMarkerAlt
                className="mt-1 text-blue-700"
                size={22}
              />

              <div>
                <h3 className="font-semibold">
                  Address
                </h3>

                <p className="mt-2 break-words text-sm leading-7 text-slate-600 sm:text-base">
                  {clinic.address}
                </p>
              </div>

            </div>

            {/* Phone */}

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
                  href={`tel:${clinic.phone}`}
                  className="mt-2 block text-slate-600"
                >
                  +91 73561 96707
                </a>

              </div>

            </div>

            {/* Email */}


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
                  href={`mailto:${clinic.email}`}
                  className="mt-2 block break-all text-sm text-slate-600 sm:text-base"
                >
                  {clinic.email}
                </a>

              </div>

            </div>

            {/* Working Hours */}


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

            <div className="flex flex-col gap-3 pt-4 sm:flex-row sm:flex-wrap sm:gap-4">

              <a
                href={`tel:${clinic.phone}`}
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-full
                  bg-blue-700
                  px-8
                  py-4
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-blue-800
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

          <div
            className="
              overflow-hidden
              rounded-[28px]
              shadow-xl
              sm:rounded-[32px]
            "
          >

            <iframe
              title="Luster Dental Clinic"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.997942909173!2d76.05026409999999!3d10.734641400000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7bffdf5648923%3A0xb6b324d452fcbe0a!2sLUSTER%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1786276127435!5m2!1sen!2sin"
              className="
                h-[400px]
                w-full
                border-0
                sm:h-[500px]
                lg:h-[650px]
              "
              loading="lazy"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;