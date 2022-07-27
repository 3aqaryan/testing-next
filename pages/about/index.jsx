import React, { useEffect } from "react";
import AboutUs from "../../components/AboutUs/Aboutus";
import Stores from "../../components/Stores/Stores";
import MainLayoutComponent from '../../components/MainLayout/MainLayoutComponent'
import AOS from "aos";
import "aos/dist/aos.css";
const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <MainLayoutComponent title="About Us">
      <div className="aboutpage__back">
        <div className="container aboutpage">
          <Stores />
          <AboutUs />
        </div>
      </div>
    </MainLayoutComponent>
  );
};
export default About;
