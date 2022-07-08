import React from "react";
import Navbar from "../key/Navbar";
import ContactLinks from "../key/ContactLinks";

class PhoneNum extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: "",
      answer: null,
    };
    this.telephoneCheck = this.telephoneCheck.bind(this);
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

  telephoneCheck(e) {
    e.preventDefault();
    if (this.state.number) {
      let str = this.state.number;
      let filtNum = str.match(/[0-9]/g);
      const regex =
        /^([0-9]{3}[-][0-9]{3}[-][0-9]{4})|^([(][0-9]{3}[)][0-9]{3}[-][0-9]{4})|^([(][0-9]{3}[)]\s[0-9]{3}[-][0-9]{4})|^([0-9]{3}\s[0-9]{3}\s[0-9]{4})|^([0-9]{10}|^[1]\s[0-9]{3}\s[0-9]{3}\s[0-9]{4})|^([1]\s[0-9]{3}[-][0-9]{3}[-][0-9]{4})|^([1]\s[(][0-9]{3}[)]\s[0-9]{3}[-][0-9]{4})|^([1][(][0-9]{3}[)][0-9]{3}[-][0-9]{4})/;

      if (filtNum.length === 11 && str.match(regex) && filtNum[0] === 1) {
        document.getElementById(
          "answer"
        ).innerHTML = `'${this.state.number}' is a valid US number.`;
      } else if (filtNum.length === 10 && str.match(regex)) {
        document.getElementById(
          "answer"
        ).innerHTML = `'${this.state.number}' is a valid US number.`;
      } else
        document.getElementById(
          "answer"
        ).innerHTML = `'${this.state.number}' is NOT a valid US number.`;
    }
  }

  render() {
    return (
      <div>
        <Navbar />
        <div class="project-body">
          <div id="phone-validator">
            <div id="tool">
              <div id="definition">
                <h1>Phone Number Validator</h1>
                <p>
                  A tool to check if a passed string is a valid United States
                  phone number. Valid formats for a US number include:
                </p>
                <ul>
                  <li>555-555-5555</li>
                  <li>(555)555-5555</li>
                  <li>(555) 555-5555</li>
                  <li>555 555 5555</li>
                  <li>5555555555</li>
                  <li>1 555 555 5555</li>
                </ul>
              </div>

              <h2>
                Type in a phone number to determine whether it's a valid US
                number.
              </h2>
              <p>
                For example, "1 456 789 4444" should return as valid while
                "5555555" should return as false.
              </p>
              <form id="phone-number">
                <input
                  type="test"
                  id="num-check"
                  name="num-check"
                  placeholder="Test a phone number..."
                  required
                  value={this.state.number}
                  onChange={this.handleChange.bind(this)}
                />
                <div id="buttons">
                  <img
                    type="image"
                    border={0}
                    src="/images/phone-icon.png"
                    alt="submit"
                    id="num-validate"
                    onClick={this.telephoneCheck}
                    value={this.state.number}
                  />
                  <img
                    type="image"
                    border={0}
                    src="/images/hang-up.png"
                    alt="reset"
                    id="num-reset"
                    onClick={this.resetFields}
                  />
                </div>
                <div id="results">
                  <h2 id="answer">
                    <p></p>
                  </h2>
                </div>
              </form>
            </div>
            <footer />
          </div>
          <ContactLinks />
        </div>
      </div>
    );
  }
}

export default PhoneNum;
