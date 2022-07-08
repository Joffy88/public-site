import React, { useEffect, useState } from "react";
import drumSounds from "./DrumSounds";
import DrumPad from "./DrumPad";
import Navbar from "../../key/Navbar";
import ContactLinks from "../../key/ContactLinks";

function DrumMachine() {
  const [drumDisplay, setDrumDisplay] = useState({
    display: "Click a pad to start",
    power: true,
  });

  const handleKeyDown = (e) => {
    if (drumDisplay.power === true) {
      let myKey = e.key.toUpperCase();
      let soundClip = document.getElementById(`${myKey}`);
      if (soundClip) {
        soundClip.play();
        soundClip.currentTime = 0;
        handleDisplay(soundClip.parentElement.id);
      }
    }
  };

  const handleDisplay = (display) => {
    setDrumDisplay({ display });
    document.getElementById("display").innerHTML = drumDisplay.display;
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    window.focus();
  }, []);

  useEffect(() => {
    document.getElementById("display").innerHTML = drumDisplay.display;
    if (document.getElementById(`${drumDisplay.display}`)) {
      document.getElementById(`${drumDisplay.display}`).focus();
    }
  }, []);

  useEffect(() => {
    return () => {
      document.removeEventListener("keydown", this.handleKeydown);
    };
  }, []);

  const powerOn = () => {
    if (drumDisplay.power === false) {
      this.setState({
        power: true,
        display: "Click a pad to start",
      });
    } else {
      this.setState({
        power: false,
        display: "No Power",
      });
    }
  };

  {
    return (
      <div>
        <Navbar />
        <div className="project-body">
          <div id="drums">
            <div id="drum-container">
              <h1>REACT DRUM MACHINE</h1>
              <h2>POWER</h2>
              <label className="switch" id="power-switch">
                <input type="checkbox" onClick={powerOn} />
                <span className="slider"></span>
              </label>

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
                    onKeyPress={handleKeyDown}
                  />
                ))}
              </div>
              <div id="display">Click a pad to start</div>
            </div>
          </div>
          <ContactLinks />
        </div>
      </div>
    );
  }
}

export default DrumMachine;
