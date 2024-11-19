import Button from "./Button";
import styles from "./Timer.module.css";
import Menu from "./Menu";
import CountdownTimer from "./CountdownTimer";

import { SlOptions } from "react-icons/sl";
import { MdOutlineRestartAlt } from "react-icons/md";
import { VscDebugStart } from "react-icons/vsc";
import { SlControlPause } from "react-icons/sl";
import { act, useEffect, useState, useTransition } from "react";
import { createPortal } from "react-dom";

export default function Timer({ changeBackground }) {
  const [time, setTime] = useState(0.02);
  const [shortBreak, setShortBreak] = useState(0.04);
  const [longBreak, setLongBreak] = useState(0.08);
  const [count, setCount] = useState(0);

  const [timeFinished, setTimeFinished] = useState(false);

  const checkTime = (time) => {
    if (count >= pomodoroInterval.length - 1) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
    console.log("count increased");
    console.log(count);
    console.log(pomodoroInterval[count]);
  };

  const pomodoroInterval = [
    time,
    shortBreak,
    time,
    shortBreak,
    time,
    shortBreak,
    time,
    longBreak,
  ];

  const [active, setActive] = useState(true);

  const changePause = () => {
    setActive(!active);
  };

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

        <CountdownTimer
          key={count}
          time={pomodoroInterval[count] * 60}
          pause={active}
          checkTime={checkTime}
        />

        <SlOptions onClick={toggleMenu} />
        {showMenu &&
          createPortal(
            <Menu close={toggleMenu} changeBackground={changeBackground} />,
            document.body
          )}
      </div>
      <div className={styles.timerBar}></div>
      <div className={styles.timerControls}>
        {active ? (
          <VscDebugStart onClick={changePause} />
        ) : (
          <SlControlPause onClick={changePause} />
        )}

        <MdOutlineRestartAlt />
      </div>
    </div>
  );
}
