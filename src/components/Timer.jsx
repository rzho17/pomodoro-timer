import Button from "./Button";
import styles from "./Timer.module.css";
import { SlOptions } from "react-icons/sl";

export default function Timer() {
  return (
    <div className={styles.timerSection}>
      <div className={styles.timerOptions}>
        <Button text={"pomodoro"} />
        <Button text={"short break"} />
        <Button text={"long break"} />
      </div>
      <div className={styles.timerMain}>
        <h2>25:00</h2>
        <SlOptions />
      </div>
      <div className={styles.timerBar}></div>
      <div className="timerControls">
        <Button text={"play"} />
        <Button text={"restart"} />
      </div>
    </div>
  );
}
