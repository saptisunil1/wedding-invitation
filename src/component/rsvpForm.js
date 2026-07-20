import { useState } from "react";
import "../rsvp.css";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";

function getDaysLeft() {
    const weddingDate = new Date("2026-11-19T00:00:00");
    const now = new Date();
    const diff = weddingDate - now;
    return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

function RSVPForm() {
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});
    const [form, setForm] = useState({
        name: "",
        guests: "",
        message: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        let newErrors = {};

        if (!form.name.trim()) {
            newErrors.name = "Name is required 💖";
        }

        if (!form.guests || Number(form.guests) <= 0) {
            newErrors.guests = "number of guests attending is required 💖";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) return;

        try {
            await addDoc(collection(db, "rsvps"), {
                name: form.name.trim(),
                guests: Number(form.guests),
                message: form.message.trim(),
                attending: form.attending, 
                createdAt: serverTimestamp()
            });

            setSubmitted(true);

        } catch (err) {
            console.error("Error saving RSVP:", err);
            alert("Something went wrong. Try again.");
        }
    };


    const daysLeft = getDaysLeft();

    return (
        <div className="rsvp-layer">

            <div className="rsvp-premium-card">

                {!submitted ? (
                    <>
                        <form onSubmit={handleSubmit}>
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
                                {errors.name && <p className="rsvp-error">{errors.name}</p>}

                                <input
                                    name="guests"
                                    type="number"
                                    placeholder="Number of Guests"
                                    value={form.guests}
                                    onChange={handleChange}
                                    min={1}
                                />
                                {errors.guests && <p className="rsvp-error">{errors.guests}</p>}

                                <select
                                    name="attending"
                                    value={form.attending}
                                    onChange={handleChange}
                                >
                                    <option value="wedding"> Wedding </option>
                                    <option value="reception"> Reception </option>
                                    <option value="Both"> Wedding and Reception (both) </option>
                                </select>

                                <textarea
                                    name="message"
                                    placeholder="Your message (optional)"
                                    value={form.message}
                                    onChange={handleChange}
                                />
                            </div>

                            <button type="submit">
                                Send RSVP
                            </button>
                        </form>
                    </>
                ) : (
                    <>
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