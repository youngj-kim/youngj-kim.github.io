const root = document.documentElement;
const themeButton = document.querySelector('.theme-toggle');
try {
  if (localStorage.getItem('yk-theme') === 'dark') root.dataset.theme = 'dark';
} catch { /* Storage is optional. */ }
themeButton?.setAttribute('aria-pressed', String(root.dataset.theme === 'dark'));
themeButton?.addEventListener('click', () => {
  const dark = root.dataset.theme !== 'dark';
  root.dataset.theme = dark ? 'dark' : 'light';
  themeButton.setAttribute('aria-pressed', String(dark));
  try { localStorage.setItem('yk-theme', dark ? 'dark' : 'light'); } catch {}
});

document.querySelectorAll('[data-filter]').forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    document.querySelectorAll('[data-filter]').forEach(b => b.setAttribute('aria-pressed', String(b === button)));
    let visible = 0;
    document.querySelectorAll('[data-category]').forEach(card => {
      card.hidden = filter !== 'all' && card.dataset.category !== filter;
      if (!card.hidden) visible++;
    });
    document.querySelector('#filter-status').textContent = document.documentElement.lang === 'ko' ? `${visible}개 프로젝트 표시` : `${visible} projects shown`;
  });
});

document.querySelector('[data-copy]')?.addEventListener('click', async event => {
  const button = event.currentTarget;
  try {
    await navigator.clipboard.writeText(button.dataset.copy);
    button.textContent = button.dataset.success;
  } catch {
    button.textContent = button.dataset.error;
  }
  setTimeout(() => { button.textContent = button.dataset.label; }, 4000);
});

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) document.querySelectorAll('.nav-links a').forEach(a => {
        if (a.hash === `#${entry.target.id}`) a.setAttribute('aria-current', 'location');
        else a.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-10% 0px -60% 0px' });
  document.querySelectorAll('main section[id]').forEach(section => observer.observe(section));
}
