import { useState } from "react";
import "../rsvp.css"; 

function getDaysLeft() {
  const weddingDate = new Date("2026-11-19T00:00:00");
  const now = new Date();
  const diff = weddingDate - now;
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

function RSVPForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    guests: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const daysLeft = getDaysLeft();

  return (
    <div className="rsvp-layer">

      <div className="rsvp-premium-card">

        {!submitted ? (
          <>
            <div className="rsvp-header">
              <h1>Be our Guest</h1>
              <p>We look forward to celebrating with you</p>
            </div>

            <div className="rsvp-fields">
              <input
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
              />

              <input
                name="guests"
                type="number"
                placeholder="Number of Guests"
                value={form.guests}
                onChange={handleChange}
              />

              <textarea
                name="message"
                placeholder="Your message (optional)"
                value={form.message}
                onChange={handleChange}
              />
            </div>

            <button onClick={handleSubmit}>
              Send RSVP 💖
            </button>
          </>
        ) : (
          <>
            {/* SUCCESS STATE */}
            <div className="rsvp-success">

              <h1>Thank You 💍</h1>

              <p className="rsvp-love">
                We’re truly happy to have you with us on our special day
              </p>

              <div className="rsvp-count">
                <span>{daysLeft}</span>
                <p>Days left for the celebration</p>
              </div>

              <p className="rsvp-final">
                Looking forward to seeing you soon ✨
              </p>

            </div>
          </>
        )}

      </div>

    </div>
  );
}

export default RSVPForm;