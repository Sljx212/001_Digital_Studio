const serviceOptions = [
  { slug: 'website-design', name: 'Website Design' },
  { slug: 'development', name: 'Development' },
  { slug: 'personal-branding', name: 'Personal Branding' },
  { slug: 'product-design', name: 'Product Design' },
  { slug: 'ai-cg', name: 'AI CG' },
  { slug: 'ai-graphic-design', name: 'AI Graphic Design' }
];

const projects = [
  { slug: 'nexus-finance', name: 'Nexus Finance', type: 'Web Design', year: '2026', number: '01', theme: 'lime', mark: 'N/FX', caption: 'A smarter way to move money.', summary: 'A sharp digital presence for a finance platform built around clarity and momentum.', scope: 'Website Design · Development', deliverables: 'Strategy, art direction, website, motion system' },
  { slug: 'forma-studio', name: 'Forma Studio', type: 'Branding', year: '2026', number: '02', theme: 'violet', mark: 'FORMA', caption: 'Space for a new perspective.', summary: 'An expressive identity system for a studio shaping the spaces we live in.', scope: 'Personal Branding · AI Graphic Design', deliverables: 'Identity, campaign language, digital assets' },
  { slug: 'future-form', name: 'Future Form', type: 'AI CG', year: '2025', number: '03', theme: 'orange', mark: 'F/F', caption: 'Impossible looks real here.', summary: 'A visual world of surreal material, light, and movement for a future facing product launch.', scope: 'AI CG · Art Direction', deliverables: 'Creative direction, key visuals, campaign assets' },
  { slug: 'signal-app', name: 'Signal App', type: 'Product Design', year: '2025', number: '04', theme: 'blue', mark: 'signal.', caption: 'Better decisions, in focus.', summary: 'A calm, confident product experience that turns complex information into clear action.', scope: 'Product Design · Development', deliverables: 'UX strategy, interface design, prototype' },
  { slug: 'mono-object', name: 'Mono Object', type: 'Branding', year: '2025', number: '05', theme: 'cream', mark: 'MO.', caption: 'Objects with a point of view.', summary: 'A restrained yet unmistakable visual identity for a contemporary objects label.', scope: 'Personal Branding · Website Design', deliverables: 'Identity, website, editorial direction' },
  { slug: 'pulse-athletics', name: 'Pulse Athletics', type: 'Web Design', year: '2025', number: '06', theme: 'red', mark: 'PULSE', caption: 'Movement has a new rhythm.', summary: 'A kinetic campaign and web experience designed to move as fast as the audience.', scope: 'Website Design · Development', deliverables: 'Website, interaction design, campaign system' },
  { slug: 'aster-labs', name: 'Aster Labs', type: 'AI Graphic Design', year: '2024', number: '07', theme: 'cyan', mark: 'ASTER*', caption: 'A fresh visual language for discovery.', summary: 'A flexible collection of AI assisted graphics for a curious technology brand.', scope: 'AI Graphic Design · Art Direction', deliverables: 'Visual system, campaign graphics, social toolkit' },
  { slug: 'echo-world', name: 'Echo World', type: 'AI CG', year: '2024', number: '08', theme: 'pink', mark: 'ECHO', caption: 'Sound you can see.', summary: 'An immersive visual direction translating music and sound into striking digital forms.', scope: 'AI CG · Product Design', deliverables: 'CG concepts, digital experience, launch assets' },
  { slug: 'orbit-commerce', name: 'Orbit Commerce', type: 'Development', year: '2024', number: '09', theme: 'silver', mark: 'ORBIT®', caption: 'Commerce in its element.', summary: 'A fast, flexible storefront concept with a crisp interface and memorable interactions.', scope: 'Development · Website Design', deliverables: 'Frontend development, interaction system, website' }
];

const navLinks = [
  ['Home', 'index.html'], ['About', 'about.html'], ['Services', 'services.html'],
  ['Work', 'work.html'], ['Contact', 'contact.html']
];

