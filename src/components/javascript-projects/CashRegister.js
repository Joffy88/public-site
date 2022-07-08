import React from "react";
import Navbar from "../key/Navbar";
import ContactLinks from "../key/ContactLinks";

class CashRegister extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cash: 0,
      price: 0,
      cid: [],
      result: "",
    };
    this.checkCashRegister = this.checkCashRegister.bind(this);
    this.resetFields = this.resetFields.bind(this);
  }

  handleChangeCash(event) {
    this.setState({
      cash: event.target.value,
    });
  }

  handleChangePrice(event) {
    this.setState({
      price: event.target.value,
    });
  }

  handleChangeCid(event) {
    this.setState({
      cid: event.target.value,
    });
  }

  checkCashRegister(e) {
    e.preventDefault();
    const self = this;
    let cash = this.state.cash;
    let price = this.state.price;
    let cid = this.state.cid;

    let value = [
      { name: "ONE HUNDRED", amount: 100 },
      { name: "TWENTY", amount: 20 },
      { name: "TEN", amount: 10 },
      { name: "FIVE", amount: 5 },
      { name: "ONE", amount: 1 },
      { name: "QUARTER", amount: 0.25 },
      { name: "DIME", amount: 0.1 },
      { name: "NICKEL", amount: 0.05 },
      { name: "PENNY", amount: 0.01 },
    ];
    let output = {
      status: "INSUFFICIENT_FUNDS",
      change: [],
    };
    let cashback = cash - price;
    let cidArray = JSON.parse(cid);

    let register = cidArray.reduce(
      (acc, cur) => {
        acc.total += cur[1];
        acc[cur[0]] = cur[1];
        return acc;
      },
      { total: 0 }
    );

    // console.log(`cashback ${cashback}`);
    // console.log(`register total ${register.total}`);

    const fullChange = function () {
      const sums = Object.entries(register);
      for (const amount of sums) {
        output.change.push(amount);
      }
      output.change.shift();
      let answer = JSON.stringify(output);
      this.setState({
        result: answer,
      });
    };
    const calcChange = function (cashback) {
      let test = value.reduce(function (acc, cur) {
        let sum = 0;
        while (register[cur.name] > 0 && cashback >= cur.amount) {
          cashback -= cur.amount;
          register[cur.name] -= cur.amount;
          sum += cur.amount;
          cashback = Math.round(cashback * 100) / 100;
        }
        if (sum > 0) {
          output.change.push([cur.name, sum]);
        }
      }, []);
      console.log(test);
      if (cashback !== 0) {
        output.status = "INSUFFICIENT_FUNDS";
        output.change = [""];
        let answer = JSON.stringify(output);

        self.setState({
          result: answer,
        });
      }
    };

    if (cashback > register.total) {
      let answer = JSON.stringify(output);
      console.log(answer);
      this.setState({
        result: answer,
      });
    } else if (cashback === register.total) {
      output.status = "CLOSED";
      fullChange(cashback);
      let answer = JSON.stringify(output);
      this.setState({
        result: answer,
      });
    } else {
      output.status = "OPEN";
      calcChange(cashback);
      let answer = JSON.stringify(output);
      this.setState({
        result: answer,
      });
    }
  }
  //   checkCashRegister(19.5, 20, [
  //     ["PENNY", 1.01],
  //     ["NICKEL", 2.05],
  //     ["DIME", 3.1],
  //     ["QUARTER", 4.25],
  //     ["ONE", 90],
  //     ["FIVE", 55],
  //     ["TEN", 20],
  //     ["TWENTY", 60],
  //     ["ONE HUNDRED", 100],
  //   ]);

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
      <div>
        <Navbar />
        <div className="project-body">
          <div id="cash-register">
            <div id="tool">
              <div id="definition">
                <h1>Cash Register</h1>
                <p>
                  This was a task designed to replicate a cash register drawer
                  function.
                </p>
                <p>
                  The cash register accepts a purchase price as the first
                  argument, payment as the second argument, and the available
                  cash (and its denominations) in the till as its third
                  argument.
                </p>
                <p>
                  For example,
                  <br />
                  <br />
                  <em>
                    (19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME",
                    3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN",
                    20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
                  </em>
                  <br />
                  <br />
                  should return:
                  <em>
                    {"{"}status: "OPEN", change: [["QUARTER", 0.5]]{"}"}.
                  </em>
                </p>
              </div>
              <form id="cash-register">
                <h3>Here are some example function calls:</h3>
                <ol>
                  <li>
                    <ul>
                      <li>Price: 19.5</li>
                      <li>Cash paid: 20</li>
                      <li>
                        Cash in drawer: [["PENNY", 1.01], ["NICKEL", 2.05],
                        ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE",
                        55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul>
                      <li>Price: 3.26</li>
                      <li>Cash paid: 100</li>
                      <li>
                        Cash in drawer: [["PENNY", 0.01], ["NICKEL", 0],
                        ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0],
                        ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul>
                      <li>Price: 19.5</li>
                      <li>Cash paid: 20</li>
                      <li>
                        Cash in drawer: [["PENNY", 0.01], ["NICKEL", 0],
                        ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0],
                        ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul>
                      <li>Price: 19.5</li>
                      <li>Cash paid: 20</li>
                      <li>
                        Cash in drawer: [["PENNY", 0.01], ["NICKEL", 0],
                        ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0],
                        ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul>
                      <li>Price: 19.5</li>
                      <li>Cash paid: 20</li>
                      <li>
                        Cash in drawer: [["PENNY", 0.5], ["NICKEL", 0], ["DIME",
                        0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0],
                        ["TWENTY", 0], ["ONE HUNDRED", 0]]
                      </li>
                    </ul>
                  </li>
                  <input
                    id="cash"
                    name="priced"
                    placeholder="Price..."
                    required
                    value={this.state.price}
                    onChange={this.handleChangePrice.bind(this)}
                  />
                  <input
                    id="cash"
                    name="cash"
                    placeholder="Cash paid..."
                    required
                    value={this.state.cash}
                    onChange={this.handleChangeCash.bind(this)}
                  />
                  <input
                    id="cid"
                    name="code-check"
                    placeholder="Cash in drawer..."
                    required
                    value={[this.state.cid]}
                    onChange={this.handleChangeCid.bind(this)}
                  />
                  <div id="buttons">
                    <button
                      type="submit"
                      id="code-convert"
                      onClick={this.checkCashRegister}
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
                    <h1 id="answer">{this.state.result}</h1>
                  </div>
                  <div>
                    <h3>
                      You should expect the follow results for the example calls
                      above:
                    </h3>
                    <ol>
                      <li>
                        {"{"}status: "OPEN", change: [["QUARTER", 0.5]]{"}"}.
                      </li>
                      <li>
                        {" "}
                        {"{"}status: "OPEN", change: [["TWENTY", 60], ["TEN",
                        20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5],
                        ["DIME", 0.2], ["PENNY", 0.04]]{"}"}.
                      </li>
                      <li>
                        {"{"}status: "INSUFFICIENT_FUNDS", change: []{"}"}.
                      </li>
                      <li>
                        {"{"}status: "INSUFFICIENT_FUNDS", change: []{"}"}.
                      </li>
                      <li>
                        {"{"}status: "CLOSED", change: [["PENNY", 0.5],
                        ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0],
                        ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED",
                        0]]{"}"}.
                      </li>
                    </ol>
                  </div>
                </ol>
              </form>
            </div>
            <footer />
          </div>
        </div>
        <ContactLinks />
      </div>
    );
  }
}

export default CashRegister;
