import { useState, useEffect } from "react";
import "./CSS/body.css";
import image from "./assets/hands_typing.jpg";

const Body = () => {
  const [translate, setTranslate] = useState();
  const [transition, setTransition] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      if (scrollY > 200) {
        setTranslate("1000");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [translate]);

  useEffect(() => {
    let timeout = setTimeout(() => {
      if (!transition) {
        setTransition(true);
      }
    }, 50);
    return () => clearTimeout(timeout);
  }, [translate]);

  return (
    <>
      <main>
        <section className="intro-section">
          <h1 className="introduction-text">
            Hi, im Richard. <br />A Full Stack Developer.
          </h1>
          <p className="introductionparagraph">
            I'm currently based in Enugu, Nigeria. I'm passionate about building
            dynamic,accessible, and user-friendly websites.
          </p>
        </section>
        <div className="services-div">
          <div
            className="service-image"
            style={{
              transform: " translateX(" + translate + "px)",
              transition: transition ? "1s" : "none",
            }}
          >
            <img src={image} alt="image" className="services-image" />
          </div>
          <div className="services">
            <h2 style={{ textAlign: "center" }}>SERVICES</h2>
            <p>I’m available freelance for a range of services</p>
            <ul className="servicesul">
              <li>BUILDING WEBSITES</li>
              <li>LEADING FRONTEND TEAMS</li>
              <li>SPEAKING ABOUT WEB DEVELOPMENT</li>
              <li>GRAPHICS DESIGN</li>
            </ul>
          </div>
        </div>
        <section className="skills-section">
          <div className="skills-container">
            <div className="skills-h2">
              <h2>Skills</h2>
              <h2>Works</h2>
            </div>
            <div className="skills-display">
              <ul className="skill-list">
                <li>HTML</li>
                <li>CSS</li>
                <li>SCSS</li>
                <li>JAVASCRIPT</li>
                <li>REACT JS</li>
                <li>NODE JS</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
export default Body;
