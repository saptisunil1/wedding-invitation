import "../myCss.css";
import "@fontsource/alegreya";
import "@fontsource/great-vibes";
import { useRef } from "react";
import { BsCalendarDateFill } from "react-icons/bs";
import { FaLongArrowAltUp } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { SiGooglecalendar } from "react-icons/si";

function Page3text({ onSwipeDown, onSwipeUp }) {
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
                <p className="p9">Marriage 💖</p>
                <p>
                    <BsCalendarDateFill size={60} color="white" />
                </p>

                <p className="p12">November 19, 2026</p>
                <p className="p11">11:30 am</p>

                <p>
                    <IoLocation size={60} color="white" />
                </p>

                <p className="p10">Kurumboor Mana, Guruvayur</p>
                <div className="action-buttons">
                    <button
                        className="location-btn"
                        onClick={(e) => {
                            e.stopPropagation();
                            window.open(
                                "https://www.google.com/maps/search/?api=1&query=Kurumboor+Mana+Nalukettu+Veedu+Guruvayur+Wedding+Police+Station+Police+Quarters+Rd+Chavakkad+Kerala+680506",
                                "_blank"
                            );
                        }}
                    >
                        Location Map
                    </button>
                    <button className="calendar-btn-premium"
                        onClick={(e) => {
                            e.stopPropagation();
                            window.open("https://calendar.google.com/calendar/render?action=TEMPLATE&text=Wedding%20Nithin%20and%20Sapti&dates=20261119T113000/20261119T143000&details=Wedding%20Ceremony%20of%20Nithin%20and%20Sapti%20💍%20We%20would%20love%20your%20presence&location=Kurumboor%20Mana%2C%20Guruvayur%2C%20Kerala",
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

export default Page3text;