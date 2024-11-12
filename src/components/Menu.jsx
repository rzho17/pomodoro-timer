import styles from "./Menu.module.css";

export default function Menu({ close }) {
  return (
    <>
      <div className={styles.menuOverlay}></div>
      <div className={styles.menuContent}>
        <div>settings </div>
        <button onClick={close}>Close</button>
      </div>
    </>
  );
}
