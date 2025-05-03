import React from "react";
import "./Footer.css";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import { FiFacebook, FiGithub } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>📍Address: Sherpur Sadar, Sherpur, Mymenshing , Bangladesh.</p>
        <div className="social-icons">
          <a
            href="https://web.facebook.com/babu.al.amin.386938"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <FiFacebook></FiFacebook>
          </a>

          <a
            href="https://github.com/alamindev07"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <FiGithub></FiGithub>
          </a>

          <a
            href="https://linkedin.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            title="Linkdin Profile"
          >
            {" "}
            <FaLinkedin></FaLinkedin>{" "}
          </a>
          <a
            href="MailTo: alamin864752@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <FaEnvelope></FaEnvelope>
          </a>
        </div>
        <p>
          &copy;{new Date().getFullYear()} BABU AL-AMIN. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
