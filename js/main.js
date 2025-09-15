// js/main.js
import { initComponents } from './components.js';
import { initNavigation } from './navigation.js';
import { initTabs } from './tabs.js';
import { initCarousel } from './carousel.js';

document.addEventListener('DOMContentLoaded', async () => {
  await initComponents();  // carrega header e footer
  initNavigation();        // ativa menu
  initTabs();              // ativa tabs
  initCarousel();          // ativa carrossel
});
