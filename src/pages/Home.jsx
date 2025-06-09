import React from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Footer from "./Footer";
import About from "./About";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
