import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './slider.css';

const Slider = () => {
const responsiveSettings = [
    {
        breakpoint: 768,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3
        }
    },
    {
        breakpoint: 320,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }
];
    return (
        <div>
            <Slide slidesToScroll={3} slidesToShow={3} indicators={true} responsive={responsiveSettings}>
        <div style={{
    textAlign: 'center',
    backgroundImage: `url(images/reviewone.png)`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    padding: '200px 0'
  }}></div>
        <div style={{
    textAlign: 'center',
    backgroundImage: `url(images/reviewtwo.png)`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    padding: '200px 0'
  }}></div>
        <div style={{
    textAlign: 'center',
    backgroundImage: `url(images/reviewthree.png)`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    padding: '200px 0'
  }}></div>
        <div style={{
    textAlign: 'center',
    backgroundImage: `url(images/reviewfour.png)`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    padding: '200px 0'
  }}></div>
        <div style={{
    textAlign: 'center',
    backgroundImage: `url(images/reviewfive.png)`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    padding: '200px 0'
  }}></div>
        <div style={{
    textAlign: 'center',
    backgroundImage: `url(images/reviewsix.png)`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    padding: '200px 0'
  }}></div>
        <div style={{
    textAlign: 'center',
    backgroundImage: `url(images/reviewseven.png)`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    padding: '200px 0'
  }}></div>
  <div style={{
    textAlign: 'center',
    backgroundImage: `url(images/revieweight.png)`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    padding: '200px 0'
  }}></div>
  <div style={{
    textAlign: 'center',
    backgroundImage: `url(images/reviewnine.png)`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    padding: '200px 0'
  }}></div>
    </Slide>
        </div>
    );
};

export default Slider;