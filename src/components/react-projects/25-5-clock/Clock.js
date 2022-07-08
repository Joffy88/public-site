import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../key/Navbar";
import ContactLinks from "../../key/ContactLinks";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breakLength: 5,
      sessionLength: 25,
      seconds: "00",
      minutes: 25,
      clockStatus: "Session",
      sessionStatus: "Session",
      countdown: false,
      interval: "",
      btnStatus: "START",
      bgColor: "#3ed83b",
    };

    this.handleBreakLength = this.handleBreakLength.bind(this);
    this.handleSessionLength = this.handleSessionLength.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleClockStatus = this.handleClockStatus.bind(this);
  }

  handleBreakLength(e) {
    const increment = e.currentTarget.value;
    let breakTime = this.state.breakLength;
    if (this.state.btnStatus === "START") {
      if (breakTime > 1 && (increment === 1 || increment === "1")) {
        this.setState((prevState) => ({
          breakLength: (prevState.breakLength -= 1),
        }));
      } else if (
        (breakTime === 1 || breakTime === "1") &&
        (increment === 1 || increment === "1")
      ) {
        this.setState((prevState) => ({
          breakLength: prevState.breakLength,
        }));
      } else if (breakTime <= 59) {
        this.setState((prevState) => ({
          breakLength: (prevState.breakLength += 1),
        }));
      }
    }
  }

  handleSessionLength(e) {
    const increment = e.currentTarget.value;
    function numPad(e) {
      return String(e).padStart(2, "0");
    }
    let seshLength = this.state.sessionLength;
    if (this.state.btnStatus === "START") {
      this.setState({ seconds: numPad(0) });
      if (increment === 1 || increment === "1") {
        if (seshLength === 1 || seshLength === "1") {
          this.setState({ minutes: numPad(1) });
        } else {
          this.setState((prevState) => ({
            sessionLength: (prevState.sessionLength -= 1),
            minutes: numPad(prevState.sessionLength),
          }));
        }
      } else if (seshLength === 1 || seshLength === "1") {
        this.setState({
          sessionLength: (seshLength += 1),
          minutes: numPad(seshLength),
        });
      } else if (seshLength < 60) {
        this.setState((prevState) => ({
          sessionLength: (prevState.sessionLength += 1),
          minutes: numPad(prevState.sessionLength),
        }));
      }
    }
  }

  handleClockStatus() {
    let audio = document.getElementById("beep");
    let intervalId;
    const self = this;
    function numPad(e) {
      return String(e).padStart(2, "0");
    }
    function changeColor() {
      if (self.state.bgColor === "#3ed83b") {
        self.setState({
          bgColor: "red",
        });
      } else {
        self.setState({
          bgColor: "#3ed83b",
        });
      }
    }

    function repeatEverySecond() {
      intervalId = setInterval(tickTimer, 1000);
      self.setState((prevState) => ({
        interval: intervalId,
      }));
    }
    function tickTimer() {
      let remSecs = self.state.seconds;
      let remMins = self.state.minutes;
      let status = self.state.sessionStatus;
      self.setState((prevState) => ({
        interval: intervalId,
        btnStatus: "Stop",
      }));
      if (remSecs === "01" && remMins === "00" && status === "Session") {
        audio.play();
        self.setState((prevState) => ({
          clockStatus: "Break",
          seconds: "00",
        }));
      } else if (remSecs === "00" && remMins === "00" && status === "Session") {
        self.setState({
          seconds: "00",
          minutes: numPad(self.state.breakLength),
          sessionStatus: "Break",
        });
      } else if (
        remSecs === "01" &&
        (remMins === "00" || remMins === "00") &&
        status === "Break"
      ) {
        audio.play();
        self.setState({
          clockStatus: "Session",
          seconds: "00",
        });
      } else if (
        remSecs === "00" &&
        (remMins === 0 || remMins === "00") &&
        status === "Break"
      ) {
        self.setState({
          seconds: "00",
          minutes: numPad(self.state.sessionLength),
          sessionStatus: "Session",
        });
      } else if (remSecs === "00" && remMins > 0) {
        self.setState((prevState) => ({
          seconds: 59,
          minutes: numPad((prevState.minutes -= 1)),
        }));
      } else {
        self.setState((prevState) => ({
          seconds: numPad((prevState.seconds -= 1)),
        }));
      }
    }

    function pauseInt() {
      clearInterval(self.state.interval);
    }
    if (this.state.countdown === false) {
      changeColor();
      this.setState(() => ({
        countdown: true,
      }));
      repeatEverySecond();
    } else {
      pauseInt();

      this.setState(() => ({
        countdown: false,
        btnStatus: "START",
      }));
      changeColor();
    }
  }

  handleReset() {
    clearInterval(this.state.interval);
    document.getElementById("beep").pause();
    document.getElementById("beep").load();
    this.setState(() => ({
      breakLength: 5,
      sessionLength: 25,
      seconds: "00",
      minutes: 25,
      clockStatus: "Session",
      sessionStatus: "Session",
      countdown: false,
      interval: "",
      btnStatus: "START",
      bgColor: "#3ed83b",
    }));
  }

  render() {
    return (
      <>
        <Helmet>
          <title>25 + 5 Clock</title>
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.12.1/css/all.css"
            crossorigin="anonymous"
          />
        </Helmet>
        <Navbar />
        <div className="page-body">
          <div className="project-body">
            <div id="clock-page">
              <div id="clock">
                <h1>25 + 5 Clock</h1>
                <audio
                  id="beep"
                  src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
                  type="audio/mpeg"
                ></audio>
                <h2 id="break-label">Break Length</h2>
                <h3 id="break-length">{this.state.breakLength} minutes</h3>

                <button
                  className="btn-space"
                  id="break-decrement"
                  value={1}
                  onClick={this.handleBreakLength}
                >
                  <i className="fa fa-arrow-down"></i>
                </button>
                <button
                  id="break-increment"
                  className="btn-space"
                  onClick={this.handleBreakLength}
                >
                  <i className="fa fa-arrow-up"></i>
                </button>
                <h2 id="session-label">Session Length</h2>
                <h3 id="session-length">{this.state.sessionLength} minutes</h3>
                <button
                  id="session-decrement"
                  className="btn-space"
                  value={1}
                  onClick={this.handleSessionLength}
                >
                  <i className="fa fa-arrow-down"></i>
                </button>
                <button
                  id="session-increment"
                  className="btn-space"
                  onClick={this.handleSessionLength}
                >
                  <i className="fa fa-arrow-up"></i>
                </button>
                <div id="timer-label">
                  <h2>{this.state.clockStatus}</h2>
                </div>
                <p id="time-left">
                  {this.state.minutes}:{this.state.seconds}
                </p>
                <button
                  id="start_stop"
                  className="btn-space"
                  onClick={this.handleClockStatus}
                  style={{ backgroundColor: this.state.bgColor }}
                >
                  {this.state.btnStatus}
                </button>
                <button
                  id="reset"
                  className="btn-space"
                  onClick={this.handleReset}
                >
                  RESET
                </button>
              </div>
            </div>
          </div>
        </div>
        <ContactLinks />
      </>
    );
  }
}

export default Clock;
