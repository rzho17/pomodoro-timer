import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./pageContent/Header";
import Main from "./pageContent/Main";
import Footer from "./pageContent/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
