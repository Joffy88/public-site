import React from "react";

function LocationButton(props) {
  if (props.switch[0]) {
    return (
      <>
        <button className="find-location-btn" onClick={props.getPosition}>
          Get Location <i className="fa-solid fa-location-dot"></i>
        </button>
      </>
    );
  } else {
    return <></>;
  }
}

export default LocationButton;
