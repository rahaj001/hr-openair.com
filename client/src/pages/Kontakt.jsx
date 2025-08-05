import React, { useRef, useState, useEffect } from 'react';
import axios from "axios";


export default function Kontakt() {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const API_URL = import.meta.env.VITE_API_URL || "https://hr-openair-backend-com.onrender.com";
  const CAPTCHA_KEY = import.meta.env.VITE_API_KEY_CAPTCHA;

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${CAPTCHA_KEY}`;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = await window.grecaptcha.execute(CAPTCHA_KEY, { action: "submit" });

      const res = await axios.post(`${API_URL}/api/contact`, {
        ...formData,
        token,
      });

      if (res.status === 200) {
        setSuccessMessage("Nachricht erfolgreich gesendet.");
        setStatus(res.data.message || "Nachricht erfolgreich gesendet.");
        setFormData({ name: "", email: "", message: "" });
        window.grecaptcha.reset();
        setSent(true);
        setTimeout(() => setSent(false), 7000);
      }
    } catch (error) {
      console.error("Fehler beim Senden:", error);
      setErrorMessage("Fehler beim Senden. Bitte versuchen Sie es später erneut.");
    }
  };

  return (
    <div className="page">
      <h1>Kontakt</h1>
      {sent ? (
        <p className="success-message">Danke für deine Nachricht!</p>
      ) : (
        <form ref={form} className="contact-form" onSubmit={handleSubmit}>
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
          <button type="submit">Senden</button>
          {status && <p>{status}</p>}
          {successMessage && <div className="success">{successMessage}</div>}
          {errorMessage && <div className="error">{errorMessage}</div>}
        </form>
      )}
    </div>
  );
}
