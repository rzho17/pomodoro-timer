import styles from "./Footer.module.css";
import { FaGithubAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <h2>Calmodoro</h2>
      <div className={styles.info}>
        <p>rzho17</p>
        <FaGithubAlt />
      </div>
    </footer>
  );
};

export default Footer;
