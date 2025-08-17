import React, { useState } from "react";
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

  const API_URL = import.meta.env.VITE_API_URL; // z.B. https://hr-openair-backend-com.onrender.com

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sende...");

    try {
      // Einfach direkt an Backend senden, ohne Captcha
      const res = await axios.post(`${API_URL}/api/contact`, formData);

      if (res.status === 200) {
        setSuccessMessage("Nachricht erfolgreich gesendet!");
        setStatus("");
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (err) {
      console.error("Fehler beim Kontaktformular:", err);
      setErrorMessage(
        err.response?.data?.message || "Fehler beim Senden der Nachricht."
      );
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
        <button type="submit">Senden</button>
      </form>

      {status && <p>{status}</p>}
      {successMessage && <p className="success">{successMessage}</p>}
      {errorMessage && <p className="error">{errorMessage}</p>}
    </div>
  );
}
