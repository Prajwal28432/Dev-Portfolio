import React from "react";

import Navbar from "../navbar/Navbar";
import HeroSection from "../Home/HeroSection";
import SkillsSection from "../skills/Skill";
import Project from "../projects/Project";
import Footer from "../footer/Footer";
import Contact from "../contact/Contact";
import Coding from "../about/About";
function Layout() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Coding/>
      <SkillsSection />
      <Project />
      <Contact />
    
    </>
  );
}
export default Layout;
