import React from "react";
import { Link } from "react-router-dom";
import "./layout.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-wrapper">
          <div className="footer-logo-column">
            <Link
              to="/"
              aria-current="page"
              className="w-inline-block w--current"
            >
              <img
                src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e7ff57adad44d1f072965b6_logo.svg"
                alt="Acme Outdoors Logo"
              />
            </Link>
          </div>
          <div>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-footer-link w-inline-block"
            >
              <img
                src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e8407a25b6234aeec960fb9_Twitter_Social_Icon_Rounded_Square_White.svg"
                width="30"
                alt="Twitter Logo"
              />
            </a>
            <a
              href="https://www.facebook.com/"
              rel="noopener noreferrer"
              className="social-footer-link w-inline-block"
            >
              <img
                src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e8407aa3fb6cf5576f1658b_Facebook%20Logo.svg"
                width="30"
                alt="Facebook Logo"
              />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-footer-link w-inline-block"
            >
              <img
                src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e840774014326b74bbeeeb6_Insta.svg"
                width="30"
                alt="Instagram Logo"
              />
            </a>
          </div>
        </div>
        <div className="footer-bottom-wrapper">
        </div>
      </div>
    </div>
  );
};

export default Footer;