function projectCard(project) {
  return `<a class="project-card reveal" href="work-detail.html?project=${encodeURIComponent(project.slug)}" data-category="${project.type}" aria-label="View ${project.name} project">
    <div class="project-art art-${project.theme}"><span class="project-art-grid" aria-hidden="true"></span><span class="project-mark">${project.mark}</span><span class="project-art-caption">${project.caption}</span><span class="project-art-arrow" aria-hidden="true">↗</span></div>
    <div class="project-meta"><div><span class="eyebrow">${project.type} / ${project.year}</span><h3>${project.name}</h3></div><span class="project-index">${project.number} ↗</span></div>
  </a>`;
}

function renderShell() {
  const page = document.body.dataset.page || 'home';
  const header = document.getElementById('site-header');
  const footer = document.getElementById('site-footer');
  if (header) header.innerHTML = `<div class="nav-wrap"><a class="logo" href="index.html" aria-label="001 Digital Studio home"><span class="logo-number">001<span class="logo-dot">_</span></span><span class="logo-word">DIGITAL<br>STUDIO</span></a><button class="menu-toggle" type="button" aria-label="Open menu" aria-controls="primary-nav" aria-expanded="false"><span></span><span></span></button><nav class="primary-nav" id="primary-nav" aria-label="Main navigation">${navLinks.map(([label, href]) => `<a href="${href}" ${page === label.toLowerCase() || (page === 'project' && label === 'Work') ? 'aria-current="page"' : ''}>${label}</a>`).join('')}<a class="button button-green nav-cta" href="contact.html">Let's Talk <span aria-hidden="true">↗</span></a></nav></div>`;
  if (footer) footer.innerHTML = `<div class="footer-main container"><div class="footer-lead"><a class="logo logo-footer" href="index.html" aria-label="001 Digital Studio home"><span class="logo-number">001<span class="logo-dot">_</span></span><span class="logo-word">DIGITAL<br>STUDIO</span></a><p>Design craft. AI speed.<br>Ideas made to move.</p></div><div class="footer-col"><span class="eyebrow">Explore</span>${navLinks.map(([label, href]) => `<a href="${href}">${label}</a>`).join('')}</div><div class="footer-col"><span class="eyebrow">Say hello</span><a href="mailto:hello@001digital.studio">hello@001digital.studio</a><a href="contact.html">Start a project ↗</a></div><div class="footer-col"><span class="eyebrow">Follow along</span><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram (opens in new tab)">Instagram ↗</a><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in new tab)">LinkedIn ↗</a><a href="https://www.behance.net/" target="_blank" rel="noopener noreferrer" aria-label="Behance (opens in new tab)">Behance ↗</a></div></div><div class="footer-bottom container"><span>© <span id="footer-year"></span> 001_Digital Studio. All rights reserved.</span><span>Made for what's next <span class="green-star">✳</span></span><a href="#top" class="back-to-top">Back to top ↑</a></div>`;
  const year = document.getElementById('footer-year');
  if (year) year.textContent = new Date().getFullYear();
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.primary-nav');
  toggle?.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    nav.classList.toggle('is-open', open);
    document.body.classList.toggle('menu-open', open);
  });
  nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    toggle?.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
  }));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && nav?.classList.contains('is-open')) toggle?.click();
  });
}

function renderProjects() {
  const featured = document.getElementById('featured-projects');
  if (featured) featured.innerHTML = projects.slice(0, 4).map(projectCard).join('');
  const full = document.getElementById('project-grid');
  if (full) full.innerHTML = projects.map(projectCard).join('');
}

function initFilters() {
  const buttons = [...document.querySelectorAll('[data-filter]')];
  const cards = [...document.querySelectorAll('#project-grid .project-card')];
  const count = document.getElementById('project-count');
  if (!buttons.length || !cards.length) return;
  buttons.forEach(button => button.addEventListener('click', () => {
    const category = button.dataset.filter;
    let visible = 0;
    buttons.forEach(item => { item.classList.toggle('is-active', item === button); item.setAttribute('aria-pressed', String(item === button)); });
    cards.forEach(card => { const show = category === 'All' || card.dataset.category === category; card.hidden = !show; if (show) visible++; });
    if (count) count.textContent = `${String(visible).padStart(2, '0')} projects`;
  }));
}

