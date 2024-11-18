import { useState } from "react";
import styles from "./Menu.module.css";

export default function Menu({ close, changeBackground }) {
  const sound = new Audio("../public/assets/sounds/jingle1.mp3");

  const [volume, setVolume] = useState(sound.volume);
  sound.volume = volume;

  const play = () => {
    sound.play();
  };

  const changeVolume = (e) => {
    console.log(e);
    const intSound = parseInt(e);

    setVolume(intSound / 100);
  };

  const backgroundImages = [
    {
      url: "gates",
      description: "shrine gates on water",
      name: "Torii Gate",
    },
    {
      url: "shrine",
      description: "temple shrine in spring",
      name: "Spring Shrine",
    },
    {
      url: "eveningboats",
      description: "mini boats in japan during sunset",
      name: "Cherry Blossom",
    },
    {
      url: "forest",
      description: "forest road with sun shining down on it",
      name: "Forest Calm",
    },
    {
      url: "nightcity",
      description: "city skyline at night",
      name: "Cityscape",
    },
    {
      url: "northern",
      description: "northern lights on winter night",
      name: "Northern Lights",
    },
    {
      url: "winter",
      description: "winter snow on asian style building",
      name: "Winter Bliss",
    },
    {
      url: "water",
      description: "ocean waves during sunset",
      name: "Ocean Sunset",
    },
  ];

  const [smallImg, setSmallImg] = useState(["gates", ""]);
  const [showTimers, setShowTimers] = useState(true);
  const [showThemes, setShowThemes] = useState(false);
  const [showSounds, setShowSounds] = useState(false);

  const updateImg = (data) => {
    const selectedIndex = data;
    const img = backgroundImages[selectedIndex];
    changeBackground(img.url);
    setSmallImg([img.url, img.description]);
  };

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
            onChange={(e) => updateImg(e.target.selectedIndex)}
          >
            {backgroundImages.map((item) => {
              return (
                <option key={item.url} value={item}>
                  {item.name}
                </option>
              );
            })}
          </select>

          <div>
            <img
              src={`../public/assets/${smallImg[0]}.jpg`}
              alt={smallImg[1]}
            />
          </div>
        </div>

        <div className={styles.menuSettings}>
          <select name="sounds" id="">
            <option value="dingding">Ding Ding</option>
            <option value="jingle1">Jingle 1</option>
            <option value="jingle2">Jingle 2</option>
            <option value="jingle3">Jingle 3</option>
          </select>

          <button onClick={play}>Test</button>
          <input type="range" onChange={(e) => changeVolume(e.target.value)} />
        </div>

        <button onClick={close}>Close</button>
      </div>
    </>
  );
}
