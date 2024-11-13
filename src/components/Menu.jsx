import { useState } from "react";
import styles from "./Menu.module.css";

export default function Menu({ close, changeBackground }) {
  const backgroundImages = [
    {
      url: "beachwaves",
      description: "waves on a beach",
    },
    {
      url: "eveningboats",
      description: "mini boats in japan during sunset",
    },
    {
      url: "forest",
      description: "forest road with sun shining down on it",
    },
    {
      url: "nightcity",
      description: "city skyline at night",
    },
    {
      url: "northern",
      description: "northern lights on winter night",
    },
    {
      url: "winter",
      description: "winter snow on asian style building",
    },
  ];

  const [showTimers, setShowTimers] = useState(true);
  const [showThemes, setShowThemes] = useState(false);
  const [showSounds, setShowSounds] = useState(false);

  return (
    <>
      <div className={styles.menuOverlay} onClick={close}></div>
      <div className={styles.menuContent}>
        <div className={styles.menuOptions}>
          <h3>timers</h3>
          <h3>themes</h3>
          <h3>sounds</h3>
        </div>

        <div className={styles.menuSettings}>
          <label htmlFor="pomodoro">pomodoro time</label>
          <input type="number" name="pomodoro" min="1" />
          <label htmlFor="shortBreak">short break length</label>
          <input type="number" name="shortBreak" min="1" />
          <label htmlFor="longBreak">long break length</label>
          <input type="number" name="longBreak" min="1" />
        </div>

        <div className={styles.menuSettings}>
          <select
            name="backgroundImg"
            id=""
            onChange={(e) => changeBackground(e.target.value)}
          >
            {backgroundImages.map((item) => {
              return (
                <option key={item.url} value={item.url}>
                  {item.url}
                </option>
              );
            })}
          </select>

          <button onClick={() => changeBackground("forest")}>
            change the background
          </button>

          <div>
            <img src="../public/assets/beachwaves.jpg" alt="" />
          </div>
        </div>

        <button onClick={close}>Close</button>
      </div>
    </>
  );
}
