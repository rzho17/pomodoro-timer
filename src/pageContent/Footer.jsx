import styles from "./Footer.module.css";
import { FaGithubAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <h2>Calmodoro</h2>
      <iframe
        style={{
          width: "352px",
          height: "80px",
          borderRadius: "12px",
          frameBorder: "0",
        }}
        src="https://open.spotify.com/embed/playlist/6zCID88oNjNv9zx6puDHKj?utm_source=generator&theme=0"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
      <div className={styles.info}>
        <a href="https://github.com/rzho17/pomodoro-timer">
          <p>rzho17</p>
          <FaGithubAlt />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
