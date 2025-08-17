import React, { useState, useEffect } from "react";
import axios from "axios";
import "./KontakForm.css";

export default function Kontakt() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const API_URL = import.meta.env.VITE_API_URL; // z.B. https://dein-backend.com
  const API_KEY_CAPTCHA = import.meta.env.VITE_API_KEY_CAPTCHA; // dein reCAPTCHA SITE KEY (NICHT Secret!)

  // ✅ reCAPTCHA Script laden
  useEffect(() => {
    if (!API_KEY_CAPTCHA) {
      console.error("⚠️ Kein reCAPTCHA Site-Key gefunden!");
      return;
    }

    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${API_KEY_CAPTCHA}`;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [API_KEY_CAPTCHA]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("⏳ Nachricht wird gesendet...");
    setSuccessMessage("");
    setErrorMessage("");

    try {
     /* if (!window.grecaptcha) {
        setErrorMessage("Captcha konnte nicht geladen werden.");
        return;
      }
  */

      // ✅ Token vom reCAPTCHA holen
      const token = await window.grecaptcha.execute(API_KEY_CAPTCHA, {
        action: "submit",
      });

      if (!token) {
        setErrorMessage("⚠️ Captcha fehlgeschlagen.");
        return;
      }

      // ✅ Daten + Token an Backend senden
      const res = await axios.post(`${API_URL}/api/contact`, {
        ...formData,
        token,
      });

      if (res.status === 200) {
        setSuccessMessage("✅ Nachricht erfolgreich gesendet!");
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (err) {
      console.error("Fehler beim Kontaktformular:", err);
      setErrorMessage(
        err.response?.data?.message || "❌ Fehler beim Senden der Nachricht."
      );
    } finally {
      setStatus("");
    }
  };

  return (
    <div className="kontakt-container-neu">
      <h1>Kontakt</h1>
      <form className="contact-form-neu" onSubmit={handleSubmit}>
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
        {/* Kein sichtbares Captcha, reCAPTCHA v3 arbeitet "invisible" */}
        <button type="submit">Senden</button>
      </form>

      {status && <p>{status}</p>}
      {successMessage && <p className="success">{successMessage}</p>}
      {errorMessage && <p className="error">{errorMessage}</p>}
    </div>
  );
}
