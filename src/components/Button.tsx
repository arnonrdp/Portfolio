import Image from 'next/image';

type ButtonProps = {
  link?: string;
  image?: any;
}

export function Button(props: ButtonProps) {
  return (
    <button>
      <a href={props.link} target="_blank" rel="noreferrer">
        <Image
          src={props.image}
          alt="Social Icon"
          width="32px"
          height="32px"
        />
      </a>
    </button>
  )
}