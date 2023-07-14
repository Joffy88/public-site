import React, { useState, useEffect } from "react";
import keys from "./Keys";
import Key from "./Key";
import Tile from "./Tile";
import ReactModal from "react-modal";
import { Helmet } from "react-helmet";
import SevenLetterDefinitions from "./7-letter-definitions";
import SevenLetterWords from "./7-letter-words";

function Hardle() {
  const [hardle, setHardle] = useState({
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
    greenList: [],
    goldList: [],
    greyList: [],
    showModal: false,
    showFailModal: false,
    dictionary: [],
  });

  useEffect(() => {
    const start = Date.now();
    const gameSeed = 1653346801000;
    const day = 86400000;
    var dailyWord = Math.floor((start - gameSeed) / day);
    var words = [];
    for (let i = 0; i < SevenLetterDefinitions.length; i++) {
      words.push(SevenLetterDefinitions[i][0]);
    }

    console.log(SevenLetterDefinitions[dailyWord][0]);
    setHardle({
      ...hardle,
      words: SevenLetterDefinitions,
      curWord: SevenLetterDefinitions[dailyWord][0].toLocaleUpperCase(),
      curDefinition: SevenLetterDefinitions[dailyWord][1],
      dictionary: words,
    });
  }, []);

  const handleOpenModal = () => {
    console.log("test modal");
    setHardle({ ...hardle, showModal: true });
  };

  const handleCloseModal = () => {
    setHardle({ ...hardle, showModal: false });
  };

  const handleOpenFailModal = () => {
    setHardle({ ...hardle, showFailModal: true });
  };

  const handleCloseFailModal = () => {
    setHardle({ ...hardle, showFailModal: false });
  };

  const submitGuess = () => {
    const answer = hardle.curWord;
    const guessWord = hardle.curGuess;
    const row = hardle.curRow;
    let curArr = hardle.gameBoard[row];
    let greenArr = [...hardle.greenList];
    let goldArr = [...hardle.goldList];
    let greyArr = [...hardle.greyList];
    if (guessWord.includes(answer)) {
      for (let i = 0; i < 7; i++) {
        curArr[i].status = "green";
        greenArr.push(curArr[i].letter);
      }
      setHardle({ ...hardle, greenList: greenArr });
      handleOpenModal();
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

        setHardle({
          ...hardle,
          greenList: greenArr,
          goldList: goldArr,
          greyList: greyArr,
        });
      }
    }
    if (row < 5) {
      setHardle((prevState) => {
        return {
          ...hardle,
          curGuess: "",
          guessNum: 0,
          curRow: (prevState.curRow += 1),
        };
      });
    } else {
      handleOpenFailModal();
    }
  };

  const handleClick = (e) => {
    var wordList = SevenLetterWords;
    const guessNum = hardle.guessNum;
    const row = hardle.curRow;
    let curArr = hardle.gameBoard[row];
    if (
      e.target.name === "Enter" &&
      guessNum === 7 &&
      wordList.includes(hardle.curGuess.toLowerCase())
    ) {
      submitGuess(hardle.curGuess);
    } else if (
      e.target.name === "Enter" &&
      guessNum === 7 &&
      !hardle.dictionary.includes(hardle.curGuess.toLowerCase())
    ) {
      alert("Not a valid word!");
    } else if (e.target.name === "Enter" && guessNum != 7) {
      alert("Must be a 7 letter word!");
    } else if (e.target.name === "Delete" && guessNum > 0) {
      curArr[guessNum - 1].letter = "";

      setHardle((prevState) => {
        return {
          ...hardle,
          guessNum: (prevState.guessNum -= 1),
          curGuess: prevState.curGuess.slice(0, -1),
        };
      });
    } else if (e.target.name !== "Delete" && hardle.guessNum < 7) {
      setHardle((prevState) => {
        return {
          ...hardle,
          curGuess: (prevState.curGuess += e.target.name),
          guessNum: (prevState.guessNum += 1),
        };
      });

      curArr[guessNum].letter = e.target.name;
    }
  };

  const beforeMidnight = () => {
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
      <div className="page-body">
        <div className="project-body">
          <div id="clonedle">
            <ReactModal
              isOpen={hardle.showModal}
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
                  {hardle.curRow === 1 ? (
                    <span>1 guess!</span>
                  ) : (
                    <span>{hardle.curRow} guesses!</span>
                  )}
                </h2>
                <p>Today's word was {hardle.curWord}.</p>
                <p>
                  <em>{hardle.curDefinition}</em>
                </p>
                <h2 className="center-text">
                  Come back in&nbsp;
                  {beforeMidnight()} for the next edition.
                </h2>
                <button id="close-modal" onClick={handleCloseModal}>
                  CLOSE
                </button>
              </div>
            </ReactModal>
            <ReactModal
              isOpen={hardle.showFailModal}
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
                <p>Today's word was {hardle.curWord}.</p>
                <p>
                  <em>{hardle.curDefinition}</em>
                </p>
                <h2 className="center-text">
                  Come back in&nbsp;
                  {beforeMidnight()} for the next edition.
                </h2>
                <button id="close-modal" onClick={handleCloseFailModal}>
                  CLOSE
                </button>
              </div>
            </ReactModal>
            <h1 className="green-bg" style={{ padding: "2px" }}>
              HARDLE
            </h1>
            <div id="clonedle-grid">
              {hardle.gameBoard.map((row, id) => {
                return (
                  <div id={"row" + id} className="hardle-row" key={id}>
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
                        handleClick={handleClick}
                        goldcheck={hardle.goldList}
                        greencheck={hardle.greenList}
                        greycheck={hardle.greyList}
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
                        handleClick={handleClick}
                        goldcheck={hardle.goldList}
                        greencheck={hardle.greenList}
                        greycheck={hardle.greyList}
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
                        handleClick={handleClick}
                        goldcheck={hardle.goldList}
                        greencheck={hardle.greenList}
                        greycheck={hardle.greyList}
                      />
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hardle;
