import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SlideShow() {
  const slides = [
    {
      id: 1,
      title: "A black, brown, and white dog wearing a kerchief",
      linkImg: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/29841/dog.jpg",
    },
    {
      id: 2,
      title: "A black, brown, and white dog wearing a kerchief",
      linkImg: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/29841/dog.jpg",
    },
    {
      id: 3,
      title: "A black, brown, and white dog wearing a kerchief",
      linkImg: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/29841/dog.jpg",
    },
    {
      id: 4,
      title: "A black, brown, and white dog wearing a kerchief",
      linkImg: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/29841/dog.jpg",
    },
    {
      id: 5,
      title: "A black, brown, and white dog wearing a kerchief",
      linkImg: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/29841/dog.jpg",
    },
  ];
  const settings = {
    rows: 1,
    slidesPerRow: 1,
    slidesToScroll: 1,
    slidesToShow: 1.05,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };
  return (
    <div>
      <Slider {...settings}>
        {slides.map((item) => (
          <div key={item.id}>
            <img
              style={{ padding: "0 8px 0 0", width: "335px", height: "140px" }}
              src={item.linkImg}
              alt={item.title}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SlideShow;
