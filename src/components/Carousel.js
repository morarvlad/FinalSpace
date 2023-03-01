import React from 'react';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Image,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const Carousel = ({ first, second, third }) => {
  return (
    <CarouselProvider
      naturalSlideWidth={50}
      naturalSlideHeight={35}
      totalSlides={3}
    >
      <Slider>
        <Slide className="slideLayout" index={0}>
          <Image>{first}</Image>
        </Slide>
        <Slide index={1}>
          <Image>{second}</Image>
        </Slide>
        <Slide index={2}>
          <Image> {third} </Image>
        </Slide>
      </Slider>
      <ButtonBack> {'<--'} </ButtonBack>
      <ButtonNext> {'-->'} </ButtonNext>
    </CarouselProvider>
  );
};

export default Carousel;
