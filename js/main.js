// js/main.js

// Função para carregar componentes HTML
async function loadComponent(id, file) {
  const placeholder = document.getElementById(id);
  if (!placeholder) return;

  try {
    const response = await fetch(file);
    if (!response.ok) throw new Error(`Erro ao carregar ${file}: ${response.statusText}`);
    const html = await response.text();
    placeholder.innerHTML = html;
  } catch (error) {
    console.error(error);
  }
}

// Quando o DOM estiver carregado, carrega header e footer
document.addEventListener('DOMContentLoaded', () => {
  loadComponent('header', './components/header.html');
  loadComponent('footer-placeholder', './components/footer.html');
});
