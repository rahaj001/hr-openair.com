const AdBanner = ({ consentGiven }) => {
    if (!consentGiven) {
      return (
        <div style={placeholderStyle}>
          <p>Werbung wird angezeigt, sobald Sie Cookies akzeptieren.</p>
        </div>
      );
    }
  
    return (
      <div style={adStyle}>
        {/* Beispiel: Google AdSense-Script einbinden */}
        <ins className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
          data-ad-slot="YYYYYYYYYY"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
        <script dangerouslySetInnerHTML={{
          __html: `(adsbygoogle = window.adsbygoogle || []).push({});`
        }} />
      </div>
    );
  };
  
  const placeholderStyle = {
    backgroundColor: "#eee",
    padding: "1rem",
    textAlign: "center",
    fontSize: "0.9rem",
    border: "1px dashed #ccc",
  };
  
  const adStyle = {
    margin: "1rem 0",
    textAlign: "center",
  };
  
  export default AdBanner;
  