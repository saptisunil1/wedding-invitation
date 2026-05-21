import { useState } from "react";
import { Carousel } from "react-bootstrap";
import pik10 from "../images/pik10.jpeg";
import pik9 from "../images/pik9.jpeg";
import pik3 from "../images/pik3.jpeg";
import Page1text from "./page1text";
import Page3text from "./Page3text";
import Page2text from "./Page2text";
import Page4text from "./Page4text";
import Page5text from "./Page5text";

function Page1() {
    const [page, setPage] = useState(0);

    return (
        <div className="carousel-wrapper">
            <Carousel interval={3000} controls={false} indicators={false} pause={false}>
                <Carousel.Item>
                    <img className="responsive-img" src={pik3} alt="ResponsiveImg1" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="responsive-img" src={pik9} alt="ResponsiveImg1" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="responsive-img" src={pik10} alt="ResponsiveImg1" />
                </Carousel.Item>
            </Carousel>

            {page === 0 && (
                <Page1text onSwipeUp={() => setPage(1)} onSwipeDown={() => { }} />
            )}

            {page === 1 && (
                <Page2text
                    onSwipeDown={() => setPage(0)}
                    onSwipeUp={() => setPage(2)}
                />
            )}

            {page === 2 && (
                <Page3text
                    onSwipeDown={() => setPage(1)}
                    onSwipeUp={() => setPage(3)}
                />
            )}

            {page === 3 && (
                <Page4text
                    onSwipeDown={() => setPage(2)}
                    onSwipeUp={() => setPage(4)}
                />
            )}

            {page === 4 && (
                <Page5text
                    onSwipeDown={() => setPage(3)}
                    onSwipeUp={() => setPage(5)}
                />
            )}

        </div>
    );
}

export default Page1;