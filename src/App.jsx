import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./pageContent/Header";
import Main from "./pageContent/Main";
import Footer from "./pageContent/Footer";
import "./App.css";

function App() {
  const savedBackground =
    localStorage.getItem("background") != null
      ? JSON.parse(localStorage.getItem("background"))
      : "gates";

  const [background, setBackground] = useState(savedBackground);

  const changeBackground = (image) => setBackground(image);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--root-background-image",
      `url(../assets/${background}.jpg)`
    );
  }, [background]);

  useEffect(() => {
    localStorage.setItem("background", JSON.stringify(background));
  }, [background]);

  return (
    <>
      <Header />
      <Main changeBackground={changeBackground} />
      <Footer />
    </>
  );
}

export default App;
