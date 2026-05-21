import "../myCss.css";
import "@fontsource/alegreya";
import "@fontsource/great-vibes";
import "@fontsource/cormorant";
import { FaLongArrowAltUp } from "react-icons/fa";
import { useRef } from "react";

function Page2text({ onSwipeDown, onSwipeUp }) {
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

        if (diff > 60) {
            onSwipeUp?.();
        } else if (diff < -60) {
            onSwipeDown?.();
        }
    };

    return (
        <div onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd} style={{ touchAction: "none" }}>
            <div className="text-overlay1">
                <p className="p8">#theSaNiStory</p>
                <p className="p5">With Joyous hearts,</p>
                <p className="p6">Our families</p>
                <p className="p5">invite you to celebrate the wedding of</p>
                <p className="p6">Nithinraj & Sapti</p>
                <p className="p7" style={{ fontStyle: "italic" }}>on Nov 19,2026</p>
            </div>
            <div className="swipe-up">
                <span className="swipe-text">Swipe up</span>
                <span className="swipe-arrow">
                    <FaLongArrowAltUp />
                </span>
            </div>
        </div>
    );
}

export default Page2text;