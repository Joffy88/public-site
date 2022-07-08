import React from "react";
import Navbar from "../key/Navbar";
import ContactLinks from "../key/ContactLinks";

class CaesarCipher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      answer: "",
    };
    this.rot13 = this.rot13.bind(this);
    this.resetFields = this.resetFields.bind(this);
  }

  handleChange(event) {
    this.setState({ input: event.target.value });
  }

  rot13(str) {
    str.preventDefault();
    const alphabet = " ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    let splitString = this.state.input.toUpperCase().split("");
    let caesarsString = [];
    let result = [];
    // obtains the matching index numbers of the string and the alphabet
    for (let i = 0; i < splitString.length; i++) {
      caesarsString.push(alphabet.indexOf(splitString[i]));

      // Subtracts or adds 13 to apply the rot13 code
      if (caesarsString[i] > 13 && caesarsString[i]) {
        caesarsString[i] -= 13;
      } else if (caesarsString[i] < 14 && caesarsString[i] >= 1) {
        caesarsString[i] += 13;
      }
    }
    // Runs through each computed rot13 element and realigns it with alphabet
    caesarsString.forEach(final);
    function final(item, ind) {
      result.push(alphabet[item]);
      if (!alphabet[item]) {
        result.push(splitString[ind]);
      }
    }
    this.setState({
      answer: result.join(""),
    });
  }

  resetFields(e) {
    e.preventDefault();
    this.setState({
      input: "",
      answer: "",
    });
    return (document.getElementById("answer").innerHTML = `<p></p>`);
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="page-body">
          <div className="project-body">
            <div id="caesaer-cipher">
              <div id="tool">
                <div id="definition">
                  <h1>Caesar Cipher</h1>
                  <p>
                    In cryptography, a Caesar cipher, also known as Caesar's
                    cipher, the shift cipher, Caesar's code or Caesar shift, is
                    one of the simplest and most widely known encryption
                    techniques. It is a type of substitution cipher in which
                    each letter in the plaintext is replaced by a letter some
                    fixed number of positions down the alphabet. For example,
                    with a left shift of 3, D would be replaced by A, E would
                    become B, and so on. The method is named after Julius
                    Caesar, who used it in his private correspondence.
                  </p>
                  <p>
                    This particular variant of the Caesar cipher is the ROT13
                    cipher, wherein the values of the letters are shifted 13
                    places. A becomes N, B becomes O, C becomes P, etc.
                  </p>
                </div>
                <form id="caesar-cypher">
                  <h2>
                    Type in a word or phrase to convert nto ROT13 code, or enter
                    ROT13 code to decode a message.
                  </h2>
                  <p>
                    For example, "GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT"
                    would become "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG"
                    and vice versa.
                  </p>
                  <input
                    type="test"
                    id="code-check"
                    name="code-check"
                    placeholder="Try writing something..."
                    required
                    onChange={this.handleChange.bind(this)}
                    value={this.state.input}
                  />
                  <div id="caesar-buttons">
                    <button
                      type="submit"
                      id="code-convert"
                      onClick={this.rot13}
                    >
                      Convert
                    </button>
                    <button
                      type="reset"
                      id="code-reset"
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
              <footer>
                <p>
                  The{" "}
                  <a
                    href="https://en.wikipedia.org/wiki/Caesar_cipher"
                    target="_blank"
                    rel=" noopener noreferrer"
                  >
                    info
                  </a>{" "}
                  used on this page is licensed under the Creative Commons
                  Attribution 4.0 License.
                </p>
              </footer>
            </div>
          </div>
        </div>

        <ContactLinks />
      </div>
    );
  }
}

export default CaesarCipher;
