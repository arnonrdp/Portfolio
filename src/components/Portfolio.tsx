/* eslint-disable @next/next/no-img-element */
import { Tooltip } from './Tooltip';
import styles from '../styles/components/Portfolio.module.css';
import Image from 'next/image';

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
        <Image src={props.image} alt={`${props.title} Image`} />
      </div>
      <div className={styles.portfolioDetails}>
        <h4>{props.title}</h4>
        <p>{props.description}</p>
      </div>
      <div className={styles.icons}>
        <div className={styles.techs}>
          {props.techs.map((tech, index) => (
            <Tooltip key={index} label={tech}>
              <div>
            <img
              src={`${tech}.svg`}
              alt={`${tech} Icon`}
            />
            </div>
            </Tooltip>
          ))}
        </div>
        <div className={styles.external}>
          {props.github ?
          <a href={props.github} target="_blank" rel="noreferrer">
            <Tooltip label={"Github"}>
              <img src="/github.svg" alt="Link to GitHub" />
            </Tooltip>
          </a>
          : null}
          <a href={props.website} target="_blank" rel="noreferrer">
            <Tooltip label={"Go to website..."}>
              <img src="/external.svg" alt="Link to Website" />
            </Tooltip>
          </a>
        </div>
      </div>
    </article>
  )
}