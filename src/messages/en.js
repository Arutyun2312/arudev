const messages = {
  Navigation: {
    home: 'Home',
    overview: 'Overview',
    project_history: 'Project History',
  },
  HomePage: {
    aru: {
      title: "Hello I'm <p>Aru</p>",
      subtitle: 'Full-Stack Software Engineer',
      projects_done: '🚀 Projects Deployed',
      teams_count: '🤝 Teams worked with',
      experience_years: '🕓 Years of Experience',
      clients_count: '🧑‍💼 Clients worked with',
      devs_mentored: '👨‍🏫 Developers Mentored',
      description: `
        <p>I take full responsibility for what I build — from idea to production.</p>
        <p>I learn fast, solve tough problems, and ship things that don't break.</p>
        <p>No tool, bug, or legacy system stands in my way.</p>
        <p> </p>
        <p>Based in Vienna, Austria 🇦🇹</p>
        <p>Fluent in English 🇺🇸 and Russian 🇷🇺, intermediate in German 🇩🇪 (B1)</p>
        <p>BSc in Applied Data Science (<uni>MODUL University</uni>)</p>
      `,
      download_cv: 'Download CV',
    },
    project: {
      title: 'Project History',
      visit: {
        freelance: 'Live Site',
        work: 'Visit Company',
      },
      languages: 'Languages',
      frontend: 'Frontend',
      backend: 'Backend',
      services: 'Services',
      freelance: '👨‍💻 Freelance',
      work: '💼 Work',
    },
    projects: {
      ghosts: {
        name: 'Ghosts Art Legacy',
        description:
          '<em>Bilingual art portfolio & e-commerce site for visual artist “Ghost”</em> <ul> <li>🌍 Developed a <strong>bilingual (EN/DE) portfolio & shop</strong> from scratch for global art sales</li> <li>🏗️ Built a <strong>modular full-stack system</strong> with React, Node.js, Firebase, Sanity & Stripe</li> <li>🎨 Created a <strong>custom animated UI</strong> to reflect the artist’s brand and enhance UX</li> <li>🚀 Launched with <strong>CI/CD & SEO optimization</strong> for discoverability and growth</li> </ul>',
      },
      andorran: {
        name: 'Andorran Book Club',
        description: `
        <em>Offline book club site for expats in Andorra, focused on English-language business books and local community building</em>
        <ul>
          <li>
            📚 Developed a <strong>clean, book-themed website</strong> with dedicated pages for <strong>current/previous reads</strong>, <strong>photo galleries</strong>, and
            <strong>event updates</strong>
          </li>
          <li>🎨 Designed a <strong>UI inspired by Andorran culture</strong>, balancing <strong>minimalism</strong> with regional visual identity</li>
          <li>🛠️ Built a <strong>lightweight admin system</strong> for posting books and updates, with a clear <strong>read-only interface</strong> for members</li>
          <li>
            📩 Connected <strong>Google Forms</strong> for <strong>membership screening</strong>, including <strong>email alerts</strong> and
            <strong>spreadsheet tracking</strong> for streamlined approval
          </li>
        </ul>
        `,
      },
      '400books': {
        name: '400 Books',
        description: `
        <em>Online book club for Ukrainian readers, designed to track lifelong reading goals and foster community discussion</em>
        <ul>
          <li>📚 Developed a <strong>multilingual book club site</strong> (Ukrainian/English) with a focus on <strong>lifelong reading progress</strong></li>
          <li>⏳ Implemented a <strong>400-book goal tracker</strong> with a dynamic <strong>book count & time countdown</strong> to visualize long-term progress</li>
          <li>🎨 Designed a UI with <strong>Ukrainian cultural elements</strong>, aligned with a minimalist, book-centered aesthetic</li>
          <li>
            📩 Integrated <strong>Google Forms</strong> for <strong>participant registration</strong> and <strong>Telegram group invitations</strong>, with admin alerts and
            spreadsheet sync
          </li>
        </ul>
        `,
      },
      satsolver: {
        name: 'Logic Validator',
        description:
          'SatSolver is a web application designed to solve SAT (Boolean satisfiability problem) problems. It allows users to input SAT problems in CNF (Conjunctive Normal Form) and provides solutions using various algorithms. The project is built with a focus on performance and scalability, making it suitable for both educational and practical applications.',
      },
      rodmap: {
        name: 'Rodmap',
        description:
          "Our mission is to give people the tools, support, and knowledge they need to build their future abroad. At Rodmap, we believe no one should have to navigate the challenges of relocation alone. Whether you're a student, a skilled professional, or an aspiring entrepreneur, you're not just moving to a new country, you're building a new chapter of your life.",
      },
      ignitix: {
        name: 'Ignitix',
        description: `
        <em>Software Developer · (20h/week)</em>
        <ul>
          <li>
            📦 Developed and maintained an <strong>Android courier app</strong> using <strong>Java, C++, and Organic Maps</strong>, enabling package tracking and delivery
            management across multiple countries
          </li>
          <li>
            🗺️ Led the integration of a <strong>custom navigation system</strong> and <strong>Google Maps-based app</strong> for route planning using
            <strong>React, TypeScript, Node.js</strong>, and <strong>Google Maps API</strong>
          </li>
          <li>
            🛠️ Contributed to a <strong>logistics web platform</strong> using <strong>PHP (Yii2), PostgreSQL</strong>, and Git, including <strong>code reviews</strong> and
            feature extensions
          </li>
          <li>
            🌍 Adapted and deployed multi-region app versions with <strong>Hyper-V, WSL</strong>, and platform-specific adjustments, showcasing rapid onboarding into complex
            systems
          </li>
        </ul>
        `,
      },
      nano: {
        name: 'Stylink (formerly Nano)',
        description: `
        <em>Software Developer · (20h/week)</em>
        <ul>
          <li>
            🔁 Worked across <strong>mobile (Swift, Kotlin)</strong>, <strong>backend (Node.js, Firebase)</strong>, and <strong>web (React.js)</strong> to deliver and maintain
            full-stack features
          </li>
          <li>🧹 Refactored large legacy codebases, <strong>reducing code size by 60%</strong> and <strong>crash rate by 80%</strong> through modular design and cleanup</li>
          <li>🚀 Improved <strong>CI/CD pipelines and test coverage</strong>, significantly accelerating deployment cycles and raising release confidence</li>
          <li>🤝 Supported a cross-functional team in building <strong>scalable features</strong> for a leading influencer marketing platform connecting brands and creators</li>
        </ul>
        `,
      },
    },
  },
  GreetDialog: {
    title: 'Hey there! 👋',
    description:
      "Welcome to my  portfolio! This is not just a regular dev site. I've added some extra features to make it more interactive and fun. Take a look around, check out my projects, or even chat with ArunaBot. Hope you enjoy it! 🚀",
    close: "Let's go",
  },
  Footer: {
    name: 'Aru',
  },
}

export default messages
