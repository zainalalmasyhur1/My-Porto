import React from "react";
import Zainal_Abidin from "../assets/Zainal_Abidin.png";

const About = () => {
  return (
    <section id="about" className="my-8 p-6 bg-gray-100 shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">About Me</h2>
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-32 h-32 md:w-48 md:h-48 mb-4 md:mb-0 md:mr-6 rounded-full overflow-hidden shadow-lg">
          <img
            src={Zainal_Abidin}
            alt="Zainal Abidin"
            className="object-cover w-full h-full transition-transform transform hover:scale-105"
          />
        </div>
        <div className="text-center md:text-left">
          <p className="text-gray-700 mb-4">
            Hello! I am Zainal Abidin, a passionate developer skilled in JavaScript, React, Node.js, and more. I enjoy building applications that solve real-world problems and improve user experiences. I studied at Hacktiv8 and have 2 years of experience working as an IT QA Tester.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 justify-center md:justify-start">
            <a
              href="https://drive.google.com/file/d/1twGu9_jcy4kJKYxBDLLGOYP3yOzFp7or/view"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition-colors w-full sm:w-auto text-center"
              aria-label="Download CV"
            >
              Download CV
            </a>
            <a
              href="https://drive.google.com/file/d/1x7d0uoDKtcRPjgV58XsTeHQ3falXHOH0/view"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition-colors w-full sm:w-auto text-center"
              aria-label="View Transcript"
            >
              View Transcript
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
