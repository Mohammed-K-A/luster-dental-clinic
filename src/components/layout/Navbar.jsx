import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

import logo from "../../assets/logo.png";
import navigation from "../../data/navigation";
import { bookingWhatsappLink } from "../../data/clinic";

function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            const sections = navigation
                .map((item) => document.getElementById(item.id))
                .filter(Boolean);

            const scrollPosition =
                window.scrollY + window.innerHeight * 0.35;

            let currentSection = "home";

            sections.forEach((section) => {
                if (section.offsetTop <= scrollPosition) {
                    currentSection = section.id;
                }
            });

            setActiveSection(currentSection);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    /* =========================
       NAVIGATION ANIMATION
    ========================== */

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
            className="
                fixed
                inset-x-0
                top-4
                z-50
                px-4
                transition-all
                duration-500
                sm:px-6
                lg:px-8
            "
        >

            {/* =====================================================
                NAVBAR CONTAINER
            ====================================================== */}

            <div
                className="
                    mx-auto
                    w-full
                    max-w-[1550px]
                "
            >

                {/* =================================================
                    MAIN LIQUID GLASS NAVBAR
                ================================================== */}

                <nav
                    className="
                        relative
                        grid
                        grid-cols-[1fr_auto]
                        items-center
                        overflow-hidden

                        h-[80px]
                        rounded-[999px]

                        border
                        border-white/60

                        bg-white/30

                        shadow-[0_12px_45px_rgba(30,64,175,0.16),inset_0_1px_0_rgba(255,255,255,0.95),inset_0_-1px_0_rgba(255,255,255,0.25)]

                        backdrop-blur-[30px]
                        backdrop-saturate-[180%]

                        px-5

                        transition-all
                        duration-500

                        sm:px-6

                        lg:grid-cols-[minmax(260px,1fr)_auto_minmax(260px,1fr)]
                        lg:px-8
                    "
                >

                    {/* =================================================
                        LIQUID GLASS BACKGROUND
                    ================================================== */}

                    {/* Blue Refraction */}

                    <div
                        className="
                            pointer-events-none
                            absolute
                            -left-16
                            -top-20
                            h-48
                            w-72
                            rounded-full
                            bg-blue-300/20
                            blur-3xl
                        "
                    />

                    {/* Cyan Refraction */}

                    <div
                        className="
                            pointer-events-none
                            absolute
                            -right-16
                            -bottom-20
                            h-44
                            w-64
                            rounded-full
                            bg-cyan-300/15
                            blur-3xl
                        "
                    />

                    {/* Top Reflection */}

                    <div
                        className="
                            pointer-events-none
                            absolute
                            inset-x-8
                            top-0
                            z-0
                            h-[2px]
                            rounded-full
                            bg-gradient-to-r
                            from-transparent
                            via-white
                            to-transparent
                            opacity-90
                            blur-[0.5px]
                            lg:inset-x-10
                        "
                    />

                    {/* Upper Glass Sheen */}

                    <div
                        className="
                            pointer-events-none
                            absolute
                            inset-x-0
                            top-0
                            z-0
                            h-1/2
                            bg-gradient-to-b
                            from-white/30
                            via-white/5
                            to-transparent
                        "
                    />

                    {/* Diagonal Liquid Reflection */}

                    <motion.div
                        className="
                            pointer-events-none
                            absolute
                            -left-1/4
                            top-[-100%]
                            z-0
                            h-[300%]
                            w-[35%]
                            rotate-[25deg]
                            bg-gradient-to-r
                            from-transparent
                            via-white/10
                            to-transparent
                            blur-xl
                        "
                        animate={{
                            x: ["-20%", "350%"],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            repeatDelay: 5,
                            ease: "easeInOut",
                        }}
                    />

                    {/* Inner Glass Border */}

                    <div
                        className="
                            pointer-events-none
                            absolute
                            inset-[1px]
                            z-0
                            rounded-[inherit]
                            border
                            border-white/20
                        "
                    />


                    {/* =================================================
                        LOGO
                    ================================================== */}

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
                        className="
                            relative
                            z-10
                            flex
                            min-w-0
                            justify-start
                            lg:justify-center
                        "
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
                                className="
                                    h-14
                                    w-14
                                    object-contain
                                    transition-all
                                    duration-300

                                    sm:h-16
                                    sm:w-16

                                    lg:h-[84px]
                                    lg:w-[84px]
                                "
                            />

                            <div>

                                <h1
                                    className="
                                        text-2xl
                                        leading-none
                                        text-[var(--primary-dark)]
                                        transition-all
                                        duration-300

                                        sm:text-3xl
                                    "
                                    style={{
                                        fontFamily:
                                            "var(--font-heading)",
                                    }}
                                >
                                    Luster
                                </h1>

                                <p
                                    className="
                                        mt-1
                                        text-[7px]
                                        uppercase
                                        tracking-[0.08em]
                                        text-slate-500

                                        sm:text-[9px]

                                        lg:text-[10px]
                                        lg:tracking-[0.18em]
                                    "
                                >
                                    Dental & Facial Aesthetic Clinic
                                </p>

                            </div>

                        </a>

                    </motion.div>


                    {/* =================================================
                        DESKTOP NAVIGATION
                    ================================================== */}

                    <motion.div
                        variants={navContainer}
                        initial="hidden"
                        animate="visible"
                        className="
                            relative
                            z-10
                            hidden
                            justify-center
                            lg:flex
                        "
                    >

                        <ul className="flex items-center gap-7">

                            {navigation.map((item) => (

                                <motion.li
                                    key={item.id}
                                    variants={navItem}
                                >

                                    <a
                                        href={`#${item.id}`}
                                        onClick={() =>
                                            setMobileMenuOpen(false)
                                        }
                                        className={`
                                            relative
                                            rounded-full
                                            px-3
                                            py-2
                                            text-[15px]
                                            font-medium
                                            transition-all
                                            duration-300

                                            ${
                                                activeSection === item.id
                                                    ? `
                                                        bg-white/35
                                                        text-blue-700
                                                        shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_2px_12px_rgba(37,99,235,0.10)]
                                                    `
                                                    : `
                                                        text-slate-700
                                                        hover:bg-white/20
                                                        hover:text-blue-700
                                                    `
                                            }
                                        `}
                                    >

                                        {item.label}

                                        {/* Active Indicator */}

                                        {activeSection === item.id && (

                                            <motion.span
                                                layoutId="activeNav"
                                                className="
                                                    absolute
                                                    -bottom-1
                                                    left-1/2
                                                    h-[3px]
                                                    w-5
                                                    -translate-x-1/2
                                                    rounded-full
                                                    bg-blue-600
                                                    shadow-[0_0_10px_rgba(37,99,235,0.55)]
                                                "
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 400,
                                                    damping: 30,
                                                }}
                                            />

                                        )}

                                    </a>

                                </motion.li>

                            ))}

                        </ul>

                    </motion.div>


                    {/* =================================================
                        BOOK CONSULTATION
                    ================================================== */}

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
                        className="
                            relative
                            z-10
                            hidden
                            items-center
                            justify-center
                            lg:flex
                        "
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
                                min-h-[30px]
                                min-w-[180px]
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

                            {/* Soft Button Glow */}

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

                            <span className="relative z-10">
                                Book Consultation
                            </span>

                        </motion.a>

                    </motion.div>


                    {/* =================================================
                        MOBILE MENU BUTTON
                    ================================================== */}

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
                        onClick={() =>
                            setMobileMenuOpen(!mobileMenuOpen)
                        }
                        className="
                            relative
                            z-10
                            flex
                            h-11
                            w-11
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-white/70
                            bg-white/45
                            text-slate-700
                            shadow-sm
                            backdrop-blur-xl
                            lg:hidden
                        "
                        aria-label="Toggle navigation menu"
                    >

                        <motion.span
                            key={
                                mobileMenuOpen
                                    ? "close"
                                    : "menu"
                            }
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


                {/* =====================================================
                    MOBILE NAVIGATION
                ====================================================== */}

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
                                relative
                                mx-1
                                mt-3
                                overflow-hidden
                                rounded-3xl
                                border
                                border-white/70
                                bg-white/55
                                p-4
                                shadow-[0_15px_45px_rgba(15,23,42,0.15),inset_0_1px_0_rgba(255,255,255,0.9)]
                                backdrop-blur-[30px]
                                backdrop-saturate-[180%]
                                lg:hidden
                            "
                        >

                            {/* Mobile Glass Reflection */}

                            <div
                                className="
                                    pointer-events-none
                                    absolute
                                    inset-x-6
                                    top-0
                                    h-[2px]
                                    rounded-full
                                    bg-gradient-to-r
                                    from-transparent
                                    via-white
                                    to-transparent
                                "
                            />

                            {/* Mobile Blue Refraction */}

                            <div
                                className="
                                    pointer-events-none
                                    absolute
                                    -left-20
                                    -top-20
                                    h-40
                                    w-56
                                    rounded-full
                                    bg-blue-300/20
                                    blur-3xl
                                "
                            />

                            <motion.ul
                                variants={navContainer}
                                initial="hidden"
                                animate="visible"
                                className="
                                    relative
                                    z-10
                                    space-y-2
                                "
                            >

                                {navigation.map((item) => (

                                    <motion.li
                                        key={item.id}
                                        variants={navItem}
                                    >

                                        <a
                                            href={`#${item.id}`}
                                            onClick={() =>
                                                setMobileMenuOpen(false)
                                            }
                                            className={`
                                                block
                                                rounded-2xl
                                                px-5
                                                py-3
                                                font-medium
                                                transition-all
                                                duration-300

                                                ${
                                                    activeSection === item.id
                                                        ? `
                                                            bg-white/60
                                                            text-blue-700
                                                            shadow-sm
                                                        `
                                                        : `
                                                            text-slate-700
                                                            hover:bg-white/45
                                                            hover:text-blue-700
                                                        `
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
                                onClick={() =>
                                    setMobileMenuOpen(false)
                                }
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
                                    relative
                                    z-10
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