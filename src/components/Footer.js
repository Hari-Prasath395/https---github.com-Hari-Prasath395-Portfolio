import "./Footer.css";
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "white", marginRight: "2rem" }} />
            <p>55A,Beeman Street,Dharmapuri.Tamil Nadu</p>
          </div>
          <div></div>

          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
              91-7904028276
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
              hariiprasathh395@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About My-Self</h4>
          <p>
            This is me Hari Prasath.I enjoy working on new projects and design
            challenges.
          </p>

          <div className="social">
            <FaFacebook
              size={20}
              style={{ color: "white", marginRight: "2rem" }}
            />

            <FaTwitter
              size={20}
              style={{ color: "white", marginRight: "2rem" }}
            />

            <FaLinkedin
              size={20}
              style={{ color: "white", marginRight: "2rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
