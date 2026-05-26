import "../myCss.css";
import "@fontsource/alegreya";
import "@fontsource/great-vibes";
import { useRef } from "react";
import { BsFillCalendarHeartFill } from "react-icons/bs";
import { FaLongArrowAltUp } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { SiGooglecalendar } from "react-icons/si";

function Page6text({ onSwipeDown, onSwipeUp }) {
    const startY = useRef(0);
    const currentY = useRef(0);

    const handleTouchStart = (e) => {
        startY.current = e.touches[0].clientY;
        currentY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
        currentY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
        // ❌ Ignore swipe logic if user interacted with a button/link
        if (e.target.closest("button")) return;

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
            <div className="text-overlay1">
                <p className="p9">Reception 💖</p>
                <p>
                    <BsFillCalendarHeartFill size={60} color="white" />
                </p>

                <p className="p12">November 21 ,2026</p>
                <p className="p11">05:00 pm</p>

                <p>
                    <ImLocation size={60} color="white" />
                </p>

                <p className="p10">Crystal Convention Center, Trivandrum</p>
                <div className="action-buttons">
                    <button className="location-btn"
                        onClick={(e) => {
                            e.stopPropagation();
                            window.open(
                                "https://www.google.com/maps/place/Crystal+Convention+Centre/@8.7346436,76.84724,17z/data=!3m1!4b1!4m6!3m5!1s0x3b05c25fd0073c3b:0x4c2cdfb742a5de78!8m2!3d8.7346383!4d76.8498149!16s%2Fg%2F11byx83jxg?entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D",
                                "_blank"
                            );
                        }}
                    >
                        Location Map
                    </button>
                    <button className="calendar-btn-premium"
                        onClick={(e) => {
                            e.stopPropagation();
                            window.open("https://calendar.google.com/calendar/render?action=TEMPLATE&text=Reception%20Nithin%20and%20Sapti&dates=20261121T170000/20261121T220000&details=Reception%20celebration%20of%20Nithin%20and%20Sapti%20✨%20We%20look%20forward%20to%20seeing%20you&location=Crystal%20Convention%20Center%2C%20Kerala",
                                "_blank");
                        }}
                    >
                        <SiGooglecalendar className="google-icon" size={20} /> Add to calendar
                    </button>
                </div>
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

export default Page6text;