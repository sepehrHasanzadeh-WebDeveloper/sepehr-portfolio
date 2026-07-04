import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.line}></div>

      <h2 className={styles.name}>SEPEHR </h2>

      <div className={styles.links}>
        <a
          href="https://github.com/sepehrHasanzadeh-WebDeveloper"
          target="_blank"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/sepehr-hasanzadeh-773267351/"
          target="_blank"
        >
          LinkedIn
        </a>
        <a href="mailto:sepehrh471@gmail.com">Email</a>
      </div>

      <p className={styles.copy}>
        © 2026 Sepehr. Designed & Developed with Next.js
      </p>
    </footer>
  );
}
