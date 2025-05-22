// src/utils/emailService.js
import emailjs from '@emailjs/browser';

export const sendEmail = (formRef) => {
  return emailjs.sendForm(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    formRef.current,
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  );
};
