import { Topbar } from '../components/Topbar';
import { Portfolio } from '../components/Portfolio';
import { portfolios } from '../data/portfolios';

export default function Home() {
  return (
    <main>
      <section id="about">
        <Topbar />
        <p>👋🏼 Hi, my name is</p>
        <h1>Arnon Rodrigues</h1>
        <h2>I build things for<br/>the web and mobile.</h2>
        <p>I am brazilian 🇧🇷 and a front-end developer who loves to apply technology to solve problems. I have experience in websites with UX/UI design, SEO best practice and agile methodology with SCRUM. I am communicative, dedicated and always interested in learning new technologies and improving my skills.</p>
      </section>
      <section id="portfolio">
        <div className="description">
          <h3>🧳 Portfolio</h3>
          <p>Some projects that I've built and maintain</p>
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
    </main>
  )
}
