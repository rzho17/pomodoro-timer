import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./pageContent/Header";
import Main from "./pageContent/Main";
import Footer from "./pageContent/Footer";
import "./App.css";

function App() {
  const [background, setBackground] = useState("eveningboats");

  const changeBackground = (image) => setBackground(image);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--root-background-image",
      `url(../public/assets/${background}.jpg)`
    );
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
