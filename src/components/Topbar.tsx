import { Button } from './Button'

type TopbarProps = {
  children?: any;
  link?: string;
  title?: string;
  image?: any;
}

export function Topbar(props: TopbarProps) {
  return (
    <header>
      <img src="me.jpg" alt="Arnon Rodrigues" />

      <nav>
        <button>get in touch</button>
        <Button link={"https://linkedin.com/in/arnonrdp"} title={"LinkedIn"} image={"linkedin.svg"} />
        <Button link={"https://github.com/arnonrdp"} title={"GitHub"} image={'github.svg'} />
      </nav>
    </header>
  )
}