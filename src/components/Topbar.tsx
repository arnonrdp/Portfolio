import Image from "next/image";
import styles from "../styles/components/TopBar.module.css";
import { Button } from "./Button";

export function Topbar() {
  return (
    <header className={styles.topBar}>
      <Image src="/logo.png" alt="Arnon Rodrigues" width={120} height={120} className={styles.avatar} />

      <nav className={styles.navBar}>
        <div>
          <Button link={"mailto:me@arnon.dev"} image={"/icons/email.svg"} />
          <Button link={"https://wa.me/5521971111312"} image={"/icons/whatsapp.svg"} />
        </div>
        <div>
          <Button link={"https://linkedin.com/in/arnonrdp"} image={"/icons/linkedin.svg"} />
          <Button link={"https://github.com/arnonrdp"} image={"/icons/github.svg"} />
        </div>
      </nav>
    </header>
  );
}
