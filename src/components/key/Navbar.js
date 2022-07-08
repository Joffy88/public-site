import React from "react";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownList: [
        "React",
        "WordPress",
        "APIs",
        "D3",
        "JavaScript",
        "HTML",
        "Commercial",
      ],
      siteSections: ["Home", "About", "Contact"],
    };
  }

  closeNav = () => {
    document.getElementById("sidenav").style.width = "0";
    document.getElementById("bar4").style.backgroundColor =
      "rgb(118, 248, 223)";
    document.getElementById("bar5").style.backgroundColor =
      "rgb(118, 248, 223)";
    document.getElementById("bar6").style.backgroundColor =
      "rgb(118, 248, 223)";
    var sidebar = document.querySelectorAll(".sidebar-item");
    sidebar.forEach((x) => x.classList.remove("sidebar-active"));
  };

  openNav = () => {
    document.getElementById("sidenav").style.width = "240px";
    document.getElementById("bar4").style.backgroundColor =
      "rgb(118, 248, 223)";
    document.getElementById("bar5").style.backgroundColor =
      "rgb(118, 248, 223)";
    document.getElementById("bar6").style.backgroundColor =
      "rgb(118, 248, 223)";
    var sidebar = document.querySelectorAll(".sidebar-item");
    sidebar.forEach((x) => x.classList.add("sidebar-active"));
  };

  burgerToggle = () => {
    let navContainer = document.getElementById("navcontainer");
    navContainer.classList.toggle("change");
    let navbar = document.getElementById("sidenav");
    navbar.classList.toggle("hidden2");
    if (navbar.classList.contains("hidden2")) {
      this.closeNav();
    } else {
      this.openNav();
    }
  };

  render() {
    return (
      <>
        <div id="navbar">
          <a href="/">
            <h1 className="header-head">Jonathan Sutton</h1>
          </a>
          <ul>
            <li>
              <a href="/" className="navlink">
                <p className="navtext" id="nav1">
                  <span className="navNum">1. </span>Home
                </p>
              </a>
            </li>
            <li>
              <a href="/#about" className="navlink">
                <p className="navtext" id="nav2">
                  <span className="navNum">2. </span>
                  About
                </p>
              </a>
            </li>
            <li className="dropdown navlink">
              <a className="dropbtn navlink" id="nav3" href="/#my-projects">
                <span className="navNum">3. </span>
                Projects
              </a>
              <ul className="dropdown-content">
                {this.state.dropdownList.map((e, index) => {
                  return (
                    <li key={index}>
                      <a href={`/#${e.toLowerCase()}`} className="droplink">
                        {e}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </li>
            <li>
              <a href="/#contact" className="navlink">
                <p className="navtext" id="nav4">
                  <span className="navNum" id="nav4">
                    4.&nbsp;
                  </span>
                  Contact
                </p>
              </a>
            </li>
            <li>
              <a
                href="../images/Jonathan Sutton CV Web Developer.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="navlink"
              >
                <p className="navtext" id="nav5">
                  <span className="navNum" id="nav5">
                    5.{" "}
                  </span>
                  CV
                </p>
              </a>
            </li>
          </ul>
        </div>

        {/* Burger Menu */}
        <div id="navcontainer" className="navcontain">
          <a href="/">
            <h1 className="header-head">Jonathan Sutton</h1>
          </a>
          <div id="burger" onClick={this.burgerToggle}>
            <div id="bar4"></div>
            <div id="bar5"></div>
            <div id="bar6"></div>
          </div>
          <div id="sidenav" className="sidenav hidden2">
            <ul className="navList">
              {this.state.siteSections.map((e, index) => {
                return (
                  <li className="sidebar-item" key={index}>
                    <a href={`/#${e.toLowerCase()}`} className="burger-link">
                      <p className="burger-text">{e.toUpperCase()}</p>
                    </a>
                  </li>
                );
              })}
              <li className="sidebar-item">
                <a href="/#all" className="burger-link">
                  <p className="burger-text">PROJECTS</p>
                </a>
              </li>

              {this.state.dropdownList.map((e, index) => {
                return (
                  <li className="sidebar-item" key={index}>
                    <a href={`/#${e.toLowerCase()}`} className="burger-link">
                      <p className="burger-text">{e.toUpperCase()}</p>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default Navbar;
