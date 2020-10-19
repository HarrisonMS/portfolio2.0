import React from "react";
import { NavLink, Link } from "react-router-dom";

function Footer(props) {
  return (
    <div className="container">
      <h2 className="section-title">Technical Skills</h2>
      <div className="bottom-line">
        <ol>
          <h3>Languages</h3>
          <p>HTML</p>
          <p>CSS</p>
          <p>JavaScript</p>
          <p>Python</p>
        </ol>
        <ol>
          <h3>Front-end</h3>
          <p>HTML</p>
          <p>CSS</p>
          <p>JavaScript</p>
          <p>Python</p>
        </ol>
        <ol>
          <h3>Back-end</h3>
          <p>HTML</p>
          <p>CSS</p>
          <p>JavaScript</p>
          <p>Python</p>
        </ol>
      </div>
      {/* <p className="lead">
        Let me tell you a little about myself and what I do...
      </p>
      <div className="about-info">
        <img src="img/about.jpg" alt="" className="bio-image" />
        <div className="bio bg-light">
          <h4>Your Project Is In Safe Hands</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perspiciatis nostrum, eaque velit ipsam facilis sed, quisquam
            nesciunt unde nihil voluptatum commodi consequuntur molestiae?
            Fugiat, perspiciatis reprehenderit. Architecto delectus vitae
            deserunt!
          </p>
        </div>
        <div className="award-1">
          <i className="fas fa-award fa-3x"></i>
          <h3>Award One</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
            magni!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
            magni! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus, magni!
          </p>
        </div>
      </div> */}
      <footer className="footer bg-dark">
        <p>Copyright &copy; 2020 - EdgeLedger</p>
      </footer>
    </div>
  );
}
export default Footer;
