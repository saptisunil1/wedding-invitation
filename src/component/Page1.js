import { useState, useRef, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { FaMusic } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";

import pik10 from "../images/pik10.jpeg";
import pik9 from "../images/pik9.jpeg";
import pik3 from "../images/pik3.jpeg";
import song from "../images/song.mp3";

import Page1text from "./page1text";
import Page3text from "./Page3text";
import Page2text from "./Page2text";
import Page4text from "./Page4text";
import Page5text from "./Page5text";
import Page6text from "./Page6text";

function Page1() {
    const [page, setPage] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [showModal, setShowModal] = useState(false);

    const audioRef = useRef(null);

    // 🎵 MUSIC SETUP
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

    // 💬 WhatsApp links (REPLACE WITH REAL NUMBERS)
    const whatsappLinks = {
        sapti: "https://wa.me/447868325607?text=hello%20sapti%20i%20m%20nithin%27s",
        nithinraj:  "https://wa.me/447442014234?text=hello%nithin%20i%20m%sapti%27s"
    };

    const openWhatsApp = (person) => {
        window.open(whatsappLinks[person], "_blank");
        setShowModal(false);
    };

    return (
        <div className="carousel-wrapper">

            {/* 🎞️ CAROUSEL */}
            <Carousel
                interval={3000}
                controls={false}
                indicators={false}
                pause={false}
                touch={false}
            >
                <Carousel.Item>
                    <img className="responsive-img" src={pik3} alt="Img1" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="responsive-img" src={pik9} alt="Img2" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="responsive-img" src={pik10} alt="Img3" />
                </Carousel.Item>
            </Carousel>

            {/* 🎵 MUSIC + WHATSAPP ICONS */}
            <div className="text-overlay4">
                <div className="music-icon" onClick={toggleMusic}>
                    <FaMusic color={isPlaying ? "white" : "gray"} size={30} />
                </div>

                <div className="whatsapp-icon" onClick={() => setShowModal(true)}>
                    <RiWhatsappFill color="#25D366" size={40} />
                </div>
            </div>

            {/* 💬 WHATSAPP MODAL */}
            {showModal && (
                <div className="modal-overlay" onClick={() => setShowModal(false)}>
                    <div className="modal-box" onClick={(e) => e.stopPropagation()}>

                        <h3>Choose Contact</h3>

                        <button className="modal-btn"
                            onClick={() => openWhatsApp("nithinraj")}
                        >
                            Nithinraj 💍
                        </button>

                         <button  className="modal-btn"
                            onClick={() => openWhatsApp("sapti")}
                        >
                            Sapti 💖
                        </button>

                    </div>
                </div>
            )}

            {/* 📱 SWIPE PAGES */}
            {page === 0 && <Page1text onSwipeUp={() => setPage(1)} />}

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
                <Page6text
                    onSwipeDown={() => setPage(2)}
                    onSwipeUp={() => setPage(4)}
                />
            )}

            {page === 4 && (
                <Page4text
                    onSwipeDown={() => setPage(3)}
                    onSwipeUp={() => setPage(5)}
                />
            )}

            {page === 5 && (
                <Page5text
                    onSwipeDown={() => setPage(4)}
                    onSwipeUp={() => setPage(6)}
                />
            )}

        </div>
    );
}

export default Page1;