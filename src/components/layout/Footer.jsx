import logo from "../../assets/logo.png";
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

      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-14 lg:grid-cols-4">

          {/* Logo */}

          <div>

            <img
              src={logo}
              alt="Luster Dental Clinic"
              className="h-20"
            />

            <p className="mt-6 leading-8 text-slate-400">
              Providing advanced dental and facial aesthetic care with
              modern technology, compassionate service and personalized
              treatment for every patient.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-4 text-slate-400">

              <li><a href="#home">Home</a></li>

              <li><a href="#about">About</a></li>

              <li><a href="#treatments">Treatments</a></li>

              <li><a href="#doctors">Doctors</a></li>

              <li><a href="#gallery">Clinic Gallery</a></li>

              <li><a href="#contact">Contact</a></li>

            </ul>

          </div>

          {/* Treatments */}

          <div>

            <h3 className="text-xl font-semibold">
              Treatments
            </h3>

            <ul className="mt-6 space-y-4 text-slate-400">

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

            <h3 className="text-xl font-semibold">
              Contact
            </h3>

            <div className="mt-6 space-y-5 text-slate-400">

              <div className="flex gap-3">

                <FaMapMarkerAlt className="mt-1 text-blue-400" />

                <span>First Floor, KVM Complex, Kuttippuram-Thrissur Rd, Valayamkulam, Kerala, 679591</span>

              </div>

              <div className="flex gap-3">

                <FaPhoneAlt className="mt-1 text-blue-400" />

                <span>+91 73561 96707</span>

              </div>

              <div className="flex gap-3">

                <FaEnvelope className="mt-1 text-blue-400" />

                <span>mylusterdc@gmail.com</span>

              </div>

            </div>

            {/* Social */}

            <div className="mt-8 flex gap-4">

              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-700 transition hover:scale-110"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.instagram.com/luster.clinic?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                className="flex h-11 w-11 items-center justify-center rounded-full bg-pink-600 transition hover:scale-110"
              >
                <FaInstagram />
              </a>

              <a
                href="https://wa.me/918891396707"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-green-600 transition hover:scale-110"
              >
                <FaWhatsapp />
              </a>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-slate-800">

        <div className="mx-auto flex flex-col items-center justify-between text-sm text-slate-500 ">

          <p>
            © 2026 Luster Dental Clinic. All Rights Reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;