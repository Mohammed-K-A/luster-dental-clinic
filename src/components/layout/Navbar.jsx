import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import navigation from "../../data/navigation";
import { bookingWhatsappLink } from "../../data/clinic";


function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`
                fixed inset-x-0 z-50 transition-all duration-300
                ${scrolled ? "top-0" : "top-4"}
            `}
        >
            <div className="mx-auto w-full max-w-[1550px] px-6">
                <nav
                    className={`
                        grid
                        grid-cols-[1fr_auto]
                        items-center
                        transition-all
                        duration-300
                        lg:grid-cols-[minmax(260px,1fr)_auto_minmax(260px,1fr)]

                        ${scrolled
                            ? "h-[76px] rounded-b-3xl bg-white/90 shadow-2xl border-b border-slate-200 px-6 sm:px-8 lg:px-10"
                            : "h-[80px] rounded-[999px] bg-white/30 border border-slate-200/70 shadow-xl backdrop-blur-xl px-5 sm:px-6 lg:px-8"
                        }
                    `}
                >
                    {/* Logo */}

                    <div className="flex min-w-0 justify-start lg:justify-center">
                        <a
                            href="#home"
                            className="flex items-center gap-2 sm:gap-3 lg:gap-5 transition-transform duration-300 hover:scale-[1.03]"
                        >
                            <img
                                src={logo}
                                alt="Luster Dental Clinic"
                                className={`
                                    object-contain
                                    transition-all
                                    duration-300
                                    ${scrolled
                                        ? "h-12 w-12 sm:h-14 sm:w-14 lg:h-[68px] lg:w-[68px]"
                                        : "h-14 w-14 sm:h-16 sm:w-16 lg:h-[84px] lg:w-[84px]"
                                    }
                                `}
                            />

                            <div>
                                <h1
                                    className={`
                                        leading-none
                                        text-[var(--primary-dark)]
                                        transition-all
                                        duration-300
                                        ${scrolled
                                            ? "text-2xl sm:text-[2rem]"
                                            : "text-2xl sm:text-3xl"
                                        }
                                    `}
                                    style={{ fontFamily: "var(--font-heading)" }}
                                >
                                    Luster
                                </h1>

                                <p
                                    className={`
                                        mt-1
                                        uppercase
                                        tracking-[0.08em]
                                        text-slate-500
                                        transition-all
                                        duration-300
                                        text-[7px]
                                        sm:text-[9px]
                                        lg:tracking-[0.18em]
                                        lg:text-[10px]
                                    `}
                                >
                                    Dental & Facial Aesthetic Clinic
                                </p>
                            </div>
                        </a>
                    </div>

                    {/* Navigation */}

                    <div className="hidden lg:flex justify-center">
                        <ul className="flex items-center gap-9">
                            {navigation.map((item) => (
                                <li key={item.id}>
                                    <a
                                        href={`#${item.id}`}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="
                                                relative
                                                text-[15px]
                                                font-medium
                                                text-slate-700
                                                transition-colors
                                                duration-300
                                                hover:text-blue-700

                                                after:absolute
                                                after:left-0
                                                after:-bottom-2
                                                after:h-[2px]
                                                after:w-0
                                                after:bg-blue-700
                                                after:transition-all
                                                after:duration-300
                                                hover:after:w-full
                                            "
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Book Consultation Button */}

                    <div className="hidden lg:flex items-center justify-center">
                        <a
                            href={bookingWhatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                group
                                relative
                                inline-flex
                                min-w-[200px]
                                min-h-[30px]
                                items-center
                                justify-center
                                overflow-hidden
                                rounded-full
                                bg-gradient-to-r
                                from-blue-700
                                to-blue-600
                                px-12
                                py-3.5
                                text-[17px]
                                font-semibold
                                text-white
                                shadow-lg
                                transition-all
                                duration-300
                                hover:-translate-y-1
                                hover:scale-105
                                hover:shadow-2xl
                            "
                        >
                            <span className="relative z-10">
                                Book Consultation
                            </span>

                            <span
                                className="
                                    absolute
                                    inset-y-0
                                    left-[-40%]
                                    w-1/3
                                    skew-x-[-25deg]
                                    bg-white/30
                                    transition-all
                                    duration-700
                                    group-hover:left-[120%]
                                "
                            />
                        </a>
                    </div>
                    {/* Mobile Menu Button */}

                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="
                            flex
                            h-11
                            w-11
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-slate-200
                            bg-white/80
                            text-slate-700
                            shadow-sm
                            lg:hidden
                        "
                        aria-label="Toggle navigation menu"
                    >
                        {mobileMenuOpen ? "✕" : "☰"}
                    </button>
                </nav>
                {/* Mobile Navigation */}

                {mobileMenuOpen && (
                    <div
                        className="
                            mt-3
                            overflow-hidden
                            rounded-3xl
                            border
                            border-slate-200
                            bg-white/95
                            p-4
                            shadow-2xl
                            backdrop-blur-xl
                            lg:hidden
                            "
                    >
                        <ul className="space-y-2">

                            {navigation.map((item) => (
                                <li key={item.id}>

                                    <a
                                        href={`#${item.id}`}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="
                                            block
                                            rounded-2xl
                                            px-5
                                            py-3
                                            font-medium
                                            text-slate-700
                                            transition-colors
                                            duration-300
                                            hover:bg-blue-50
                                            hover:text-blue-700
                                            "
                                    >
                                        {item.label}
                                    </a>

                                </li>
                            ))}

                        </ul>

                        {/* Mobile Booking Button */}

                        <a
                            href={bookingWhatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setMobileMenuOpen(false)}
                            className="
                                mt-3
                                flex
                                items-center
                                justify-center
                                rounded-full
                                bg-gradient-to-r
                                from-blue-700
                                to-blue-600
                                px-6
                                py-3
                                font-semibold
                                text-white
                                shadow-lg
                            "
                        >
                            Book Consultation
                        </a>

                    </div>
                )}
            </div>
        </header>
    );
}

export default Navbar;