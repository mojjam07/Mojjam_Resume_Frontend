import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import Testing from "./components/Testing";
import MyNavbar from "./components/singles/MyNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HeroSection from "./components/singles/HeroSection";
import SkillsSection from "./components/singles/Skills";
import ExperienceSection from "./components/singles/Experience";
import ProjectSection from "./components/singles/Projects";
import EducationSection from "./components/singles/Education";
import TestimonialSection from "./components/singles/Testimonial";
import ProfileSection from "./components/singles/Profile";
import ContactSection from "./components/singles/Contact";
import FooterSection from "./components/singles/Footer";
import ServicesSection from "./components/singles/Services";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Apply dark mode class to the body
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    document.body.classList.toggle("dark-mode", !darkMode); // Toggle dark mode class on the body
  };

  return (
    <div className="app">
      {/* Dark Mode Switch */}
      <button className="dark-mode-switch" onClick={toggleDarkMode}>
        <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
      </button>

      {/* Sections */}
      <MyNavbar />
      <HeroSection />
      <hr />
      <SkillsSection />
      <hr />
      <ExperienceSection />
      <hr />
      <ProjectSection />
      <hr />
      <ServicesSection />
      <hr />
      <EducationSection />
      <hr />
      <TestimonialSection />
      <hr />
      <ProfileSection />
      <hr />
      <ContactSection />
      <hr />
      <FooterSection />
    </div>
  );
};

export default App;
