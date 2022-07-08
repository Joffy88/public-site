import React from "react";

class ButtonReset extends React.Component {
  render() {
    return (
      <button className="reset" onClick={this.props.resetFields}>
        Reset to default
      </button>
    );
  }
}

export default ButtonReset;
