  import React from "react";
  import Navbar from "../src/Components/Navbax/Navbar.jsx"
import Hero from "./Components/Hero/Hero.jsx";
import Products from "./Components/Products/Products.jsx";
import TopProducts from "./Components/TopProducts/TopProducts.jsx";
import Banner from "./Components/Banner/Banner.jsx";
import Subscribe from "./Components/Subscribe/Subscribe.jsx";
import Testimonials from "../src/Components/Testimonial/Testimonial.jsx"
import Footer from "../src/Components/Footer/Footer.jsx";
import Popup from "./Components/Popup/Popup.jsx";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";



  const App = () => {
    const [orderPopup, setOrderPopup] = React.useState(false);

    const handleOrderPopup = () => {
      setOrderPopup(!orderPopup);
    };
    React.useEffect(() => {
      AOS.init({
        offset: 100,
        duration: 800,
        easing: "ease-in-sine",
        delay: 100,
      });
      AOS.refresh();
    }, []);

    return (
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        <Navbar handleOrderPopup={handleOrderPopup} />
        <Hero handleOrderPopup={handleOrderPopup} />
        <Products />
        <TopProducts handleOrderPopup={handleOrderPopup} />
        <Banner />
        <Subscribe />
        <Products />
        <Testimonials />
        <Footer />
        <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
      </div>
    );
  };

  export default App;