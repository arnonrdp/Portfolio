/* eslint-disable @next/next/no-img-element */
import { Tooltip } from './Tooltip';
import styles from '../styles/components/Portfolio.module.css';
import Image from 'next/image';

type PortfolioProps = {
  image: string;
  title: string;
  description: string;
  github?: string;
  website?: string;
  techs?: any;
}
export function Portfolio(props: PortfolioProps) {
  return (
    <article className={styles.articles}>
      <Image
        src={props.image}
        alt={`${props.title} Image`}
        width={400}
        height={233}
        layout="intrinsic"
        className={styles.portfolioImage}
      />
      <div className={styles.portfolioDetails}>
        <h4>{props.title}</h4>
        <p>{props.description}</p>
        <div className={styles.icons}>
          <div className={styles.techs}>
            {props.techs.map((tech, index) => (
              <Tooltip key={index} label={tech}>
                <Image
                  src={`/icons/${tech}.svg`}
                  alt={`${tech} Icon`}
                  width={25}
                  height={25}
                />
              </Tooltip>
            ))}
          </div>
          <div className={styles.external}>
            {props.github ?
              <a href={props.github} target="_blank" rel="noreferrer">
                <Tooltip label={"GitHub"}>
                  <Image
                    src="/icons/github.svg"
                    alt="GitHub Icon"
                    width={25}
                    height={25}
                  />
                </Tooltip>
              </a> : null}
            <a href={props.website} target="_blank" rel="noreferrer noopener">
              <Tooltip label={"Go to website..."}>
                <Image
                  src="/icons/external.svg"
                  alt="Go to external website icon"
                  width={25}
                  height={25}
                  className={styles.iconsImage}
                />
              </Tooltip>
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}