import "../myCss.css";
import "@fontsource/alegreya";
import "@fontsource/great-vibes";
import { useRef } from "react";
import { BsCalendar3, BsClock } from "react-icons/bs";
import { FaLongArrowAltUp } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
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
    const interactiveElement = e.target.closest(
      "button, a, input, textarea, select, .music-icon, .whatsapp-icon, .modal-overlay, .contact-modal"
    );

    if (interactiveElement) {
      startY.current = 0;
      currentY.current = 0;
      return;
    }

    const difference = startY.current - currentY.current;

    if (Math.abs(difference) >= 60) {
      if (difference > 0) {
        onSwipeUp?.();
      } else {
        onSwipeDown?.();
      }
    }

    startY.current = 0;
    currentY.current = 0;
  };

  const openLocation = () => {
    window.open(
      "https://www.google.com/maps/search/?api=1&query=Kurumboor+Mana+Nalukettu+Veedu+Guruvayur+Wedding+Police+Station+Police+Quarters+Rd+Chavakkad+Kerala+680506",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const openCalendar = () => {
    const calendarUrl =
      "https://calendar.google.com/calendar/render" +
      "?action=TEMPLATE" +
      "&text=Wedding%20of%20Nithin%20and%20Sapti" +
      "&dates=20261119T113000/20261119T143000" +
      "&details=Wedding%20ceremony%20of%20Nithin%20and%20Sapti.%20We%20would%20love%20your%20presence." +
      "&location=Kurumboor%20Mana%2C%20Guruvayur%2C%20Kerala";

    window.open(calendarUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      className="marriage-page"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="marriage-page-overlay" />

      <div className="marriage-content">
        <header className="marriage-header">
          <span className="marriage-small-title">The wedding ceremony</span>

          <h1 className="marriage-title">Marriage</h1>

          <div className="marriage-title-divider">
            <span />
            <span className="marriage-divider-icon">◇</span>
            <span />
          </div>
        </header>

        <article className="marriage-event-card">
          <div className="marriage-date-section">
            <div className="marriage-date-icon">
              <BsCalendar3 />
            </div>

            <div className="marriage-date-copy">
              <span className="marriage-label">Thursday</span>

              <div className="marriage-main-date">
                <span className="marriage-month">November</span>
                <strong className="marriage-day">19</strong>
                <span className="marriage-year">2026</span>
              </div>
            </div>
          </div>

          <div className="marriage-card-divider" />

          <div className="marriage-info-row">
            <div className="marriage-info-icon">
              <BsClock />
            </div>

            <div className="marriage-info-copy">
              <span className="marriage-label">Ceremony time</span>
              <p>11:30 AM</p>
            </div>
          </div>

          <div className="marriage-info-row marriage-venue-row">
            <div className="marriage-info-icon">
              <IoLocationOutline />
            </div>

            <div className="marriage-info-copy">
              <span className="marriage-label">Venue</span>
              <p>Kurumboor Mana</p>
              <small>Guruvayur, Kerala</small>
            </div>
          </div>

          <div className="marriage-actions">
            <button
              type="button"
              className="marriage-action-btn marriage-location-btn"
              onClick={openLocation}
            >
              <IoLocationOutline />
              <span>View location</span>
            </button>

            <button
              type="button"
              className="marriage-action-btn marriage-calendar-btn"
              onClick={openCalendar}
            >
              <SiGooglecalendar />
              <span>Add to calendar</span>
            </button>
          </div>
        </article>
      </div>

      <div className="marriage-swipe">
        <span>Swipe up</span>
        <FaLongArrowAltUp className="marriage-swipe-arrow" />
      </div>
    </section>
  );
}

export default Page3text;