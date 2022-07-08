import React from "react";

function PowerSwitch(props) {
  return (
    <label className="switch" id="power-switch">
      <input type="checkbox" onClick={props.powerOn} />
      <span className="slider"></span>
    </label>
  );
}
export default PowerSwitch;
