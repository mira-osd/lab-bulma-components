import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <nav className="navbar is-transparent">
        <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
        </a>
         </div>

  <div id="navbarExampleTransparentExample" className="navbar-menu">
    <div className="navbar-start">
      <a className="navbar-item" href="https://bulma.io/">
        Home
      </a>
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="field is-grouped">
          <p className="control">
            <a data-social-network="Twitter" data-social-action="tweet" data-social-target="https://bulma.io" target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=https://bulma.io&amp;via=jgthms">
              <span className="icon">
                <i className="fab fa-twitter"></i>
              </span>
              <button className="button is-rounded my-class is-danger is-small">
                Login
                </button>
            </a>
          </p>
          <p className="control">
            <a href="https://github.com/jgthms/bulma/releases/download/0.8.0/bulma-0.8.0.zip">
              <span className="icon">
                <i className="fas fa-download"></i>
              </span>
              <span>
              <button className="button is-small is-success">
                  Signup
                </button> 

                  </span>
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</nav>

      </div>
    );
  }
}

export default Navbar;