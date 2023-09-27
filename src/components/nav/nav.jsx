/** @format */

import React, { useState } from "react";
import "./nav.css";
import { FaHome } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { RiServiceFill } from "react-icons/ri";
import { AiFillMessage } from "react-icons/ai";

const Nav = () => {
  // Create a state variable to track the active link
  const [activeLink, setActiveLink] = useState("");

  // Function to handle link clicks and set the active link
  const handleLinkClick = (linkId) => {
    setActiveLink(linkId);
  };

  return (
    <nav>
      <a
        href="#"
        className={activeLink === "" ? "active" : ""}
        onClick={() => handleLinkClick("")}
      >
        <FaHome />
      </a>
      <a
        href="#about"
        className={activeLink === "about" ? "active" : ""}
        onClick={() => handleLinkClick("about")}
      >
        <FaUserAlt />
      </a>
      <a
        href="#experience"
        className={activeLink === "experience" ? "active" : ""}
        onClick={() => handleLinkClick("experience")}
      >
        <FaBook />
      </a>
      <a
        href="#services"
        className={activeLink === "services" ? "active" : ""}
        onClick={() => handleLinkClick("services")}
      >
        <RiServiceFill />
      </a>
      <a
        href="#contact"
        className={activeLink === "contact" ? "active" : ""}
        onClick={() => handleLinkClick("contact")}
      >
        <AiFillMessage />
      </a>
    </nav>
  );
};

export default Nav;
