import React from 'react';

class Shirts extends React.Component {

  componentDidMount() {
    window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.root);
  }

  render() {
    return (
      <div className="shirts-container">
        
      </div>
    );
  }
}

export default Shirts;
