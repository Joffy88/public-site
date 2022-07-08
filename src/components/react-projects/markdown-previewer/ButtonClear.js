import React from "react";

class ButtonClear extends React.Component {
  render() {
    return (
      <button className="reset" onClick={this.props.clearInput}>
        Clear Code
      </button>
    );
  }
}

export default ButtonClear;
