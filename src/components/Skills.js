import React from "react";
import HTML from "../images/html-5.webp";
import CSS from "../images/css.webp";
import ReactLogo from "../images/React.webp";
import SCSS from "../images/scss.webp";
import JS from "../images/js.webp";
import JQuery from "../images/jquery.webp";
import Wordpress from "../images/wordpress.webp";
import PHP from "../images/php.webp";
import Git from "../images/git.webp";
import Figma from "../images/figma.webp";
import Bootstrap from "../images/bootstrap.webp";
import ACF from "../images/acf.webp";
import SEO from "../images/seo.webp";
import Ajax from "../images/ajax2010.webp";
import Linear from "../images/linear.webp";
import "../styles/Skills.css";

const Skills = () => {
    return (
        <div id="skills" className="content-holder">
            <h2>Skills</h2>

            <div
                className="slider"
                reverse="true"
                style={{"--width": "70px", "--height": "50px", "--quantity": 8}}
            >
                <div className="list">
                    <div className="item" style={{"--position": 1}}>
                        <img src={HTML} alt="Loading..." width="70" height="50"/>
                    </div>
                    <div className="item" style={{"--position": 2}}>
                        <img src={CSS} alt="Loading..." width="70" height="50"/>
                    </div>
                    <div className="item" style={{"--position": 3}}>
                        <img src={SCSS} alt="Loading..." width="70" height="50"/>
                    </div>
                    <div className="item" style={{"--position": 4}}>
                        <img src={ReactLogo} alt="Loading..." width="70" height="50"/>
                    </div>
                    <div className="item" style={{"--position": 5}}>
                        <img src={JS} alt="Loading..." width="70" height="50"/>
                    </div>
                    <div className="item" style={{"--position": 6}}>
                        <img src={JQuery} alt="Loading..." width="70" height="50"/>
                    </div>
                    <div className="item" style={{"--position": 7}}>
                        <img src={Wordpress} alt="Loading..." width="70" height="50"/>
                    </div>
                    <div className="item" style={{"--position": 8}}>
                        <img src={PHP} alt="Loading..." width="70" height="50"/>
                    </div>
                </div>
            </div>

            <div
                className="slider"
                style={{"--width": "60px", "--height": "50px", "--quantity": 7}}
            >
                <div className="list">
                    <div className="item" style={{"--position": 1}}>
                        <img src={Git} alt="Loading..." width="60" height="50"/>
                    </div>
                    <div className="item" style={{"--position": 2}}>
                        <img src={Figma} alt="Loading..." width="60" height="50"/>
                    </div>
                    <div className="item" style={{"--position": 3}}>
                        <img src={Bootstrap} alt="Loading..." width="60" height="50"/>
                    </div>
                    <div className="item" style={{"--position": 4}}>
                        <img src={ACF} alt="Loading..." width="60" height="50"/>
                    </div>
                    <div className="item" style={{"--position": 5}}>
                        <img src={SEO} alt="Loading..." width="60" height="50"/>
                    </div>
                    <div className="item" style={{"--position": 6}}>
                        <img src={Ajax} alt="Loading..." width="60" height="50"/>
                    </div>
                    <div className="item" style={{"--position": 7}}>
                        <img src={Linear} alt="Loading..." width="60" height="50"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
