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
                I’m a Frontend and WordPress Developer with more then four years of experience and a strong record of
                successfully delivered projects. I build websites from the ground up—transforming concepts into final
                products—while applying pixel-perfect precision to ensure excellent client satisfaction. My expertise
                includes developing custom WordPress themes, implementing SEO strategies for stronger Google visibility,
                and optimizing performance across tablets and mobile devices to deliver a seamless user experience.
            </p>
            <p>
                Outside of coding, music has always been a big part of my life. I’ve been playing guitar and bass for
                years, and the creativity I’ve developed through music inspires the way I approach web
                development—combining precision with artistic expression.
            </p>
        </div>
    );
};

export default About;
