import "../myCss.css";
import pik1 from "../images/finalmrg1.jpeg";
import pik2 from "../images/finalmrg3.jpeg";
import pik3 from "../images/finalmrg2.jpeg";
import { Carousel } from "react-bootstrap";
import "../App.css";
import "@fontsource/alegreya";
import Countdown from "./countdown";
import logopik from "../images/logoSN.jpeg";
import { useState } from "react";

function StartPageCarousel({ onStart }) {

    const [opened, setOpened] = useState(false);

    return (
        <div className="carousel-wrapper">
            <Carousel interval={3000} controls={false} indicators={false} pause={false} touch={false}>
                <Carousel.Item>
                    <img className="responsive-img" src={pik1} alt="Slide 1" />
                </Carousel.Item>

                <Carousel.Item>
                    <img className="responsive-img" src={pik2} alt="Slide 2" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="responsive-img" src={pik3} alt="Slide 3" />
                </Carousel.Item>
            </Carousel>
            <div className={`invite-wrapper ${opened ? "open" : ""}`}>
                <button className="start-btn" onClick={() => {
                    onStart()
                    setOpened(true)
                }}>
                    <img src={logopik} alt="Tap to open wedding invitation" className="start-logo" />
                    <div className="tap-to-open">
                        <span className="tap-line">—</span>
                        <span> TAP TO OPEN </span>
                        <span className="tap-line">—</span>
                    </div>
                </button>
            </div>
            <Countdown />
        </div>
    );
}

export default StartPageCarousel;