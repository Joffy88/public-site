import React from "react";

class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) => {
    this.setState({
      guess: e.target.name,
    });
  };

  render() {
    return (
      <div
        className={
          "clonedle-tile " + this.props.color + " " + this.props.unique
        }
      >
        <span className="hardle-letter">{this.props.letter}</span>
      </div>
    );
  }
}

export default Tile;
