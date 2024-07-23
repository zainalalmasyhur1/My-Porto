import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-dark p-6 text-white">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <h2 className="text-2xl font-bold">Zainal Abidin</h2>
          <p className="mt-2">Hubungi Saya</p>
          <p>zainalalmasyhur30@gmail.com</p>
          <p>+62-8151-9140-433</p>
          <p>Jakarta, Indonesia</p>
        </div>
      </div>
      <div className="container mx-auto mt-6 flex justify-between items-center border-t border-gray-700 pt-6">
        <p>
          Dibuat oleh{" "}
          <a href="#" className="font-bold text-accent">
            Zainal Abidin
          </a>
          , menggunakan{" "}
          <a href="https://tailwindcss.com/" className="font-bold text-accent">
            Tailwind CSS
          </a>
          .
        </p>
        <div className="flex gap-4">
          <a
            href="https://www.instagram.com/zainalalmsyhr"
            className="text-white hover:text-gray-400"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://github.com/zainalalmasyhur"
            className="text-white hover:text-gray-400"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/zainal-abidin-41908a1b8/"
            className="text-white hover:text-gray-400"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
