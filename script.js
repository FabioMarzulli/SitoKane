const portfolioData = {
  name: "Your Name",
  subtitle: "Subtitle / Role / Focus",
  bio: "Questo template è pronto per contenuti personali, scolastici, creativi o professionali. Modifica liberamente ogni blocco.",
  aboutText:
    "Scrivi qui la tua presentazione personale. Puoi inserire interessi, percorso di studi, esperienze o obiettivi futuri in modo semplice.",
  contactText:
    "Aggiungi i tuoi canali di contatto preferiti: email, social professionali o qualsiasi altro riferimento utile.",
  socials: [
    { label: "Instagram", url: "#" },
    { label: "LinkedIn", url: "#" },
    { label: "Behance", url: "#" }
  ],
  resume: [
    "[Anno] - [Titolo esperienza o percorso]",
    "[Anno] - [Attività / progetto / ruolo]",
    "[Anno] - [Risultato o traguardo]"
  ],
  projects: [
    { title: "Project / Work 01", description: "Breve descrizione personalizzabile." },
    { title: "Project / Work 02", description: "Breve descrizione personalizzabile." },
    { title: "Project / Work 03", description: "Breve descrizione personalizzabile." }
  ],
  gallery: [
    { title: "Interest 01", description: "Foto, hobby o elementi visual personali." },
    { title: "Interest 02", description: "Foto, hobby o elementi visual personali." },
    { title: "Interest 03", description: "Foto, hobby o elementi visual personali." }
  ],
  contacts: [
    { label: "Email", value: "you@example.com", link: "mailto:you@example.com" },
    { label: "Phone", value: "+00 000 000000", link: "tel:+0000000000" }
  ]
};

const byId = (id) => document.getElementById(id);
const setText = (selector, text) => {
  const el = document.querySelector(selector);
  if (el) el.textContent = text;
};

byId("profile-name").textContent = portfolioData.name;
byId("profile-subtitle").textContent = portfolioData.subtitle;
byId("profile-bio").textContent = portfolioData.bio;
setText('[data-field="aboutText"]', portfolioData.aboutText);
setText('[data-field="contactText"]', portfolioData.contactText);

portfolioData.socials.forEach(({ label, url }) => {
  const a = document.createElement("a");
  a.href = url;
  a.textContent = label;
  a.setAttribute("aria-label", label);
  byId("social-links").appendChild(a);
});

portfolioData.resume.forEach((item) => {
  const li = document.createElement("li");
  li.textContent = item;
  byId("resume-list").appendChild(li);
});

const buildGrid = (containerId, items) => {
  items.forEach(({ title, description }) => {
    const div = document.createElement("div");
    div.className = "grid-item";
    div.innerHTML = `<h4>${title}</h4><p>${description}</p>`;
    byId(containerId).appendChild(div);
  });
};

buildGrid("projects-grid", portfolioData.projects);
buildGrid("gallery-grid", portfolioData.gallery);

portfolioData.contacts.forEach(({ label, value, link }) => {
  const a = document.createElement("a");
  a.href = link;
  a.textContent = `${label}: ${value}`;
  byId("contact-links").appendChild(a);
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("is-visible");
  });
}, { threshold: 0.15 });

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

window.addEventListener("load", () => byId("loader").classList.add("hidden"));

const cursorGlow = byId("cursor-glow");
window.addEventListener("pointermove", (event) => {
  cursorGlow.style.left = `${event.clientX}px`;
  cursorGlow.style.top = `${event.clientY}px`;
});
