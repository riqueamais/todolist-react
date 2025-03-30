import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <img
        className={styles.logo}
        src="/cachorro-developer.jpeg"
        title="Logo"
        alt="Logo"
      />
    </header>
  );
}
