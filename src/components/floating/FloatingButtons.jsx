import { useEffect, useState } from "react";
import { FaWhatsapp, FaPhoneAlt, FaArrowUp } from "react-icons/fa";
import { clinic, enquiryWhatsappLink } from "../../data/clinic";

function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Call Button (Left) */}

      <a
        href={`tel:${clinic.phone}`}
        className="
          fixed
          bottom-6
          left-6
          z-50
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          bg-blue-700
          text-white
          shadow-xl
          transition
          duration-300
          hover:scale-110
        "
      >
        <FaPhoneAlt size={20} />
      </a>

      {/* Right Buttons */}

      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-4">

        {/* Scroll to Top */}

        {showTop && (
          <button
            onClick={scrollToTop}
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              bg-blue-700
              text-white
              shadow-xl
              transition
              duration-300
              hover:scale-110
            "
          >
            <FaArrowUp />
          </button>
        )}

        {/* WhatsApp */}

        <a
          href={enquiryWhatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            bg-green-500
            text-white
            shadow-xl
            transition
            duration-300
            hover:scale-110
          "
        >
          <FaWhatsapp size={26} />
        </a>

      </div>
    </>
  );
}

export default FloatingButtons;