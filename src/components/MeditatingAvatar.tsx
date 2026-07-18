import styles from "../styles/Home.module.css";

export function MeditatingAvatar({ tilt }: { tilt: number }) {
  return (
    <div className={styles.avatarWrap} style={{ transform: `rotate(${tilt}deg)` }}>
      <svg viewBox="0 0 360 400" width="100%" className={styles.avatar} role="img" aria-label="Arnon meditando">
        <circle cx={180} cy={180} r={152} fill="none" stroke="var(--accent)" strokeWidth={1.5} opacity={0.2} className={styles.aura} />
        <circle
          cx={180}
          cy={180}
          r={118}
          fill="none"
          stroke="var(--accent2)"
          strokeWidth={1}
          opacity={0.25}
          className={`${styles.aura} ${styles.aura2}`}
        />
        <g className={styles.orbs}>
          <circle cx={180} cy={34} r={5} fill="var(--accent)" opacity={0.8} />
          <circle cx={322} cy={230} r={3.5} fill="var(--accent2)" opacity={0.7} />
          <circle cx={48} cy={260} r={4} fill="var(--accent)" opacity={0.5} />
        </g>
        <ellipse cx={180} cy={340} rx={66} ry={10} fill="#000" opacity={0.28} className={styles.shadow} />
        <defs>
          <linearGradient id="faceFade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0.7" stopColor="#ffffff" />
            <stop offset="0.98" stopColor="#000000" />
          </linearGradient>
          <mask id="faceMask">
            <rect x={68} y={66} width={224} height={207} fill="url(#faceFade)" />
          </mask>
        </defs>
        <g className={styles.float}>
          <image href="/arnon-face.svg" x={68} y={66} width={224} height={207} mask="url(#faceMask)" />
        </g>
      </svg>
    </div>
  );
}
