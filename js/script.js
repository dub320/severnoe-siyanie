// header shadow on scroll
  const header = document.getElementById('siteHeader');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 8);
  });

  // mobile nav
  const burger = document.getElementById('burgerBtn');
  const navLinks = document.getElementById('navLinks');
  burger.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

  // scroll reveal (прогрессивное улучшение — сначала всё видно, см. .js-ready в CSS)
  document.documentElement.classList.add('js-ready');
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { threshold: 0.12 });
    revealEls.forEach(el => io.observe(el));
    // страховка: если наблюдатель почему-то не сработал (фон/троттлинг вкладки),
    // через 2 секунды всё равно показываем весь контент
    setTimeout(() => revealEls.forEach(el => el.classList.add('in')), 2000);
  } else {
    revealEls.forEach(el => el.classList.add('in'));
  }
