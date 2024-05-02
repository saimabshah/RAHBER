import React from "react";
import "./head.css";

const Head = () => {
  return (
    <>
      <section className="ahead">
        <div className="container flexSB">
          <div className="logo" >
            <h1 style={{marginTop:'0'}}>RAHBER</h1>
            <span>Life Is All About Learning</span>
          </div>

          <div className="social">
            {/* Facebook */}
            <a href="https://www.facebook.com/your_facebook_page" target="_blank">
              <i className="fab fa-facebook-f icon"></i>
            </a>
            {/* Instagram */}
            <a href="https://www.instagram.com/kaxnaat?igsh=YTQzaDFsMWZ6anNi" target="_blank">
              <i className="fab fa-instagram icon"></i>
            </a>
            {/* Twitter */}
            <a href="https://t.me/+919082549862" target="_blank">
              <i className="fab fa-telegram icon"></i>
            </a>
            {/* YouTube */}
            <a href="https://youtube.com/@shahsaima3269?si=htlQiHxIKw_kFhzG" target="_blank">
              <i className="fab fa-youtube icon"></i>
            </a>
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/saima-bano-shah-55881a297?utm_source=share&utm_campaign=share_via&utm_content=profiZle&utm_medium=android_app" target="_blank">
              <i className="fab fa-linkedin icon"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;