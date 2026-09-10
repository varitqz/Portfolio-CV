(() => {
  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];

  const safeStorage = {
    get(key) { try { return window.localStorage.getItem(key); } catch { return null; } },
    set(key, value) { try { window.localStorage.setItem(key, value); } catch {} }
  };

  const state = {
    lang: safeStorage.get('portfolio-lang') || (navigator.language?.toLowerCase().startsWith('de') ? 'de' : 'en'),
    theme: safeStorage.get('portfolio-theme') || 'dark',
    paletteIndex: 0,
  };

  const translations = {
    de: {
      'nav.experience':'Erfahrung','nav.projects':'Projekte','nav.skills':'Skills','nav.learning':'Lernpfad','nav.contact':'Kontakt',
      'hero.status':'Hamburg · offen für passende Junior-/Next-Step-Rollen','hero.kicker':'IT SUPPORT SPECIALIST · CLOUD SECURITY FOCUS',
      'hero.headlineA':'Ich löse heute','hero.headlineB':'IT-Probleme.','hero.headlineC':'Ich baue für morgen','hero.headlineD':'Security-Skills.',
      'hero.lead':'IT-Support-Spezialist mit praktischer Erfahrung im 1st-Level-Support und in der technischen Anwenderbetreuung. Mein nächster Schritt: Microsoft Azure, Identity, KQL und Cloud Security nicht nur lernen, sondern sichtbar bauen.',
      'hero.ctaProjects':'Projekte ansehen','hero.ctaCv':'CV drucken / als PDF sichern','hero.ctaPalette':'Quick actions',
      'hero.metaRole':'Aktuelle Rolle','hero.metaFocus':'Aktueller Fokus','hero.metaTarget':'Zielrichtung','hero.metaTargetSmall':'Hamburg · onsite / hybrid bevorzugt','hero.signalTitle':'CURRENT SIGNAL',
      'levels.active':'aktiv','levels.handsOn':'hands-on','levels.building':'aufbauend','levels.preparing':'Vorbereitung',
      'facts.years':'Jahr','facts.support':'professioneller IT-Support','facts.questions':'eigene AZ-900 / SC-900 Trainingsfragen im Lab','facts.pillars':'Security-Schwerpunkte: Identity · Detection · IaC','facts.languages':'Sprachen: Deutsch · Englisch',
      'experience.kicker':'BERUFSERFAHRUNG','experience.title':'Vom Service Desk Richtung Security.','experience.intro':'Mein Fundament ist echter Anwendersupport: Störungen eingrenzen, sauber dokumentieren, priorisieren, eskalieren und technische Zusammenhänge verständlich machen.','experience.current':'CURRENT','common.present':'heute',
      'experience.dgText':'Analyse von Fehlerbildern und Ableitung erster Maßnahmen zur schnellen Wiederherstellung des IT-Betriebs. Bearbeitung von Supportanfragen per Telefon, E-Mail und Ticket nach Priorität; Erstdiagnosen bei Netzwerk-, Drucker- und Hardwareproblemen; Dokumentation und Koordination komplexerer Fälle an nachgelagerte Fachbereiche.',
      'experience.allgeierRole':'Mitarbeiter 1st-Level-Support','experience.allgeierText':'1st-Level-Support im Dataport-Umfeld per Telefon und E-Mail. Unterstützung bei Windows-Client, Outlook, Intranet, Netzwerk sowie Hardware-/Softwarethemen; Shadowing und Einarbeitung neuer Kollegen; strukturierte Weiterleitung komplexerer Fälle.',
      'experience.salesRole':'Verkäufer','experience.salesText':'Beratung zu Mobilfunkverträgen, Endgeräten und Serviceleistungen sowie sorgfältige Erfassung und Prüfung von Kundendaten.',
      'projects.kicker':'PROJEKTE & LABS','projects.title':'Beweise statt nur Buzzwords.','projects.intro':'Alles hier ist als Lern- oder Portfolioarbeit gekennzeichnet. Keine erfundene Berufserfahrung, keine überzogenen Skill-Prozente.','projects.flagship':'FLAGSHIP LAB',
      'projects.cloudLabSummary':'Local-first Trainingsplattform mit 100 eigenen AZ-900/SC-900-Fragen, Exam Mode, Weak-Area-Tracking, Identity-&-Access- und Zero-Trust-Investigations, KQL-Detections und Bicep-Beispielen.','projects.openLive':'Live öffnen ↗',
      'projects.signinTitle':'Failed Sign-in Triage','projects.signinText':'Fehlgeschlagene Anmeldungen nach Benutzer und IP zusammenfassen, Zeitfenster setzen, Schwellenwerte prüfen und auffällige Quellen priorisieren.',
      'projects.rolesTitle':'Role Assignment Investigation','projects.rolesText':'AuditLogs und RoleManagement nutzen, um nachzuvollziehen, wer eine Rolle wann und an welches Ziel vergeben hat — inklusive InitiatedBy und modifiedProperties.',
      'projects.endpointTitle':'Endpoint Discovery Analysis','projects.endpointText':'ProcessEvents in einer Trainingsumgebung analysieren, Discovery-Kommandos wie whoami identifizieren und Verhalten auf MITRE ATT&CK-Techniken abbilden.','projects.showQuery':'Query ansehen →',
      'skills.kicker':'SKILL MAP','skills.title':'Was ich kann — und wie belastbar.','skills.intro':'Die Kategorien trennen Berufspraxis, Hands-on-Labs und aktives Lernen. Das ist für Recruiter aussagekräftiger als willkürliche 80%-Balken.','skills.filterAll':'Alle','skills.filterProfessional':'Berufspraxis','skills.filterHandsOn':'Hands-on Labs','skills.filterLearning':'Aktives Lernen','skills.professional':'BERUFSPRAXIS','skills.handsOn':'HANDS-ON LABS','skills.learning':'AKTIVES LERNEN',
      'learning.kicker':'LEARNING PATH','learning.title':'Der nächste Schritt ist sichtbar.','learning.intro':'Ich nutze Labs, Wiederholung und dokumentierte Projekte, damit aus Theorie belastbare Praxis wird.','learning.foundationLabel':'FOUNDATION','learning.foundationTitle':'Support & Troubleshooting','learning.foundationText':'Professioneller 1st-Level-Support, Windows, Ticketing, Eskalation, Anwenderkommunikation und technische Fehleranalyse.','learning.currentLabel':'CURRENT BUILD','learning.currentText':'Cloud-Grundlagen mit Security-Fokus: Entra ID, RBAC, Logs, Investigations, Zero Trust und Infrastructure as Code.','learning.nextLabel':'NEXT VALIDATION','learning.nextText':'Zertifizierungswissen systematisch festigen und parallel weiter über Labs und Portfolio-Projekte nachweisen.','learning.targetLabel':'TARGET','learning.targetText':'Junior-Rolle oder sinnvoller Zwischenschritt in Hamburg, der Security-Nähe, Microsoft-Technologien und echte technische Tiefe verbindet.','learning.principlesKicker':'WORKING STYLE','learning.principlesTitle':'Wie ich lerne und arbeite','learning.p1Title':'Investigate','learning.p1Text':'Nicht raten — Daten, Logs und Symptome eingrenzen.','learning.p2Title':'Document','learning.p2Text':'Lösungswege so festhalten, dass sie wiederholbar werden.','learning.p3Title':'Build','learning.p3Text':'Theorie über Labs, Code und kleine Systeme sichtbar machen.','learning.p4Title':'Explain','learning.p4Text':'Technik verständlich kommunizieren — besonders im Support und im Incident-Kontext.',
      'education.kicker':'AUSBILDUNG & MEHR','education.title':'Technik mit Serviceverständnis.','education.degree':'Einzelhandelskaufmann','education.languagesLabel':'SPRACHEN','education.german':'Muttersprache','education.english':'Sehr gute Kenntnisse','education.interestsLabel':'INTERESSEN','education.interestsTitle':'Beyond the ticket queue','education.interests':'Lesen · Technik · Homelabs · Musik produzieren',
      'contact.kicker':'LET\'S CONNECT','contact.title':'Die passende nächste Rolle darf technisch sein.','contact.text':'Ich suche langfristig den Weg in Cloud Security / SOC und bin offen für permanente Rollen in Hamburg, die dazu sinnvoll hinführen — besonders mit Microsoft-, Identity-, Security- oder stärkerem 2nd-Level-/Admin-Anteil.',
      'terminal.whoami':'Jannik Richter — IT Support Specialist auf dem Weg Richtung Cloud Security.','terminal.help':'Try: skills, projects, experience, contact, clear',
      'footer.note':'Gebaut als interaktiver CV — ohne Tracker, Cookies oder externe Frameworks.','footer.backTop':'Nach oben ↑',
      'palette.projects':'Zu Projekten springen','palette.skills':'Skills öffnen','palette.email':'E-Mail kopieren','palette.print':'CV drucken / PDF sichern','palette.recruiter':'Recruiter View umschalten','palette.hint':'Tipp: Mit ↑ ↓ navigieren, Enter ausführen.'
    },
    en: {
      'nav.experience':'Experience','nav.projects':'Projects','nav.skills':'Skills','nav.learning':'Learning path','nav.contact':'Contact',
      'hero.status':'Hamburg · open to relevant junior / next-step roles','hero.kicker':'IT SUPPORT SPECIALIST · CLOUD SECURITY FOCUS',
      'hero.headlineA':'Today I solve','hero.headlineB':'IT problems.','hero.headlineC':'For tomorrow I build','hero.headlineD':'security skills.',
      'hero.lead':'IT Support Specialist with hands-on experience in first-line support and technical user assistance. My next step: turn Microsoft Azure, identity, KQL and cloud security knowledge into visible, practical work — not just theory.',
      'hero.ctaProjects':'View projects','hero.ctaCv':'Print / save CV as PDF','hero.ctaPalette':'Quick actions',
      'hero.metaRole':'Current role','hero.metaFocus':'Current focus','hero.metaTarget':'Direction','hero.metaTargetSmall':'Hamburg · onsite / hybrid preferred','hero.signalTitle':'CURRENT SIGNAL',
      'levels.active':'active','levels.handsOn':'hands-on','levels.building':'building','levels.preparing':'preparing',
      'facts.years':'year','facts.support':'of professional IT support','facts.questions':'original AZ-900 / SC-900 training questions in my lab','facts.pillars':'security pillars: Identity · Detection · IaC','facts.languages':'languages: German · English',
      'experience.kicker':'EXPERIENCE','experience.title':'From Service Desk toward Security.','experience.intro':'My foundation is real user support: isolate issues, document clearly, prioritize, escalate and explain technical context in a way people can act on.','experience.current':'CURRENT','common.present':'present',
      'experience.dgText':'Analyze incident patterns and derive first actions to restore IT operations quickly. Handle support requests by phone, email and ticket based on priority; perform initial diagnosis of network, printer and hardware issues; document findings and coordinate more complex cases with downstream specialist teams.',
      'experience.allgeierRole':'1st-Level Support Specialist','experience.allgeierText':'First-line support in the Dataport environment via phone and email. Assisted with Windows client, Outlook, intranet, network and hardware/software topics; supported onboarding through shadowing; escalated more complex cases in a structured way.',
      'experience.salesRole':'Sales Associate','experience.salesText':'Advised customers on mobile contracts, devices and service options while accurately capturing and validating customer data.',
      'projects.kicker':'PROJECTS & LABS','projects.title':'Evidence, not just buzzwords.','projects.intro':'Everything here is clearly labelled as learning or portfolio work. No invented professional experience and no arbitrary skill percentages.','projects.flagship':'FLAGSHIP LAB',
      'projects.cloudLabSummary':'Local-first cloud security training platform with 100 original AZ-900/SC-900 questions, exam mode, weak-area tracking, identity & access and Zero Trust investigations, KQL detections and Bicep examples.','projects.openLive':'Open live ↗',
      'projects.signinTitle':'Failed Sign-in Triage','projects.signinText':'Summarize failed sign-ins by user and IP, apply a time window, check thresholds and prioritize suspicious sources.',
      'projects.rolesTitle':'Role Assignment Investigation','projects.rolesText':'Use AuditLogs and RoleManagement to trace who assigned a role, when it happened and which target was affected — including InitiatedBy and modifiedProperties.',
      'projects.endpointTitle':'Endpoint Discovery Analysis','projects.endpointText':'Analyze ProcessEvents in a training environment, identify discovery commands such as whoami and map behavior to MITRE ATT&CK techniques.','projects.showQuery':'View query →',
      'skills.kicker':'SKILL MAP','skills.title':'What I can do — and at what evidence level.','skills.intro':'The categories separate professional experience, hands-on labs and active learning. That is more useful to recruiters than arbitrary 80% progress bars.','skills.filterAll':'All','skills.filterProfessional':'Professional','skills.filterHandsOn':'Hands-on labs','skills.filterLearning':'Active learning','skills.professional':'PROFESSIONAL','skills.handsOn':'HANDS-ON LABS','skills.learning':'ACTIVE LEARNING',
      'learning.kicker':'LEARNING PATH','learning.title':'The next step is visible.','learning.intro':'I use labs, repetition and documented projects to turn theory into repeatable practical capability.','learning.foundationLabel':'FOUNDATION','learning.foundationTitle':'Support & Troubleshooting','learning.foundationText':'Professional first-line support, Windows, ticketing, escalation, user communication and technical troubleshooting.','learning.currentLabel':'CURRENT BUILD','learning.currentText':'Cloud foundations with a security focus: Entra ID, RBAC, logs, investigations, Zero Trust and infrastructure as code.','learning.nextLabel':'NEXT VALIDATION','learning.nextText':'Systematically consolidate certification knowledge while continuing to prove it through labs and portfolio projects.','learning.targetLabel':'TARGET','learning.targetText':'A junior role or strong stepping-stone role in Hamburg that combines security proximity, Microsoft technology and deeper technical work.','learning.principlesKicker':'WORKING STYLE','learning.principlesTitle':'How I learn and work','learning.p1Title':'Investigate','learning.p1Text':'Do not guess — narrow down data, logs and symptoms.','learning.p2Title':'Document','learning.p2Text':'Capture solution paths so they become repeatable.','learning.p3Title':'Build','learning.p3Text':'Make theory visible through labs, code and small systems.','learning.p4Title':'Explain','learning.p4Text':'Communicate technical context clearly — especially in support and incident work.',
      'education.kicker':'EDUCATION & MORE','education.title':'Technical growth with a service mindset.','education.degree':'Retail Management Apprenticeship','education.languagesLabel':'LANGUAGES','education.german':'Native','education.english':'Very good proficiency','education.interestsLabel':'INTERESTS','education.interestsTitle':'Beyond the ticket queue','education.interests':'Reading · technology · homelabs · music production',
      'contact.kicker':'LET\'S CONNECT','contact.title':'The right next role can be technical.','contact.text':'Long term, I am building toward Cloud Security / SOC and I am open to permanent roles in Hamburg that move me there in a meaningful way — especially roles with Microsoft, identity, security or stronger second-line / administration exposure.',
      'terminal.whoami':'Jannik Richter — IT Support Specialist building toward Cloud Security.','terminal.help':'Try: skills, projects, experience, contact, clear',
      'footer.note':'Built as an interactive CV — no trackers, cookies or external frameworks.','footer.backTop':'Back to top ↑',
      'palette.projects':'Jump to projects','palette.skills':'Open skills','palette.email':'Copy email','palette.print':'Print / save CV as PDF','palette.recruiter':'Toggle recruiter view','palette.hint':'Tip: use ↑ ↓ to navigate, Enter to run.'
    }
  };

  const queries = {
    signin: {
      title: 'Failed Sign-in Triage',
      code: `SigninLogs\n| where TimeGenerated > ago(1h)\n| where ResultType != 0\n| summarize Attempts = count() by UserPrincipalName, IPAddress\n| where Attempts > 10\n| order by Attempts desc`,
      note: {
        de: 'Lab-Pattern: fehlgeschlagene Logins verdichten, Schwellenwerte anwenden und auffällige Benutzer/IP-Kombinationen zuerst untersuchen.',
        en: 'Lab pattern: aggregate failed sign-ins, apply thresholds and investigate unusual user/IP combinations first.'
      }
    },
    roles: {
      title: 'Role Assignment Investigation',
      code: `AuditLogs\n| where TimeGenerated > ago(24h)\n| where Category == "RoleManagement"\n| where OperationName == "Add member to role"\n| project TimeGenerated, OperationName, InitiatedBy, TargetResources, Result\n| order by TimeGenerated desc`,
      note: {
        de: 'Lab-Pattern: Rollenänderungen zeitlich eingrenzen und Initiator, Zielressource und Ergebnis sichtbar machen.',
        en: 'Lab pattern: scope role changes by time and expose initiator, target resource and result.'
      }
    },
    endpoint: {
      title: 'Endpoint Discovery Analysis',
      code: `ProcessEvents\n| where hostname == "UL0M-MACHINE"\n| summarize Count = count() by process_commandline\n| order by Count desc`,
      note: {
        de: 'KC7-Trainingskontext: Prozessbefehle gruppieren, Discovery-Kommandos wie whoami erkennen und anschließend mit MITRE ATT&CK einordnen.',
        en: 'KC7 training context: group process commands, identify discovery activity such as whoami and map it to MITRE ATT&CK.'
      }
    }
  };

  const setLanguage = (lang) => {
    state.lang = lang;
    safeStorage.set('portfolio-lang', lang);
    document.documentElement.lang = lang;
    $('#languageToggle').textContent = lang.toUpperCase();
    $$('[data-i18n]').forEach((el) => {
      const key = el.dataset.i18n;
      if (translations[lang][key]) el.textContent = translations[lang][key];
    });
    const openQuery = $('#queryDrawer:not([hidden])');
    if (openQuery) {
      const key = openQuery.dataset.query;
      if (queries[key]) $('#queryNote').textContent = queries[key].note[lang];
    }
  };

  const setTheme = (theme) => {
    state.theme = theme;
    document.documentElement.dataset.theme = theme;
    safeStorage.set('portfolio-theme', theme);
  };

  const toast = (message) => {
    const el = $('#toast');
    el.textContent = message;
    el.classList.add('show');
    clearTimeout(toast.t);
    toast.t = setTimeout(() => el.classList.remove('show'), 1800);
  };

  const closeMenu = () => {
    $('#mobileMenu').hidden = true;
    $('#menuToggle').setAttribute('aria-expanded', 'false');
  };

  $('#languageToggle').addEventListener('click', () => setLanguage(state.lang === 'de' ? 'en' : 'de'));
  $('#themeToggle').addEventListener('click', () => setTheme(state.theme === 'dark' ? 'light' : 'dark'));
  $('#menuToggle').addEventListener('click', () => {
    const menu = $('#mobileMenu');
    menu.hidden = !menu.hidden;
    $('#menuToggle').setAttribute('aria-expanded', String(!menu.hidden));
  });
  $$('#mobileMenu a').forEach(a => a.addEventListener('click', closeMenu));
  $('#printCv').addEventListener('click', () => window.print());

  // Reveal animation
  const revealEls = $$('.reveal');
  revealEls.forEach(el => el.classList.add('reveal-ready'));
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    revealEls.forEach(el => observer.observe(el));
  } else revealEls.forEach(el => el.classList.add('is-visible'));

  // Skill filters
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const skillMatrix = $('.skill-matrix');

  const applySkillFilter = (filter, animate = true) => {
    const cards = $$('.skill-card');
    if (!cards.length) return;

    if (!animate || prefersReducedMotion.matches || !skillMatrix) {
      cards.forEach(card => {
        card.classList.remove('is-leaving', 'is-entering');
        card.classList.toggle('is-hidden', filter !== 'all' && card.dataset.category !== filter);
      });
      return;
    }

    clearTimeout(skillMatrix._switchTimer);
    clearTimeout(skillMatrix._cleanupTimer);

    skillMatrix.classList.add('is-switching');
    cards.forEach(card => {
      if (!card.classList.contains('is-hidden')) card.classList.add('is-leaving');
      card.classList.remove('is-entering');
    });

    skillMatrix._switchTimer = window.setTimeout(() => {
      cards.forEach(card => {
        const shouldShow = filter === 'all' || card.dataset.category === filter;
        card.classList.remove('is-leaving');
        card.classList.toggle('is-hidden', !shouldShow);
        if (shouldShow) {
          void card.offsetWidth;
          card.classList.add('is-entering');
        }
      });

      skillMatrix._cleanupTimer = window.setTimeout(() => {
        skillMatrix.classList.remove('is-switching');
        cards.forEach(card => card.classList.remove('is-entering'));
      }, 430);
    }, 120);
  };

  $$('.filter-button').forEach(btn => btn.addEventListener('click', () => {
    if (btn.classList.contains('active')) return;
    const filter = btn.dataset.filter;
    $$('.filter-button').forEach(b => b.classList.toggle('active', b === btn));
    applySkillFilter(filter, true);
  }));

  // Query drawer
  $$('.show-query').forEach(btn => btn.addEventListener('click', () => {
    const key = btn.dataset.query;
    const query = queries[key];
    if (!query) return;
    const drawer = $('#queryDrawer');
    drawer.dataset.query = key;
    $('#queryTitle').textContent = query.title;
    $('#queryCode').textContent = query.code;
    $('#queryNote').textContent = query.note[state.lang];
    drawer.hidden = false;
    drawer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }));
  $('#closeQuery').addEventListener('click', () => { $('#queryDrawer').hidden = true; });
  $('#copyQuery').addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText($('#queryCode').textContent);
      toast(state.lang === 'de' ? 'Query kopiert.' : 'Query copied.');
    } catch {
      toast(state.lang === 'de' ? 'Kopieren nicht verfügbar.' : 'Copy unavailable.');
    }
  });

  // Terminal
  const terminalResponses = {
    skills: {
      de: 'Professional: Service Desk, Windows, Ticketing. Labs: Azure, Entra ID, KQL, RBAC, Bicep, Git. Learning: Sentinel, Defender for Cloud.',
      en: 'Professional: Service Desk, Windows, Ticketing. Labs: Azure, Entra ID, KQL, RBAC, Bicep, Git. Learning: Sentinel, Defender for Cloud.'
    },
    projects: { de: 'Cloud Security Fundamentals Lab + KQL / Entra / KC7 investigation labs. Scrolling to projects…', en: 'Cloud Security Fundamentals Lab + KQL / Entra / KC7 investigation labs. Scrolling to projects…' },
    experience: { de: 'DATAGROUP (08/2026–heute), Allgeier Public SE (08/2025–08/2026), MFK Mobilfunkkontor (09/2024–01/2025).', en: 'DATAGROUP (08/2026–present), Allgeier Public SE (08/2025–08/2026), MFK Mobilfunkkontor (09/2024–01/2025).' },
    contact: { de: 'E-Mail: jannikr41@gmail.com · LinkedIn und GitHub sind im Kontaktbereich verlinkt.', en: 'Email: jannikr41@gmail.com · LinkedIn and GitHub are linked in the contact section.' },
    help: { de: 'Commands: skills, projects, experience, contact, whoami, clear', en: 'Commands: skills, projects, experience, contact, whoami, clear' },
    whoami: { de: 'Jannik Richter — IT Support Specialist aus Hamburg, mit Fokus auf Cloud Security.', en: 'Jannik Richter — IT Support Specialist in Hamburg, focused on Cloud Security.' }
  };

  $('#terminalForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const input = $('#terminalInput');
    const cmd = input.value.trim().toLowerCase();
    if (!cmd) return;
    const history = $('#terminalHistory');
    if (cmd === 'clear') { history.innerHTML = ''; input.value = ''; return; }
    const line = document.createElement('p');
    line.innerHTML = `<span class="prompt">$</span> <span></span>`;
    line.lastElementChild.textContent = cmd;
    history.appendChild(line);
    const out = document.createElement('p');
    out.className = 'terminal-output';
    out.textContent = terminalResponses[cmd]?.[state.lang] || (state.lang === 'de' ? `command not found: ${cmd}` : `command not found: ${cmd}`);
    history.appendChild(out);
    if (['projects','experience','skills','contact'].includes(cmd)) {
      setTimeout(() => $(`#${cmd}`)?.scrollIntoView({ behavior:'smooth' }), 350);
    }
    input.value = '';
    history.scrollTop = history.scrollHeight;
  });

  // Command palette
  const palette = $('#commandPalette');
  const paletteSearch = $('#paletteSearch');
  const paletteButtons = $$('#paletteList button');

  const openPalette = () => {
    palette.hidden = false;
    palette.setAttribute('aria-hidden','false');
    state.paletteIndex = 0;
    paletteSearch.value = '';
    filterPalette('');
    setTimeout(() => paletteSearch.focus(), 20);
  };
  const closePalette = () => {
    palette.hidden = true;
    palette.setAttribute('aria-hidden','true');
  };
  const visiblePaletteButtons = () => paletteButtons.filter(b => !b.hidden);
  const syncPaletteActive = () => {
    const visible = visiblePaletteButtons();
    if (!visible.length) return;
    state.paletteIndex = Math.max(0, Math.min(state.paletteIndex, visible.length - 1));
    paletteButtons.forEach(b => b.classList.remove('active'));
    visible[state.paletteIndex].classList.add('active');
  };
  const filterPalette = (q) => {
    const term = q.trim().toLowerCase();
    paletteButtons.forEach(b => b.hidden = term && !b.innerText.toLowerCase().includes(term));
    state.paletteIndex = 0;
    syncPaletteActive();
  };
  const runAction = async (action) => {
    closePalette();
    if (['projects','skills'].includes(action)) $(`#${action}`)?.scrollIntoView({behavior:'smooth'});
    if (action === 'copy-email') {
      try { await navigator.clipboard.writeText('jannikr41@gmail.com'); toast(state.lang === 'de' ? 'E-Mail kopiert.' : 'Email copied.'); } catch { location.href='mailto:jannikr41@gmail.com'; }
    }
    if (action === 'linkedin') window.open('https://www.linkedin.com/in/jannik-richter-41b629373','_blank','noopener,noreferrer');
    if (action === 'github') window.open('https://github.com/varitqz','_blank','noopener,noreferrer');
    if (action === 'print') window.print();
    if (action === 'recruiter') {
      document.body.classList.toggle('recruiter-mode');
      toast(document.body.classList.contains('recruiter-mode') ? 'Recruiter View: ON' : 'Recruiter View: OFF');
    }
  };

  $('#openPalette').addEventListener('click', openPalette);
  $$('[data-close-palette]').forEach(el => el.addEventListener('click', closePalette));
  paletteSearch.addEventListener('input', e => filterPalette(e.target.value));
  paletteButtons.forEach(btn => btn.addEventListener('click', () => runAction(btn.dataset.action)));

  document.addEventListener('keydown', (e) => {
    const metaK = (e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k';
    if (metaK) { e.preventDefault(); palette.hidden ? openPalette() : closePalette(); return; }
    if (!palette.hidden) {
      if (e.key === 'Escape') { e.preventDefault(); closePalette(); }
      if (e.key === 'ArrowDown') { e.preventDefault(); state.paletteIndex++; syncPaletteActive(); }
      if (e.key === 'ArrowUp') { e.preventDefault(); state.paletteIndex--; syncPaletteActive(); }
      if (e.key === 'Enter' && document.activeElement === paletteSearch) { e.preventDefault(); visiblePaletteButtons()[state.paletteIndex]?.click(); }
    }
  });

  // Set initial state
  setTheme(state.theme);
  setLanguage(state.lang);
  syncPaletteActive();
})();
