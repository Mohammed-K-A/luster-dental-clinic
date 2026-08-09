import logo from "../../assets/logo.png";
import { clinic, enquiryWhatsappLink } from "../../data/clinic";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-900 text-white">

      <div
        className="
          mx-auto
          w-full
          max-w-7xl
          px-5
          py-16
          sm:px-6
          sm:py-20
        "
      >

        <div
          className="
            grid
            gap-12
            sm:gap-14
            lg:grid-cols-4
          "
        >

          {/* Logo / About */}

          <div>

            <img
              src={logo}
              alt="Luster Dental Clinic"
              className="h-16 w-auto sm:h-20"
            />

            <p className="mt-5 text-sm leading-7 text-slate-400 sm:mt-6 sm:text-base sm:leading-8">
              Providing advanced dental and facial aesthetic care with
              modern technology, compassionate service and personalized
              treatment for every patient.
            </p>

          </div>


          {/* Quick Links */}

          <div>

            <h3 className="text-lg font-semibold sm:text-xl">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-slate-400 sm:mt-6 sm:space-y-4 sm:text-base">

              <li>
                <a
                  href="#home"
                  className="transition-colors hover:text-white"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="transition-colors hover:text-white"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#treatments"
                  className="transition-colors hover:text-white"
                >
                  Treatments
                </a>
              </li>

              <li>
                <a
                  href="#doctors"
                  className="transition-colors hover:text-white"
                >
                  Doctors
                </a>
              </li>

              <li>
                <a
                  href="#gallery"
                  className="transition-colors hover:text-white"
                >
                  Clinic Gallery
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="transition-colors hover:text-white"
                >
                  Contact
                </a>
              </li>

            </ul>

          </div>


          {/* Treatments */}

          <div>

            <h3 className="text-lg font-semibold sm:text-xl">
              Treatments
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-slate-400 sm:mt-6 sm:space-y-4 sm:text-base">

              <li>Dental Implants</li>
              <li>Root Canal</li>
              <li>Smile Designing</li>
              <li>Teeth Whitening</li>
              <li>Braces & Aligners</li>
              <li>Facial Aesthetics</li>

            </ul>

          </div>


          {/* Contact */}

          <div>

            <h3 className="text-lg font-semibold sm:text-xl">
              Contact
            </h3>

            <div className="mt-5 space-y-5 text-sm text-slate-400 sm:mt-6 sm:text-base">

              {/* Address */}

              <div className="flex items-start gap-3">

                <FaMapMarkerAlt
                  className="mt-1 shrink-0 text-blue-400"
                />

                <span className="leading-7">
                  {clinic.address}
                </span>

              </div>


              {/* Phone */}

              <a
                href={`tel:${clinic.phone}`}
                className="
                  flex
                  items-start
                  gap-3
                  transition-colors
                  hover:text-white
                "
              >

                <FaPhoneAlt className="mt-1 shrink-0 text-blue-400" />

                <span>
                  +91 73561 96707
                </span>

              </a>


              {/* Email */}

              <a
                href={`mailto:${clinic.email}`}
                className="
                  flex
                  items-start
                  gap-3
                  break-all
                  transition-colors
                  hover:text-white
                "
              >

                <FaEnvelope className="mt-1 shrink-0 text-blue-400" />

                <span>
                  {clinic.email}
                </span>

              </a>

            </div>


            {/* Social Media */}

            <div className="mt-7 flex gap-3 sm:mt-8 sm:gap-4">

              {/* Facebook */}

              <a
                href="https://www.facebook.com/profile.php?id=61566852566840"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-blue-700
                  transition-all
                  duration-300
                  hover:scale-110
                "
              >
                <FaFacebookF />
              </a>


              {/* Instagram */}

              <a
                href="https://www.instagram.com/luster.clinic"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-pink-600
                  transition-all
                  duration-300
                  hover:scale-110
                "
              >
                <FaInstagram />
              </a>


              {/* WhatsApp */}

              <a
                href={enquiryWhatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-green-600
                  transition-all
                  duration-300
                  hover:scale-110
                "
              >
                <FaWhatsapp />
              </a>

            </div>

          </div>

        </div>

      </div>


      {/* Bottom */}

      <div className="border-t border-slate-800">

        <div
          className="
            mx-auto
            flex
            w-full
            max-w-7xl
            items-center
            justify-center
            px-5
            py-5
            text-center
            text-xs
            text-slate-500
            sm:px-6
            sm:text-sm
          "
        >

          <p>
            © 2026 Luster Dental Clinic. All Rights Reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;