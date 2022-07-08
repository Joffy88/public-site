import React from "react";
import Navbar from "../key/Navbar";
import ContactLinks from "../key/ContactLinks";

class Palindrome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      result: "",
    };
    this.checkPal = this.checkPal.bind(this);
    this.resetFields = this.resetFields.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value,
    });
  }

  checkPal(str) {
    str.preventDefault();
    if (this.state.input) {
      let phrase = this.state.input;
      let stripped = phrase
        .toLowerCase()
        .replace("_", "")
        .match(/\w/g)
        .join("");
      let reversed = stripped.split("").reverse().join("");
      if (stripped === reversed) {
        return (document.getElementById(
          "answer"
        ).innerHTML = `Yes, <em>'${this.state.input}
      '</em> is a palindrome!`);
      } else {
        return (document.getElementById(
          "answer"
        ).innerHTML = `No, <em>'${this.state.input}'</em> is not a palindrome!`);
      }
    }
  }

  resetFields(e) {
    e.preventDefault();
    this.setState({
      result: "",
      input: "",
    });
    return (document.getElementById("answer").innerHTML = `<p></p>`);
  }

  render() {
    return (
      <>
        <Navbar />
        <div className="page-body">
          <div className="project-body">
            <div id="palindrome">
              <div id="definition">
                <h1>palindrome</h1>
                <h2>noun</h2>
                <h3>pal·​in·​drome | \ ˈpa-lən-ˌdrōm</h3>
                <p>
                  a word, phrase, sentence, or number that reads the same
                  backward or forward. “Step on no pets” is a palindrome.
                </p>
              </div>
              <form id="palindrome-check">
                <h2>
                  <em>Check if a word or phrase is a palindrome:</em>
                </h2>
                <input
                  type="text"
                  name="palindrome"
                  placeholder="Type something..."
                  required
                  value={this.state.input}
                  onChange={this.handleChange.bind(this)}
                />
                <div id="buttons">
                  <button
                    type="submit"
                    id="pal-check"
                    value={this.state.input}
                    onClick={this.checkPal}
                  >
                    Is it a palindrome?
                  </button>
                  <button
                    type="reset"
                    id="pal-reset"
                    onClick={this.resetFields}
                  >
                    Reset
                  </button>
                </div>
                <div className="results">
                  <h3 id="answer">{this.state.result}</h3>
                </div>
              </form>
            </div>
          </div>
        </div>

        <ContactLinks />
      </>
    );
  }
}

export default Palindrome;
