import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <main className={`container ${styles.wrapper}`}>
      <div className={`${styles.card} glass-panel`}>
        <span className="tag">Vision Dispersed</span>
        <h1 className={styles.title}>We could not locate that prophecy.</h1>
        <p className={styles.text}>
          The timeline you seek may not have been written yet. Return to the library to
          explore stories already revealed.
        </p>
        <Link className="btn-ghost" href="/">
          ← Return to the library
        </Link>
      </div>
    </main>
  );
}
