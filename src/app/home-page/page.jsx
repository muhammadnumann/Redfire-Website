import React from "react";
import Carousel from "../../component/HomePage/Carousel";
import OurPremiumServices from "../../component/HomePage/OurPremiumServices";
import AboutCompany from "../../component/HomePage/AboutCompany";
import WorkFlow from "../../component/HomePage/WorkFlow";
import OurProjects from "../../component/HomePage/OurProjects";
import WhyChooseUs from "../../component/HomePage/WhyChooseUs";

function Home_Page() {
  return (
    <div>
      <Carousel />
      <OurPremiumServices />
      <AboutCompany />
      <WorkFlow />
      <OurProjects />
      <WhyChooseUs />
    </div>
  );
}

export default Home_Page;
