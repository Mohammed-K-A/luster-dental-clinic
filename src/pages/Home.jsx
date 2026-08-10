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
      
    <main>

      <Hero/>
      <Treatments/>
      <About/>
      <WhyChooseUs/>
      <Doctors/>
      <Gallery/>
      <Testimonials/>
      <FAQ/>
      <Contact/>
      <Footer/>

    </main> 
    </>
  );
}

export default Home;