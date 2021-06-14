import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

const TweetSlider = ({ tweets }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    className: "slides",
  };

  return (
    <>
      <Slider {...settings}>
        {tweets.map((tweet, id) => {
          return (
            <div className="wrapper" key={id}>
              <p className="tweet">{tweet}</p>
            </div>
          );
        })}
      </Slider>
    </>
  );
};

export default TweetSlider;
