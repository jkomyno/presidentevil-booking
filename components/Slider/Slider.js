import React from 'react';
import SliderSlick from 'react-slick';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

class Slider extends React.Component {

  componentDidMount() {
    window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.root);
  }

  render() {
    return (
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <SliderSlick {...settings}>
            <div>
              <img src="img/shirt.jpg" />
            </div>
            <div>
              <img src="img/shirt.jpg" />
            </div>
          </SliderSlick>
        </div>
      </div>
    );
  }
}

export default Slider;
