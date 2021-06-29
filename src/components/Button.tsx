import Image from 'next/image';

type ButtonProps = {
  link?: string;
  title?: string;
  image?: any;
}

export function Button(props: ButtonProps) {
  return (
    <button title={props.title}>
      <a href={props.link} target="_blank" rel="noreferrer">
        <Image
          src={props.image}
          alt=""
          width="32px"
          height="32px"
        />
      </a>
    </button>
  )
}