import React, { useEffect, useState } from "react";

function Key(props) {
  const [keyColor, setKeyColor] = useState({
    greenKey: [],
    goldKey: [],
    greyKey: [],
  });

  const handleColor = () => {
    if (!keyColor.greenKey && !keyColor.greyKey && !keyColor.gold) {
      return "white";
    } else if (keyColor.greenKey && keyColor.greenKey.includes(props.id))
      return "green";
    else if (keyColor.goldKey && keyColor.goldKey.includes(props.id))
      return "gold";
    else if (keyColor.greyKey && keyColor.greyKey.includes(props.id)) {
      return "grey";
    }
  };

  useEffect(() => {
    console.log(props.greencheck);
    setKeyColor({
      greenKey: props.greencheck,
      goldKey: props.goldcheck,
      greyKey: props.greycheck,
    });
    handleColor();
  }, []);

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
