import React from "react";
import Buttons from "./Buttons";
import Navbar from "../../key/Navbar";
import ContactLinks from "../../key/ContactLinks";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "0",
      currentOp: "",
      lastValue: "",
      answer: "",
      equation: "",
    };
    this.handleDigits = this.handleDigits.bind(this);
    this.handleOperator = this.handleOperator.bind(this);
    this.handleEquals = this.handleEquals.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleDecimal = this.handleDecimal.bind(this);
  }

  handleDigits = (e) => {
    if (this.state.display == 0) {
      this.setState({
        display: e.target.value,
        lastValue: e.target.value,
        equation: e.target.value,
      });
    } else if (this.state.equation.includes("=")) {
      this.setState({
        display: e.target.value,
        lastValue: e.target.value,
        equation: e.target.value,
        answer: "",
        currentOp: "",
      });
    } else if (
      this.state.currentOp.includes("*") ||
      this.state.currentOp.includes("/") ||
      this.state.currentOp.includes("+") ||
      this.state.currentOp.includes("-")
    ) {
      this.setState((prevState) => ({
        display: e.target.value,
        lastValue: e.target.value,
        equation: (prevState.equation += e.target.value),
        answer: "",
        currentOp: "",
      }));
    } else {
      this.setState((prevState) => ({
        display: (prevState.display += e.target.value),
        lastValue: (prevState.lastValue += e.target.value),
        equation: (prevState.equation += e.target.value),
        currentOp: "",
      }));
    }
  };

  handleOperator = (e) => {
    if (
      (e.target.value === "+" ||
        e.target.value === "*" ||
        e.target.value === "/") &&
      this.state.currentOp === "-"
    ) {
      this.setState((prevState) => ({
        currentOp: e.target.value,
        display: e.target.value,
        lastValue: prevState.lastValue,
        equation: (prevState.lastValue += e.target.value),
      }));
    } else if (
      (this.state.currentOp === "+" ||
        this.state.currentOp === "*" ||
        this.state.currentOp === "/") &&
      e.target.value !== "-"
    ) {
      this.setState((prevState) => ({
        currentOp: e.target.value,
        display: e.target.value,
        lastValue: prevState.lastValue,
        equation: (prevState.lastValue += e.target.value),
      }));
    } else if (this.state.answer) {
      this.setState((prevState) => ({
        lastValue: prevState.answer,
        equation: (prevState.answer += e.target.value),
        answer: "",
        currentOp: e.target.value,
        display: e.target.value,
      }));
    } else {
      this.setState((prevState) => ({
        equation: (prevState.equation += e.target.value),
        display: e.target.value,
        lastValue: prevState.lastValue,
        currentOp: e.target.value,
      }));
    }
  };
  handleDecimal = (e) => {
    if (!this.state.display.includes(".")) {
      this.setState((prevState) => ({
        display: (prevState.display += e.target.value),
        lastValue: (prevState.lastValue += e.target.value),
        equation: (prevState.equation += e.target.value),
      }));
    }
  };

  handleEquals = (e) => {
    if (!this.state.equation.includes("=") && this.state.equation) {
      const equation = this.state.equation;
      const answer = eval(equation);
      this.setState((prevState) => ({
        display: answer.toString(),
        lastValue: answer,
        currentOp: e.target.value,
        equation: prevState.equation + "=" + answer,
        answer: answer.toString(),
      }));
    }
  };

  handleClear = (e) => {
    this.setState({
      display: 0,
      lastValue: "",
      equation: "",
      answer: "",
      currentOp: "",
    });
  };

  render() {
    return (
      <div>
        <Navbar />
        <div id="calc-background">
          <h1 className="calc-heading">React Calculator</h1>
          <div id="calculator">
            <div id="equation" className="calc-font">
              {this.state.equation}
            </div>
            <div id="display">{this.state.display}</div>

            <Buttons
              digits={this.handleDigits}
              operator={this.handleOperator}
              equals={this.handleEquals}
              clear={this.handleClear}
              decimal={this.handleDecimal}
            />
          </div>
        </div>
        <ContactLinks />
      </div>
    );
  }
}

export default Calculator;
