import React from "react";
import Navbar from "../key/Navbar";
import ContactLinks from "../key/ContactLinks";

function Survey() {
  return (
    <div>
      <Navbar />
      <div className="page-body">
        <div className="project-body">
          <main id="survey">
            <header class="header">
              <h1 id="title">JOFF'S SURVEY FORM</h1>
              <p id="survey-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum metus augue, sodales ac condimentum quis, accumsan
                vitae arcu. Fusce id urna ultricies odio tempor ultricies.
                Praesent ut sem leo. Suspendisse pharetra elit id massa lobortis
                vestibulum. Suspendisse pulvinar ultricies iaculis. Nam gravida
                sagittis nibh, nec egestas enim mollis nec. In pellentesque orci
                nisi, eget ultrices ipsum euismod vitae. Mauris dictum fermentum
                est eu accumsan. Morbi pretium sapien eu tincidunt rutrum.
              </p>
            </header>
            <div id="form-background">
              <form id="survey-form">
                <label id="name-label" for="name-label" class="form-group">
                  <p class="form-text">Name:</p>
                </label>
                <div class="form-group">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter name here"
                    required
                    class="form-placement"
                  />
                </div>
                <br />
                <label id="email-label" for="email-label" class="form-group">
                  <p class="form-text">Email:</p>
                </label>
                <div class="form-group">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    placeholder="Enter email here"
                    class="form-placement"
                  />
                </div>
                <br />

                <label for="number-label" id="number-label" class="form-group">
                  <p class="form-text">How old are you?</p>
                </label>
                <div class="form-group">
                  <input
                    id="number"
                    type="number"
                    name="age"
                    min="0"
                    max="125"
                    required
                    placeholder="Age"
                    class="form-placement"
                  />
                </div>
                <br />
                <label for="party-vote" class="form-group">
                  <p class="form-text">
                    Which party did you vote for in the last election?
                  </p>
                </label>
                <div class="form-group">
                  <select
                    id="dropdown"
                    name="party"
                    class="form-placement"
                    required
                  >
                    <option disabled value selected>
                      Select an option
                    </option>
                    <option value="brexit">Brexit Party</option>
                    <option value="tory">Conservative</option>
                    <option value="greenParty">Green Party</option>
                    <option value="labour">Labour</option>
                    <option value="libDems">Liberal Democrates</option>
                    <option value="snp">Scottish National Party</option>
                    <option value="plaidCymru">Plaid Cymru</option>
                    <option value="ukip">UKIP</option>
                  </select>
                </div>
                <br />
                <label for="satisfaction" class="form-group">
                  <p id="form-text">
                    Are you satisfied with the current government?
                  </p>
                </label>
                <div class="form-group">
                  <ul style={{ listStyle: "none" }}>
                    <li>
                      <input
                        type="radio"
                        id="yes"
                        name="satisfaction"
                        value="yes"
                        checked="checked"
                      />
                      <label for="yes">Yes</label>
                    </li>
                    <li>
                      <input
                        type="radio"
                        id="no"
                        name="satisfaction"
                        value="no"
                      />
                      <label for="no">No</label>
                    </li>
                    <li>
                      <input
                        type="radio"
                        id="unsure"
                        name="satisfaction"
                        value="unsure"
                      />
                      <label for="unsure">Don't know</label>
                    </li>
                  </ul>
                </div>
                <div class="form-group">
                  <label for="policies">
                    <p class="form-text">
                      Which policy areas are the most important to you? (Check
                      all that apply):
                    </p>
                  </label>
                  <ul style={{ listStyle: "none" }}>
                    <li>
                      <input
                        id="covid"
                        type="checkbox"
                        value="covid"
                        name="policies"
                      />
                      <label for="covid"> Covid</label>
                    </li>
                    <li>
                      <input
                        id="brexit"
                        type="checkbox"
                        value="brexit"
                        name="policies"
                      />
                      <label for="brexit"> Brexit</label>
                    </li>
                    <li>
                      <input
                        id="health"
                        type="checkbox"
                        value="health"
                        name="policies"
                      />
                      <label for="health"> NHS</label>
                    </li>
                    <li>
                      <input
                        id="education"
                        type="checkbox"
                        value="education"
                        name="policies"
                      />
                      <label for="education"> Education</label>
                    </li>
                    <li>
                      <input
                        id="economy"
                        type="checkbox"
                        value="economy"
                        name="policies"
                      />
                      <label for="economy"> Economy</label>
                    </li>
                    <li>
                      <input
                        id="climateChange"
                        type="checkbox"
                        value="climateChange"
                        name="policies"
                      />
                      <label for="climateChange"> Climate Change</label>
                    </li>
                    <li>
                      <input
                        id="police"
                        type="checkbox"
                        value="police"
                        name="polices"
                      />
                      <label for="police"> Police </label>
                    </li>
                    <li>
                      <input
                        id="foreignAffairs"
                        type="checkbox"
                        value="foreignAffairs"
                        name="policies"
                      />
                      <label for="foreignAffairs"> Foreign Affairs</label>
                    </li>
                  </ul>
                </div>

                <label for="comments" class="form-group">
                  <p class="form-text">
                    What are your future voting plans/intentions?
                  </p>
                </label>
                <div id="text-box">
                  <textarea
                    id="future-plans"
                    name="text-input"
                    rows="8"
                    cols="153"
                    class="text-form-placement"
                    placeholder="Enter your comments here..."
                  ></textarea>
                </div>
                <div id="submit-button">
                  <button type="submit" id="submit" class="button">
                    SUBMIT DETAILS
                  </button>
                </div>
              </form>
            </div>
          </main>
        </div>
        <ContactLinks />
      </div>
    </div>
  );
}

export default Survey;
