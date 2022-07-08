import React from "react";
import keys from "./Keys";
import Key from "./Key";

function Keyboard() {
  return (
    <div id="keyboard">
      <div id="keyboard-row-1">
        {keys.map((keys, i) => {
          if (keys.row === 1) {
            return (
              <Key
                id={keys.name}
                name={keys.name}
                trigger={keys.trigger}
                key={i}
                code={keys.code}
                handleClick={this.props.handleClick}
                handleColor={this.guessList}
              />
            );
          }
        })}
      </div>
      <div id="keyboard-row-2">
        {keys.map((keys, i) => {
          if (keys.row === 2) {
            return (
              <Key
                id={keys.name}
                name={keys.name}
                trigger={keys.trigger}
                key={i}
                code={keys.code}
                handleClick={this.props.handleClick}
              />
            );
          }
        })}
      </div>
      <div id="keyboard-row-3">
        {keys.map((keys, i) => {
          if (keys.row === 3) {
            return (
              <Key
                id={"key-" + keys.name}
                name={keys.name}
                trigger={keys.trigger}
                key={i}
                code={keys.code}
                handleClick={this.props.handleClick}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default Keyboard;
