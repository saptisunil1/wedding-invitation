import { useState } from "react";
import "../rsvp.css"; 

function RSVPForm() {
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
    alert("Thank you for your RSVP 💍");
  };

  return (
    <div className="rsvp-layer">
      <form className="rsvp-premium-card" onSubmit={handleSubmit}>

        <div className="rsvp-header">
          {/* <h1>RSVP</h1> */}
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

        <button type="submit">Send Invitation Response</button>

        <div className="rsvp-footer">
          💍 Kindly respond with love
        </div>

      </form>
    </div>
  );
}

export default RSVPForm;