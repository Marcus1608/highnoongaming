import React from "react";
import { FooterContainer } from "./footerStyles";

const Footer = () => {
  return (
    <FooterContainer>
      <div className="sponsors-container">
        <div>Sponsor</div>
        <div>Sponsor</div>
        <div>Sponsor</div>
        <div>Sponsor</div>
        <div>Sponsor</div>
      </div>

      <div className="search-box--container">
        <button className="search-btn">SEARCH</button>
        <input type="search" id="search-box"></input>
      </div>

      <div className="copyright-container">copyright @ highnoon gaming </div>

      <div className="footer-links">
        <ul className="footer-ul">
          <li>
            <ul>
              <li>Sitemap</li>
              <li>Private Policy</li>
              <li>Login</li>
              <li>Register</li>
            </ul>
          </li>

          <li>
            <ul>
              <li>Events</li>
              <li>Standings</li>
              <li>News</li>
              <li>Our Goal</li>
            </ul>
          </li>

          <li>
            <ul>
              <li>Media</li>
              <li>Location</li>
              <li>Careers</li>
              <li>Our Team</li>
            </ul>
          </li>
        </ul>
      </div>
    </FooterContainer>
  );
};

export default Footer;
