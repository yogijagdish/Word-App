// importing of css file
import "./App.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// importing of the components from the component field
import Navbar from "./components/Navbar";
import Textbox from "./components/Textbox";
import About from "./components/About";

// importing of useState to change/update states of the state
import React, { useState } from "react";

function App() {
  // state for the enabling of light and dark mode in navbar
  const [mode, enableMode] = useState("light");

  // state for the enabling of light and dark mode inside of the text field
  const [state, setMyState] = useState({
    color: "black",
    backgroundColor: "white",
  });

  // enables darkmode when ever the darkmode enable is toggled
  const onHandleSwitch = () => {
    if (mode === "light") {
      enableMode("dark");
      document.body.style.backgroundColor = "black";
      setMyState({
        color: "white",
        backgroundColor: "black",
      });
    } else {
      enableMode("light");
      document.body.style.backgroundColor = "white";
      setMyState({
        color: "black",
        backgroundColor: "white",
      });
    }
  };
  return (
  <Router>

        {/* 
      importing of navigation bar 
      primaryname is a prop for the first link in the navigation bar
      secondaryname is the second prop for second link in the navigation bar
      mode is a prop send to change color of navigation bar
      click is the function to execute when dark mode is toggled
    */}
        <Navbar
          title="Jaggu"
          primaryname="Home"
          secondaryname="About"
          mode={mode}
          click={onHandleSwitch}
          />

        {/* importing of textbox 
      state is the prop sent to change the color state of the textbox*/}
        <Routes>
          <Route path="/" element={<Textbox state={state} />} />     
        <Route path="/about" element={<About />} />
        </Routes>
      </Router>
  );
}

export default App;
