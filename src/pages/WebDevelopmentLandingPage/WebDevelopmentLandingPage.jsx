import React from "react";
import Header from "../../components/LandingPages/Header";
import Banner from "../../components/LandingPages/Banner";
import Services from "../../components/LandingPages/Services";
import Development from "../../components/LandingPages/Development";
import WorkFlow from "../../components/LandingPages/WorkFlow";
import Experience from "../../components/Experience";
import Testimonials from "../../components/Testimonials";
import UnlockPossibilities from "../../components/UnlockPossibilities";
import AssociatedWith from "../../components/AssociatedWith";
import Footer from "../../components/Footer";
import LeadForm from "../../components/LandingPages/LeadForm";

const WebDevelopmentLandingPage = () => {
  return (
    <>
      <Header />
      <Banner />
      <Services />
      <Development />
      <WorkFlow />
      <Experience />
      <Testimonials />
      <UnlockPossibilities />
      <LeadForm />
      <AssociatedWith />
      <Footer />
    </>
  );
};

export default WebDevelopmentLandingPage;
