// Language switch mapping script
// Maps current path to the corresponding page in the other language.
const ML_LANG_MAP = {
  '/': '/de/',
  '/index.html': '/de/',
  '/en/': '/de/',
  '/en/index.html': '/de/',
  '/en/imprint.html': '/de/impressum.html',
  '/en/privacy.html': '/de/datenschutzerklaerung.html',
  '/de/': '/en/',
  '/de/index.html': '/en/',
  '/de/impressum.html': '/en/imprint.html',
  '/de/datenschutzerklaerung.html': '/en/privacy.html',
  '/impressum.html': '/en/imprint.html',
};

function resolveTarget(path, lang) {
  if (ML_LANG_MAP[path]) return ML_LANG_MAP[path];
  // try with/without trailing slash
  const withSlash = path.endsWith('/') ? path : path + '/';
  if (ML_LANG_MAP[withSlash]) return ML_LANG_MAP[withSlash];
  const withoutSlash = path.endsWith('/') ? path.slice(0,-1) : path;
  if (ML_LANG_MAP[withoutSlash]) return ML_LANG_MAP[withoutSlash];
  // fallback to language root
  return `/${lang}/`;
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.flags a[data-lang]').forEach(link => {
    link.addEventListener('click', (e) => {
      // If JS is enabled, handle mapping; otherwise follow href as fallback
      e.preventDefault();
      const lang = link.getAttribute('data-lang');
      const target = resolveTarget(location.pathname, lang);
      window.location.href = target;
    });
  });
});
