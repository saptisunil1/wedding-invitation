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
        <div
            className="invitation-page"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <div className="invitation-page-overlay" />

            <div className="invitation-content invitation-content-open">
                <p className="invitation-hashtag">#theSaNiStory</p>

                <div className="invitation-divider">
                    <span />
                    <span className="invitation-divider-icon">◇</span>
                    <span />
                </div>

                <p className="invitation-intro">With joyous hearts,</p>

                <p className="invitation-family">Our families</p>

                <p className="invitation-copy">
                    invite you to celebrate the wedding of
                </p>

                <h1 className="invitation-names">
                    Nithinraj
                    <span>&amp;</span>
                    Sapti
                </h1>

                <div className="invitation-date-open">
                    <span>Thursday</span>
                    <strong>19 November 2026</strong>
                </div>
            </div>

            <div className="invitation-swipe">
                <span>Swipe up</span>
                <FaLongArrowAltUp className="invitation-swipe-arrow" />
            </div>
        </div>
    );
}

export default Page2text;