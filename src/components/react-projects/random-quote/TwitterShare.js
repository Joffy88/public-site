import React from "react";

function TwitterShare(props) {
  let message = `"${props.quote}" - ${props.author}`;
  return (
    <a
      id="tweet-quote"
      className="tweetbutton"
      href={`https://twitter.com/intent/tweet?text=${message}&via=JonathanSutto10 `}
      target="_blank"
      rel=" noopener noreferrer"
      key={message}
    >
      Tweet
    </a>
  );
}

export default TwitterShare;
