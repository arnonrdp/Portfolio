import { Button } from './Button';
import styles from '../styles/components/TopBar.module.css';

export function Topbar() {
  return (
    <header className={styles.topBar}>
      <img src="me.jpg" alt="Arnon Rodrigues" />

      <nav className={styles.navBar}>
        <Button
        link={"mailto:arnonrdp@gmail.com"}
        title={"E-mail"}
        image={"email.svg"}
        />
        <Button
        link={"https://wa.me/5521971111312"}
        title={"WhatsApp"}
        image={"whatsapp.svg"}
        />
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