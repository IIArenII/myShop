import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center space-y-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} MyShop. All rights reserved.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/abdullah-eren-evli-a62b932b7/"
            target="_blank"
            className="hover:text-gray-400 transition"
          >
            <FaLinkedin className="w-7 h-7 " />
          </a>
          <a
            href="https://github.com/IIArenII"
            target="_blank"
            className="hover:text-gray-400 transition"
          >
            <FaGithub className="w-7 h-7 " />
          </a>
          <p className="hover:text-gray-400 transition">
            created by ~ Abdullah Eren
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
