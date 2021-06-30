import { Button } from './Button';
import { Tooltip } from './Tooltip';
import styles from '../styles/components/TopBar.module.css';
import Image from 'next/image';

export function Topbar() {
  return (
    <header className={styles.topBar}>
      <Image
        src="/me.jpg"
        alt="Arnon Rodrigues"
        width={120}
        height={120}
        className={styles.avatar}
      />

      <nav className={styles.navBar}>
        <Tooltip label="E-mail">
          <Button
            link={"mailto:arnonrdp@gmail.com"}
            image={"/email.svg"}
          />
        </Tooltip>
        <Tooltip label="WhatsApp">
          <Button
            link={"https://wa.me/5521971111312"}
            image={"/whatsapp.svg"}
          />
        </Tooltip>
        <Tooltip label="LinkedIn">
          <Button
            link={"https://linkedin.com/in/arnonrdp"}
            image={"/linkedin.svg"}
          />
        </Tooltip>
        <Tooltip label="GitHub">
          <Button
            link={"https://github.com/arnonrdp"}
            image={'/github.svg'}
          />
        </Tooltip>
      </nav>
    </header>
  )
}