import React from "react";
import cn from "classnames";
import Slider from "react-slick";
import styles from "./HotBid.module.sass";
import Icon from "../Icon";
import Card from "../Card";

// data
// import { bids } from "../../mocks/bids";
// let bids

const SlickArrow = ({ currentSlide, slideCount, children, ...props }) => (
  <button {...props}>{children}</button>
);

const Hot = ({ classSection, listings, title = "Hot Items" }) => {
  let halfMocked = []
  listings.forEach(listing=>{
    if (!listing.animation_url)
        halfMocked.push( {
          title: listing.name,
          price: "2.45 ETH",
          highestBid: "0.001 ETH",
          counter: "3 in stock",
          bid: 'New offer <span role="img" aria-label="fire">🔥</span>',
          image: listing.image_url ,
          image2x: listing.image_original_url,
          category: "green",
          categoryText: "ART",
          url: "/",
          users: [
            {
              avatar: "/images/content/avatar-1.jpg",
            },
            {
              avatar: "/images/content/avatar-3.jpg",
            },
            {
              avatar: "/images/content/avatar-4.jpg",
            },
          ],
        })
  })
  // bids = listings
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: (
      <SlickArrow>
        <Icon className={styles.icon} name="arrow-next" size="14" />
      </SlickArrow>
    ),
    prevArrow: (
      <SlickArrow>
        <Icon className={styles.icon} name="arrow-prev" size="14" />
      </SlickArrow>
    ),
    responsive: [
      {
        breakpoint: 1179,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className={cn(classSection, styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.wrapper}>
          <h3 className={cn("h3", styles.title)}>{title}</h3>
          <div className={styles.inner}>
            {halfMocked.length > 0 ? (
              <Slider className="bid-slider" {...settings}>
                {halfMocked.map((x, index) => (
                  <Card key={index} className={styles.card} item={x} />
                ))}
              </Slider>
            ) : null }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hot;
