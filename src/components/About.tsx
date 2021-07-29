import styles from '../styles/components/About.module.css';

export function About() {
  return (
    <section id={styles.about}>
      <p className={styles.greetings}>👋🏼 Hi, my name is</p>
      <h1>Tales Melo</h1>
      <h2>I build things for<br />the web and mobile.</h2>
      <p className={styles.description}>I am brazilian 🇧🇷 and a front-end developer who loves to apply technology to solve problems. I have experience in websites with UX/UI design, SEO best practice and agile methodology with SCRUM. I am communicative, dedicated and always interested in learning new technologies and improving my skills.</p>
    </section>
  )
}