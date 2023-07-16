import React from "react";
import keys from "./Keys";
import Key from "./Key";
import Tile from "./Tile";
import ReactModal from "react-modal";
import { Helmet } from "react-helmet";
import SevenLetterDefinitions from "./7-letter-definitions";

class Hardle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameBoard: [
        [
          { letter: "", status: "white", key: 1 },
          { letter: "", status: "white", key: 2 },
          { letter: "", status: "white", key: 3 },
          { letter: "", status: "white", key: 4 },
          { letter: "", status: "white", key: 5 },
          { letter: "", status: "white", key: 6 },
          { letter: "", status: "white", key: 7 },
        ],
        [
          { letter: "", status: "white", key: 8 },
          { letter: "", status: "white", key: 9 },
          { letter: "", status: "white", key: 10 },
          { letter: "", status: "white", key: 11 },
          { letter: "", status: "white", key: 12 },
          { letter: "", status: "white", key: 13 },
          { letter: "", status: "white", key: 14 },
        ],
        [
          { letter: "", status: "white", key: 15 },
          { letter: "", status: "white", key: 16 },
          { letter: "", status: "white", key: 17 },
          { letter: "", status: "white", key: 18 },
          { letter: "", status: "white", key: 19 },
          { letter: "", status: "white", key: 20 },
          { letter: "", status: "white", key: 21 },
        ],
        [
          { letter: "", status: "white", key: 22 },
          { letter: "", status: "white", key: 23 },
          { letter: "", status: "white", key: 24 },
          { letter: "", status: "white", key: 25 },
          { letter: "", status: "white", key: 26 },
          { letter: "", status: "white", key: 27 },
          { letter: "", status: "white", key: 28 },
        ],
        [
          { letter: "", status: "white", key: 29 },
          { letter: "", status: "white", key: 30 },
          { letter: "", status: "white", key: 31 },
          { letter: "", status: "white", key: 32 },
          { letter: "", status: "white", key: 33 },
          { letter: "", status: "white", key: 34 },
          { letter: "", status: "white", key: 35 },
        ],
        [
          { letter: "", status: "white", key: 36 },
          { letter: "", status: "white", key: 37 },
          { letter: "", status: "white", key: 38 },
          { letter: "", status: "white", key: 39 },
          { letter: "", status: "white", key: 40 },
          { letter: "", status: "white", key: 41 },
          { letter: "", status: "white", key: 42 },
        ],
      ],
      curGuess: "",
      guessNum: 0,
      curWord: "",
      curRow: 0,
      greenList: "",
      goldList: "",
      greyList: "",
      showModal: false,
      showFailModal: false,
      dictionary: [],
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleOpenFailModal = this.handleOpenFailModal.bind(this);
    this.handleCloseFailModal = this.handleCloseFailModal.bind(this);
  }

  componentDidMount() {
    const start = Date.now();
    const gameSeed = 1653346801000;
    const day = 86400000;
    var dailyWord = Math.floor((start - gameSeed) / day);
    var words = [];
    for (let i = 0; i < SevenLetterDefinitions.length; i++) {
      words.push(SevenLetterDefinitions[i][0]);
    }
    this.setState({
      words: SevenLetterDefinitions,
      curWord: SevenLetterDefinitions[dailyWord][0].toLocaleUpperCase(),
      curDefinition: SevenLetterDefinitions[dailyWord][1],
      dictionary: words,
    });
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  handleOpenFailModal() {
    this.setState({ showFailModal: true });
  }

  handleCloseFailModal() {
    this.setState({ showFailModal: false });
  }

  submitGuess = () => {
    const answer = this.state.curWord;
    const guessWord = this.state.curGuess;
    const row = this.state.curRow;
    let curArr = this.state.gameBoard[row];
    let greenArr = [...this.state.greenList];
    let goldArr = [...this.state.goldList];
    let greyArr = [...this.state.greyList];

    if (guessWord.includes(answer)) {
      for (let i = 0; i < 7; i++) {
        curArr[i].status = "green";
        greenArr.push(curArr[i].letter);
      }
      this.setState({
        greenList: greenArr,
      });
      this.handleOpenModal();
    } else {
      for (let i = 0; i < 7; i++) {
        if (answer[i] === guessWord[i]) {
          curArr[i].status = "green";
          greenArr.push(curArr[i].letter);
        } else if (answer.includes(guessWord[i])) {
          curArr[i].status = "gold";
          goldArr.push(curArr[i].letter);
        } else {
          curArr[i].status = "grey";
          greyArr.push(curArr[i].letter);
        }
        this.setState({
          greenList: greenArr,
          goldList: goldArr,
          greyList: greyArr,
        });
      }
    }
    if (row < 5) {
      this.setState((prevState) => ({
        curGuess: "",
        guessNum: 0,
        curRow: (prevState.curRow += 1),
      }));
    } else {
      this.handleOpenFailModal();
    }
  };

  handleClick = (e) => {
    var wordList = require("word-list-json");

    const guessNum = this.state.guessNum;
    const row = this.state.curRow;
    let curArr = this.state.gameBoard[row];
    if (
      e.target.name === "Enter" &&
      this.state.guessNum === 7 &&
      wordList.includes(this.state.curGuess.toLowerCase())
    ) {
      this.submitGuess(this.state.curGuess);
    } else if (
      e.target.name === "Enter" &&
      this.state.guessNum === 7 &&
      !this.state.dictionary.includes(this.state.curGuess.toLowerCase())
    ) {
    } else if (e.target.name === "Delete" && this.state.guessNum > 0) {
      curArr[guessNum - 1].letter = "";
      this.setState((prevState) => ({
        guessNum: (prevState.guessNum -= 1),
        curGuess: prevState.curGuess.slice(0, -1),
      }));
    } else if (e.target.name !== "Delete" && this.state.guessNum < 7) {
      this.setState((prevState) => ({
        curGuess: (prevState.curGuess += e.target.name),
        guessNum: (prevState.guessNum += 1),
      }));
      curArr[guessNum].letter = e.target.name;
    }
  };

  beforeMidnight = () => {
    var mid = new Date(),
      ts = mid.getTime();
    mid.setHours(24, 0, 0, 0);
    var minToMid = Math.floor((mid - ts) / 60000) % 60;
    var hoursToMid = Math.floor((mid - ts) / 60000 / 60);
    if (hoursToMid === 1 && minToMid === 1) {
      return hoursToMid + " hour, " + minToMid + " minute";
    } else if (hoursToMid === 1) {
      return hoursToMid + " hour, " + minToMid + " minutes";
    } else if (minToMid === 1) {
      return hoursToMid + " hours, " + minToMid + " minute";
    } else {
      return hoursToMid + " hours, " + minToMid + " minutes";
    }
  };

  render() {
    return (
      <>
        <Helmet>
          <title>Hardle - Devilishly Difficult Puzzles</title>
          <link rel="canonical" href="/" />
          <meta
            name="Hardle 7-letter Word Puzzles"
            content="Hardle 7-letter Word Puzzles"
          />
        </Helmet>
        <div id="clonedle">
          <ReactModal
            isOpen={this.state.showModal}
            ariaHideApp={false}
            contentLabel="Congratulations, You Win"
            style={{
              overlay: {
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(255, 255, 255, 0.25)",
              },
              content: {
                position: "absolute",
                top: "15%",
                left: "15%",
                right: "15%",
                bottom: "15%",
                border: "1px solid #ccc",
                background: "rgba(255, 255, 255, 0.90)",
                overflow: "auto",
                WebkitOverflowScrolling: "touch",
                borderRadius: "4px",
                outline: "none",
                padding: "40px",
              },
            }}
          >
            <div id="clonedle-modal">
              <h2 className="center-text">
                Congratulations, you've solved today's Hardle in&nbsp;
                {this.state.curRow === 1 ? (
                  <span>1 guess!</span>
                ) : (
                  <span>{this.state.curRow} guesses!</span>
                )}
              </h2>
              <p>Today's word was {this.state.curWord}.</p>
              <p>
                <em>{this.state.curDefinition}</em>
              </p>
              <h2 className="center-text">
                Come back in&nbsp;
                {this.beforeMidnight()} for the next edition.
              </h2>
              <button id="close-modal" onClick={this.handleCloseModal}>
                CLOSE
              </button>
            </div>
          </ReactModal>
          <ReactModal
            isOpen={this.state.showFailModal}
            ariaHideApp={false}
            contentLabel="Sorry, you failed."
            style={{
              overlay: {
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(255, 255, 255, 0.25)",
              },
              content: {
                position: "absolute",
                top: "15%",
                left: "15%",
                right: "15%",
                bottom: "15%",
                border: "1px solid #ccc",
                background: "rgba(255, 255, 255, 0.90)",
                overflow: "auto",
                WebkitOverflowScrolling: "touch",
                borderRadius: "4px",
                outline: "none",
                padding: "40px",
              },
            }}
          >
            <div id="clonedle-modal">
              <h2 className="center-text">
                Sorry, you failed to solve today's Hardle.
              </h2>
              <p>Today's word was {this.state.curWord}.</p>
              <p>
                <em>{this.state.curDefinition}</em>
              </p>
              <h2 className="center-text">
                Come back in&nbsp;
                {this.beforeMidnight()} for the next edition.
              </h2>
              <button id="close-modal" onClick={this.handleCloseFailModal}>
                CLOSE
              </button>
            </div>
          </ReactModal>
          <h1 className="green-bg" style={{ padding: "2px" }}>
            HARDLE
          </h1>
          <div id="clonedle-grid">
            {this.state.gameBoard.map((row, id) => {
              return (
                <div id={"row" + id} key={id}>
                  {row.map((tile, id) => {
                    return (
                      <Tile
                        key={id}
                        color={tile.status}
                        letter={tile.letter}
                        unique={"column-" + id}
                      />
                    );
                  })}
                </div>
              );
            })}
          </div>
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
                      handleClick={this.handleClick}
                      goldcheck={this.state.goldList}
                      greencheck={this.state.greenList}
                      greycheck={this.state.greyList}
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
                      handleClick={this.handleClick}
                      goldcheck={this.state.goldList}
                      greencheck={this.state.greenList}
                      greycheck={this.state.greyList}
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
                      id={keys.name}
                      name={keys.name}
                      trigger={keys.trigger}
                      key={i}
                      code={keys.code}
                      handleClick={this.handleClick}
                      goldcheck={this.state.goldList}
                      greencheck={this.state.greenList}
                      greycheck={this.state.greyList}
                    />
                  );
                }
              })}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Hardle;
