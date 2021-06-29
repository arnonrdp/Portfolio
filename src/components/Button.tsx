type ButtonProps = {
  link?: string;
  title?: string;
  image?: any;
}

export function Button(props: ButtonProps) {
  return (
    <button title={props.title}>
      <a href={props.link} target="_blank">
        <img src={props.image} />
      </a>
    </button>
  )
}