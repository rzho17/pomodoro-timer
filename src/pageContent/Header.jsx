import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <h1>Calmodoro</h1>
        <p>Chill your way to focus.</p>
      </div>
    </header>
  );
}
