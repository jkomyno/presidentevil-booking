import React, { PropTypes } from 'react';
import Header from './Header';
import Slider from '../Slider';
import PriceList from '../PriceList';
import Footer from '../Footer';


class Layout extends React.Component {

  static propTypes = {
    className: PropTypes.string,
  };

  componentDidMount() {
    window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.root);
  }

  render() {
    return (
      <section ref={node => (this.root = node)}>
        <Header />
        <div className="wrapper">
          <div {...this.props} className={this.props.className} />
          <Slider />
          <PriceList />
        </div>
        <Footer />
      </section>
    );
  }
}

export default Layout;
