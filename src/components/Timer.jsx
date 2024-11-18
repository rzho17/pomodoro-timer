import Button from "./Button";
import styles from "./Timer.module.css";
import Menu from "./Menu";
import CountdownTimer from "./CountdownTimer";

import { SlOptions } from "react-icons/sl";
import { MdOutlineRestartAlt } from "react-icons/md";
import { VscDebugStart } from "react-icons/vsc";
import { useState } from "react";
import { createPortal } from "react-dom";

export default function Timer({ changeBackground }) {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    return setShowMenu(!showMenu);
  };
  return (
    <div className={styles.timerSection}>
      <div className={styles.timerOptions}>
        <Button text={"pomodoro"} />
        <Button text={"short break"} />
        <Button text={"long break"} />
      </div>
      <div className={styles.timerMain}>
        {/* <h2>25:00</h2> */}
        {/* <CountdownTimer time={43.1 * 60} /> */}

        <SlOptions onClick={toggleMenu} />
        {showMenu &&
          createPortal(
            <Menu close={toggleMenu} changeBackground={changeBackground} />,
            document.body
          )}
      </div>
      <div className={styles.timerBar}></div>
      <div className={styles.timerControls}>
        {/* <Button text={"start"} /> */}
        <VscDebugStart />

        {/* <Button text={"restart"} /> */}
        <MdOutlineRestartAlt />
      </div>
    </div>
  );
}
