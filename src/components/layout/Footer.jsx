import logo from "../../assets/logo.png";

function Footer() {
  return (
    <footer className="bg-slate-900 text-white">

      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 lg:grid-cols-4">

        {/* Logo */}

        <div>

          <img
            src={logo}
            alt="Luster"
            className="h-20"
          />

          <p className="mt-6 text-slate-400">
            Advanced Dental & Facial
            Aesthetic Care with
            Compassion and Excellence.
          </p>

        </div>

        {/* Quick Links */}

        <div>

          <h3 className="text-xl font-semibold">
            Quick Links
          </h3>

          <ul className="mt-6 space-y-3 text-slate-400">

            <li>Home</li>

            <li>About</li>

            <li>Treatments</li>

            <li>Doctors</li>

            <li>Clinic Gallery</li>

            <li>Contact</li>

          </ul>

        </div>

        {/* Treatments */}

        <div>

          <h3 className="text-xl font-semibold">
            Treatments
          </h3>

          <ul className="mt-6 space-y-3 text-slate-400">

            <li>Dental Implants</li>

            <li>Root Canal</li>

            <li>Smile Designing</li>

            <li>Teeth Whitening</li>

            <li>Braces & Aligners</li>

          </ul>

        </div>

        {/* Contact */}

        <div>

          <h3 className="text-xl font-semibold">
            Contact
          </h3>

          <div className="mt-6 space-y-3 text-slate-400">

            <p>Valayamkulam, Kerala</p>

            <p>+91 80896 50707</p>

            <p>info@lusterclinic.com</p>

          </div>

        </div>

      </div>

      <div className="border-t border-slate-700 py-6 text-center text-sm text-slate-500">

        © 2026 Luster Dental Clinic.
        All Rights Reserved.

      </div>

    </footer>
  );
}

export default Footer;