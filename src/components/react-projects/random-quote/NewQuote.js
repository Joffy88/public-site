import React from "react";

function NewQuote(props) {
  return (
    <button id="new-quote" type="submit" onClick={props.refresh}>
      GET NEW QUOTE
    </button>
  );
}

export default NewQuote;
