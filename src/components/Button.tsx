type ButtonProps = {
  link?: string;
  title?: string;
  image?: any;
}

export function Button(props: ButtonProps) {
  return (
    <a href={props.link} target="_blank">
      <button title={props.title}>
        <img src={props.image} />
      </button>
    </a>
  )
}