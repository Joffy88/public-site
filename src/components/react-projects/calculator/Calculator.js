import React, { useState, useEffect } from "react";
import Buttons from "./Buttons";
import Navbar from "../../key/Navbar";
import ContactLinks from "../../key/ContactLinks";

function Calculator() {
  const [calc, setCalc] = useState({
    display: "0",
    currentOp: "",
    lastValue: "",
    answer: "",
    equation: "",
  });

  const handleDigits = (e) => {
    setCalc((prevState) => {
      if (calc.display == "0") {
        return {
          ...calc,
          display: e.target.value,
          lastValue: e.target.value,
          equation: e.target.value,
        };
      } else if (calc.equation.includes("=")) {
        return {
          ...calc,
          display: e.target.value,
          lastValue: e.target.value,
          equation: e.target.value,
          answer: "",
          currentOp: "",
        };
      } else if (
        calc.currentOp.includes("*") ||
        calc.currentOp.includes("/") ||
        calc.currentOp.includes("+") ||
        calc.currentOp.includes("-")
      )
        return {
          ...calc,
          display: e.target.value,
          lastValue: e.target.value,
          equation: (prevState.equation += e.target.value),
          answer: "",
          currentOp: "",
        };
      else {
        return {
          ...calc,
          display: (prevState.display += e.target.value),
          lastValue: (prevState.lastValue += e.target.value),
          equation: (prevState.equation += e.target.value),
          currentOp: "",
        };
      }
    });
  };

  const handleOperator = (e) => {
    setCalc((prevState) => {
      if (
        (e.target.value === "+" ||
          e.target.value === "*" ||
          e.target.value === "/") &&
        calc.currentOp === "-"
      )
        return {
          ...calc,
          currentOp: e.target.value,
          display: e.target.value,
          lastValue: prevState.lastValue,
          equation: (prevState.lastValue += e.target.value),
        };
      else if (
        (calc.currentOp === "+" ||
          calc.currentOp === "*" ||
          calc.currentOp === "/") &&
        e.target.value !== "-"
      )
        return {
          ...calc,
          currentOp: e.target.value,
          display: e.target.value,
          lastValue: prevState.lastValue,
          equation: (prevState.lastValue += e.target.value),
        };
      else if (calc.answer)
        return {
          ...calc,
          lastValue: prevState.answer,
          equation: (prevState.answer += e.target.value),
          answer: "",
          currentOp: e.target.value,
          display: e.target.value,
        };
      else
        return {
          ...calc,
          equation: (prevState.equation += e.target.value),
          display: e.target.value,
          lastValue: prevState.lastValue,
          currentOp: e.target.value,
        };
    });
  };

  const handleDecimal = (e) => {
    setCalc((prevState) => {
      if (!prevState.display.includes("."))
        return {
          ...calc,
          display: (prevState.display += e.target.value),
          lastValue: (prevState.lastValue += e.target.value),
          equation: (prevState.equation += e.target.value),
        };
      else return { ...calc };
    });
  };

  const handleEquals = (e) => {
    const equation = calc.equation;
    const answer = eval(equation);
    setCalc((prevState) => {
      if (!calc.equation.includes("=") && calc.equation)
        return {
          ...calc,
          display: answer.toString(),
          lastValue: answer,
          currentOp: e.target.value,
          equation: prevState.equation + "=" + answer,
          answer: answer.toString(),
        };
      else return { ...calc };
    });
  };

  const handleClear = (e) => {
    setCalc({
      ...calc,
      display: 0,
      lastValue: "",
      equation: "",
      answer: "",
      currentOp: "",
    });
  };

  return (
    <>
      <Navbar />
      <div className="page-body">
        <div className="project-body">
          <div id="calc-background">
            <h1>REACT CALCULATOR</h1>
            <div id="calculator">
              <div id="equation" className="calc-font">
                {calc.equation}
              </div>
              <div id="display">{calc.display}</div>

              <Buttons
                digits={handleDigits}
                operator={handleOperator}
                equals={handleEquals}
                clear={handleClear}
                decimal={handleDecimal}
              />
            </div>
          </div>
        </div>
      </div>
      <ContactLinks />
    </>
  );
}

export default Calculator;
