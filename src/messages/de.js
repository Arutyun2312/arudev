const messages = {
  Navigation: {
    home: 'Startseite',
    overview: 'Übersicht',
    project_history: 'Projektverlauf',
  },
  HomePage: {
    aru: {
      title: 'Hallo, ich bin <p>Aru</p>',
      subtitle: 'Full-Stack Softwareentwickler',
      projects_done: '🚀 Abgeschlossene Projekte',
      teams_count: '🤝 Teams, mit denen ich gearbeitet habe',
      experience_years: '🕓 Jahre Erfahrung',
      clients_count: '🧑‍💼 Kunden, mit denen ich gearbeitet habe',
      devs_mentored: '👨‍🏫 Entwickler betreut',
      description: `
        <p>Ich übernehme die volle Verantwortung für das, was ich baue – von der Idee bis zur Produktion.</p>
        <p>Ich lerne schnell, löse schwierige Probleme und liefere stabile Lösungen.</p>
        <p>Kein Tool, Bug oder Altsystem steht mir im Weg.</p>
        <p> </p>
        <p>Ansässig in Wien, Österreich 🇦🇹</p>
        <p>Fließend in Englisch 🇺🇸 und Russisch 🇷🇺, Deutsch auf mittlerem Niveau 🇩🇪 (B1)</p>
        <p>BSc in Applied Data Science (<uni>MODUL University</uni>)</p>
      `,
      download_cv: 'Lebenslauf herunterladen',
      download_ignitix: 'Ignitix',
      download_nano: 'Nano',
      download_recommendations: 'Empfehlungsschreiben',
      recommendations: 'Empfehlungsschreiben',
    },
    project: {
      title: 'Projektverlauf',
      visit: {
        freelance: 'Live-Seite',
        work: 'Zur Firma',
      },
      languages: 'Sprachen',
      frontend: 'Frontend',
      backend: 'Backend',
      services: 'Services',
      freelance: '👨‍💻 Freiberuflich',
      work: '💼 Anstellung',
    },
    projects: {
      ghosts: {
        name: 'Ghosts Art Legacy',
        description: `
        <em>Kunstportfolio & E-Commerce-Seite für die Künstlerin „Ghost“</em>
        <ul>
          <li>🏗️ Aufbau eines <strong>modularen Full-Stack-Systems</strong> mit React, Node.js, Firebase, Sanity & Stripe</li>
          <li>🎨 Erstellung einer <strong>individuell animierten UI</strong> zur Markenwahrnehmung und besseren UX</li>
          <li>🚀 Veröffentlichung mit <strong>CI/CD & SEO-Optimierung</strong> für Sichtbarkeit und Wachstum</li>
        </ul>
        `,
      },
      andorran: {
        name: 'Andorran Book Club',
        description: `
        <em>Buchclub-Plattform für Expats in Andorra, konzipiert für Community-Wachstum und Buchverfolgung</em>
        <ul>
          <li>🏔️ UI-Design inspiriert von der andorranischen Kultur mit Fokus auf <strong>Community-Engagement</strong>, <strong>persönliche Teilnahme</strong> und wachsendem <strong>Lesearchiv</strong></li>
          <li>✍️ Entwicklung eines Admin-Interfaces mit ACF für <strong>effiziente Inhaltsverwaltung</strong> und <strong>einfache Event-Updates</strong></li>
          <li>⚙️ Schnelle und elegante UX mit Fokus auf <strong>Langzeit-Wartbarkeit</strong> und <strong>Nutzung durch nicht-technische Admins</strong></li>
        </ul>
        `,
      },
      rodmap: {
        name: 'Rodmap',
        description: `
        <em>Rodmap ist eine Relocation-Plattform, die Nutzern mit personalisierten Schritten, Echtzeit-Support und flexiblem Inhaltssystem beim Auswandern hilft.</em>
        <ul>
          <li>🌍 Vollständig responsive Plattform mit <strong>individuellen Relocation-Anleitungen</strong> basierend auf Nutzereingaben und realen Bedingungen</li>
          <li>🧑‍💼 Sicheres Admin-Dashboard zur <strong>Echtzeit-Kommunikation</strong>, <strong>Dokumentenprüfung</strong> und <strong>Workflow-Verwaltung</strong></li>
          <li>📝 Modularer CMS für <strong>nicht-technische Autoren</strong> zur Veröffentlichung von <strong>dynamischen Guides und Blogartikeln</strong> mit Markdown</li>
        </ul>
        `,
      },
      ignitix: {
        name: 'Ignitix',
        description: `
        <em>Softwareentwickler · (20h/Woche)</em>
        <ul>
          <li>
            📦 Entwicklung und Wartung einer <strong>Android-Kurier-App</strong> mit <strong>Java, C++ und Organic Maps</strong> für länderübergreifendes Tracking und Zustellungsmanagement
          </li>
          <li>
            🗺️ Integration eines <strong>eigenen Navigationssystems</strong> und einer <strong>Google-Maps-basierten App</strong> für Routenplanung mit
            <strong>React, TypeScript, Node.js</strong> und <strong>Google Maps API</strong>
          </li>
          <li>
            🛠️ Mitarbeit an einer <strong>Logistik-Webplattform</strong> mit <strong>PHP (Yii2), PostgreSQL</strong> und Git inkl. <strong>Code-Reviews</strong> und
            Feature-Erweiterungen
          </li>
          <li>
            🌍 Deployment länderspezifischer App-Versionen mit <strong>Hyper-V, WSL</strong> und systemspezifischen Anpassungen – schnelle Einarbeitung in komplexe Systeme
          </li>
        </ul>
        `,
      },
      nano: {
        name: 'Stylink (ehemals Nano)',
        description: `
        <em>Softwareentwickler · (20h/Woche)</em>
        <ul>
          <li>
            🔁 Full-Stack-Entwicklung für <strong>Mobile (Swift, Kotlin)</strong>, <strong>Backend (Node.js, Firebase)</strong> und <strong>Web (React.js)</strong>
          </li>
          <li>🧹 Refaktorierung von Legacy-Codebasen mit <strong>60% weniger Code</strong> und <strong>80% weniger Abstürzen</strong> durch modulare Architektur</li>
          <li>🚀 Optimierung der <strong>CI/CD-Pipelines und Testabdeckung</strong>, deutlich schnellere Deployments und höhere Release-Sicherheit</li>
          <li>🤝 Unterstützung eines funktionsübergreifenden Teams bei der Entwicklung <strong>skalierbarer Features</strong> für eine führende Influencer-Marketing-Plattform</li>
        </ul>
        `,
      },
    },
  },
  GreetDialog: {
    title: 'Hey! 👋',
    description:
      'Willkommen in meinem Portfolio! Das hier ist nicht nur eine gewöhnliche Dev-Seite. Ich habe ein paar zusätzliche Features eingebaut, um sie interaktiver und spannender zu machen. Schau dich um, sieh dir meine Projekte an oder chatte mit ArunaBot. Viel Spaß! 🚀',
    close: 'Los geht’s',
  },
  Footer: {
    name: 'Aru',
  },
}

export default messages
