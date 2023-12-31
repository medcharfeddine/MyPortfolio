/** @format */

import React from "react";
import "./portfolio.css";
import IMG1 from "../../assests/portfolio1.jpg";
// import IMG2 from "../../assests/portfolio2.png";
// import IMG3 from "../../assests/portfolio3.png";
import IMG4 from "../../assests/portfolio4.jpg";
import IMG5 from "../../assests/portfolio5.jpg";
import IMG6 from "../../assests/portfolio6.jpg";
import IMG7 from "../../assests/forja1.png";

const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="img1s" />
          </div>
          <h3>My First Portfolio Project (Blue)</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/medcharfeddine"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://github.com/medcharfeddine"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG7} alt="img1s" />
          </div>
          <h3>Forja</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/medcharfeddine/MovieAppProject"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://movie-app-project-nu.vercel.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="img1s" />
          </div>
          <h3>Coming Soon</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/medcharfeddine/"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://github.com/medcharfeddine/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="img1s" />
          </div>
          <h3>Coming Soon</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/medcharfeddine"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://github.com/medcharfeddine"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="img1s" />
          </div>
          <h3>Coming Soon</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/medcharfeddine"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://github.com/medcharfeddine"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6} alt="img1s" />
          </div>
          <h3>Coming Soon</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/medcharfeddine"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://github.com/medcharfeddine"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default portfolio;
