import React from "react";

function LandingScreen() {
  return (
    <>
      <div className="page-body">
        <section id="welcome-section">
          <div id="intro">
            <h1 id="about">JONATHAN SUTTON </h1>
            <h2>Front-End Web Developer</h2>
          </div>
          <div id="about-me">
            <h2>ABOUT ME</h2>
            <div className="two-col">
              <p>
                Until recently I was the Editor of a dedicated PC gaming and
                hardware website. Over the years I’d worked closely with our
                development team and gained a broad perspective of the workings
                of the site, and trying it for myself confirmed this was the
                move for me.
              </p>
              <p>
                I began learning a bit more about HTML, CSS, and JavaScript,
                before deciding to dive in head-first and teaching myself the
                ins and outs of web development. I am a highly motivated,
                self-starting developer who is adaptable and able to learn new
                things quickly, together with a strong eye for detail.
              </p>
            </div>
          </div>
        </section>
        <h2>PORTFOLIO</h2>
      </div>
    </>
  );
}

export default LandingScreen;
