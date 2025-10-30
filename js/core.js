// core.js - Módulo principal da aplicação (CORRIGIDO)
class BibleApp {
  constructor() {
    this.theme = localStorage.getItem('theme') || 'dark';
    this.currentPage = window.location.pathname;
    this.init();
  }

  init() {
    this.setupTheme();
    this.setupNavigation();
    this.setupAccessibility();
    this.setupNavbarScroll();
    
    console.log('BibleApp inicializado');
  }

  setupTheme() {
    const htmlEl = document.documentElement;
    const themeToggle = document.getElementById('themeToggle');
    
    if (!themeToggle) return;

    const savedTheme = localStorage.getItem('theme') || 'dark';
    htmlEl.setAttribute('data-theme', savedTheme);
    themeToggle.setAttribute('aria-pressed', savedTheme === 'dark' ? 'true' : 'false');

    themeToggle.addEventListener('click', () => {
      const currentTheme = htmlEl.getAttribute('data-theme');
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      htmlEl.setAttribute('data-theme', nextTheme);
      localStorage.setItem('theme', nextTheme);
      themeToggle.setAttribute('aria-pressed', nextTheme === 'dark' ? 'true' : 'false');
    });
  }

  setupNavigation() {
    // Navegação suave para âncoras
    document.querySelectorAll("a.nav-link[href^='#']").forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href === '#') return;
        
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    // Fechar modais com ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeAllModals();
      }
    });
  }

  setupNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
      } else {
        navbar.classList.remove('navbar-scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
  }

  setupAccessibility() {
    // Skip links
    const skipLinks = document.querySelectorAll('.skip-link');
    skipLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.focus();
        }
      });
    });
  }

  closeAllModals() {
    document.querySelectorAll('.lb-backdrop.show').forEach(modal => {
      modal.classList.remove('show');
      modal.setAttribute('aria-hidden', 'true');
    });
    document.body.style.overflow = '';
  }

  showToast(message, duration = 3000) {
    const container = document.getElementById('toasts') || this.createToastContainer();
    const toast = document.createElement('div');
    
    toast.className = 'toast';
    toast.textContent = message;
    toast.setAttribute('aria-live', 'polite');
    
    container.appendChild(toast);
    
    requestAnimationFrame(() => toast.classList.add('toast-show'));
    
    setTimeout(() => {
      toast.classList.remove('toast-show');
      toast.classList.add('toast-hide');
      setTimeout(() => toast.remove(), 300);
    }, duration);
  }

  createToastContainer() {
    const container = document.createElement('div');
    container.id = 'toasts';
    container.setAttribute('aria-live', 'polite');
    container.setAttribute('aria-atomic', 'true');
    container.style.cssText = `
      position: fixed;
      right: 20px;
      top: 20px;
      z-index: 10000;
    `;
    document.body.appendChild(container);
    return container;
  }
}

// Utilitários
const BibleUtils = {
  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }
};

document.addEventListener('DOMContentLoaded', () => {
  window.bibleApp = new BibleApp();
});