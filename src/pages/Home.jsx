import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Treatments from "../components/sections/Treatments";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import Doctors from "../components/sections/Doctors";
import Gallery from "../components/sections/Gallery";
import Testimonials from "../components/sections/Testimonials";
import FAQ from "../components/sections/FAQ";
import Contact from "../components/sections/Contact";
import Footer from "../components/layout/Footer";

function Home() {
  return (
    <>

      <Hero/>
      <About/>
      <Treatments/>
      <WhyChooseUs/>
      <Doctors/>
      <Gallery/>
      <Testimonials/>
      <FAQ/>
      <Contact/>
      <Footer/>
      


      <section id="about" className="h-screen bg-slate-100"></section>

      <section id="treatments" className="h-screen"></section>

      <section id="doctors" className="h-screen bg-slate-100"></section>

      <section id="gallery" className="h-screen"></section>

      <section id="contact" className="h-screen"></section>
    </>
  );
}

export default Home;