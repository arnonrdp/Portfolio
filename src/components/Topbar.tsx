import { Button } from './Button'
import styles from '../styles/components/TopBar.module.css'

export function Topbar() {
  return (
    <header className={styles.topBar}>
      <img src="me.jpg" alt="Arnon Rodrigues" />

      <nav className={styles.navBar}>
        <button>get in touch</button>
        <Button
          link={"https://linkedin.com/in/arnonrdp"}
          title={"LinkedIn"}
          image={"linkedin.svg"}
        />
        <Button
          link={"https://github.com/arnonrdp"}
          title={"GitHub"}
          image={'github.svg'}
        />
      </nav>
    </header>
  )
}