import "../myCss.css";
import "@fontsource/alegreya";
import "@fontsource/great-vibes";
import { useRef } from "react";
import { BsCalendar3, BsClock, BsHeart } from "react-icons/bs";
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
        // Do not trigger swiping when pressing a button or link
        if (e.target.closest("button, a")) return;

        const difference = startY.current - currentY.current;

        if (Math.abs(difference) < 60) return;

        if (difference > 60) {
            onSwipeUp?.();
        } else {
            onSwipeDown?.();
        }
    };

    const openLocation = () => {
        window.open(
            "https://www.google.com/maps/place/Crystal+Convention+Centre/@8.7346436,76.84724,17z/data=!3m1!4b1!4m6!3m5!1s0x3b05c25fd0073c3b:0x4c2cdfb742a5de78!8m2!3d8.7346383!4d76.8498149!16s%2Fg%2F11byx83jxg?entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D",
            "_blank",
            "noopener,noreferrer"
        );
    };

    const openCalendar = () => {
        const calendarUrl =
            "https://calendar.google.com/calendar/render" +
            "?action=TEMPLATE" +
            "&text=Reception%20of%20Nithin%20and%20Sapti" +
            "&dates=20261121T170000/20261121T220000" +
            "&details=Join%20us%20as%20we%20celebrate%20the%20reception%20of%20Nithin%20and%20Sapti." +
            "&location=Crystal%20Convention%20Center%2C%20Trivandrum%2C%20Kerala";

        window.open(calendarUrl, "_blank", "noopener,noreferrer");
    };

    return (
        <section
            className="reception-page"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            {/* Dark overlay improves readability over the background photo */}
            <div className="reception-page-shade" />

            <div className="reception-content">
                <header className="reception-header">
                    <div className="reception-monogram">
                        <span>S</span>
                        <BsHeart className="reception-monogram-heart" />
                        <span>N</span>
                    </div>

                    <div className="reception-divider">
                        <span />
                        <span className="reception-diamond">◇</span>
                        <span />
                    </div>

                    <h1 className="reception-title">Reception</h1>

                    <p className="reception-subtitle">
                        Join us as we celebrate with love and joy
                    </p>
                </header>

                <div className="reception-details-card">
                    <div className="reception-detail">
                        <div className="reception-icon-circle">
                            <BsCalendar3 />
                        </div>

                        <span className="reception-detail-label">Date</span>

                        <p className="reception-detail-value">
                            21 November, 2026
                        </p>
                    </div>

                    <div className="reception-detail-divider" />

                    <div className="reception-detail">
                        <div className="reception-icon-circle">
                            <BsClock />
                        </div>

                        <span className="reception-detail-label">Time</span>

                        <p className="reception-detail-value">05:00 PM</p>
                    </div>

                    <div className="reception-detail-divider" />

                    <div className="reception-detail">
                        <div className="reception-icon-circle">
                            <ImLocation />
                        </div>

                        <span className="reception-detail-label">Venue</span>

                        <p className="reception-venue-name">
                            Crystal Convention Center
                        </p>

                        <p className="reception-venue-location">
                            Trivandrum, Kerala
                        </p>
                    </div>
                </div>

                <div className="reception-actions">
                    <button
                        type="button"
                        className="reception-action-btn reception-location-btn"
                        onClick={openLocation}
                    >
                        <ImLocation />
                        <span>Location Map</span>
                    </button>

                    <button
                        type="button"
                        className="reception-action-btn reception-calendar-btn"
                        onClick={openCalendar}
                    >
                        <SiGooglecalendar />
                        <span>Add to Calendar</span>
                    </button>
                </div>
            </div>

            <div className="reception-swipe">
                <span>Swipe up</span>
                <FaLongArrowAltUp className="reception-swipe-arrow" />
            </div>
        </section>
    );
}

export default Page6text;