function initContact() {
  const select = document.getElementById('service');
  const form = document.getElementById('contact-form');
  if (!form || !select) return;
  const requested = new URLSearchParams(location.search).get('service');
  if (requested) {
    const match = serviceOptions.find(item => item.slug === requested.toLowerCase() || item.name.toLowerCase() === requested.toLowerCase());
    if (match) select.value = match.slug;
  }
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const name = form.elements.name.value.trim();
    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();
    if (!name || !email || !message) { form.reportValidity(); return; }
    const confirmation = document.getElementById('form-confirmation');
    confirmation.innerHTML = `<span class="success-icon" aria-hidden="true">✓</span><h2>LOOKING GOOD, ${escapeHtml(name.split(' ')[0].toUpperCase())}.</h2><p>Your message is ready. This demo form doesn't send emails yet. Reach us directly at <a href="mailto:hello@001digital.studio">hello@001digital.studio</a>.</p><button class="button button-outline" type="button" id="send-another">Write another message ↗</button>`;
    form.hidden = true;
    confirmation.hidden = false;
    confirmation.focus();
    document.getElementById('send-another')?.addEventListener('click', () => { form.reset(); confirmation.hidden = true; form.hidden = false; form.querySelector('input')?.focus(); });
  });
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
}

function renderProjectDetail() {
  const mount = document.getElementById('project-detail');
  if (!mount) return;
  const slug = new URLSearchParams(location.search).get('project');
  const project = projects.find(item => item.slug === slug);
  if (!project) { document.title = 'Project not found | 001_Digital Studio'; mount.innerHTML = `<section class="section container empty-project"><span class="eyebrow">404 / Project</span><h1>THIS PROJECT<br><em>ISN'T HERE.</em></h1><p>The project link may have changed. Explore the full collection instead.</p><a class="button button-green" href="work.html">Back to work ↗</a></section>`; return; }
  document.title = `${project.name} | 001_Digital Studio`;
  const index = projects.indexOf(project);
  const next = projects[(index + 1) % projects.length];
  mount.innerHTML = `<section class="detail-intro container"><div class="breadcrumb"><a href="work.html">Work</a><span aria-hidden="true">/</span><span>${project.name}</span></div><div class="detail-heading"><div><span class="eyebrow">Case study / ${project.number}</span><h1>${project.name}<span class="green-star">.</span></h1></div><span class="detail-year">${project.year} ↗</span></div><p class="detail-subline">${project.caption}</p></section><section class="detail-visual"><div class="project-art art-${project.theme}"><span class="project-art-grid" aria-hidden="true"></span><span class="project-mark">${project.mark}</span><span class="project-art-caption">${project.caption}</span></div></section><section class="section container detail-overview"><div><span class="eyebrow">The idea</span><h2>WORK THAT<br><em>MOVES PEOPLE.</em></h2></div><div><p>${project.summary}</p><dl><div><dt>Scope</dt><dd>${project.scope}</dd></div><div><dt>What we made</dt><dd>${project.deliverables}</dd></div><div><dt>Category</dt><dd>${project.type}</dd></div></dl></div></section><section class="section container"><div class="concept-note"><span class="eyebrow">Concept project</span><p>This is a sample case study showing the direction of 001_Digital Studio's work. Imagery and outcomes are placeholders.</p></div></section><section class="section container next-project"><span class="eyebrow">Keep exploring</span><a href="work-detail.html?project=${next.slug}"><span>Next project</span><strong>${next.name} ↗</strong></a></section>`;
}

function initReveal() {
  const items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) { items.forEach(item => item.classList.add('is-visible')); return; }
  const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }), { threshold: 0.08, rootMargin: '0px 0px -35px 0px' });
  items.forEach(item => {
    if (item.getBoundingClientRect().top < window.innerHeight - 35) item.classList.add('is-visible');
    else observer.observe(item);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderShell();
  renderProjects();
  renderProjectDetail();
  initFilters();
  initContact();
  initReveal();
  if (location.hash) {
    const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (target) requestAnimationFrame(() => target.scrollIntoView());
  }
});
