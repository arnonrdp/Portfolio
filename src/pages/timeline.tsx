import timeline from '../data/timeline.json'
import styles from '../styles/components/Timeline.module.css'

export default function Timeline() {
  return (
    <>
      <p className={styles.categories}>
        <span>Education</span>
        <span>Experience</span>
      </p>
      <ul className={styles.timeline}>
        {timeline.map((item, index) => (
          <li key={index}>
            <div className={item.education ? styles.direction_l : styles.direction_r}>
              <div className={styles.flag_wrapper}>
                <span className={styles.flag}>{item.title}</span>
                <span className={styles.time_wrapper}>
                  <span className={styles.time}>{item.time}</span>
                </span>
              </div>
              <div className={styles.desc}>{item.description}</div>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}
