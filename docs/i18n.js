/* MOM Shield – i18n engine
 *
 * How it works:
 *   - English is the default and lives directly in the HTML.
 *   - German translations live in the `de` object below and override the HTML.
 *   - Elements opt in with data-i18n="key" (innerHTML) or
 *     data-i18n-attr="attr:key;attr2:key2" for attribute translation.
 *   - <title> uses data-i18n="page.title" too.
 *   - Switcher: any element with data-lang-btn="de"|"en" becomes a toggle.
 *   - Selection persists in localStorage and is reflected in <html lang>.
 */
(function () {
  "use strict";

  const STORAGE_KEY = "momShieldLang";
  const SUPPORTED = ["en", "de"];
  const DEFAULT_LANG = "en";

  const T = {
    de: {
      /* ───────── shared nav/footer/switcher ───────── */
      "lang.switch.aria": "Sprache wählen",
      "lang.switch.label": "Sprache:",
      "nav.aria": "Hauptnavigation",
      "nav.problem": "Problem",
      "nav.audience": "Für wen",
      "nav.workflow": "So funktioniert's",
      "nav.products": "Produkte",
      "nav.compliance": "Datenschutz",
      "nav.cta": "Download",
      "nav.features": "Funktionen",
      "nav.proof": "Beweis",
      "nav.demo": "Demo",
      "nav.video": "Video",
      "nav.privacy": "Datenschutz",
      "nav.support": "Support",
      "nav.imprint": "Impressum",
      "footer.copyright": "© 2026 MOM Shield",
      "footer.copyright.rights": "© 2026 MOM Shield. Alle Rechte vorbehalten.",
      "footer.home": "Startseite",
      "footer.demo": "Demo-Video",
      "footer.video": "Video",
      "footer.privacy": "Datenschutz",
      "footer.support": "Support & Kontakt",
      "footer.support.short": "Support",
      "footer.imprint": "Impressum",
      "brand.alt": "MOM Shield Icon",

      /* ───────── index.html ───────── */
      "index.title": "MOM Shield — Sichere KI-Nutzung für sensible Daten",
      "index.desc": "MOM Shield maskiert personenbezogene Daten, Mandanteninformationen und Geschäftsgeheimnisse lokal in Ihrem Browser, bevor sie an ChatGPT, Claude oder Copilot gesendet werden. Für Kanzleien, Steuerberater, HR und den datensensiblen Mittelstand.",

      "hero.kicker": "Privacy Layer für sichere KI-Nutzung",
      "hero.h1": "Endlich KI nutzen — ohne sensible Daten preiszugeben.",
      "hero.copy": "MOM Shield erkennt personenbezogene Daten, Mandanteninformationen und Geschäftsgeheimnisse automatisch und ersetzt sie durch sichere Platzhalter — <strong>bevor</strong> sie an ChatGPT, Claude, Copilot oder andere KI-Tools gesendet werden. Die Originaldaten bleiben ausschließlich auf Ihrem Gerät.",
      "hero.btn.dl": "Jetzt herunterladen",
      "hero.btn.how": "So funktioniert's",
      "hero.pills.aria": "Vertrauenssignale",
      "hero.pill.1": "🇩🇪 DSGVO-konform",
      "hero.pill.2": "🔒 100 % lokal",
      "hero.pill.3": "📋 Audit-Log",
      "hero.pill.4": "🌐 ChatGPT · Claude · Copilot · Gemini",
      "hero.brand.aria": "MOM Shield Logo",
      "hero.scene.aria": "Maskierung vorher und nachher",
      "hero.scene.left.label": "Was Sie schreiben",
      "hero.scene.left.title": "Realer Mandanten­name im Prompt.",
      "hero.scene.core.label": "MOM Shield greift",
      "hero.scene.core.h2": "Lokal. Sofort. Unsichtbar.",
      "hero.scene.core.copy": "Sensible Werte werden im Bruchteil einer Sekunde durch sprechende Platzhalter ersetzt — und im Hintergrund persistent gemerkt, damit die Antwort wieder lesbar wird.",
      "hero.scene.core.p1": "Erkennt 17 PII-Typen automatisch",
      "hero.scene.core.p2": "Eigene Regeln pro Kunde / Mandanten",
      "hero.scene.core.p3": "Antworten werden lokal entmaskiert",
      "hero.scene.right.label": "Was die KI sieht",
      "hero.scene.right.title": "Nur strukturierte Platzhalter.",

      "problem.kicker": "Das Problem",
      "problem.h2": "Sie kennen diesen Moment — den, der gar nicht passieren darf.",
      "problem.card1.h3": "Der schnelle Copy-Paste",
      "problem.card1.p": "Eine Mandanten-E-Mail in ChatGPT geworfen, um eine Zusammenfassung zu bekommen. Erst nach dem Senden fällt auf: Name, Anschrift und Aktenzeichen waren noch drin.",
      "problem.card2.h3": "Der Upload mit Hintergedanken",
      "problem.card2.p": "Ein Bewerberprofil als PDF in Copilot — schnell, weil's eilig war. Die Compliance-Frage stellt sich danach. Die DSGVO-Anzeige entdeckt es Wochen später.",
      "problem.card3.h3": "Der Verzicht aus Vorsicht",
      "problem.card3.p": "Ihre Kollegen sehen, was die Konkurrenz mit KI alles schneller macht. Sie selbst verzichten — weil Sie keinen Workflow haben, der sensible Daten zuverlässig draußen hält.",
      "problem.bridge": "Jede dieser Situationen hat einen gemeinsamen Punkt: einen <strong>Moment vor dem Klick</strong>, in dem etwas hätte verhindert werden müssen. Genau dort setzt MOM Shield an.",

      "audience.kicker": "Für wen MOM Shield gemacht ist",
      "audience.h2": "Für Berufe, in denen Daten zur Verantwortung gehören.",
      "audience.lead": "MOM Shield wird im DACH-Raum entwickelt für Branchen, in denen Geheimhaltung nicht optional ist. Wenn Sie sich mindestens in einer dieser Rollen wiederfinden, ist die App für Sie gebaut.",
      "audience.card1.h3": "Kanzleien &amp; Rechtsanwälte",
      "audience.card1.p": "Mandantengeheimnis nach §&nbsp;43a BRAO. Schriftsätze, Verträge und Korrespondenz dürfen keine identifizierbaren Daten an externe KI-Dienste leaken — selbst nicht bei einer schnellen Formulierungshilfe.",
      "audience.card2.h3": "Steuerberater &amp; Wirtschaftsprüfer",
      "audience.card2.p": "Mandantendaten, Bilanzen, Steuerakten. KI-Unterstützung beim Erklären und Strukturieren — ohne Klarnamen, IBANs und Steuer-IDs durchsickern zu lassen.",
      "audience.card3.h3": "HR &amp; Recruiting",
      "audience.card3.p": "Bewerberprofile, Personalakten, Lohndaten. KI hilft beim Sichten, Bewerten und Antworten-Schreiben — ohne dass Lebensläufe im Klartext bei OpenAI landen.",
      "audience.card4.h3": "Versicherungen &amp; Schadensregulierung",
      "audience.card4.p": "Schadensakten, Gesundheitsdaten, Vertragsnummern. Komplexe Fälle mit KI strukturieren, ohne in den Sondertatbestand nach Art.&nbsp;9 DSGVO zu rutschen.",
      "audience.card5.h3": "Vertrieb &amp; Angebote",
      "audience.card5.p": "Kundendokumente, Preise, Konditionen, Strategiepapiere. KI-gestützte Angebotsformulierung, ohne dass die Wettbewerber jemals an die Originale kommen.",
      "audience.card6.h3": "Datenschutzfokussierter Mittelstand",
      "audience.card6.p": "Mitarbeiter wollen KI nutzen, der DSB sagt nein, die Geschäftsleitung will Produktivität. MOM Shield ist die technische Antwort, mit der alle drei zufrieden sind.",

      "workflow.kicker": "So funktioniert's",
      "workflow.h2": "Vier Schritte. Kein zusätzlicher Aufwand.",
      "workflow.lead": "Sie ändern nichts an Ihrem Arbeiten — MOM Shield greift im Hintergrund. Vom Tippen bis zur fertigen KI-Antwort bleibt alles natürlich.",
      "workflow.step1.h3": "Sie tippen oder fügen ein",
      "workflow.step1.p": "Wie gewohnt — E-Mail, Vertrag, Bewerberprofil, Tabellen-Auszug. Egal ob als Text in den Chat oder als Datei-Upload.",
      "workflow.step2.h3": "MOM Shield erkennt &amp; maskiert",
      "workflow.step2.p": "Personen, Adressen, IBANs, Telefonnummern, IDs, Geheimnisse — automatisch erkannt und durch sprechende Platzhalter ersetzt. Eigene Regeln pro Kunde / Mandanten ergänzbar.",
      "workflow.step3.h3": "KI sieht nur Platzhalter",
      "workflow.step3.p": "ChatGPT, Claude, Copilot, Gemini bekommen <code>[[PERSON_001]]</code> statt „Max Mustermann\". Die KI kann trotzdem strukturiert antworten — sie weiß nur nichts.",
      "workflow.step4.h3": "Antwort wird lokal aufgelöst",
      "workflow.step4.p": "Die Antwort enthält die gleichen Platzhalter — MOM Shield ersetzt sie auf Ihrem Gerät wieder durch die Originalwerte. Lesbar für Sie, unbekannt für die KI.",

      "products.kicker": "Zwei Produkte unter einer Marke",
      "products.h2": "Browser-Erweiterung für den Alltag. Desktop-App für sensible Dokumente.",
      "products.lead": "Beide nutzen dieselbe Maskierungs-Engine, denselben Token-Standard und dieselben Sicherheitsmechanismen. Sie können beide parallel einsetzen — oder nur das, was Sie brauchen.",
      "products.browser.badge": "Browser",
      "products.browser.h3": "MOM Shield für ChatGPT &amp; Co.",
      "products.browser.summary": "Erweiterung für Chromium-basierte Browser. Maskiert sofort beim Schreiben in ChatGPT, Claude, Copilot, Gemini und ähnliche Web-KI-Tools.",
      "products.browser.f1": "✅ Automatische Maskierung beim Senden",
      "products.browser.f2": "✅ Datei-Uploads werden vor dem Upload geschützt",
      "products.browser.f3": "✅ Antworten werden im Browser wieder entmaskiert",
      "products.browser.f4": "✅ Drei Schutzstufen (Strict / Standard / Quick)",
      "products.browser.f5": "✅ Kostenlos für den Alltagseinstieg",
      "products.browser.meta1": "<strong>Ideal für:</strong> Tägliche Prompt-Arbeit, spontane Anfragen, KI-Recherche",
      "products.browser.meta2": "<strong>Browser:</strong> Chrome, Edge, Brave, Opera",
      "products.browser.cta": "In Chrome installieren",
      "products.desktop.badge": "Desktop · Pro",
      "products.desktop.h3": "MOM Shield Desktop",
      "products.desktop.summary": "Vollwertige Windows-App für strukturierte Dokumentenarbeit. Mehrbenutzer, Audit-Log, Lizenz-Verwaltung, MCP-Anbindung für Codex und Claude Code.",
      "products.desktop.f1": "✅ PDF, DOCX, TXT, MD direkt verarbeiten",
      "products.desktop.f2": "✅ Audit-Log mit CSV-Export für Compliance",
      "products.desktop.f3": "✅ Bis zu 10 Mitarbeiter pro Installation",
      "products.desktop.f4": "✅ Admin-Rollen &amp; Rechteverwaltung",
      "products.desktop.f5": "✅ Strict-Modus: Pflicht-Review vor jedem Senden",
      "products.desktop.f6": "✅ MCP-Server für Codex / Claude Code Integration",
      "products.desktop.f7": "✅ Automatische Updates",
      "products.desktop.meta1": "<strong>Ideal für:</strong> Kanzleien, Steuerkanzleien, HR-Abteilungen, datensensible Teams",
      "products.desktop.meta2": "<strong>System:</strong> Windows 10 / 11 · 64-bit",
      "products.desktop.cta": "Desktop-App herunterladen",

      "compliance.kicker": "Datenschutz &amp; Compliance",
      "compliance.h2": "Verantwortlich entwickelt. Nachprüfbar dokumentiert.",
      "compliance.lead": "MOM Shield ist nicht nur ein Marketing-Versprechen — die Architektur ist so gebaut, dass „Daten bleiben lokal\" technisch nicht anders geht.",
      "compliance.c1.h3": "🇩🇪 In Deutschland entwickelt",
      "compliance.c1.p": "MOM Shield wird in Deutschland entwickelt. Keine US-Konzern-Datenflüsse, kein versteckter Cloud-Sync, keine Telemetrie an Dritte.",
      "compliance.c2.h3": "🔒 Daten verlassen das Gerät nicht",
      "compliance.c2.p": "Die Maskierung passiert in Ihrem Browser bzw. Ihrer Desktop-App. Originaldaten werden niemals an einen MOM-Shield-Server gesendet — es gibt schlicht keinen.",
      "compliance.c3.h3": "📋 Audit-Log mit CSV-Export",
      "compliance.c3.p": "Jede Maskierung, jede Entmaskierung, jeder Datei-Zugriff wird mit Zeitstempel, Benutzer und verwendeter Regelversion in der lokalen DB festgehalten. Auf Knopfdruck als CSV exportierbar für Audit, DSB und Geschäftsleitung.",
      "compliance.c4.h3": "🔁 Pseudonymisierung, kein Marketing-Begriff",
      "compliance.c4.p": "Wir sprechen bewusst von Pseudonymisierung statt Anonymisierung. Die Original­werte sind wiederherstellbar — auf Ihrem Gerät, mit Ihrem Token. Das entspricht der DSGVO-Definition und ist fachlich korrekt.",
      "compliance.c5.h3": "🛡️ Lizenz mit Signatur",
      "compliance.c5.p": "Jede gewerbliche Lizenz ist mit einem Ed25519-Schlüsselpaar signiert. Manipulationssicher, nachweisbar, offline prüfbar. Auch für ISMS-zertifizierte Umgebungen geeignet.",
      "compliance.c6.h3": "👤 Rollenkonzept ab v1.2",
      "compliance.c6.p": "Admin und Standard-Benutzer pro Installation getrennt. Selbst-Registrierung optional deaktivierbar, Maximal-Nutzer-Limit setzbar. Passwort-Reset durch den Admin auf eigenem Server.",
      "compliance.bridge.priv": "→ Vollständige Datenschutzerklärung lesen",
      "compliance.bridge.imp": "Impressum",
      "compliance.bridge.req": "Datenschutz-Anfrage stellen",

      "proof.kicker": "Im Direktvergleich",
      "proof.h2": "Auf einen Blick: vorher und nachher.",
      "proof.lead": "Links sehen Sie, was Sie geschrieben haben. Rechts sehen Sie, was die KI tatsächlich bekommt.",
      "proof.before.tag": "Vor MOM Shield",
      "proof.after.tag": "Nach MOM Shield",
      "proof.before.alt": "Prompt vor MOM Shield Maskierung",
      "proof.after.alt": "Prompt nach MOM Shield Maskierung",
      "proof.before.cap": "Originaler Prompt mit Mandantendaten im Editor.",
      "proof.after.cap": "Personen­bezogene Daten durch strukturierte Platzhalter ersetzt — bevor die KI etwas sieht.",

      "demo.kicker": "Demo",
      "demo.h2": "Der komplette Ablauf — in unter 90 Sekunden.",
      "demo.lead": "Schauen Sie selbst, wie sich MOM Shield in den ChatGPT-Alltag einbettet, ohne den Workflow zu unterbrechen.",
      "demo.fallback": "Ihr Browser unterstützt das Demo-Video nicht.",
      "demo.cap": "Prompt-Schutz, Upload-Schutz und automatische Antwort-Entmaskierung in einem Workflow.",
      "demo.cta": "Zur dedizierten Demo-Seite",

      "download.kicker": "Download",
      "download.h2": "MOM Shield für Windows",
      "download.lead": "Direkter Installer für die Desktop-App. Installation pro Nutzer unter <code>%LOCALAPPDATA%</code> — ohne Admin-Rechte, ohne Cloud-Konto. Updates kommen automatisch.",
      "download.version": "Version",
      "download.meta": "Wird geladen…",
      "download.f1": "🛡️ Lokale Pseudonymisierung — keine Cloud",
      "download.f2": "📋 Audit-Log + CSV-Export für Compliance",
      "download.f3": "🔄 Automatische Updates via signiertem Manifest",
      "download.f4": "👥 Multi-User mit Admin-Rolle",
      "download.f5": "🔌 MCP-Endpunkt für Codex und Claude Code",
      "download.btn": "⬇ Installer herunterladen",
      "download.system": "Windows 10 / 11 · 64-bit · ~32 MB",
      "download.note": "Aktuell in <strong>Pilot-Phase</strong>. Lizenz für gewerbliche Nutzung auf <a href=\"support.html\">Anfrage</a>.",
      "download.extras.summary": "Weitere Optionen &amp; technische Details",
      "download.extras.li1": "<a href=\"https://chromewebstore.google.com/detail/mom-shield-privacy-pii-ma/cbogcmmcpmhjggmpdbmipncdpmigfjaj\" rel=\"noopener\">Chrome-Erweiterung</a> — kostenloser Einstieg für ChatGPT &amp; Co.",
      "download.extras.li2": "<a href=\"https://github.com/MichiWerkmann/mom-shield/releases\" rel=\"noopener\">Alle Versionen + Release-Notes</a> auf GitHub",
      "download.extras.li3": "SHA-256-Prüfsumme: <code id=\"dl-sha\">…</code>",
      "download.extras.li4": "System-Voraussetzung: Windows 10 (1809+) oder Windows 11, WebView2-Runtime (auf Win11 vorinstalliert)",
      "download.published": "Veröffentlicht am",

      "faq.kicker": "Häufige Fragen",
      "faq.h2": "Was Sie sich vermutlich gerade fragen.",
      "faq.q1": "Werden meine Daten an MOM Shield gesendet?",
      "faq.a1": "<strong>Nein.</strong> Es existiert kein zentraler MOM-Shield-Server, der Ihre Daten empfangen könnte. Die Maskierung läuft komplett auf Ihrem Gerät — im Browser bzw. in der Desktop-App. Selbst Updates und Lizenz-Prüfungen erfolgen offline; nur das Updater-Manifest und Installer-Downloads kommen aus dem öffentlichen GitHub-Repository.",
      "faq.q2": "Was sieht die KI dann eigentlich?",
      "faq.a2": "Strukturierte Platzhalter wie <code>[[PERSON_001]]</code>, <code>[[IBAN_001]]</code> oder <code>[[ACCOUNT_001]]</code>. Die KI versteht die Grammatik und kann mit den Platzhaltern arbeiten — sie weiß nur nicht, wer dahintersteckt. Wenn die Antwort die gleichen Platzhalter zurückliefert, ersetzt MOM Shield sie auf Ihrem Gerät wieder durch die Originalwerte.",
      "faq.q3": "Ist das DSGVO-konform?",
      "faq.a3": "MOM Shield ist ein <strong>Pseudonymisierungs-Werkzeug</strong> im Sinne von Art.&nbsp;4 Nr.&nbsp;5 DSGVO. Die Auftragsverarbeitung durch den KI-Anbieter findet ausschließlich mit pseudonymisierten Daten statt — das reduziert das Risiko gegenüber unverschlüsseltem Versand erheblich. Eine vollständige rechtliche Bewertung muss aber Ihr DSB im Kontext Ihrer konkreten Verarbeitung treffen.",
      "faq.q4": "Wieviele Mitarbeiter können die Desktop-App nutzen?",
      "faq.a4": "Pro Installation bis zu 10 Mitarbeiter, alle mit eigenen Accounts. Ein Admin pro Installation. Größere Setups (mehrere Standorte, zentrale Richtlinien) sind in Planung — sprechen Sie uns für ein Pilot-Setup an.",
      "faq.q5": "Was kostet MOM Shield?",
      "faq.a5": "Die Chrome-Erweiterung ist kostenlos. Die Desktop-App ist aktuell in der <strong>Pilot-Phase</strong> — Lizenzen werden individuell ausgestellt und sind im Pilot-Zeitraum vergünstigt oder kostenfrei, je nach Vereinbarung. Reguläre Tarife folgen mit dem allgemeinen Marktstart.",
      "faq.q6": "Funktioniert das auch mit Microsoft Copilot oder lokalen Modellen?",
      "faq.a6": "Die Chrome-Erweiterung deckt aktuell ChatGPT, Claude, Copilot (Microsoft), Gemini und Grok ab. Die Desktop-App ist KI-agnostisch — Sie maskieren lokal, fügen den maskierten Text dort ein, wo Sie wollen. Lokale Modelle (Ollama, LM Studio) funktionieren genauso.",
      "faq.q7": "Wie sicher ist die Lizenz-Datei?",
      "faq.a7": "Jede Lizenz ist mit einem Ed25519-Schlüsselpaar signiert. Eine Manipulation der enthaltenen Daten (Ablauf, Sitze, Plan) wird von der App sofort erkannt und abgelehnt. Der öffentliche Schlüssel ist in jeder App-Version eingebaut; der private Schlüssel verbleibt ausschließlich bei uns.",
      "faq.q8": "Kann ich MOM Shield in einer streng regulierten Umgebung einsetzen?",
      "faq.a8": "Für ISMS-zertifizierte oder regulierte Umgebungen (z.&nbsp;B. Versicherungen mit Aufsicht, Krankenhäuser, Behörden) sprechen Sie uns für ein <em>Enterprise-Setup</em> an: On-Premises-Variante, eigenes Regelset, signierte Builds. Das ist Teil unserer Roadmap und wird mit ersten Großkunden gemeinsam ausgebaut.",

      "cta.kicker": "Bereit für sichere KI-Nutzung?",
      "cta.h2": "Drei Wege, MOM Shield kennenzulernen.",
      "cta.copy": "Probieren Sie die Chrome-Erweiterung kostenlos. Laden Sie die Desktop-App herunter und nutzen Sie sie im Pilot-Modus. Oder sprechen Sie uns für ein individuelles Setup an.",
      "cta.btn1": "Desktop-App laden",
      "cta.btn2": "Chrome-Erweiterung",
      "cta.btn3": "Pilot-Anfrage stellen",

      /* ───────── video.html ───────── */
      "video.title": "Promo Video – MOM Shield",
      "video.desc": "Schauen Sie das MOM-Shield-Promo-Video und sehen Sie, wie sensible Daten maskiert werden, bevor sie an KI-Tools gelangen.",
      "video.hero.kicker": "Promo-Video",
      "video.hero.h1": "MOM Shield in Bewegung.",
      "video.hero.lead": "Diese Seite ist dem Produktvideo gewidmet, damit Sie einen sauberen Link für die MOM-Shield-Story, das Produktverhalten und den sichtbaren Vorher-/Nachher-Effekt teilen können.",
      "video.hero.cta1": "Video abspielen",
      "video.hero.cta2": "Zurück zur Website",
      "video.points.aria": "Video-Highlights",
      "video.p1.h3": "Klare Produkt-Story",
      "video.p1.p": "Nutzen Sie diese Seite, wenn Sie ein fokussiertes, teilbares Ziel für das Marketing-Video brauchen.",
      "video.p2.h3": "Eine direkte Botschaft",
      "video.p2.p": "Die Video-Seite hält die Aufmerksamkeit darauf, was MOM Shield verhindert, bevor sensible Daten den Browser verlassen.",
      "video.p3.h3": "Einfach wiederverwendbar",
      "video.p3.p": "Funktioniert als eigenständige Landingpage für Store-Listings, Pitches, Outreach oder Support-Material.",
      "video.watch.kicker": "Ansehen",
      "video.watch.h2": "Das MOM-Shield-Promo-Video.",
      "video.watch.lead": "Der Clip zeigt, wie MOM Shield Prompts und Uploads schützt, bevor sie ChatGPT, Claude, Gemini oder Grok erreichen.",
      "video.watch.fallback": "Ihr Browser unterstützt das Promo-Video nicht.",
      "video.watch.cap": "Eigene Promo-Video-Seite für MOM Shield.",
      "video.shows.kicker": "Was es zeigt",
      "video.shows.h2": "Ein kompakter Durchlauf des Schutz-Flows.",
      "video.shows.c1.h3": "Prompt-Schutz",
      "video.shows.c1.p": "Sensible Werte werden ersetzt, bevor die Nachricht abgeschickt wird.",
      "video.shows.c2.h3": "Upload-Schutz",
      "video.shows.c2.p": "Unterstützte Dateien werden lokal vor der Übertragung bereinigt.",
      "video.shows.c3.h3": "Lesbarer Workflow",
      "video.shows.c3.p": "MOM Shield erhält die Struktur, sodass die KI-Antwort nutzbar bleibt.",

      /* ───────── support.html ───────── */
      "support.title": "Support – MOM Shield",
      "support.desc": "Support-Informationen für MOM Shield – Privacy & PII Mask für ChatGPT, Claude, Gemini, Grok.",
      "support.kicker": "Zuletzt aktualisiert: 23.04.2026",
      "support.h1": "Support",
      "support.intro": "Hilfe zu Installation, unterstützten Websites, Datei-Verarbeitung und Maskierungs-Verhalten.",
      "support.contact.h2": "Kontakt",
      "support.contact.email": "Support-E-Mail",
      "support.contact.web": "Website",
      "support.contact.web.link": "MOM-Shield-Website",
      "support.sup.h2": "Aktuell unterstützt",
      "support.sup.li1": "ChatGPT Web auf chatgpt.com",
      "support.sup.li2": "ChatGPT Web auf chat.openai.com",
      "support.sup.li3": "Claude/Anthropic Web auf claude.ai",
      "support.sup.li4": "Gemini Web auf gemini.google.com",
      "support.sup.li5": "Grok Web auf grok.com",
      "support.sup.li6": "Grok auf X unter x.com/i/grok",
      "support.files.h2": "Unterstützte Dateitypen",
      "support.files.p": "MOM Shield kann txt-, md-, csv-, json-, xml-, html-, log-, docx-, xlsx- und textbasierte PDF-Dateien verarbeiten.",
      "support.price.h2": "Verfügbarkeit und Preise",
      "support.price.p": "MOM Shield ist derzeit kostenlos verfügbar. Optionale kostenpflichtige Funktionen können in Zukunft eingeführt werden.",
      "support.faq.h2": "Häufig gestellte Fragen",
      "support.faq.q1": "Werden meine Daten an MOM Shield gesendet?",
      "support.faq.a1": "Nein. In der aktuellen Version verarbeitet MOM Shield Inhalte lokal in Ihrem Browser. Es gibt keinen vom Anbieter betriebenen Maskierungs-Server.",
      "support.faq.q2": "Warum wurde ein PDF blockiert?",
      "support.faq.a2": "PDF-Dateien werden in Text umgewandelt und dann maskiert. Wenn ein PDF keine nutzbare Textebene hat, verschlüsselt ist oder nicht sicher extrahiert werden kann, blockiert MOM Shield es, anstatt die Originaldatei unverändert durchzulassen.",
      "support.faq.q3": "Unterstützt MOM Shield OCR für gescannte PDFs?",
      "support.faq.a3": "Nein. Gescannte oder reine Bild-PDFs ohne nutzbare Textebene werden in der aktuellen Version nicht per OCR verarbeitet.",
      "support.faq.q4": "Warum wurde ein Wert nicht maskiert?",
      "support.faq.a4": "MOM Shield verwendet lokale Erkennungsregeln und Kontextprüfung. Je nach Formulierung und Formatierung sind False Negatives oder False Positives möglich.",
      "support.faq.q5": "Warum kann ich eine Antwort nicht entmaskieren?",
      "support.faq.a5": "Das Entmaskieren erfordert eine aktive lokale Historie. Wenn die Historie aus ist oder der strenge Datenschutzmodus aktiv ist, ist das automatische Entmaskieren von Antworten deaktiviert.",
      "support.report.h2": "Problem melden",
      "support.report.p": "Bitte geben Sie Browser-Version, betroffene KI-Chat-Website, Datum und Uhrzeit, betroffene Funktion, anonymisierte Reproduktionsschritte und ggf. Screenshot oder Bildschirmaufnahme an.",

      /* ───────── privacy.html ───────── */
      "privacy.title": "Datenschutzerklärung – MOM Shield",
      "privacy.desc": "Datenschutzerklärung für MOM Shield – Privacy & PII Mask für ChatGPT, Claude, Gemini, Grok.",
      "privacy.kicker": "Gültig ab: 23.04.2026",
      "privacy.h1": "Datenschutzerklärung",
      "privacy.intro": "MOM Shield ist darauf ausgelegt, sensible Daten lokal in Ihrem Browser zu maskieren, bevor unterstützte KI-Chat-Dienste sie erhalten.",
      "privacy.s1.h2": "1. Verantwortlicher / Anbieter",
      "privacy.s1.p": "Michael Werkmann<br>Kolpingstreet 4<br>73453 Abtgmuend<br>Deutschland<br><a href=\"mailto:michael_werkmann@web.de\">michael_werkmann@web.de</a>",
      "privacy.s2.h2": "2. Was MOM Shield tut",
      "privacy.s2.p1": "MOM Shield – Privacy &amp; PII Mask für ChatGPT, Claude, Gemini, Grok ist eine Browser-Erweiterung, die sensible Daten in Chat-Eingaben und unterstützten Upload-Dateien lokal im Browser maskiert, bevor der Inhalt an eine unterstützte KI-Chat-Website übergeben wird.",
      "privacy.s2.p2": "Aktuell unterstützte Ziel-Websites sind ChatGPT, Claude/Anthropic, Gemini und Grok Web.",
      "privacy.s3.h2": "3. Von MOM Shield verarbeitete Daten",
      "privacy.s3.p": "MOM Shield kann die folgenden Daten lokal verarbeiten, wenn Nutzer sie auf einer unterstützten Seite eingeben oder zum Upload auswählen:",
      "privacy.s3.li1": "Text, der in Chat-Eingabefelder eingegeben wird",
      "privacy.s3.li2": "Inhalte unterstützter Upload-Dateien wie txt, md, csv, json, xml, html, log, docx, xlsx und textbasierte PDF-Dateien",
      "privacy.s3.li3": "Lokale Erweiterungs-Einstellungen wie Aktivierungsstatus, Upload-Maskierung, strenger Datenschutzmodus und Historien-Modus",
      "privacy.s3.li4": "Lokal erzeugte Maskierungs-Platzhalter und Mappings, wenn die Entmaskierungs-Historie aktiviert ist",
      "privacy.s3.p2": "Diese Inhalte können personenbezogene oder sensible Informationen enthalten, wie Namen, E-Mail-Adressen, Telefonnummern, Finanzdaten, Kennungen, Zugangsdaten oder Dokumenteninhalte.",
      "privacy.s4.h2": "4. Lokale Verarbeitung",
      "privacy.s4.p": "MOM Shield verarbeitet Inhalte lokal im Browser des Nutzers.",
      "privacy.s4.li1": "Die Maskierung erfolgt auf dem Gerät des Nutzers",
      "privacy.s4.li2": "Zur Maskierung ausgewählter Inhalt wird nicht an einen vom Erweiterungs-Anbieter betriebenen Server gesendet",
      "privacy.s4.li3": "Die aktuelle Version nutzt keinen Anbieter-Cloud-Dienst zur Inhaltsverarbeitung",
      "privacy.s5.h2": "5. Zweck der Verarbeitung",
      "privacy.s5.li1": "Erkennen sensibler Daten in Texten und Dateien",
      "privacy.s5.li2": "Ersetzen erkannter Werte durch Maskierungs-Platzhalter",
      "privacy.s5.li3": "Optionales lokales Wiederherstellen maskierter Werte, wenn die Entmaskierungs-Historie aktiviert ist",
      "privacy.s5.li4": "Speichern lokaler Einstellungen, damit die Erweiterung wie vom Nutzer konfiguriert funktioniert",
      "privacy.s6.h2": "6. Rechtsgrundlage",
      "privacy.s6.p": "Soweit die DSGVO Anwendung findet, beruht die Verarbeitung in der Regel auf Art. 6 Abs. 1 lit. b DSGVO, wenn sie zur Bereitstellung der vom Nutzer angeforderten Funktionalität erforderlich ist, und auf Art. 6 Abs. 1 lit. f DSGVO bei berechtigtem Interesse an Datensicherheit, Vertraulichkeit und sicherer Nutzung von KI-Diensten.",
      "privacy.s7.h2": "7. Speicherung und Aufbewahrung",
      "privacy.s7.p1": "MOM Shield speichert Daten ausschließlich in der lokalen Browser-Umgebung des Nutzers. Dies kann Einstellungen in chrome.storage.local und optional lokale Entmaskierungs-Historie umfassen, sofern vom Nutzer aktiviert.",
      "privacy.s7.p2": "Die Aufbewahrung hängt von der Konfiguration, der Browser-Umgebung und der Nutzung der Erweiterung ab. Daten können entfernt werden, wenn die Erweiterung deinstalliert oder lokale Browser-Daten gelöscht werden.",
      "privacy.s8.h2": "8. Weitergabe an Dritte",
      "privacy.s8.p1": "MOM Shield sendet keine verarbeiteten Inhalte an den Erweiterungs-Anbieter.",
      "privacy.s8.p2": "Inhalte können nach lokaler Verarbeitung an die vom Nutzer gewählte KI-Chat-Website übergeben werden. Die weitere Verarbeitung durch die gewählte Website unterliegt deren eigener Datenschutzerklärung.",
      "privacy.s9.h2": "9. Kein Verkauf, keine Werbung, kein Tracking",
      "privacy.s9.li1": "MOM Shield verkauft keine Nutzerdaten",
      "privacy.s9.li2": "MOM Shield nutzt keine verarbeiteten Inhalte für Werbung",
      "privacy.s9.li3": "MOM Shield nutzt keine verarbeiteten Inhalte für Kreditwürdigkeits-, Kredit- oder Scoring-Zwecke",
      "privacy.s9.li4": "MOM Shield betreibt kein Tracking für maskierte Inhalte",
      "privacy.s10.h2": "10. Preise und zukünftige kostenpflichtige Funktionen",
      "privacy.s10.p": "MOM Shield ist derzeit kostenlos verfügbar. Optionale kostenpflichtige Funktionen können in Zukunft eingeführt werden. Falls zukünftige Versionen Konten, Lizenzprüfungen, Zahlungsabwicklung oder anbieterbetriebene Server hinzufügen, müssen diese Datenschutzerklärung und die Chrome-Web-Store-Angaben vor der Veröffentlichung dieser Funktionen aktualisiert werden.",
      "privacy.s11.h2": "11. Sicherheit",
      "privacy.s11.p": "MOM Shield ist darauf ausgelegt, Daten lokal und datensparsam zu verarbeiten. Nutzer sollten beachten, dass die Gesamtsicherheit auch von ihrer Browser-Umgebung, der Ziel-Website, der Gerätesicherheit und ihrem allgemeinen Surfverhalten abhängt.",
      "privacy.s12.h2": "12. Rechte der Betroffenen",
      "privacy.s12.p": "Soweit anwendbar, können Nutzer Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch haben.",
      "privacy.s13.h2": "13. Änderungen dieser Erklärung",
      "privacy.s13.p": "Diese Erklärung kann aktualisiert werden, wenn sich Funktionalität, rechtliche Anforderungen oder Verarbeitungsdetails ändern. Die veröffentlichte Version ist die jeweils gültige Version.",
      "privacy.s14.h2": "14. Kontakt",
      "privacy.s14.p": "Datenschutz-Fragen: <a href=\"mailto:michael_werkmann@web.de\">michael_werkmann@web.de</a>",

      /* ───────── imprint.html ───────── */
      "imprint.title": "Impressum – MOM Shield",
      "imprint.desc": "Impressum für MOM Shield – Privacy & PII Mask für ChatGPT, Claude, Gemini, Grok.",
      "imprint.kicker": "Anbieter-Informationen",
      "imprint.h1": "Impressum",
      "imprint.intro": "Diese Seite enthält Anbieter- und Kontaktinformationen für MOM Shield.",
      "imprint.s1.h2": "Anbieter",
      "imprint.s1.p": "Michael Werkmann<br>Kolpingstreet 4<br>73453 Abtgmuend<br>Deutschland",
      "imprint.s2.h2": "Kontakt",
      "imprint.s2.p": "E-Mail: <a href=\"mailto:michael_werkmann@web.de\">michael_werkmann@web.de</a>",
      "imprint.s3.h2": "Produkt",
      "imprint.s3.p": "MOM Shield – Privacy &amp; PII Mask für ChatGPT, Claude, Gemini, Grok ist eine Browser-Erweiterung zur lokalen Maskierung sensibler Daten vor dem Absenden an unterstützte KI-Chats.",
      "imprint.s4.h2": "Wichtiger Hinweis",
      "imprint.s4.p": "Dieses Impressum ist ein praktisches Launch-Template. Vor internationaler Veröffentlichung sollten Sie prüfen, ob für Ihren Anbieter-Status, Ihr Land und Ihre Zielmärkte zusätzliche rechtliche Angaben erforderlich sind.",

      /* ───────── 404.html ───────── */
      "404.title": "Seite nicht gefunden – MOM Shield",
      "404.kicker": "404",
      "404.h1": "Seite nicht gefunden",
      "404.p": "Die angeforderte Seite existiert nicht.",
      "404.btn": "Zur Startseite"
    }
  };

  function getLang() {
    const url = new URL(window.location.href);
    const fromUrl = url.searchParams.get("lang");
    if (fromUrl && SUPPORTED.includes(fromUrl)) return fromUrl;
    const fromStore = localStorage.getItem(STORAGE_KEY);
    if (fromStore && SUPPORTED.includes(fromStore)) return fromStore;
    return DEFAULT_LANG;
  }

  function setLang(lang) {
    if (!SUPPORTED.includes(lang)) return;
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (_) {}
    apply(lang);
  }

  function apply(lang) {
    const dict = T[lang] || null;
    document.documentElement.setAttribute("lang", lang);
    // text/innerHTML translations
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (!key) return;
      if (!dict) {
        // English fallback: restore from data-i18n-en if present
        const fallback = el.getAttribute("data-i18n-en");
        if (fallback !== null) el.innerHTML = fallback;
        return;
      }
      const val = dict[key];
      if (val !== undefined) {
        // remember the original English on first switch so we can restore
        if (!el.hasAttribute("data-i18n-en")) {
          el.setAttribute("data-i18n-en", el.innerHTML);
        }
        el.innerHTML = val;
      }
    });
    // attribute translations: data-i18n-attr="attr1:key1;attr2:key2"
    document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
      const spec = el.getAttribute("data-i18n-attr");
      if (!spec) return;
      spec.split(";").forEach((pair) => {
        const [attr, key] = pair.split(":").map((s) => s.trim());
        if (!attr || !key) return;
        const origAttr = "data-i18n-en-" + attr;
        if (dict && dict[key] !== undefined) {
          if (!el.hasAttribute(origAttr)) {
            el.setAttribute(origAttr, el.getAttribute(attr) || "");
          }
          el.setAttribute(attr, dict[key]);
        } else if (el.hasAttribute(origAttr)) {
          el.setAttribute(attr, el.getAttribute(origAttr));
        }
      });
    });
    // language switcher state
    document.querySelectorAll("[data-lang-btn]").forEach((b) => {
      const isActive = b.getAttribute("data-lang-btn") === lang;
      b.classList.toggle("lang-btn-active", isActive);
      b.setAttribute("aria-pressed", String(isActive));
    });
  }

  function wireSwitcher() {
    document.querySelectorAll("[data-lang-btn]").forEach((b) => {
      b.addEventListener("click", (e) => {
        e.preventDefault();
        setLang(b.getAttribute("data-lang-btn"));
      });
    });
  }

  // expose for debugging
  window.MomShieldI18n = { setLang, getLang, apply };

  document.addEventListener("DOMContentLoaded", () => {
    const lang = getLang();
    apply(lang);
    wireSwitcher();
  });
})();
