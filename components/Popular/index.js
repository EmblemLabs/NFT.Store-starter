import React, { useState } from "react";
import cn from "classnames";
import Slider from "react-slick";
// import { Link } from "react-router-dom";
import styles from "./Popular.module.sass";
import Add from "./Add";
import Icon from "../Icon";
import Dropdown from "../Dropdown";
import DropdownEmpty from "../DropdownEmpty";
import Blockies from 'react-blockies';
import {getGun, getPaths} from '../../utils'

const items = [
  {
    name: "Edd Harris",
    sign: "/images/content/cup.svg",
    number: "1",
    url: "/profile",
    color: "#3772FF",
    avatar: "/images/content/avatar-5.jpg",
    reward: "/images/content/reward-1.svg",
    price: "<span>2.456</span> ETH",
  },
  {
    name: "Odell Hane",
    sign: "/images/content/donut.svg",
    number: "2",
    url: "/profile",
    color: "#9757D7",
    avatar: "/images/content/avatar-6.jpg",
    reward: "/images/content/reward-1.svg",
    price: "<span>2.456</span> ETH",
  },
  {
    name: "Marlee Kuphal",
    sign: "/images/content/lightning.svg",
    number: "3",
    url: "/profile",
    color: "#45B26B",
    avatar: "/images/content/avatar-7.jpg",
    reward: "/images/content/reward-1.svg",
    price: "<span>2.456</span> ETH",
  },
  {
    name: "Payton Kunde",
    sign: "/images/content/donut.svg",
    number: "4",
    url: "/profile",
    color: "#23262F",
    avatar: "/images/content/avatar-8.jpg",
    reward: "/images/content/reward-1.svg",
    price: "<span>2.456</span> ETH",
  },
  {
    name: "Payton Buckridge",
    sign: "/images/content/donut.svg",
    number: "5",
    url: "/profile",
    color: "#777E90",
    avatar: "/images/content/avatar-9.jpg",
    reward: "/images/content/reward-1.svg",
    price: "<span>2.456</span> ETH",
  },
  {
    name: "Edd Harris",
    sign: "/images/content/cup.svg",
    number: "1",
    url: "/profile",
    color: "#3772FF",
    avatar: "/images/content/avatar-5.jpg",
    reward: "/images/content/reward-1.svg",
    price: "<span>2.456</span> ETH",
  },
  {
    name: "Odell Hane",
    sign: "/images/content/donut.svg",
    number: "2",
    url: "/profile",
    color: "#9757D7",
    avatar: "/images/content/avatar-6.jpg",
    reward: "/images/content/reward-1.svg",
    price: "<span>2.456</span> ETH",
  },
  {
    name: "Marlee Kuphal",
    sign: "/images/content/lightning.svg",
    number: "3",
    url: "/profile",
    color: "#45B26B",
    avatar: "/images/content/avatar-7.jpg",
    reward: "/images/content/reward-1.svg",
    price: "<span>2.456</span> ETH",
  },
];

const SlickArrow = ({ currentSlide, slideCount, children, ...props }) => (
  <button {...props}>{children}</button>
);

const dateOptions = ["Today", "Morning", "Dinner", "Evening"];
const directionOptions = ["Sellers", "Buyers"];

const Popular = ({users, handleClick}) => {
  let halfMocked = []
  users.forEach(_user =>{
    halfMocked.push({
      address: _user.address,
      name: _user.username,
      sign: "/images/content/lightning.svg",
      number: "3",
      url: "/profile",
      color: "#45B26B",
      avatar: "/images/content/avatar-7.jpg",
      reward: "/images/content/reward-1.svg",
      price: "<span>2.456</span> ETH",
    })
  })
  // console.log(halfMocked)
  // console.log(items)
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    adaptiveHeight: true,
    nextArrow: (
      <SlickArrow>
        <Icon name="arrow-next" size="14" />
      </SlickArrow>
    ),
    prevArrow: (
      <SlickArrow>
        <Icon name="arrow-prev" size="14" />
      </SlickArrow>
    ),
    responsive: [
      {
        breakpoint: 1340,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
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

  const [date, setDate] = useState(dateOptions[0]);
  const [direction, setDirection] = useState(directionOptions[0]);
  const [gun, setGun] = useState(getGun())
  const [paths, setPaths] = useState(getPaths())
  return (
    <div className={cn("section-bg", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.top}>
          <div className={styles.box}>
            <div className={styles.stage}>Popular</div>
            <DropdownEmpty
              className={styles.dropdown}
              value={direction}
              setValue={setDirection}
              options={directionOptions}
            />
          </div>
          <div className={styles.field}>
            <div className={styles.label}>timeframe</div>
            <Dropdown
              className={styles.dropdown}
              value={date}
              setValue={setDate}
              options={dateOptions}
            />
          </div>
        </div>
        <div className={styles.wrapper}>
          <Slider className="popular-slider" {...settings}>
            {halfMocked.map((x, index) => (
              <div className={styles.slide} key={index}>
                <div onClick={
                    async ()=>{
                      gun.get("~@"+x.address+":"+paths.data).map().get("asks").open(asks=>{
                        return handleClick(asks)
                      })
                      
                    }} className={styles.item}>
                  <div className={styles.head}>
                    <div
                      className={styles.rating}
                      style={{ backgroundColor: x.color }}
                    >
                      <div className={styles.icon}>
                        <img src={x.sign} alt="Rating" />
                      </div>
                      <div className={styles.number}>#{x.number}</div>
                    </div>
                    <div className={styles.control}>
                      {gun.user().is && gun.user().is.alias.split(':')[0] != x.address ? (<Add className={styles.button} />) : null}
                      {/* <Add className={styles.button} /> */}
                      {/* <Link className={styles.button} to={x.url}> */}
                      <div className={styles.button}>
                        <Icon name="arrow-expand" size="24" />
                      </div>
                      {/* </Link> */}
                    </div>
                  </div>
                  <div className={styles.body}>
                    <div className={styles.avatar}>
                      {/* <img src={x.avatar} alt="Avatar" /> */}
                      <Blockies
                        seed={x.address}
                        size={10}
                        scale={8}
                        
                      />
                      <div className={styles.reward}>
                        <img src={x.reward} alt="Reward" />
                      </div>
                    </div>
                    <div className={styles.name}>{x.name}</div>
                    <div
                      className={styles.price}
                      dangerouslySetInnerHTML={{ __html: x.price }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Popular;
