export function highlightActiveSidebarLink() {
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  const sidebarLinks = document.querySelectorAll('.sidebar-nav-item');
  
  sidebarLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    const normalized = href.replace(/\/$/, '') || '/';
    
    // Exact match or matches subpages (e.g. lore.html matches /lore.html)
    if (path === normalized || path.endsWith(normalized.replace(/^\//, ''))) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

/**
 * Mobile sidebar toggle — inserts a hamburger button into the topbar
 * or entity editor toolbar, and a backdrop overlay.
 * Toggles .sidebar-open on <body>.
 */
export function initMobileSidebar() {
  const sidebar = document.querySelector('.app-sidebar');
  if (!sidebar) return;

  const topbar = document.querySelector('.app-topbar') || document.querySelector('.ee-toolbar');
  if (!topbar) return;

  // Skip if toggle already exists
  if (document.querySelector('.sidebar-toggle')) return;

  const toggle = document.createElement('button');
  toggle.type = 'button';
  toggle.className = 'sidebar-toggle';
  toggle.setAttribute('aria-label', 'Toggle navigation');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.innerHTML = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <path d="M3 4.5h12M3 9h12M3 13.5h12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
  </svg>`;

  topbar.insertBefore(toggle, topbar.firstChild);

  let backdrop = document.querySelector('.sidebar-backdrop');
  if (!backdrop) {
    backdrop = document.createElement('div');
    backdrop.className = 'sidebar-backdrop';
    backdrop.setAttribute('aria-hidden', 'true');
    document.body.appendChild(backdrop);
  }

  function setOpen(open) {
    document.body.classList.toggle('sidebar-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  }

  toggle.addEventListener('click', () => {
    setOpen(!document.body.classList.contains('sidebar-open'));
  });

  backdrop.addEventListener('click', () => setOpen(false));

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && document.body.classList.contains('sidebar-open')) {
      setOpen(false);
    }
  });

  sidebar.querySelectorAll('.sidebar-nav-item').forEach((link) => {
    link.addEventListener('click', () => setOpen(false));
  });
}

// Automatically run when the DOM is ready
function init() {
  highlightActiveSidebarLink();
  initMobileSidebar();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
