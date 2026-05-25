import "../myCss.css";
import "../App.css";
import "@fontsource/great-vibes";
import { FaLongArrowAltUp } from "react-icons/fa";
import { useRef } from "react";
import RSVPForm from "./rsvpForm";

function Page4text({ onSwipeUp, onSwipeDown }) {
    const startY = useRef(0);
    const currentY = useRef(0);

    const isInteractive = (target) => {
        return target.closest("input, textarea, select, button, label, form");
    };

    const handleTouchStart = (e) => {
        startY.current = e.touches[0].clientY;
        currentY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
        currentY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
        if (isInteractive(e.target)) return;

        const diff = startY.current - currentY.current;

        if (Math.abs(diff) < 60) return;

        if (diff > 60) {
            onSwipeUp?.();
        } else if (diff < -60) {
            onSwipeDown?.();
        }
    };

    return (
        <div
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <div className="text-overlay3">
                <RSVPForm />
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

export default Page4text;