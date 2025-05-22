import React, { useRef , useState , useEffect} from 'react';
import axios from "axios";
import { sendEmail } from '../utils/emailService'; // importieren


export default function Kontakt() {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
const [errorMessage, setErrorMessage] = useState("");
  const [data, setData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const API_URL = import.meta.env.VITE_API_URL;
  const API_KEY_CAPTCHA = import.meta.env.VITE_API_KEY_CAPTCHA;

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

   useEffect(() => {
  const onScroll = () => {
    const header = document.querySelector(".header-top");
    if (header) {
        header.classList.add("shrink");
    }
  };

 onScroll();
}, []);


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

    const token = window.grecaptcha.getResponse();
    if (!token) {
      setStatus("Bitte bestätigen Sie, dass Sie kein Roboter sind.");
      return;
    }

    try {
      const res = await axios.post(`${API_URL}/api/contact`, {
        ...formData,
        token,
      });

      if (res.status === 200) {
        setSuccessMessage("Nachricht erfolgreich gesendet.");
           // axios gibt Daten direkt in res.data
    setStatus(res.data.message || "Nachricht erfolgreich gesendet.");
    window.grecaptcha.reset(); // reCAPTCHA zurücksetzen
      console.log("Antwort vom Server:", res.data);
      setFormData({ name: "", email: "", message: "", token: "" }); // Reset
    //  setErrorMessage("");
    //  setSuccessMessage("");
    //  setStatus("");
     // alert("Nachricht erfolgreich gesendet!");
      }

    
    } catch (err) {
      console.error("Fehler beim Senden:", err);
      setErrorMessage("Es gab ein Problem beim Versenden. Bitte versuchen Sie es erneut.");
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
/>   
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