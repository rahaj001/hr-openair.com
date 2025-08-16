// src/pages/AppsPage.jsx
import CypherboxInfos from './CypherboxInfos';
import AccInfos from './AccInfos'; // Beispiel für weitere App
// import weitere Apps hier

function AppsPage({ lang }) {
  const apps = [
    { id: 'cypherbox', component: <CypherboxInfos lang={lang} /> },
    { id: 'accinfo', component: <AccInfos lang={lang} /> },
   // { id: 'another', component: <AnotherAppInfo lang={lang} /> },
    // weitere Apps hier hinzufügen
  ];

  return (
    <div className="apps-page">
      {apps.map(app => (
        <div key={app.id} className="app-section">
          {app.component}
        </div>
      ))}
    </div>
  );
}

export default AppsPage;
