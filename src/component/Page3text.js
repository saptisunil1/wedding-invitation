import "../myCss.css";
import "@fontsource/alegreya";
import "@fontsource/great-vibes";
import { useRef } from "react";
import { BsCalendarDateFill } from "react-icons/bs";
import { FaLongArrowAltUp } from "react-icons/fa";
import { IoLocation } from "react-icons/io5"

function Page3text({ onSwipeDown, onSwipeUp }) {
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
                <p className="p9">Ceremony</p>
                <p>
                    <BsCalendarDateFill size={60} color="white" />
                </p>
                <p className="p12">November 19, 2026</p>
                <p className="p11">11:30 am</p>
                <p>
                    <IoLocation size={60} color="white" />
                </p>
                <p className="p10">Kurumboor Mana</p>
                <button className="location-btn" onClick={() =>
                    window.open(
                        "https://www.google.com/maps/search/?api=1&query=Kurumboor+Mana+Nalukettu+Veedu+Guruvayur+Wedding+Police+Station+Police+Quarters+Rd+Chavakkad+Kerala+680506",
                        "_blank"
                    )
                }>Location Map</button>
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