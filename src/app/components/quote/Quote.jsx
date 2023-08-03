import styles from "./quote.module.css";

export default function Quote({ children }) {
  return (
    <section className={styles.marquee}>
      <p className={styles.quote}>{children}</p>
      <p className={styles.quote} aria-hidden="true">
        {children}
      </p>
      <p className={styles.quote} aria-hidden="true">
        {children}
      </p>
    </section>
  );
}
