import React from "react";
import Navbar from "../key/Navbar";
import ContactLinks from "../key/ContactLinks";

function Tribute() {
  return (
    <>
      <Navbar />
      <div className="page-body">
        <div className="project-body">
          <div id="tribute">
            <div className="head">
              <h1>Alabama 3's Jake Black</h1>
              <h2>a.k.a. The Very Reverend D. Wayne Love</h2>
            </div>
            <div id="img-div">
              <img
                id="image"
                src="https://i.dailymail.co.uk/1s/2019/05/21/22/13783516-0-image-m-21_1558473715552.jpg"
                alt="The Reverend D. Wayne Love performing live with Alabama 3"
                className="center img-div"
              ></img>
              <p className="center-text">
                The Reverend D. Wayne Love performing live with Alabama 3
              </p>
            </div>
            <section id="tribute-info">
              <h3 id="timeline-title">
                Timeline of Jake Black's musical achievements
              </h3>
              <div id="list">
                <ul>
                  <li>
                    <strong className="year">1960</strong> - Born on 27 April,
                    1960, in Basildon. His family moved to Possil, in Glasgow,
                    where he grew.
                  </li>
                  <li>
                    <strong className="year">Mid-90s</strong> - Co-founded
                    Alabama 3 with Rob Spragg (a.k.a. Larry Love). The pair met
                    a rave in Peckham and dreamt up the idea of fusing country
                    music with acid house.
                  </li>
                  <li>
                    None of A3 were actually from Alabama, although they were
                    heavily inspired by US music. A3 were originally called the
                    The Free Presleyterian Church of Elvis the Divine (UK).
                  </li>
                  <li>
                    <strong className="year">1997</strong> - Released their
                    debut album, Exile on Coldharbour Lane.
                  </li>
                  <li>
                    <strong className="year">1999</strong> - Alabama 3 shot to
                    international fame with their track{" "}
                    <a
                      href="https://youtu.be/NUT07eZoXPw"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Woke Up This Morning
                    </a>
                    , used during the opening credits of the hit HBO TV-show The
                    Sopranos.
                  </li>
                  <li>
                    Alabama 3 went on to release twelve studio albums and
                    fourteen songs, including covers of Bruce Springstemm, The
                    Eagles and John Prine.
                  </li>
                  <li>
                    Celebrity fans include Leonard Cohen, Irvine Welsh, Stephen
                    King, and Trainspotting author Will Self.
                  </li>
                  <li>
                    <strong class="year">2019</strong> - Jake Black died on 21
                    May, 2019, aged 59.
                  </li>
                </ul>
              </div>
            </section>
            <div class="container">
              <iframe
                title="Alabama 3 and Reverend D Wayne playing live"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/gpGgLyfDERI"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                className="center"
              ></iframe>
            </div>
            <a
              href="https://en.wikipedia.org/wiki/Alabama_3"
              target="_blank"
              rel="noopener noreferrer"
              className="read-more-link"
            >
              For more information on the Reverend, be sure to check out{" "}
              <strong>Alabama 3's Wikipedia entry.</strong>
            </a>
          </div>
        </div>
        <ContactLinks />
      </div>
    </>
  );
}

export default Tribute;
