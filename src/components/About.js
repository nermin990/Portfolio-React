import React from "react";
import profileImage from "../images/profile.webp";
import "../styles/About.css";

const About = () => {
  return (
    <div id="about" className="content-holder">
      <h2>About me</h2>
      <div className="about-img">
        <img
          src={profileImage}
          alt="Profile picture"
          width="300"
          height="150"
        />
      </div>
      <p>
        A frontend developer with three years of experience and numerous
        successfully completed projects. I create websites from concept to final
        product, using pixel-perfect methodology to ensure top-notch client
        satisfaction. My focus is on utilizing the best technologies for website
        adaptability, implementing SEO for better visibility on Google, and
        optimizing for tablets and mobile devices to enhance the user
        experience.
      </p>
      <p>
        Outside of coding, I have a deep passion for music—I’ve been playing
        guitar and bass guitar for most of my life, and I believe I incorporate
        the creativity I’ve cultivated through music into my work in the IT
        field.
      </p>
    </div>
  );
};

export default About;
