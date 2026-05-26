import "../myCss.css";
import pik1 from "../images/pik1.jpeg";
import pik5 from "../images/pik5.jpeg";
import pik7 from "../images/pik7.jpeg";
import { Carousel } from "react-bootstrap";
import "../App.css";
import "@fontsource/alegreya";
import Countdown from "./countdown";
import logopik from "../images/logoSN.jpeg";

function StartPageCarousel({ onStart }) {
    return (
        <div className="carousel-wrapper">
            <Carousel interval={3000} controls={false} indicators={false} pause={false} touch={false}>
                <Carousel.Item>
                    <img className="responsive-img" src={pik1} alt="Slide 1" />
                </Carousel.Item>

                <Carousel.Item>
                    <img className="responsive-img" src={pik5} alt="Slide 2" />
                </Carousel.Item>

                <Carousel.Item>
                    <img className="responsive-img" src={pik7} alt="Slide 3" />
                </Carousel.Item>
            </Carousel>
            {/* <button className="start-btn" onClick={onStart}>Start</button> */}

            <button className="start-btn" onClick={onStart}>
                <img src={logopik} alt="Open" className="start-logo" />
            </button>
            <Countdown />
        </div>
    );
}

export default StartPageCarousel;