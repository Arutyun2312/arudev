const messages = {
  Navigation: {
    home: 'Startseite',
    overview: 'Überblick',
    project_history: 'Projektverlauf',
  },
  HomePage: {
    aru: {
      title: 'Hallo, ich bin <p>Aru</p>',
      subtitle: 'Full-Stack Softwareentwickler',
      projects_done: '🚀 Projekte umgesetzt',
      teams_count: '🤝 Teams, mit denen ich gearbeitet habe',
      experience_years: '🕓 Jahre Erfahrung',
      clients_count: '🧑‍💼 Kunden, mit denen ich gearbeitet habe',
      devs_mentored: '👨‍🏫 Entwickler betreut',
      description: `
        <p>Ich übernehme volle Verantwortung für das, was ich baue – von der Idee bis zur Produktion.</p>
        <p>Ich lerne schnell, löse schwierige Probleme und liefere stabile Software.</p>
        <p>Kein Tool, Bug oder Altsystem stellt sich mir in den Weg.</p>
        <p> </p>
        <p>Ansässig in Wien, Österreich 🇦🇹</p>
        <p>Fließend in Englisch 🇺🇸 und Russisch 🇷🇺, Deutschkenntnisse auf mittlerem Niveau 🇩🇪 (B1)</p>
        <p>BSc in Angewandter Datenwissenschaft (<uni>MODUL University</uni>)</p>
      `,
      download_cv: 'Lebenslauf herunterladen',
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
      work: '💼 Beruflich',
    },
    projects: {
      ghosts: {
        name: 'Ghosts Art Legacy',
        description:
          '<em>Zweisprachiges Kunstportfolio & E-Commerce-Seite für die Künstlerin „Ghost“</em> <ul> <li>🌍 Entwicklung eines <strong>zweisprachigen (EN/DE) Portfolios & Shops</strong> für globalen Kunstverkauf</li> <li>🏗️ Aufbau eines <strong>modularen Full-Stack-Systems</strong> mit React, Node.js, Firebase, Sanity & Stripe</li> <li>🎨 Gestaltung einer <strong>individuellen, animierten Benutzeroberfläche</strong>, die zur Marke der Künstlerin passt</li> <li>🚀 Deployment mit <strong>CI/CD & SEO-Optimierung</strong> für Sichtbarkeit und Wachstum</li> </ul>',
      },
      andorran: {
        name: 'Andorran Book Club',
        description: `
        <em>Offline-Buchclubseite für Expats in Andorra mit Fokus auf englischsprachige Wirtschaftsbücher und Gemeinschaftsbildung</em>
        <ul>
          <li>
            📚 Entwicklung einer <strong>klaren, buchthemenbezogenen Website</strong> mit eigenen Seiten für <strong>aktuelle/frühere Bücher</strong>,
            <strong>Fotogalerien</strong> und <strong>Veranstaltungsupdates</strong>
          </li>
          <li>🎨 Design einer <strong>UI, inspiriert von andorranischer Kultur</strong>, mit Balance zwischen <strong>Minimalismus</strong> und regionaler Ästhetik</li>
          <li>🛠️ Aufbau eines <strong>leichtgewichtigen Admin-Systems</strong> für Buch- und Update-Posts mit <strong>nur-lesender Oberfläche</strong> für Mitglieder</li>
          <li>
            📩 Anbindung von <strong>Google Forms</strong> zur <strong>Mitgliederauswahl</strong> inkl. <strong>E-Mail-Benachrichtigungen</strong> und
            <strong>Tabellen-Tracking</strong> zur einfachen Freigabe
          </li>
        </ul>
        `,
      },
      '400books': {
        name: '400 Bücher',
        description: `
        <em>Online-Buchclub für ukrainische Leser zur Verfolgung langfristiger Leseziele und Förderung von Gemeinschaft</em>
        <ul>
          <li>📚 Entwicklung einer <strong>mehrsprachigen Buchclubseite</strong> (Ukrainisch/Englisch) mit Fokus auf <strong>lebenslangem Lese-Fortschritt</strong></li>
          <li>⏳ Implementierung eines <strong>400-Bücher-Zieltrackers</strong> mit dynamischem <strong>Buchzähler & Countdown</strong> zur Visualisierung</li>
          <li>🎨 Gestaltung einer UI mit <strong>ukrainischen Kulturelementen</strong> in einem minimalistischen, buchzentrierten Stil</li>
          <li>
            📩 Integration von <strong>Google Forms</strong> für <strong>Teilnehmerregistrierung</strong> und <strong>Telegram-Gruppeneinladungen</strong>, mit Admin-Alerts und
            Tabellen-Synchronisierung
          </li>
        </ul>
        `,
      },
      satsolver: {
        name: 'Logik-Validator',
        description:
          'SatSolver ist eine Webanwendung zur Lösung von SAT-Problemen (Boolesche Erfüllbarkeitsprobleme). Benutzer können SAT-Probleme in CNF (Konjunktive Normalform) eingeben und erhalten Lösungen über verschiedene Algorithmen. Das Projekt ist auf Leistung und Skalierbarkeit ausgelegt, sowohl für Bildung als auch für den praktischen Einsatz.',
      },
      rodmap: {
        name: 'Rodmap',
        description:
          'Unsere Mission ist es, Menschen Werkzeuge, Unterstützung und Wissen zu geben, um ihre Zukunft im Ausland aufzubauen. Bei Rodmap glauben wir, dass niemand die Herausforderungen einer Umsiedlung allein meistern muss. Ob Student, Fachkraft oder Unternehmer – du baust nicht nur ein neues Leben auf, du beginnst ein neues Kapitel.',
      },
      ignitix: {
        name: 'Ignitix',
        description: `
        <em>Softwareentwickler · (20h/Woche)</em>
        <ul>
          <li>
            📦 Entwicklung und Wartung einer <strong>Android-Kurier-App</strong> mit <strong>Java, C++ und Organic Maps</strong> für Paketverfolgung und Zustellmanagement in mehreren Ländern
          </li>
          <li>
            🗺️ Leitung der Integration eines <strong>eigenen Navigationssystems</strong> und einer <strong>Google-Maps-basierten App</strong> mit
            <strong>React, TypeScript, Node.js</strong> und <strong>Google Maps API</strong>
          </li>
          <li>
            🛠️ Mitarbeit an einer <strong>Logistik-Webplattform</strong> mit <strong>PHP (Yii2), PostgreSQL</strong> und Git, inkl. <strong>Code-Reviews</strong> und
            Feature-Erweiterungen
          </li>
          <li>
            🌍 Bereitstellung von App-Versionen für verschiedene Regionen mit <strong>Hyper-V, WSL</strong> und plattformspezifischen Anpassungen – schnelles Onboarding in komplexe Systeme
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
            🔁 Arbeit über <strong>Mobile (Swift, Kotlin)</strong>, <strong>Backend (Node.js, Firebase)</strong> und <strong>Web (React.js)</strong> hinweg zur Umsetzung und Wartung von Full-Stack-Features
          </li>
          <li>🧹 Refaktorierung großer Legacy-Codebasen, <strong>Reduktion des Codes um 60%</strong> und <strong>80% weniger Abstürze</strong> durch modulare Architektur</li>
          <li>🚀 Verbesserung von <strong>CI/CD-Pipelines und Testabdeckung</strong>, was Deployments beschleunigte und das Vertrauen in Releases stärkte</li>
          <li>🤝 Unterstützung eines cross-funktionalen Teams beim Aufbau <strong>skalierbarer Funktionen</strong> für eine führende Influencer-Marketing-Plattform</li>
        </ul>
        `,
      },
    },
  },
  GreetDialog: {
    title: 'Hey, hallo! 👋',
    description:
      'Willkommen in meinem Portfolio! Das ist keine gewöhnliche Dev-Seite. Ich habe ein paar zusätzliche Features eingebaut, um sie interaktiver und unterhaltsamer zu machen. Schau dich um, sieh dir meine Projekte an oder chatte mit dem ArunaBot. Viel Spaß! 🚀',
    close: 'Los geht’s',
  },
  Footer: {
    name: 'Aru',
  },
}

export default messages
