import React from "react";
import ParticlesBackground from "../components/ParticlesBackground";
import Header from "../components/Header";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Certificates from "../components/Certificates";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { useTheme } from "../contexts/ThemeContext";
import "./Home.css";

const Home = () => {
  const { isDarkTheme } = useTheme();

  return (
    <div
      className={`min-h-screen ${
        isDarkTheme ? "bg-dark-theme" : "bg-light-theme"
      }`}
    >
      <Header />
      <ParticlesBackground />
      <main className="container mx-auto p-4 pt-20">
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
