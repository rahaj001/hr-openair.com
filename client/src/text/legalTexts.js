import  "../pages/Impressum.css";
const legalTexts = {
    de: {
      impressum: `
        <h2>Impressum</h2>
        <p><strong>Angaben gemäß § 5 TMG:</strong></p>
        <p>OpenAir GmbH<br>
        Musterstraße 1<br>
        12345 Musterstadt</p>
  
        <p><strong>Vertreten durch:</strong><br>
        Max Mustermann</p>
  
        <p><strong>Kontakt:</strong><br>
        Telefon: +49 123 456789<br>
        E-Mail: info@openair.de</p>
  
        <p><strong>Umsatzsteuer-ID:</strong><br>
        DE123456789</p>
      `,
    },
    en: {
      impressum: `
        <h2>Legal Notice</h2>
        <p><strong>Information according to § 5 TMG:</strong></p>
        <p>OpenAir Ltd.<br>
        Sample Street 1<br>
        12345 Sample City</p>
  
        <p><strong>Represented by:</strong><br>
        Max Sample</p>
  
        <p><strong>Contact:</strong><br>
        Phone: +49 123 456789<br>
        Email: info@openair.de</p>
  
        <p><strong>VAT ID:</strong><br>
        DE123456789</p>
      `,
    },
    fr: {
      impressum: `
        <h2>Mentions Légales</h2>
        <p><strong>Informations selon § 5 TMG :</strong></p>
        <p>OpenAir SARL<br>
        Rue Exemple 1<br>
        12345 Ville Exemple</p>
  
        <p><strong>Représenté par :</strong><br>
        Max Exemple</p>
  
        <p><strong>Contact :</strong><br>
        Téléphone : +49 123 456789<br>
        E-mail : info@openair.de</p>
  
        <p><strong>Numéro de TVA :</strong><br>
        DE123456789</p>
      `,
    },
    ar: {
      impressum: `
        <h2 style="text-align: right;">بيانات النشر</h2>
        <p style="text-align: right;"><strong>المعلومات وفقًا لـ §5 TMG:</strong></p>
        <p style="text-align: right;">شركة OpenAir<br>
        شارع المثال 1<br>
        12345 مدينة المثال</p>
  
        <p style="text-align: right;"><strong>يمثلها:</strong><br>
        ماكس مثال</p>
  
        <p style="text-align: right;"><strong>الاتصال:</strong><br>
        الهاتف: +49 123 456789<br>
        البريد الإلكتروني: info@openair.de</p>
  
        <p style="text-align: right;"><strong>رقم الضريبة:</strong><br>
        DE123456789</p>
      `,
    },
   datenschutz: {
    de: `
    <h1>Datenschutzerklärung</h1>
    <p>Ihre Daten werden nur zur Bearbeitung Ihrer Anfrage gespeichert und nicht an Dritte weitergegeben.</p>
    
    <h2>Google reCAPTCHA</h2>
    <p>
      Zum Schutz vor Missbrauch verwenden wir Google reCAPTCHA. Dabei werden möglicherweise personenbezogene Daten 
      (z. B. IP-Adresse) an Google übermittelt. Mit der Nutzung dieses Formulars stimmen Sie dem zu. 
      Mehr Infos finden Sie in der <a href="https://policies.google.com/privacy" target="_blank">Google Datenschutzerklärung</a>.
    </p>

    <h2>Cookies</h2>
    <p>
      Diese Website verwendet technisch notwendige Cookies. Diese Cookies speichern keine personenbezogenen Daten und 
      dienen nur der Funktionalität der Website.
    </p>
  `,
  en: `
    <h1>Privacy Policy</h1>
    <p>Your data will only be stored to process your request and will not be shared with third parties.</p>

    <h2>Google reCAPTCHA</h2>
    <p>
      To protect against abuse, we use Google reCAPTCHA. This may transfer personal data (e.g. IP address) to Google. 
      By using this form, you agree to this. More information can be found in the 
      <a href="https://policies.google.com/privacy" target="_blank">Google Privacy Policy</a>.
    </p>

    <h2>Cookies</h2>
    <p>
      This website uses technically necessary cookies only. These do not store personal data and serve only for website functionality.
    </p>
  `,
  fr: `
    <h1>Politique de confidentialité</h1>
    <p>Vos données ne sont enregistrées que pour traiter votre demande et ne sont pas transmises à des tiers.</p>

    <h2>Google reCAPTCHA</h2>
    <p>
      Pour se protéger contre les abus, nous utilisons Google reCAPTCHA. Cela peut entraîner la transmission de données 
      personnelles (par ex. adresse IP) à Google. En utilisant ce formulaire, vous acceptez cela. 
      Pour plus d'informations, veuillez consulter la 
      <a href="https://policies.google.com/privacy" target="_blank">politique de confidentialité de Google</a>.
    </p>

    <h2>Cookies</h2>
    <p>
      Ce site utilise uniquement des cookies techniquement nécessaires. Ces cookies ne stockent aucune donnée personnelle 
      et sont utilisés uniquement pour assurer le bon fonctionnement du site.
    </p>
  `,

  ar: `
    <h1>سياسة الخصوصية</h1>
    <p>يتم حفظ بياناتك فقط لمعالجة طلبك ولا يتم مشاركتها مع أطراف ثالثة.</p>

    <h2>Google reCAPTCHA</h2>
    <p>
      لحمايتك من الاستخدام السيئ، نستخدم خدمة Google reCAPTCHA. قد يتم إرسال بيانات شخصية (مثل عنوان الـ IP) إلى Google. 
      باستخدامك لهذا النموذج، فإنك توافق على ذلك. 
      لمزيد من المعلومات، راجع 
      <a href="https://policies.google.com/privacy" target="_blank">سياسة الخصوصية من Google</a>.
    </p>

    <h2>ملفات تعريف الارتباط (Cookies)</h2>
    <p>
      يستخدم هذا الموقع ملفات تعريف الارتباط الضرورية فقط من الناحية الفنية. لا يتم حفظ أي بيانات شخصية، 
      وتُستخدم فقط لوظائف الموقع.
    </p>
  `,  
},
cookies: {
  de: `
    <h2>Cookie-Richtlinie</h2>
    <p>Diese Website verwendet Cookies, um die Benutzerfreundlichkeit zu verbessern und bestimmte Funktionen zu ermöglichen.</p>
    <p>Cookies sind kleine Textdateien, die auf Ihrem Gerät gespeichert werden. Sie helfen uns, Ihre Einstellungen zu speichern und statistische Daten zu erfassen.</p>
    <p>Sie können die Verwendung von Cookies in Ihrem Browser deaktivieren. Beachten Sie jedoch, dass einige Funktionen der Website dann möglicherweise eingeschränkt sind.</p>
    <h3>Arten von verwendeten Cookies:</h3>
    <ul>
      <li>Notwendige Cookies: Für die grundlegende Funktion der Website erforderlich.</li>
      <li>Statistik-Cookies: Helfen uns, das Nutzerverhalten anonym zu analysieren.</li>
      <li>Marketing-Cookies: Können verwendet werden, um Ihnen relevante Inhalte anzuzeigen.</li>
    </ul>
    <h2>Werbung</h2>
    <p>
    Wir verwenden Drittanbieter (z. B. Google AdSense), um Werbung anzuzeigen.
    Diese Anbieter können Cookies setzen, um relevante Anzeigen bereitzustellen.
    Sie können Ihre Zustimmung jederzeit widerrufen.
    </p>

  `,

  ar: `
    <h2>سياسة ملفات تعريف الارتباط</h2>
    <p>يستخدم هذا الموقع ملفات تعريف الارتباط لتحسين تجربة المستخدم وتوفير بعض الوظائف.</p>
    <p>ملفات تعريف الارتباط هي ملفات نصية صغيرة تُخزَّن على جهازك وتساعدنا على حفظ الإعدادات وجمع بيانات إحصائية.</p>
    <p>يمكنك تعطيل استخدام ملفات تعريف الارتباط في متصفحك، لكن بعض وظائف الموقع قد تكون محدودة.</p>
    <h3>أنواع ملفات تعريف الارتباط المستخدمة:</h3>
    <ul>
      <li>الضرورية: لتشغيل الموقع بشكل أساسي.</li>
      <li>الإحصائية: لتحليل الاستخدام بطريقة مجهولة.</li>
      <li>التسويقية: لعرض محتوى يتناسب مع اهتماماتك.</li>
    </ul>
  `,

  fr: `
    <h2>Politique relative aux cookies</h2>
    <p>Ce site utilise des cookies pour améliorer l’expérience utilisateur et fournir certaines fonctionnalités.</p>
    <p>Les cookies sont de petits fichiers texte enregistrés sur votre appareil. Ils nous aident à mémoriser vos préférences et à collecter des données statistiques.</p>
    <p>Vous pouvez désactiver les cookies dans les paramètres de votre navigateur, mais certaines fonctionnalités du site pourraient ne plus être disponibles.</p>
    <h3>Types de cookies utilisés :</h3>
    <ul>
      <li>Cookies nécessaires : Indispensables pour le fonctionnement du site.</li>
      <li>Cookies statistiques : Pour analyser l’utilisation du site de manière anonyme.</li>
      <li>Cookies marketing : Pour vous proposer du contenu pertinent.</li>
    </ul>
  `,
},
  };
  
  export default legalTexts;
  