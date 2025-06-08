import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import ChooseUs from './components/ChooseUs';
import OurProducts from './components/OurProducts';
import WhatWeDo from './components/WhatWeDo';
import KeyPoints from './components/KeyPoints';
import FAQ from './components/FAQ';
import Testimonial from './components/Testimonial';
import Blogs from './components/Blogs';
import Footer from './components/Footer';

const App = () => {

  let heroContent = {
    baseTitle: "Discover the power of premium",
    heroTitle: "Pure drops perfect precision care you can trust.",
    heroDiscription: "Experience the perfect balance of purity and precision with our premium oil droppers Designed for effortless application, our high-quality droppers ensure accurate dispensing, minimal waste, and maximum potency.",
    contact: "+91 - 123 468 963",
  }

  return (
    <>
      <Header />
      <HeroSection baseTitle={heroContent.baseTitle} heroTitle={heroContent.heroTitle} heroDiscription={heroContent.heroDiscription} contact={heroContent.contact} />
      <AboutUs />
      <ChooseUs />
      <OurProducts />
      <WhatWeDo />
      <KeyPoints />
      <FAQ />
      <Testimonial />
      <Blogs />
      <Footer />
    </>
  )
}

export default App