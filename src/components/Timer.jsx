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

  const checkTime = () => {
    if (count >= pomodoroInterval.length - 1) {
      setCount(0);
    } else {
      setCount(count + 1);
    }

    changePause();
    console.log("count increased");
    console.log(count);
    console.log(pomodoroInterval[count]);
  };

  const reset = () => {
    setCount(0);

    setShortBreak(shortBreak + 0.00001);
    setLongBreak(longBreak + 0.00001);
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

  const [pomoActive, setPomoActive] = useState(true);
  const [shortActive, setShortActive] = useState(false);
  const [longActive, setLongActive] = useState(false);

  const changePomo = () => {
    setShortActive(false);
    setPomoActive(true);
    setLongActive(false);

    setActive(true);
  };

  const changeShort = () => {
    setShortActive(true);
    setPomoActive(false);
    setLongActive(false);

    setActive(true);
  };
  const changeLong = () => {
    setShortActive(false);
    setPomoActive(false);
    setLongActive(true);

    setActive(true);
  };

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
        <Button text={"pomodoro"} func={changePomo} />
        <Button text={"short break"} func={changeShort} />
        <Button text={"long break"} func={changeLong} />
      </div>
      <div className={styles.timerMain}>
        {/* <h2>25:00</h2> */}

        {pomoActive ? (
          <CountdownTimer
            key={count}
            time={pomodoroInterval[count] * 60}
            pause={active}
            checkTime={checkTime}
          />
        ) : null}

        {shortActive ? (
          <CountdownTimer
            time={shortBreak * 60}
            pause={active}
            checkTime={checkTime}
          />
        ) : null}
        {longActive ? (
          <CountdownTimer
            time={longBreak * 60}
            pause={active}
            checkTime={checkTime}
          />
        ) : null}

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

        <MdOutlineRestartAlt onClick={reset} />
      </div>
    </div>
  );
}
