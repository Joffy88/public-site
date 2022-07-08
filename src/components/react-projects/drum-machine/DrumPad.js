import React from "react";

function DrumPad(props) {
  let audio = React.createRef();
  function handleClick(e) {
    if (props.handlePower === "on") {
      console.log("handleClick");
      audio.current.play();
      audio.current.currentTime = 0;
      props.handleDisplay(props.name);
    } else {
      alert("Power is off");
    }
  }

  return (
    <div className="drumpad-wrapper">
      <button
        className="drum-pad"
        id={props.id}
        onClick={handleClick}
        onKeyDown={props.keyPress}
      >
        {props.trigger}
        <audio
          className="clip"
          src={props.src}
          id={props.trigger}
          ref={audio}
        ></audio>
      </button>
      <h4>{props.id}</h4>
    </div>
  );
}

export default DrumPad;
