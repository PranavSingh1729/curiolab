const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

// Search and category filters work together, so readers can narrow the board quickly.
const filterButtons = $$('.filter-pill');
const articleGrid = $('#articleGrid');
const cards = articleGrid ? [...articleGrid.querySelectorAll('.article-card')] : [];
const searchInput = $('#searchInput');
let activeFilter = 'all';
function filterCards() {
  const query = (searchInput?.value || '').trim().toLowerCase();
  let visible = 0;
  cards.forEach((card) => {
    const categoryMatch = activeFilter === 'all' || card.dataset.category === activeFilter;
    const searchText = `${card.dataset.search || ''} ${card.innerText}`.toLowerCase();
    const show = categoryMatch && (!query || searchText.includes(query));
    card.hidden = !show;
    if (show) visible++;
  });
  const emptyState = $('#emptyState');
  if (emptyState) emptyState.hidden = visible !== 0;
}
filterButtons.forEach((button) => button.addEventListener('click', () => {
  activeFilter = button.dataset.filter || 'all';
  filterButtons.forEach((item) => {
    const selected = item === button;
    item.classList.toggle('active', selected);
    item.setAttribute('aria-pressed', String(selected));
  });
  filterCards();
}));
searchInput?.addEventListener('input', filterCards);

// This finder suggests an evaluation approach, not an unverified product endorsement.
const recommendations = {
  writing: {
    free: ['Start with a free-tier writing assistant', 'Use one short brief in two tools. Compare factual accuracy, tone, editing time and free-plan limits before choosing.'],
    flexible: ['Compare writing assistants on your own task', 'Score clarity, accuracy, revision effort and total price using the same brief. Do not choose from marketing claims alone.']
  },
  research: {
    free: ['Try a free research or summarisation workflow', 'Give it a source you can verify. Check source links, missing context and whether the summary preserves the original meaning.'],
    flexible: ['Compare source-grounded research tools', 'Test citation quality, coverage, exports, privacy terms and whether every important claim can be traced to a source.']
  },
  design: {
    free: ['Start with a free design or image tool', 'Test one specific output. Check export quality, watermark rules, usage rights and free-plan limits before using it commercially.'],
    flexible: ['Compare design tools against a real brief', 'Evaluate control, editability, licensing, export quality and how many revisions it takes to get a usable result.']
  },
  automation: {
    free: ['Map the task before choosing an automation tool', 'Start with a repeatable, low-risk task. Check task limits, integrations, error handling and what happens when a step fails.'],
    flexible: ['Compare workflow automation platforms', 'Estimate setup, maintenance and subscription costs. Test integrations, failure alerts, data access and handoff to a human.']
  }
};
$('#findTool')?.addEventListener('click', () => {
  const task = $('#taskSelect')?.value || 'writing';
  const budget = $('#budgetSelect')?.value || 'free';
  const result = recommendations[task]?.[budget] || recommendations.writing.free;
  const resultBox = $('#finderResult');
  if (!resultBox) return;
  resultBox.replaceChildren();
  const icon = document.createElement('span');
  icon.className = 'result-icon';
  icon.setAttribute('aria-hidden', 'true');
  icon.textContent = '✦';
  const copy = document.createElement('div');
  const title = document.createElement('b');
  title.textContent = result[0];
  const description = document.createElement('p');
  description.textContent = result[1];
  copy.append(title, description);
  resultBox.append(icon, copy);
});

const year = $('#year');
if (year) year.textContent = new Date().getFullYear();

const menuToggle = $('#menuToggle');
const nav = $('.nav');
menuToggle?.addEventListener('click', () => {
  const open = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!open));
  if (nav) nav.style.display = open ? '' : 'flex';
});
nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  if (window.matchMedia('(max-width: 680px)').matches) {
    nav.style.display = 'none';
    menuToggle?.setAttribute('aria-expanded', 'false');
  }
}));
