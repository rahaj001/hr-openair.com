import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import "./KontakForm.css";


export default function Kontakt() {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL;
  const API_KEY_CAPTCHA = import.meta.env.VITE_API_KEY_CAPTCHA;

  // Lade ReCaptcha v2 Script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js";
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ReCaptcha Token auslesen
    const token = window.grecaptcha.getResponse();
    if (!token) {
      setStatus("Bitte bestätigen Sie, dass Sie kein Roboter sind.");
      return;
    }

    try {
      const res = await axios.post(`${API_URL}/api/contact`, {
        ...formData,
        token, // Token an Server senden
      });

      if (res.status === 200) {
        setSuccessMessage("Nachricht erfolgreich gesendet.");
        setStatus(res.data.message || "Nachricht erfolgreich gesendet.");
        setFormData({ name: "", email: "", message: "" });
        window.grecaptcha.reset(); // Checkbox zurücksetzen
        setSent(true);

        setTimeout(() => setSent(false), 7000);
      }
    } catch (err) {
      console.error("Fehler beim Senden:", err);
      setErrorMessage(
        "Es gab ein Problem beim Versenden. Bitte versuchen Sie es erneut."
      );
    }
  };

  return (
    <div className="page">
      <h1>Kontakt</h1>
      {sent ? (
        <p className="success-message">Danke für deine Nachricht!</p>
      ) : (
        <form ref={form} className="contact-form-neu" onSubmit={handleSubmit}>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
          />
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
          <textarea
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            placeholder="Nachricht"
            required
          />
          {/* ReCaptcha v2 Checkbox */}
          <div className="g-recaptcha" data-sitekey={API_KEY_CAPTCHA}></div>

          <button type="submit">Senden</button>

          <p>{status}</p>
          {successMessage && <div className="success">{successMessage}</div>}
          {errorMessage && <div className="error">{errorMessage}</div>}
        </form>
      )}
    </div>
  );
}
