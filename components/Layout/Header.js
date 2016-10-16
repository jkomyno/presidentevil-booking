import React from 'react';
import classNames from 'classnames';;

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.setMenuActive = this.setMenuActive.bind(this);
    this.state = {
      hamburgerIsActive: false,
      overlayIsVisible: false,
    };
  }

  componentDidMount() {
    window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.root);
  }

  setMenuActive(e) {
    e.preventDefault();
    this.setState({
      hamburgerIsActive: !this.state.hamburgerIsActive,
      overlayIsVisible: !this.state.overlayIsVisible,
    });
  }

  render() {

    let menuToggleClass = classNames({
      'hamburger': true,
      'active open': this.state.hamburgerIsActive,
    });

    let overlayToggleClass = classNames({
      'overlay': true,
      'visible': this.state.overlayIsVisible,
    });

    return (
      <section>
        <div id="menu-toggle" className={menuToggleClass} onClick={this.setMenuActive}>
          <div id="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div id="cross">
            <span></span>
            <span></span>
          </div>
        </div>
        <div className={overlayToggleClass}>
          <nav className="overlay-menu">
            <div className="menu">
              <ul>
                <li><a href="#">Album</a></li>
                <li><a href="#">Apparel</a></li>
                <li><a href="mailto:qualsiasinomenonsiagiainuso@gmail.com">Contact</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </section>
    );
  }

}

export default Header;
