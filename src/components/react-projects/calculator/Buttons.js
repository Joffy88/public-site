import React from "react";

function Buttons(props) {
  const buttonsData = [
    {
      id: "seven",
      value: 7,
      class: "calcButton",
      click: props.digits,
      display: 7,
    },
    {
      id: "eight",
      value: 8,
      class: "calcButton",
      click: props.digits,
      display: 8,
    },
    {
      id: "nine",
      value: 9,
      class: "calcButton",
      click: props.digits,
      display: 9,
    },
    {
      id: "divide",
      value: "/",
      class: "calcButton",
      click: props.operator,
      display: "÷",
    },
    {
      id: "four",
      value: 4,
      class: "calcButton",
      click: props.digits,
      display: 4,
    },
    {
      id: "five",
      value: 5,
      class: "calcButton",
      click: props.digits,
      display: 5,
    },
    {
      id: "six",
      value: 6,
      class: "calcButton",
      click: props.digits,
      display: 6,
    },
    {
      id: "multiply",
      value: "*",
      class: "calcButton multiply",
      click: props.operator,
      display: "x",
    },
    {
      id: "one",
      value: 1,
      class: "calcButton",
      click: props.digits,
      display: 1,
    },
    {
      id: "two",
      value: 2,
      class: "calcButton",
      click: props.digits,
      display: 2,
    },
    {
      id: "three",
      value: 3,
      class: "calcButton",
      click: props.digits,
      display: 3,
    },
    {
      id: "subtract",
      value: "-",
      class: "calcButton",
      click: props.operator,
      display: "-",
    },
    {
      id: "zero",
      value: 0,
      class: "calcButton",
      click: props.digits,
      display: 0,
    },
    {
      id: "decimal",
      value: ".",
      class: "calcButton",
      click: props.decimal,
      display: ".",
    },
    {
      id: "equals",
      value: "=",
      class: "calcButton",
      click: props.equals,
      display: "=",
    },
    {
      id: "add",
      value: "+",
      class: "calcButton",
      click: props.operator,
      display: "+",
    },
    {
      id: "clear",
      value: "AC",
      class: "calcButton",
      click: props.clear,
      display: "AC",
    },
  ];

  return (
    <div id="calc-buttons">
      {buttonsData.map((btn) => {
        return (
          <button
            key={btn.id}
            id={btn.id}
            value={btn.value}
            className={btn.class}
            onClick={btn.click}
          >
            {btn.display}
          </button>
        );
      })}
    </div>
  );
}

export default Buttons;
