import styles from '../styles/components/Portfolio.module.css'

type PortfolioProps = {
  image: any;
  title: string;
  description: string;
  github?: string;
  website?: string;
  techs?: any;
}
export function Portfolio(props: PortfolioProps) {
  return (
    <article className={styles.articles}>
      <div className={styles.portfolioImage}>
        <img src={props.image} alt={`${props.title} Image`} />
      </div>
      <div className={styles.portfolioDetails}>
        <h4>{props.title}</h4>
        <p>{props.description}</p>
      </div>
      <div className={styles.icons}>
        <div className={styles.techs}>
          {props.techs.map((tech, index) => (
            <img
              key={index}
              src={`${tech}.svg`}
              alt={`${tech} Icon`}
              title={tech}
            />
          ))}
        </div>
        <div className={styles.external}>
          {props.github ?
          <a href={props.github} target="_blank">
            <div className="tooltip">
              <img src="/github.svg" alt="Link to GitHub" />
              <span className="tooltiptext">Github</span>
            </div>
          </a>
          : null}
          <a href={props.website} target="_blank">
            <div className="tooltip">
              <img src="/external.svg" alt="Link to Website" />
              <span className="tooltiptext">Go to website...</span>
            </div>
          </a>
        </div>
      </div>
    </article>
  )
}