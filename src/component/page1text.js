import { useRef } from "react";
import "../myCss.css";
import "../App.css";
import "@fontsource/great-vibes";
import { FaLongArrowAltUp } from "react-icons/fa";

function Page1text({ onSwipeUp, onSwipeDown }) {
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
            <div className="text-overlay">
                <p className="p1">Nithinraj</p>
                <p className="p1">&</p>
                <p className="p1">Sapti</p>
                <p className="p2">Are Getting Married</p>
            </div>

            <div className="swipe-up">
                <span className="swipe-text">Swipe up</span>
                <span className="swipe-arrow">
                    <FaLongArrowAltUp size={30} color="white" />
                </span>
            </div>
        </div>
    );
}

export default Page1text;