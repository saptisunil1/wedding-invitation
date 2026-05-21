import { useState, useRef, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { FaMusic } from "react-icons/fa";
import pik10 from "../images/pik10.jpeg";
import pik9 from "../images/pik9.jpeg";
import pik3 from "../images/pik3.jpeg";
import Page1text from "./page1text";
import Page3text from "./Page3text";
import Page2text from "./Page2text";
import Page4text from "./Page4text";
import Page5text from "./Page5text";
import song from "../images/song.mp3";

function Page1() {
    const [page, setPage] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);

    const audioRef = useRef(null);

    useEffect(() => {
        audioRef.current = new Audio(song);
        audioRef.current.loop = true;
        audioRef.current.volume = 0.5;
        audioRef.current.play().catch(() => {
            setIsPlaying(false);
        });

        return () => {
            audioRef.current.pause();
        };
    }, []);

    const toggleMusic = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }

        setIsPlaying(!isPlaying);
    };

    return (
        <div className="carousel-wrapper">
            <Carousel
                interval={3000}
                controls={false}
                indicators={false}
                pause={false}
                touch={false}
            >
                <Carousel.Item>
                    <img className="responsive-img" src={pik3} />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="responsive-img" src={pik9} />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="responsive-img" src={pik10} />
                </Carousel.Item>
            </Carousel>
            <div className="text-overlay4">
                <div className="music-icon" onClick={toggleMusic}>
                    <FaMusic color={isPlaying ? "white" : "gray"} size={50} />
                </div>
            </div>

            {page === 0 && (
                <Page1text onSwipeUp={() => setPage(1)} />
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