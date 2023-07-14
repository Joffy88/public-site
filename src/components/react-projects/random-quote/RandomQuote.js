import React, { useEffect, useState } from "react";
import { quotes } from "./quoteData";
import TwitterShare from "./TwitterShare";
import NewQuote from "./NewQuote";
import Navbar from "../../key/Navbar";
import ContactLinks from "../../key/ContactLinks";

function RandomQuote(props) {
  // let randomQuote = quotes[Math.trunc(Math.random() * quotes.length)];
  // const [state, setState] = useState({
  //   quote: "",
  //   author: "",
  //   pic: "",
  // });

  // useEffect(() => {
  //   setState({
  //     quote: randomQuote.quote,
  //     author: randomQuote.author,
  //     pic: randomQuote.pic,
  //   });
  // }, []);

  // const getNewQuote = () => {
  //   setState({
  //     quote: randomQuote.quote,
  //     author: randomQuote.author,
  //     pic: randomQuote.pic,
  //   });
  // };

  // return (
  //   <>
  //     <Navbar />
  //     <div className="page-body">
  //       <div className="project-body">
  //         <div className="container">
  //           <div className="col-md-12 mx-auto">
  //             <div id="quote-box">
  //               <img id="pic" src={state.pic} alt={state.author}></img>
  //               <div id="text">
  //                 <p className="quote">{state.quote}</p>
  //                 <p id="author">{state.author}</p>
  //               </div>
  //             </div>
  //             <div className="buttons">
  //               <NewQuote refresh={getNewQuote} />
  //               <TwitterShare
  //                 quote={state.quote}
  //                 author={state.author}
  //                 key={state.key}
  //               />
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //       <ContactLinks />
  //     </div>
  //   </>
  // );
}

export default RandomQuote;
