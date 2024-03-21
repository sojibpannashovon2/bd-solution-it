import React from "react";
import Banner from "../../components/Home/Banner";
import Container from "../../components/Shared/Container";
import AboutHome from "../../components/Home/AboutHome";
import ServiceHome from "../../components/Home/ServiceHome";
import HomeWork from "../../components/Home/HomeWork";
import ChooseHome from "../../components/Home/ChooseHome";
import JourneyHome from "../../components/Home/JourneyHome";

const Home = () => {
  return (
    <div>
      <Container>
        <Banner />
        <AboutHome />
        <ServiceHome />
        <HomeWork />
        <ChooseHome />
        <JourneyHome />
      </Container>
    </div>
  );
};

export default Home;
