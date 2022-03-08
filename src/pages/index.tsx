import React from "react";
import { Topbar } from "../components/Topbar";
import { About } from "../components/About";
import { Portfolio } from "../components/Portfolio";
import { portfolios, volunteer } from "../data/portfolios";

export default function Home() {
  return (
    <>
      <Topbar />
      <main>
        <About />
        <section id="portfolio">
          <div className="description">
            <h3>🧳 Portfolio</h3>
            <p>Some projects that I have built and maintain</p>
          </div>
          <div className="flexCards">
            {portfolios.map((p, index) => (
              <Portfolio
                key={index}
                image={p.image}
                title={p.title}
                description={p.description}
                github={p.github}
                website={p.website}
                techs={p.techs}
              />
            ))}
          </div>
        </section>
        <section id="volunteer">
          <div className="description">
            <h3>🤝 Volunteer</h3>
            <p>
              Some projects that I develop and help to maintain voluntarily that it is in accordance with principles that I believe such as education, culture, art, public health and sustainability
            </p>
          </div>
          <div className="flexCards">
            {volunteer.map((p, index) => (
              <Portfolio
                key={index}
                image={p.image}
                title={p.title}
                description={p.description}
                github={p.github}
                website={p.website}
                techs={p.techs}
              />
            ))}
          </div>
        </section>
      </main>
      <footer className="footer">
        <p>made by me</p>
        <a href="https://twitter.com/arnonrdp" rel="noopener noreferrer" target="_blank">
          @arnonrdp
        </a>
      </footer>
    </>
  );
}
