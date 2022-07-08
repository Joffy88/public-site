import React, { useEffect, useState } from "react";
import drumSounds from "./DrumSounds";
import DrumPad from "./DrumPad";
import Navbar from "../../key/Navbar";
import ContactLinks from "../../key/ContactLinks";
import DrumDisplay from "./DrumDisplay";
import PowerSwitch from "./PowerSwitch";

function DrumMachine() {
  // Sets initial display state
  const [drumDisplay, setDrumDisplay] = useState({
    display: "Click a pad to start",
    power: "on",
  });

  // Switch to turn the drum machine power on or off

  const powerOn = () => {
    setDrumDisplay(() => {
      if (drumDisplay.power === "on")
        return { power: "off", display: "No Power" };
      else {
        return { power: "on", display: "Power On" };
      }
    });
  };

  // Handles keypresses for playing the drum machine
  const handleKeyDown = (e) => {
    drumDisplay.power === "on" ? playAudio(e) : alert("Power is off2");
  };
  // Plays the audio clip
  const playAudio = (e) => {
    if (drumDisplay.power === "on") {
      let myKey = e.key.toUpperCase();
      let soundClip = document.getElementById(`${myKey}`);
      if (soundClip) {
        soundClip.play();
        soundClip.currentTime = 0;
        handleDisplay(soundClip.parentElement.id);
      }
    }
  };

  // Updates the text in the red box
  const handleDisplay = (display) => {
    setDrumDisplay((prevState) => {
      return { ...prevState, display };
    });
  };

  // componentDidMount replacement
  // Focuses window on drum pad so keyboard shortcuts work immediately
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    window.focus();
  }, []);

  // componentDidUpdate replacement
  // Updates name of drum being played
  useEffect(() => {
    if (document.getElementById(`${drumDisplay.display}`)) {
      document.getElementById(`${drumDisplay.display}`).focus();
    }
  }, [drumDisplay.display]);

  // // componentWillUnmount replacement
  // useEffect(() => {
  //   return () => {
  //     document.removeEventListener("keydown", handleKeyDown);
  //   };
  // }, []);

  {
    return (
      <>
        <Navbar />
        <div className="page-body">
          <div className="project-body">
            <div id="drums">
              <div id="drum-container">
                <h1>REACT DRUM MACHINE</h1>
                <PowerSwitch powerOn={powerOn} />
                <div id="drum-machine">
                  {drumSounds.map((drums, i) => (
                    <DrumPad
                      handlePower={drumDisplay.power}
                      id={drums.name}
                      name={drums.name}
                      src={drums.audioLoc}
                      handleDisplay={handleDisplay}
                      trigger={drums.trigger}
                      key={i}
                      code={drums.code}
                    />
                  ))}
                </div>
                <DrumDisplay display={drumDisplay.display} />
              </div>
            </div>
          </div>
        </div>
        <ContactLinks />
      </>
    );
  }
}

export default DrumMachine;
