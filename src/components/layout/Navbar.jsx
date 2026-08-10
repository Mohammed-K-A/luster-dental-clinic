import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

import logo from "../../assets/logo.png";
import navigation from "../../data/navigation";
import { bookingWhatsappLink } from "../../data/clinic";

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            const sections = navigation
                .map((item) => document.getElementById(item.id))
                .filter(Boolean);

            const scrollPosition = window.scrollY + window.innerHeight * 0.35;

            let currentSection = "home";

            sections.forEach((section) => {
                if (section.offsetTop <= scrollPosition) {
                    currentSection = section.id;
                }
            });

            setActiveSection(currentSection);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const navContainer = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.08,
            },
        },
    };

    const navItem = {
        hidden: {
            opacity: 0,
            y: -10,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    return (
        <header
            className={`
        fixed inset-x-0 z-50 transition-all duration-300
        ${scrolled ? "top-0" : "top-4"}
      `}
        >
            <div
                className={`w-full transition-all duration-300 ${scrolled
                    ? "px-0"
                    : "mx-auto max-w-[1550px] px-6"
                    }`}
            >
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

                    <motion.div
                        initial={{
                            opacity: 0,
                            x: -20,
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                        }}
                        transition={{
                            duration: 0.6,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="flex min-w-0 justify-start lg:justify-center"
                    >
                        <a
                            href="#home"
                            className="
                                flex
                                items-center
                                gap-2
                                sm:gap-3
                                lg:gap-5
                                transition-transform
                                duration-300
                                hover:scale-[1.03]
                            "
                        >
                            <motion.img
                                src={logo}
                                alt="Luster Dental Clinic"
                                animate={{
                                    scale: scrolled ? 0.9 : 1,
                                }}
                                transition={{
                                    duration: 0.3,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
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
                                    className="
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
                                    "
                                >
                                    Dental & Facial Aesthetic Clinic
                                </p>
                            </div>
                        </a>
                    </motion.div>


                    {/* Desktop Navigation */}

                    <motion.div
                        variants={navContainer}
                        initial="hidden"
                        animate="visible"
                        className="hidden lg:flex justify-center"
                    >
                        <ul className="flex items-center gap-9">

                            {navigation.map((item) => (
                                <motion.li
                                    key={item.id}
                                    variants={navItem}
                                >
                                    <a
                                        href={`#${item.id}`}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className={`
                                            relative
                                            text-[15px]
                                            font-medium
                                            transition-colors
                                            duration-300

                                            ${activeSection === item.id
                                                ? "text-blue-700"
                                                : "text-slate-700 hover:text-blue-700"
                                            }

                                            after:absolute
                                            after:left-0
                                            after:-bottom-2
                                            after:h-[2px]
                                            after:bg-blue-700
                                            after:transition-all
                                            after:duration-300

                                            ${activeSection === item.id
                                                ? "after:w-full"
                                                : "after:w-0 hover:after:w-full"
                                            }
                                        `}
                                    >
                                        {item.label}
                                    </a>
                                </motion.li>
                            ))}

                        </ul>
                    </motion.div>


                    {/* Desktop Booking Button */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            x: 20,
                            scale: 0.95,
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                            scale: 1,
                        }}
                        transition={{
                            duration: 0.6,
                            delay: 0.25,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="hidden lg:flex items-center justify-center"
                    >
                        <motion.a
                            href={bookingWhatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{
                                y: -2,
                                scale: 1.03,
                            }}
                            whileTap={{
                                scale: 0.97,
                            }}
                            className="
                                group
                                relative
                                inline-flex
                                min-w-[180px]
                                min-h-[30px]
                                items-center
                                justify-center
                                overflow-hidden
                                rounded-full
                                bg-gradient-to-r
                                from-blue-700
                                to-blue-600
                                px-8
                                py-3
                                text-[16px]
                                font-semibold
                                text-white
                                shadow-lg
                                transition-shadow
                                duration-300
                                hover:shadow-[0_8px_30px_rgba(37,99,235,0.45)]
                            "
                        >
                            {/* Soft hover glow */}

                            <span
                                className="
                                    pointer-events-none
                                    absolute
                                    inset-0
                                    rounded-full
                                    bg-white/10
                                    opacity-0
                                    transition-opacity
                                    duration-300
                                    group-hover:opacity-100
                                "
                            />

                            {/* Button Text */}

                            <span className="relative z-10">
                                Book Consultation
                            </span>

                        </motion.a>
                    </motion.div>


                    {/* Mobile Menu Button */}

                    <motion.button
                        initial={{
                            opacity: 0,
                            scale: 0.8,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                        }}
                        transition={{
                            duration: 0.4,
                            delay: 0.2,
                        }}
                        whileTap={{
                            scale: 0.9,
                        }}
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
                        <motion.span
                            key={mobileMenuOpen ? "close" : "menu"}
                            initial={{
                                opacity: 0,
                                rotate: -20,
                                scale: 0.8,
                            }}
                            animate={{
                                opacity: 1,
                                rotate: 0,
                                scale: 1,
                            }}
                            transition={{
                                duration: 0.2,
                            }}
                        >
                            {mobileMenuOpen ? "✕" : "☰"}
                        </motion.span>
                    </motion.button>

                </nav>


                {/* Mobile Navigation */}

                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: -12,
                                scale: 0.98,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                scale: 1,
                            }}
                            exit={{
                                opacity: 0,
                                y: -12,
                                scale: 0.98,
                            }}
                            transition={{
                                duration: 0.3,
                                ease: [0.22, 1, 0.36, 1],
                            }}
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

                            <motion.ul
                                variants={navContainer}
                                initial="hidden"
                                animate="visible"
                                className="space-y-2"
                            >

                                {navigation.map((item) => (
                                    <motion.li
                                        key={item.id}
                                        variants={navItem}
                                    >
                                        <a
                                            href={`#${item.id}`}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className={`
                                                block
                                                rounded-2xl
                                                px-5
                                                py-3
                                                font-medium
                                                transition-colors
                                                duration-300

                                                ${activeSection === item.id
                                                    ? "bg-blue-50 text-blue-700"
                                                    : "text-slate-700 hover:bg-blue-50 hover:text-blue-700"
                                                }
                                            `}
                                        >
                                            {item.label}
                                        </a>
                                    </motion.li>
                                ))}

                            </motion.ul>


                            {/* Mobile Booking Button */}

                            <motion.a
                                href={bookingWhatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setMobileMenuOpen(false)}
                                initial={{
                                    opacity: 0,
                                    y: 10,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    duration: 0.4,
                                    delay: 0.25,
                                }}
                                whileTap={{
                                    scale: 0.97,
                                }}
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
                            </motion.a>

                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </header>
    );
}

export default Navbar;