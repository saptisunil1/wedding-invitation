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
        <div
            className="cover-page"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <div className="cover-page-overlay" />

            <div className="cover-content">
                <p className="cover-small-text">Together with their families</p>

                <div className="cover-divider">
                    <span />
                    <span className="cover-divider-symbol">◇</span>
                    <span />
                </div>

                <h1 className="cover-couple-names">
                    <span>Nithinraj</span>

                    <span className="cover-ampersand">&amp;</span>

                    <span>Sapti</span>
                </h1>

                <p className="cover-wedding-text">Are Getting Married</p>

                <div className="cover-date">
                    <span>19</span>
                    <small>November</small>
                    <span>2026</span>
                </div>
            </div>

            <div className="cover-swipe">
                <span>Swipe up</span>
                <FaLongArrowAltUp className="cover-swipe-arrow" />
            </div>
        </div>
    );
}

export default Page1text;