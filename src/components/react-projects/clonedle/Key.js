import React, { useEffect } from "react";

function Key(props) {
  const handleColor = () => {
    let green = props.greencheck;
    let gold = props.goldcheck;
    let grey = props.greycheck;

    if (!green && !grey && !gold) {
      return "white";
    } else if (green && green.includes(props.id)) return "green";
    else if (gold && gold.includes(props.id)) return "gold";
    else if (grey && grey.includes(props.id)) {
      return "grey";
    }
  };

  useEffect(() => {
    handleColor();
  });

  return (
    <div>
      <button
        className={"keyboard-key " + handleColor()}
        greencheck={props.greencheck}
        goldcheck={props.goldcheck}
        greycheck={props.greycheck}
        id={props.id}
        name={props.name}
        onClick={props.handleClick}
      >
        {props.trigger}
      </button>
    </div>
  );
}

export default Key;
