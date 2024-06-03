"use client";

import Link from 'next/link';
import { FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
          <Link href="https://www.linkedin.com/in/tu-perfil-linkedin" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-gray-400 hover:text-white" size={24} />
          </Link>
          <div className="flex items-center space-x-2">
            <FaEnvelope className="text-gray-400" size={24} />
            <span>inforaguilera@gmail.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaPhone className="text-gray-400" size={24} />
            <span>+56 962581774</span>
          </div>
        </div>
        <div className="mt-4">
          <p>&copy; {new Date().getFullYear()} Tu Nombre. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
