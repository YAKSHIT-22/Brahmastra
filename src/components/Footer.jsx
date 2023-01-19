import React from "react";
import logo from "../assets/logo.svg";
import instagram from "../assets/instagram.svg";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
    <footer className="flex  items-center justify-center  w-full h-full">
      <nav className="flex items-center justify-center  w-full h-full">
        <div className="flex items-center justify-center w-full h-full">
          <div className="flex flex-row-reverse items-center justify-between mx-4 w-full h-full">
          <Link to="/">     <div className="flex items-center justify-center p-2 sm:mr-4">
              <img src={logo} alt="brahmastra logo" className="w-24 h-24" />
            </div></Link>
            <div className="flex items-center justify-center p-2 sm:ml-4">
            <a href="https://github.com/YAKSHIT-22" target="_blank" rel="noopener noreferrer"> <div className="flex items-center justify-center p-1">
                <img src={github} alt="youtube" className="w-6 h-6" />
              </div></a>
              <a href="https://instagram.com/yakshit.g2203" target="_blank" rel="noopener noreferrer">   <div className="flex items-center justify-center p-1">
                <img src={instagram} alt="instagram" className="w-5 h-5" />
              </div></a>
              <a href="https://www.linkedin.com/in/yakshit-garg-34a236241/" target="_blank" rel="noopener noreferrer"><div className="flex items-center justify-center p-1">
                <img src={linkedin} alt="linkedin" className="w-5 h-5" />
              </div></a>
            </div>
          </div>
        </div>
      </nav>
    </footer>
    </>
  );
}
