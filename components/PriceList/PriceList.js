import React from 'react';

class PriceList extends React.Component {

  componentDidMount() {
    window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.root);
  }

  render() {
    return (
      <div className="pricing-container">
          <p className="fieldset">
            Our offers
          </p>
        <ul className="pricing-list">
          <li>
            <ul className="pricing-wrapper">
              <li>
                <header className="pricing-header">
                  <h2>Album</h2>
                  <div className="price">
                    <span className="currency">€</span>
                    <span className="value">5</span>
                  </div>
                </header>
                <div className="pricing-body">
                  <ul className="pricing-features">
                    <li><em>6</em> Songs</li>
                    <li><em>12</em> Booklet pages</li>
                    <li><em>2</em> Stickers</li>
                    <li><em>1</em> Free hug</li>
                  </ul>
                </div>
                <div className="pricing-footer">
                  <a className="select" href="#">Discover</a>
                </div>
              </li>
            </ul>
          </li>
          <li className="exclusive">
            <ul className="pricing-wrapper">
              <li>
                <header className="pricing-header">
                  <h2>Album & Shirt</h2>
                  <div className="price">
                    <span className="currency">€</span>
                    <span className="value">10</span>
                  </div>
                </header>
                <div className="pricing-body">
                  <ul className="pricing-features">
                    <p>If you can't choose, you can have both</p>
                    <li>*<em>Subject to availability</em></li>
                  </ul>
                </div>
                <div className="pricing-footer">
                  <a className="select" href="#">Discover</a>
                </div>
              </li>
            </ul>
          </li>
          <li>
            <ul className="pricing-wrapper">
              <li>
                <header className="pricing-header">
                  <h2>Shirt</h2>
                  <div className="price">
                    <span className="currency">€</span>
                    <span className="value">8</span>
                  </div>
                </header>
                <div className="pricing-body">
                  <ul className="pricing-features">
                    <li><em>4</em> Sizes</li>
                    <li><em>2</em> Colors</li>
                    <li><em>2</em> Stickers</li>
                    <li><em>1</em> Free hug</li>
                  </ul>
                </div>
                <div className="pricing-footer">
                  <a className="select" href="#">Discover</a>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}

export default PriceList;
