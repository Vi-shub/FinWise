import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Hero } from "../components/Hero";
import CardSection from "../components/CardSection";
import CardEducation from "../components/CardEducation";
const Home = () => {
  return (
    <>
     
        <Navbar />
        <Hero />
        <CardEducation />
        <CardSection />
       
     
      <Footer />
    </>
  );
};

export default Home;
