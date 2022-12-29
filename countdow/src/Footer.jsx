import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="content">
        <div className="network-links">
          <a href="http://google.fr">
            <img src="./public/images/icon-facebook.svg" alt="icone facebook" />
          </a>
          <a href="http://google.fr">
            <img
              src="./public/images/icon-instagram.svg"
              alt="icone instagram"
            />
          </a>
          <a href="http://google.fr">
            <img
              src="./public/images/icon-pinterest.svg"
              alt="icone pinterest"
            />
          </a>
        </div>
        <div className="attribution">
          Challenge by
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            <span> Frontend Mentor</span>
          </a>
          . Coded by
          <a href="https://github.com/loiclaborderie"> Loic Laborderie</a>.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
