import { useEffect, useState } from "react";
import "../counter.css";

function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    months: 0,
    days: 0,
    hours: 0,
  });

  useEffect(() => {
    const update = () => {
      const now = new Date();
      let diff = new Date("2026-11-19T00:00:00") - now;

      if (diff <= 0) {
        setTimeLeft({ months: 0, days: 0, hours: 0 });
        return;
      }

      const totalHours = Math.floor(diff / (1000 * 60 * 60));
      const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));

      const months = Math.floor(totalDays / 30);
      const days = totalDays % 30;
      const hours = totalHours % 24;

      setTimeLeft({ months, days, hours });
    };

    update();
    const interval = setInterval(update, 1000 * 60 * 30); // every 30 min

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="ig-countdown">
      <div className="ig-row">
        <div className="ig-box">
          <div className="ig-num">{timeLeft.months}</div>
          <div className="ig-label">MONTHS</div>
        </div>

        <div className="ig-box">
          <div className="ig-num">{timeLeft.days}</div>
          <div className="ig-label">DAYS</div>
        </div>

        <div className="ig-box">
          <div className="ig-num">{timeLeft.hours}</div>
          <div className="ig-label">HOURS</div>
        </div>
      </div>

      <div className="ig-date">Nov 19, 2026 💍</div>
    </div>
  );
}

export default Countdown;