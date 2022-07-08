import React from "react";
import drumSounds from "./DrumSounds";
import DrumPad from "./DrumPad";
import Navbar from "../../key/Navbar";
import ContactLinks from "../../key/ContactLinks";

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "Click a pad to start",
      power: true,
    };
    this.handleDisplay = this.handleDisplay.bind(this);
    this.powerOn = this.powerOn.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleDisplay(display) {
    this.setState({ display });

    document.getElementById("display").innerHTML = this.state.display;
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeydown);
    window.focus();
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeydown);
  }

  componentDidUpdate() {
    document.getElementById("display").innerHTML = this.state.display;
    if (document.getElementById(`${this.state.display}`)) {
      document.getElementById(`${this.state.display}`).focus();
    }
  }

  handleKeyDown = (e) => {
    if (this.state.power === true) {
      let myKey = e.key.toUpperCase();
      let soundClip = document.getElementById(`${myKey}`);
      if (soundClip) {
        soundClip.play();
        soundClip.currentTime = 0;
        this.handleDisplay(soundClip.parentElement.id);
      }
    }
  };

  powerOn() {
    if (this.state.power === false) {
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
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="project-body">
          <body id="drums">
            <div id="drum-container">
              <h1>REACT DRUM MACHINE</h1>
              <h2>POWER</h2>
              <label className="switch" id="power-switch">
                <input type="checkbox" onClick={this.powerOn} />
                <span className="slider"></span>
              </label>

              <div id="drum-machine">
                {drumSounds.map((drums, i) => (
                  <DrumPad
                    handlePower={this.state.power}
                    id={drums.name}
                    name={drums.name}
                    src={drums.audioLoc}
                    handleDisplay={this.handleDisplay}
                    trigger={drums.trigger}
                    key={i}
                    code={drums.code}
                    onKeyPress={this.handleKeyDown}
                  />
                ))}
              </div>
              <div id="display">Click a pad to start</div>
            </div>
          </body>
          <ContactLinks />
        </div>
      </div>
    );
  }
}

export default DrumMachine;
