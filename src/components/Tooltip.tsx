import styles from '../styles/components/Tooltip.module.css';

type TootiplProps = {
  children: any;
  label: string;
}

export function Tooltip(props: TootiplProps) {
  return (
    <div className={styles.tooltip}>
      {props.children}
      <span className={styles.tooltipText}>{props.label}</span>
    </div>
  )
}