import React from "react";
import logo from "../../assets/logo.png";
import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer>
      <div className="flogo">
        <img src={logo} alt="logo" />
      </div>
      <div className="c">
        <p>© 2024 MD SHAZAN MAHMUD ARPON</p>
      </div>
      <div className="social">
        <ul className="social-me">
          <li>
            <a href="/">
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href="/">
              <FaGithub />
            </a>
          </li>
          <li>
            <a href="/">
              <FaLinkedin />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
