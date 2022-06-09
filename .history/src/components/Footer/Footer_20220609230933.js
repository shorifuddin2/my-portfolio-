import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer d-flex align-items-center justify-content-center">
      <div className="text-center">
        <p>
          <small>Copyright © 2021 | Shorif Uddin</small>
        </p>
        <p>
          <address>Habiganj,Sylhet,Bangladesh</address>
        </p>
        <div>
          <button className="icon-button">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/shorif-uddin-58b01a203/"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </button>
          <button className="icon-button">
            <a className="icon-button" className="icon-button" target="_blank" href="https://github.com/shorifuddin2">
              {" "}
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </button>
          <button className="icon-button">
            <a className="icon-button" target="_blank" href="https://mail.google.com/mail/u/2/#inbox">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </button>
          <button className="icon-button">
            <a className="icon-button" target="_blank" href="https://www.instagram.com/sheikh_milon1/">
              {" "}
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </button>
          <button className="icon-button">
            <a className="icon-button" target="_blank" href="https://www.facebook.com/shorif.uddin.milon2">
              <FontAwesomeIcon icon={faFacebookSquare} />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
