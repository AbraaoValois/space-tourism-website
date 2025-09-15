// js/components.js
export async function initComponents() {
  // Carregar Header
  const headerPlaceholder = document.getElementById('header-placeholder');
  if (headerPlaceholder) {
    const header = await fetch('./components/header.html').then(res => res.text());
    headerPlaceholder.innerHTML = header;
  }

  // Carregar Footer
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) {
    const footer = await fetch('./components/footer.html').then(res => res.text());
    footerPlaceholder.innerHTML = footer;
  }
}
