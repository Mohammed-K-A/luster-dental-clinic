import { motion } from "motion/react";

import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Treatments from "../components/sections/Treatments";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import Doctors from "../components/sections/Doctors";
import Gallery from "../components/sections/Gallery";
// import Testimonials from "../components/sections/Testimonials";
import FAQ from "../components/sections/FAQ";
import Contact from "../components/sections/Contact";
import Footer from "../components/layout/Footer";

function Home() {
  return (
    <main>

      {/* =========================================
          CONTINUOUS WEBSITE BACKGROUND
      ========================================== */}

      <div
        className="
          relative
          overflow-hidden
          bg-gradient-to-br
          from-white
          via-blue-50
          to-white
        "
      >

        {/* =========================================
            GLOBAL BACKGROUND BLUR
        ========================================== */}

        {/* Blue Glow - Left / Upper */}

        <motion.div
          className="
            pointer-events-none
            absolute
            -left-40
            top-[8%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-blue-200/20
            blur-3xl
          "
          animate={{
            y: [0, -25, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Cyan Glow - Right / Upper */}

        <motion.div
          className="
            pointer-events-none
            absolute
            -right-40
            top-[18%]
            h-[550px]
            w-[550px]
            rounded-full
            bg-cyan-200/15
            blur-3xl
          "
          animate={{
            y: [0, 30, 0],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Blue Glow - Left / Middle */}

        <motion.div
          className="
            pointer-events-none
            absolute
            -left-48
            top-[42%]
            h-[450px]
            w-[450px]
            rounded-full
            bg-blue-200/15
            blur-3xl
          "
          animate={{
            y: [0, 25, 0],
            x: [0, -12, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Cyan Glow - Right / Middle */}

        <motion.div
          className="
            pointer-events-none
            absolute
            -right-48
            top-[62%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-cyan-200/15
            blur-3xl
          "
          animate={{
            y: [0, -30, 0],
            x: [0, 18, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Blue Glow - Lower */}

        <motion.div
          className="
            pointer-events-none
            absolute
            -left-40
            bottom-[5%]
            h-[450px]
            w-[450px]
            rounded-full
            bg-blue-200/15
            blur-3xl
          "
          animate={{
            y: [0, -20, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* =========================================
            WEBSITE SECTIONS
        ========================================== */}

        <div className="relative z-10">

          <Hero />
          <Treatments />
          <About />
          <WhyChooseUs />
          <Doctors />
          <Gallery />
          {/* <Testimonials /> */}
          <FAQ />
          <Contact />

        </div>

      </div>

      {/* Footer */}

      <Footer />

    </main>
  );
}

export default Home;