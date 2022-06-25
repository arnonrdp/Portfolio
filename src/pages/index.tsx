import { About } from "../components/About";
import { Portfolio } from "../components/Portfolio";
import { Topbar } from "../components/Topbar";
import { portfolio } from "../data/portfolios";

export default function Home() {
  return (
    <>
      <Topbar />
      <main>
        <About />
        {portfolio.map((item, index) => (
          <section key={index}>
            <div className="description">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
            <div className="flexCards">
              {item.projects.map((card, index) => (
                <Portfolio key={index} {...card} />
              ))}
            </div>
          </section>
        ))}
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
