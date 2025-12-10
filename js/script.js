document.addEventListener('DOMContentLoaded', () => {
  // 📌 Elements
  const whatsappBtn = document.getElementById('whatsappBtn');
  const planBtn = document.getElementById('planBtn');

  // WhatsApp button
  whatsappBtn?.addEventListener('click', () => {
    window.open('https://wa.me/31616827562', '_blank', 'noopener');
  });

  // Plan button scroll to contact
  planBtn?.addEventListener('click', () => {
    const contact = document.getElementById('contact');
    contact?.scrollIntoView({behavior:'smooth', block:'start'});
  });

  // Preloader
  const preloader = document.querySelector('.preloader');
  if(preloader){
    setTimeout(() => {
      preloader.classList.add('fade-out');
      setTimeout(() => { preloader.style.display = 'none'; }, 1200);
    }, 3000);
  }
});
 
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});


document.addEventListener('DOMContentLoaded', () => {
  // Alle elementen met vertaalbare tekst identificeren via data-key
  const translations = {
  nl: {
    "nav_about": "✦Over mij",
    "nav_method": "✦Werkwijze",
    "nav_contact": "✦Contact",
    "welcome_title": "Welkom",
    "welcome_sub": "Fijn dat je er bent. Ik help je graag met helderheid, rust, inzichten en vertrouwen — op jouw pad, in jouw tempo.",
    "reading_title": "Reading",
    "reading_desc": "Via videobellen ontvang je persoonlijke, intuïtieve inzichten die je helderheid, richting en geruststelling geven.",
    "photoreading_title": "Fotoreading",
    "photoreading_desc": "Via een foto voel ik jouw energie, persoonlijkheid en huidige processen — zuiver, liefdevol en zonder oordeel.",
    "coaching_title": "Coaching",
    "coaching_desc": "Online via videobellen bied ik intuïtieve en verdiepende begeleiding, zodat je met innerlijke rust en kracht je pad vervolgt.",
    "about_title": "Over mij",
    "about_text1": "Welkom, ik ben <strong>Giovanna</strong> Sinds mijn jeugd voel ik de energie van mensen en situaties. Wat begon als subtiele waarnemingen groeide uit tot een roeping: anderen helpen met liefde en zuivere intentie. Ik werk respectvol, zonder oordeel, met aandacht voor jouw unieke pad.",
    "about_text2": "Medium.Hope staat voor licht, liefde en vertrouwen — een veilige ruimte om helderheid te vinden. Mijn benadering is rustig, warm en afgestemd op jouw energie. Ik creëer een omgeving waar ruimte is om te voelen, ontdekken en helen. Niets hoeft geforceerd — alles mag ontstaan in jouw tempo.",
    "contact_title": "Neem gerust contact op",
    "contact_sub": "Met warmte, zorg en professionaliteit beantwoord ik je bericht binnen 48 uur.",
    "contact_form_title": "Stel gerust je vraag",
    "contact_form_sub": "Je bericht wordt met liefde, discretie en zorg behandeld.",
    "contact_form_email": "e-mail adres:",
    "contact_form_question": "stel vraag:",
    "contact_form_button": "Verstuur",
    "highlight1_title": "Zachte begeleiding",
    "highlight1_desc": "Een warme en veilige ruimte waarin jij volledig jezelf mag zijn.",
    "highlight2_title": "Intuïtieve werkwijze",
    "highlight2_desc": "Ik luister niet alleen naar woorden, maar ook naar energie.",
    "highlight3_title": "Persoonlijke aandacht",
    "highlight3_desc": "Alle sessies worden volledig afgestemd op jouw behoeften.",
    "method_title": "Mijn werkwijze",
    "method_sub": "Elke sessie volgt een warme, heldere en intuïtieve opbouw.",
    "step1_title": "Kennismaking",
    "step1_text": "We starten met een rustige kennismaking waarin jij jouw verhaal mag delen. Ik stem af op jouw energie en voel mee wat er speelt.",
    "step2_title": "Verdieping",
    "step2_text": "Samen onderzoeken we wat je nodig hebt. Dit kan inzicht, ontspanning, heling of juist praktische richting zijn.",
    "step3_title": "Intuïtieve begeleiding",
    "step3_text": "Ik gebruik intuïtieve technieken en afgestemde begeleiding om jou opnieuw te verbinden met jouw innerlijke wijsheid.",
    "step4_title": "Afronding & inzichten",
    "step4_text": "We sluiten rustig af met ruimte voor vragen, inzichten en eventuele vervolgstappen die passen bij jouw proces.",
    "contact_info_title": "Contactgegevens",
    "contact_location_label": "Locatie",
    "contact_location_value": "Papendrecht",
    "contact_response_label": "Reactietijd",
    "contact_response_value": "Binnen 24–48 uur",
    "contact_practical_title": "Praktische info",
    "contact_practical_text": "Consulten mogelijk online of in persoon. Je ontvangt binnen 48 uur reactie.",
    "contact_session_title": "Sessie-opties",
    "contact_session_text": "30 of 60 minuten — online of live",
    "location_title": "Locatie",
    "location_sub": "Je bent welkom op mijn rustige praktijklocatie in Papendrecht.",
    "location_address_title": "Adres",
    "location_space_label": "Praktijkruimte",
    "location_space_value": "Papendrecht, Nederland",
    "location_hours_label": "Openingstijden",
    "location_hours_value": "Op afspraak",
    "location_access_label": "Bereikbaarheid",
    "location_access_value": "Gratis parkeren & goed bereikbaar met OV",
    "footer_about_text": "Helderheid, vertrouwen en warme begeleiding. Ontdek je innerlijke rust en laat je leiden door intuïtieve inzichten.",
    "footer_nav_title": "Navigatie",
    "footer_home": "Home",
    "footer_about": "Over mij",
    "footer_method": "Werkwijze",
    "footer_contact_nav": "Contact",
    "footer_location": "Papendrecht, Nederland",
    "footer_response": "⏱️Reactietijd: 24–48 uur",
    "footer_follow": "volg ons",
    "footer_copyright": "© 2025 Medium.Hope — Alle rechten voorbehouden"
  },
  de: {
    "nav_about": "✦Über mich",
    "nav_method": "✦Arbeitsweise",
    "nav_contact": "✦Kontakt",
    "welcome_title": "Welkom",
    "welcome_title": "Willkommen",
    "welcome_sub": "Schön, dass Sie hier sind. Ich helfe Ihnen gerne mit Klarheit, Ruhe, Einsichten und Vertrauen — auf Ihrem Weg, in Ihrem Tempo.",
    "reading_title": "Reading",
    "reading_desc": "Per Videotelefonie erhalten Sie persönliche, intuitive Einsichten, die Ihnen Klarheit, Orientierung und Beruhigung geben.",
    "photoreading_title": "Fotoreading",
    "photoreading_desc": "Über ein Foto fühle ich Ihre Energie, Persönlichkeit und aktuellen Prozesse — rein, liebevoll und ohne Urteil.",
    "coaching_title": "Coaching",
    "coaching_desc": "Online per Videotelefonie biete ich intuitive und vertiefende Begleitung, damit Sie Ihren Weg mit innerer Ruhe und Kraft fortsetzen.",
    "about_title": "Über mich",
    "about_text1": "Willkommen, ich bin <strong>Giovanna</strong>. Schon seit meiner Jugend spüre ich die Energie von Menschen und Situationen. Was als subtile Wahrnehmungen begann, entwickelte sich zu einer Berufung: anderen mit Liebe und reiner Absicht zu helfen. Ich arbeite respektvoll, ohne Urteil, mit Aufmerksamkeit für Ihren einzigartigen Weg.",
    "about_text2": "Medium.Hope steht für Licht, Liebe und Vertrauen — ein sicherer Raum, um Klarheit zu finden. Meine Herangehensweise ist ruhig, warm und auf Ihre Energie abgestimmt. Ich schaffe eine Umgebung, in der Raum ist, um zu fühlen, zu entdecken und zu heilen. Nichts muss erzwungen werden — alles darf in Ihrem Tempo entstehen.",
    "contact_title": "Kontaktieren Sie mich gerne",
    "contact_sub": "Mit Wärme, Fürsorge und Professionalität beantworte ich Ihre Nachricht innerhalb von 48 Stunden.",
    "contact_form_title": "Stellen Sie gerne Ihre Frage",
    "contact_form_sub": "Ihre Nachricht wird mit Liebe, Diskretion und Sorgfalt behandelt.",
    "contact_form_email": "E-Mail-Adresse:",
    "contact_form_question": "Frage stellen:",
    "contact_form_button": "Senden",
    "highlight1_title": "Sanfte Begleitung",
    "highlight1_desc": "Ein warmer und sicherer Raum, in dem Sie ganz Sie selbst sein dürfen.",
    "highlight2_title": "Intuitive Vorgehensweise",
    "highlight2_desc": "Ich höre nicht nur auf Worte, sondern auch auf Energie.",
    "highlight3_title": "Persönliche Aufmerksamkeit",
    "highlight3_desc": "Alle Sitzungen werden vollständig auf Ihre Bedürfnisse abgestimmt.",
    "method_title": "Meine Vorgehensweise",
    "method_sub": "Jede Sitzung folgt einem warmen, klaren und intuitiven Aufbau.",
    "step1_title": "Kennenlernen",
    "step1_text": "Wir beginnen mit einem ruhigen Kennenlernen, bei dem Sie Ihre Geschichte erzählen dürfen. Ich stimme mich auf Ihre Energie ab und fühle mit, was gerade geschieht.",
    "step2_title": "Vertiefung",
    "step2_text": "Gemeinsam erforschen wir, was Sie brauchen. Dies kann Einsicht, Entspannung, Heilung oder praktische Orientierung sein.",
    "step3_title": "Intuitive Begleitung",
    "step3_text": "Ich verwende intuitive Techniken und abgestimmte Begleitung, um Sie wieder mit Ihrer inneren Weisheit zu verbinden.",
    "step4_title": "Abschluss & Einsichten",
    "step4_text": "Wir schließen ruhig ab mit Raum für Fragen, Einsichten und mögliche nächste Schritte, die zu Ihrem Prozess passen.",
    "contact_info_title": "Kontaktdaten",
    "contact_location_label": "Ort",
    "contact_location_value": "Papendrecht",
    "contact_response_label": "Reaktionszeit",
    "contact_response_value": "Innerhalb von 24–48 Stunden",
    "contact_practical_title": "Praktische Infos",
    "contact_practical_text": "Beratungen möglich online oder vor Ort. Sie erhalten innerhalb von 48 Stunden eine Antwort.",
    "contact_session_title": "Sitzungsoptionen",
    "contact_session_text": "30 oder 60 Minuten — online oder live",
    "location_title": "Ort",
    "location_sub": "Sie sind willkommen in meiner ruhigen Praxis in Papendrecht.",
    "location_address_title": "Adresse",
    "location_space_label": "Praxisraum",
    "location_space_value": "Papendrecht, Niederlande",
    "location_hours_label": "Öffnungszeiten",
    "location_hours_value": "Nach Vereinbarung",
    "location_access_label": "Erreichbarkeit",
    "location_access_value": "Kostenlose Parkplätze & gute Anbindung mit öffentlichen Verkehrsmitteln",
    "footer_about_text": "Klarheit, Vertrauen und warme Begleitung. Entdecken Sie Ihre innere Ruhe und lassen Sie sich von intuitiven Einsichten leiten.",
    "footer_nav_title": "Navigation",
    "footer_home": "Startseite",
    "footer_about": "Über mich",
    "footer_method": "Vorgehensweise",
    "footer_contact_nav": "Kontakt",
    "footer_location": "Papendrecht, Niederlande",
    "footer_response": "⏱️Reaktionszeit: 24–48 Stunden",
    "footer_follow": "folge uns",
    "footer_copyright": "© 2025 Medium.Hope — Alle Rechte vorbehalten"
  }
};


  function setLanguage(lang) {
    for (let key in translations[lang]) {
      const el = document.querySelector(`[data-key="${key}"]`);
      if(el) el.innerHTML = translations[lang][key];
    }
  }

  // Knoppen
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      const lang = btn.getAttribute('data-lang');
      setLanguage(lang);
    });
  });
});
