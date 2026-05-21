import { useRef } from "react";
import "../myCss.css";
import "../App.css";
import "@fontsource/great-vibes";
import logopik from "../images/logoSN.jpeg";
import final from "../images/final.jpg";
import { CiHeart } from "react-icons/ci";

function Page5text({ onSwipeDown }) {
    const startY = useRef(0);
    const currentY = useRef(0);

    const handleTouchStart = (e) => {
        startY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
        currentY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = () => {
        const diff = startY.current - currentY.current;

        if (diff < -60) {
            onSwipeDown?.();
        }
    };

    return (
        <div onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd} style={{ touchAction: "none" }}>
            <div className="text-overlay2">
                <div className="center-wrapper">
                    <div className="image-card">
                        <img src={final} alt="wedding" />
                        <div className="card-text">
                            <CiHeart /> Together Forever <CiHeart />
                        </div>
                    </div>
                </div>
            </div>

            <div className="swipe-up">
                <p style={{ color: "white" }}>
                    <b>#TheSaNiStory</b>
                </p>
                <img src={logopik} className="logo-circle" alt="logo" />
            </div>
        </div>
    );
}

export default Page5text;