import React, { useRef , useState } from 'react';
import axios from "axios";
import { sendEmail } from '../utils/emailService'; // importieren

export default function Kontakt() {
  const form = useRef();
  const [data, setData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  //const handleChange = e => setData({ ...data, [e.target.name]: e.target.value });
  //const handleSubmit1 = e => { e.preventDefault(); setSent(true); setData({ name: '', email: '', message: '' }); };

  const handleSubmit2 = (e) => {
    e.preventDefault();

    sendEmail(form)
      .then((result) => {
        console.log('Success:', result.text);
        alert('Nachricht erfolgreich gesendet!');
        form.current.reset();
      })
      .catch((error) => {
        console.error('Fehler:', error.text);
        alert('Fehler beim Senden.');
      });
  };

  /*const handleSubmit = async (e) => {
    e.preventDefault();
  
    const res = await fetch('http://localhost:5000/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message }),
    });
  
    const data = await res.json();
    if (res.ok) alert('Nachricht gesendet!');
    else alert('Fehler: ' + data.error);
  };
  */

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/send", formData);
      console.log("Antwort vom Server:", res.data);
      alert("Nachricht erfolgreich gesendet!");
    } catch (err) {
      console.error("Fehler beim Senden:", err);
      alert("Fehler beim Senden!");
    }
  };

  return (
    <div className="page">
      <h1>Kontakt</h1>
      {sent ? <p className="success-message">Danke für deine Nachricht!</p> : (
        <form ref={form} className="contact-form" onSubmit={handleSubmit}>
          <input name="name" value={formData.name} onChange={handleChange} placeholder="Name"  required />
          <input name="email" type="email" value={formData.email} onChange={handleChange}placeholder="Email"   required />
          <textarea
  name="message"
  rows="5"
  value={formData.message}
  onChange={handleChange}
  placeholder="Nachricht"
  required
/>          <button type="submit">Senden</button>
        </form>
      )}
    </div>
  );
}