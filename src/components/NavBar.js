import React, { useState } from "react";
import watcher from "../images/movingWatcher.gif";
import IconBxlFacebookCircle from "./BoxIcons/FacebookLogo";
import IconBxlGithub from "./BoxIcons/GithubLogo";
import IconBxlTwitter from "./BoxIcons/TwitterLogo";
import IconBxlLinkedin from "./BoxIcons/LinkedInLogo";
import IconBxlGmail from "./BoxIcons/GmailLogo";
import IconBxHome from "./BoxIcons/HomeLogo";
import IconBxUser from "./BoxIcons/AboutMe";
import IconBxFileBlank from "./BoxIcons/Resume";
import IconBxEnvelope from "./BoxIcons/Contact";
import IconBxListUl from "./BoxIcons/List";
import PDFSample from "../CV_SampleTrial.pdf";

const NavBar = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const toggleNavVisibility = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <>
      <IconBxListUl onClick={toggleNavVisibility} />
      <header
        id="header"
        className={isNavVisible ? "mobile-nav-active" : ""}
      >
        <div className="d-flex flex-column">
          <div className="profile">
            <img
              src={watcher}
              alt=""
              className="img-fluid rounded-circle"
            />
            <h1 className="text-light">
              <a href="index.html">Matthew Ivan Carsula</a>
            </h1>
            <div className="social-links mt-3 text-center">
              <a href="https://twitter.com/home" target="_blank" className="twitter">
                <IconBxlTwitter />
              </a>
              <a href="https://github.com/" target="_blank" className="facebook">
                <IconBxlGithub />
              </a>
              <a href="https://www.instagram.com/" target="_blank" className="instagram">
                <IconBxlFacebookCircle />
              </a>
              <a href="https://www.facebook.com/" target="_blank" className="google-plus">
                <IconBxlGmail />
              </a>
              <a href="https://www.linkedin.com/" target="_blank" className="linkedin">
                <IconBxlLinkedin />
              </a>
            </div>
          </div>
          <nav
            id="navbar"
            className={`nav-menu navbar ${
              isNavVisible ? "mobile-nav-active" : ""
            }`}
          >
            <ul>
              <li>
                <a href="#hero" className="nav-link scrollto">
                  <IconBxHome /> <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#about" className="nav-link scrollto">
                  <IconBxUser /> <span>About</span>
                </a>
              </li>
              <li>
                <a href={PDFSample}
                download="Example-PDF-document"
                target="_blank"
                rel="noreferrer" className="nav-link scrollto">
                  <IconBxFileBlank /> <span>Resume</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="nav-link scrollto">
                  <IconBxEnvelope /> <span>Contact</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default NavBar;