const messages = {
  Navigation: {
    home: 'Startseite',
    overview: 'Überblick',
    project_history: 'Projektverlauf',
  },
  HomePage: {
    aru: {
      title: 'Hi <hand></hand> ich bin <p>Aru</p>',
      subtitle: 'Full-Stack Softwareentwickler',
      projects_done: '🚀 Projekte umgesetzt',
      teams_count: '🤝 Teams, mit denen ich gearbeitet habe',
      experience_years: '🕓 Jahre Erfahrung',
      clients_count: '🧑‍💼 Kunden, mit denen ich gearbeitet habe',
      devs_mentored: '👨‍🏫 Entwickler betreut',
      description: `
        <p>Ich übernehme volle Verantwortung für das, was ich baue – von der Idee bis zur Produktion.</p>
        <p>Ich lerne schnell, löse schwierige Probleme und liefere stabile Ergebnisse.</p>
        <p>Kein Tool, Bug oder Legacy-System hält mich auf.</p>
        <p><email>arutyunef@gmail.com</email><linkedin>LinkedIn</linkedin></p>
        <p>Basierend in Wien, Österreich 🇦🇹</p>
        <p>Fließend in Englisch 🇺🇸 und Russisch 🇷🇺, Deutsch auf mittlerem Niveau 🇩🇪 (B1)</p>
        <p>BSc in Angewandter Data Science (<uni>MODUL University</uni>)</p>
      `,
      download_cv: 'Lebenslauf herunterladen',
      download_name: 'Arutyun_Enfendzhyan_Lebenslauf.pdf',
      download_ignitix: 'Ignitix',
      download_nano: 'Nano',
      download_recommendations: 'Empfehlungsschreiben',
      recommendations: 'Empfehlungsschreiben',
    },
    project: {
      title: 'Projektverlauf',
      visit: {
        freelance: 'Live-Seite',
        work: 'Unternehmen besuchen',
      },
      languages: 'Sprachen',
      frontend: 'Frontend',
      backend: 'Backend',
      services: 'Dienste',
      freelance: '👨‍💻 Freiberuflich',
      work: '💼 Festanstellung',
    },
    projects: {
      ghosts: {
        name: 'Ghosts Art Legacy',
        description: `
        <em>Kunstportfolio & E-Commerce-Seite für die Künstlerin „Ghost“</em>
        <ul>
          <li>🏗️ Aufbau eines <strong>modularen Full-Stack-Systems</strong> mit React, Node.js, Firebase, Sanity & Stripe</li>
          <li>🎨 Entwicklung einer <strong>individuell animierten Benutzeroberfläche</strong> zur Stärkung der Markenidentität und Nutzererfahrung</li>
          <li>🚀 Veröffentlichung mit <strong>CI/CD und SEO-Optimierung</strong> für bessere Auffindbarkeit und Wachstum</li>
        </ul>
        `,
      },
      andorran: {
        name: 'Andorran Book Club',
        description: `
        <em>Buchclub-Seite für Expats in Andorra, konzipiert für Community-Wachstum und Buchverfolgung</em>
        <ul>
          <li>🏔️ UI-Design inspiriert von der andorranischen Kultur mit Fokus auf <strong>Community-Engagement</strong>, <strong>persönlicher Teilnahme</strong> und einem wachsenden <strong>Bücherarchiv</strong></li>
          <li>✍️ Individuelles Admin-Interface mit ACF zur <strong>effizienten Inhaltsverwaltung</strong> und <strong>vereinfachten Event-Aktualisierungen</strong></li>
          <li>⚙️ Schnelle und elegante Nutzererfahrung mit Fokus auf <strong>Langzeitwartbarkeit</strong> und <strong>Nutzung durch Nicht-Techniker</strong></li>
        </ul>
        `,
      },
      rodmap: {
        name: 'Rodmap',
        description: `
        <em>Rodmap ist eine Relocation-Plattform, die Nutzern mit personalisierten Schritten, Echtzeit-Admin-Support und flexiblem Inhaltssystem beim Auswandern hilft.</em>
        <ul>
          <li>🌍 Entwicklung einer vollständig responsiven Plattform mit <strong>individueller Umzugsberatung</strong> basierend auf Nutzerangaben und realen Bedingungen</li>
          <li>🧑‍💼 Erstellung eines sicheren Admin-Dashboards für <strong>Echtzeit-Kommunikation</strong>, <strong>Dokumentenprüfung</strong> und <strong>Workflow-Überwachung</strong></li>
          <li>📝 Aufbau eines modularen CMS für <strong>nicht-technische Redakteure</strong>, um <strong>dynamische Inhalte und Blogposts</strong> mit Markdown zu veröffentlichen</li>
        </ul>
        `,
      },
      ignitix: {
        name: 'Ignitix',
        description: `
        <em>Softwareentwickler · (20h/Woche)</em>
        <ul>
          <li>📦 Entwicklung und Wartung einer <strong>Android-Kurier-App</strong> mit <strong>Java, C++ und Organic Maps</strong> zur Paketverfolgung und Lieferverwaltung in mehreren Ländern</li>
          <li>🗺️ Integration eines <strong>eigenen Navigationssystems</strong> und einer <strong>Google-Maps-basierten App</strong> für Routenplanung mit <strong>React, TypeScript, Node.js</strong> und <strong>Google Maps API</strong></li>
          <li>🛠️ Mitarbeit an einer <strong>Logistik-Webplattform</strong> mit <strong>PHP (Yii2), PostgreSQL</strong> und Git, inkl. <strong>Code-Reviews</strong> und Funktionserweiterungen</li>
          <li>🌍 Anpassung und Bereitstellung regionaler App-Versionen mit <strong>Hyper-V, WSL</strong> und plattformspezifischen Anpassungen, inkl. schneller Einarbeitung in komplexe Systeme</li>
        </ul>
        `,
      },
      nano: {
        name: 'Stylink (ehemals Nano)',
        description: `
        <em>Softwareentwickler · (20h/Woche)</em>
        <ul>
          <li>🔁 Mitarbeit an <strong>Mobile (Swift, Kotlin)</strong>, <strong>Backend (Node.js, Firebase)</strong> und <strong>Web (React.js)</strong> zur Umsetzung und Wartung von Full-Stack-Features</li>
          <li>🧹 Refactoring großer Legacy-Codebasen, mit <strong>60 % weniger Codeumfang</strong> und <strong>80 % weniger Abstürzen</strong> durch modulare Architektur</li>
          <li>🚀 Verbesserung von <strong>CI/CD-Pipelines und Testabdeckung</strong>, was zu schnelleren Deployments und höherem Vertrauen in Releases führte</li>
          <li>🤝 Unterstützung eines funktionsübergreifenden Teams beim Aufbau <strong>skalierbarer Funktionen</strong> für eine führende Influencer-Marketing-Plattform</li>
        </ul>
        `,
      },
    },
  },
  GreetDialog: {
    title: 'Hey! 👋',
    description:
      'Willkommen in meinem Portfolio! Das ist nicht einfach nur eine normale Entwickler-Seite. Ich habe ein paar Extras eingebaut, um es interaktiver und unterhaltsamer zu machen. Schau dich um, sieh dir meine Projekte an oder chatte mit ArunaBot. Viel Spaß! 🚀',
    close: "Los geht's",
  },
  Footer: {
    name: 'Aru',
  },
}

export default messages
