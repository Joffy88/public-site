import React, { useState } from "react";
import Navbar from "../key/Navbar";
import ContactLinks from "../key/ContactLinks";
import productDetails from "./store-page/productsDetails";
import awardsInfo from "./store-page/awardsDetails";

function StorePage() {
  const ffUrl = "https://images-cdn.fantasyflightgames.com/filer_public/";
  const stockDetails = useState(productDetails);
  const awardsDetails = useState(awardsInfo);

  return (
    <>
      <Navbar />
      <div className="page-body">
        <div className="project-body">
          <div id="store-page">
            <header id="header">
              <nav id="nav-bar">
                <img
                  src="https://i.imgur.com/lRithLw.png"
                  title="elder sign"
                  id="store-logo"
                  alt="elder sign logo"
                />
                <div className="store-navlinks">
                  <ul>
                    <li>
                      <a href="#products" className="nav-link">
                        Products
                      </a>
                    </li>
                    <li>
                      <a href="#faq" className="nav-link">
                        FAQ
                      </a>
                    </li>
                    <li>
                      <a href="#awards" className="nav-link">
                        Awards
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </header>
            <img
              id="header-img"
              src="http://assets.asmodee.ca/fichiers/Fantasy%20Flight%20Games/Arkham%20Horror/Arkham%20Horror%20-%20LCG/Arkham%20Horror%20LCG%20-%20Return%20to%20the%20Dunwich%20Legacy/Arkham-Horror-LCG-title.png"
              alt="Arkham Horror the card game logo"
            />
            <div id="store-wrap">
              <h1 id="title">
                Arkham Horror: The Card Game - A living card game from Fantasy
                Flight Games
              </h1>
              <div id="blurb">
                <p>The boundaries between worlds have drawn perilously thin…</p>
                <p>
                  Arkham Horror: The Card Game is a cooperative Living Card Game
                  set amid a backdrop of Lovecraftian horror. As the Ancient
                  Ones seek entry to our world, one to two investigators (or up
                  to four with two Core Sets) work to unravel arcane mysteries
                  and conspiracies.
                </p>
                <p>
                  Their efforts determine not only the course of your game, but
                  carry forward throughout whole campaigns, challenging them to
                  overcome their personal demons even as Arkham Horror: The Card
                  Game blurs the distinction between the card game and
                  roleplaying experiences.
                </p>
              </div>
              <div id="videocontainer">
                <iframe
                  title="Introduction to playing the Arkham Horror card game"
                  id="video"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/zzliu_-xNNQ?controls=0"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div id="stock-alerts">
                <form
                  id="form"
                  action="https://www.freecodecamp.com/email-submit"
                >
                  <div className="form-child">
                    <label>
                      <strong>Sign up for stock alerts:</strong>
                    </label>
                  </div>
                  <div className="form-child">
                    <input
                      name="email"
                      type="email"
                      placeholder="Enter email"
                      className="form-input form-child"
                      id="email"
                    />
                  </div>
                  <div className="form-child">
                    <button
                      id="store-submit-button"
                      type="submit"
                      value="Submit Details"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
              <div id="products">
                <h2>
                  <u>Cycle 1: The Dunwich Legacy</u>
                </h2>
                <div className="container">
                  {stockDetails[0].map((keys, i) => {
                    return (
                      <div className="p1" key={i}>
                        <a href={keys.url}>
                          <img
                            className="pack"
                            src={`${ffUrl}${keys.imgUrl}.png`}
                            alt={keys.alt}
                          />
                          <p className="packname">{keys.name}</p>
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div id="faq">
                <p style={{ fontSize: "2em" }}>
                  <strong>Frequently asked questions:</strong>
                </p>
                <p>
                  <em> Why are there so many different card packs?</em>
                  <br />
                  <br />
                  Campaign play is the default mode of the game, allowing a
                  player to progress through a series of scenarios. In campaign
                  play, choices made in scenarios have lasting effects, altering
                  the story and how later scenarios play out. Each scenario has
                  multiple paths of divergence offering multiple playthroughs
                  with differing experiences each time.
                </p>
                <p>
                  <em> Do I need to buy the campaign expansions in order?</em>
                  <br />
                  <br />
                  Expansions are grouped into cycles that contain a complete
                  campaign for players to go through. Each cycle is divided up
                  into one deluxe expansion followed by six mythos packs. Deluxe
                  expansions contain new investigators, about 60 new player
                  cards, and the first two scenarios of a campaign. Mythos packs
                  contain about 24 new player cards and a single scenario of a
                  campaign. The cycles can be played in any order but the
                  expansions within must be played sequentially.
                </p>
                <p>
                  <em> Can I play the scenarios standalone?</em>
                  <br />
                  <br />
                  The scenarios are designed to be played in a campaign format
                  but can be played individually according to customised rules
                  found in the Arkham Horror LCG instruction manual. Fantasy
                  Flight also produce special edition standalone scenarious
                  which exist outside of the campaign cycle.
                </p>
              </div>
            </div>
            <div id="awards">
              <h3 style={{ fontSize: "1.5em" }}>
                <strong>
                  Tabletop gaming awards won by Arkham Horror: The Card Game:
                </strong>
              </h3>

              <div id="awardscontainer">
                {awardsDetails[0].map((keys, i) => {
                  return (
                    <img
                      src={`${ffUrl}${keys.url}.png`}
                      className="award"
                      alt={keys.alt}
                    />
                  );
                })}
              </div>
            </div>
            <br />
          </div>
        </div>

        <ContactLinks />
      </div>
    </>
  );
}

export default StorePage;
