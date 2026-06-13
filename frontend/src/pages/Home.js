import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Services from "../components/Services";
import Donor from "../components/Donor";
import Footer from "../components/Footer";
import OurTeamList from "../components/OurTeamList";
import About from "./About";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Services />
      <Donor />
      <Footer />
      <OurTeamList />
      <About />
    </>
  );
};

export default Home;