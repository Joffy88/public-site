import React from "react";
import Navbar from "../key/Navbar";
import ContactLinks from "../key/ContactLinks";

class RomanNumerals extends React.Component {
  constructor(props) {
    super(props);
    this.state = { number: "", answer: "" };
    this.convertToRoman = this.convertToRoman.bind(this);
    this.resetFields = this.resetFields.bind(this);
  }

  handleChange(event) {
    this.setState({ number: event.target.value });
  }

  resetFields(e) {
    e.preventDefault();
    this.setState({
      number: "",
    });
    return (document.getElementById("answer").innerHTML = `<p></p>`);
  }

  convertToRoman(e) {
    e.preventDefault();
    let roman = "";
    let num = this.state.number;
    console.log(num);
    const numerals = [
      "M",
      "CM",
      "D",
      "CD",
      "C",
      "XC",
      "L",
      "XL",
      "X",
      "IX",
      "V",
      "IV",
      "I",
    ];

    const decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

    for (let i = 0; i < decimals.length; i++) {
      while (decimals[i] <= num) {
        roman += numerals[i];
        num -= decimals[i];
      }
    }

    this.setState({
      number: num,
      answer: roman,
    });
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="page-body">
          <div className="project-body">
            <div id="roman">
              <div id="tool">
                <div id="definition">
                  <h1>Roman Numeral Converter</h1>
                  <p>
                    A tool to convert any Cardinal Number up to 5000 into its
                    Roman Numeral equivalent.
                  </p>
                </div>
                <form id="number-converter">
                  <h2>Type in any number:</h2>
                  <input
                    type="number"
                    value={this.state.number}
                    onChange={this.handleChange.bind(this)}
                    id="num-check"
                    name="num-check"
                    placeholder="Try a number..."
                    required
                  />
                  <div id="buttons">
                    <button
                      type="submit"
                      id="num-convert"
                      onClick={this.convertToRoman}
                      value={this.state.number}
                    >
                      Convert
                    </button>
                    <button
                      type="reset"
                      id="num-reset"
                      onClick={this.resetFields}
                    >
                      Reset
                    </button>
                  </div>
                  <div id="results">
                    <h1 id="answer">{this.state.answer}</h1>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <ContactLinks />
      </div>
    );
  }
}

export default RomanNumerals;
