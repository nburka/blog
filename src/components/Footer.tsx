import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>Footer goes here.</div>
      <p className={styles.copyright}>
        Copyright ©️ {new Date().getFullYear()} Nick Burka.
      </p>
    </footer>
  );
}
