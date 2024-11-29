import { useState } from "react";
import styles from "./Menu.module.css";
import { VscDebugStart } from "react-icons/vsc";

export default function Menu({
  close,
  changeBackground,
  setTimers,
  play,
  changeVolume,
  setJingle,
}) {
  const sounds = [
    {
      url: "dingding.mp3",
      name: "Ding Ding",
    },
    {
      url: "jingle1.mp3",
      name: "Jingle",
    },
    {
      url: "jingle2.mp3",
      name: "Jingle 2",
    },
    {
      url: "jingle3.mp3",
      name: "Jingle 3",
    },
  ];
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
      name: "Winter Night",
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

  // const [pomoValue, setPomoValue] = useState(0);
  // const [shortValue, setShortValue] = useState(0);
  // const [longValue, setLongValue] = useState(0);

  const changeActive = (type) => {
    setShowTimers(type === "timer");
    setShowThemes(type === "themes");
    setShowSounds(type === "sounds");
  };

  const test = (e, timeObj, key) => {
    timeObj[key] = Math.round(parseFloat(e)); // Dynamically update the property

    console.log(timeObj);
  };

  // Example usage:
  const timers = {
    pomoValue: 25,
    shortValue: 5,
    longValue: 30,
  };

  const updateImg = (data) => {
    const selectedIndex = data;
    const img = backgroundImages[selectedIndex];
    changeBackground(img.url);
    setSmallImg([img.url, img.description]);
  };

  const save = () => {
    setTimers(timers["pomoValue"], timers["shortValue"], timers["longValue"]);
    close();
  };

  return (
    <>
      <div className={styles.menuOverlay} onClick={close}></div>
      <div className={styles.menuContent}>
        <div className={styles.menuOptions}>
          <h3
            onClick={() => changeActive("timer")}
            className={showTimers ? `${styles.active}` : ""}
          >
            timers
          </h3>
          <h3
            onClick={() => changeActive("themes")}
            className={showThemes ? `${styles.active}` : ""}
          >
            themes
          </h3>
          <h3
            onClick={() => changeActive("sounds")}
            className={showSounds ? `${styles.active}` : ""}
          >
            sounds
          </h3>
        </div>

        <div className={styles.menuSettings}>
          {showTimers ? (
            <div className={styles.menuTimerContainer}>
              <label htmlFor="pomodoro">pomodoro time</label>
              <input
                type="number"
                name="pomodoro"
                id="pomodoro"
                min="1"
                onChange={(e) => test(e.target.value, timers, "pomoValue")}
                placeholder="minutes"
              />
              <label htmlFor="shortBreak">short break length</label>
              <input
                type="number"
                name="shortBreak"
                id="shortBreak"
                min="1"
                onChange={(e) => test(e.target.value, timers, "shortValue")}
                placeholder="minutes"
              />
              <label htmlFor="longBreak">long break length</label>
              <input
                type="number"
                name="longBreak"
                id="longBreak"
                min="1"
                onChange={(e) => test(e.target.value, timers, "longValue")}
                placeholder="minutes"
              />
            </div>
          ) : null}

          {showThemes ? (
            <div className={styles.menuThemesContainer}>
              {" "}
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
          ) : null}

          {showSounds ? (
            <div className={styles.menuSoundsContainer}>
              <div>
                <select
                  name="sounds"
                  id=""
                  onChange={(e) => setJingle(e.target.value)}
                >
                  {sounds.map((item) => {
                    return (
                      <option key={item.url} value={item.url}>
                        {item.name}
                      </option>
                    );
                  })}
                </select>
                <VscDebugStart onClick={play} />
              </div>

              <input
                className={styles.slider}
                type="range"
                onChange={(e) => changeVolume(e.target.value)}
              />
            </div>
          ) : null}
        </div>

        {/* <div className={styles.menuSettings}>
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
        </div> */}

        {/* <div className={styles.menuSettings}>
          <select
            name="sounds"
            id=""
            onChange={(e) => setJingle(e.target.value)}
          >
            {sounds.map((item) => {
              return (
                <option key={item.url} value={item.url}>
                  {item.name}
                </option>
              );
            })}
          </select>

          <button onClick={play}>Test</button>
          <input type="range" onChange={(e) => changeVolume(e.target.value)} />
        </div> */}

        <div className={styles.menuButtons}>
          <button onClick={close} className={styles.close}>
            close
          </button>
          <button onClick={save} className={styles.save}>
            save
          </button>
        </div>
      </div>
    </>
  );
}
