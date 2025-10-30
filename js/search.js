// search.js - Sistema de busca funcional universal para todo o site
class BibleSearch {
  constructor() {
    this.verses = this.loadBibleData();
    this.books = this.loadBooksData();
    this.characters = this.loadCharactersData();
    this.themes = this.loadThemesData();
    this.init();
  }

  init() {
    this.setupSearchHandlers();
  }

  loadBibleData() {
    return [
      {
        book: "Gênesis",
        chapter: 1,
        verse: 1,
        text: "No princípio, Deus criou os céus e a terra.",
        version: "NVI"
      },
      {
        book: "João",
        chapter: 3,
        verse: 16,
        text: "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna.",
        version: "NVI"
      },
      {
        book: "Salmos",
        chapter: 23,
        verse: 1,
        text: "O Senhor é o meu pastor; de nada terei falta.",
        version: "NVI"
      },
      {
        book: "Filipenses",
        chapter: 4,
        verse: 13,
        text: "Tudo posso naquele que me fortalece.",
        version: "NVI"
      },
      {
        book: "Jeremias",
        chapter: 29,
        verse: 11,
        text: "Porque eu sei os planos que tenho para vocês', declara o Senhor, 'planos de prosperá-los e não de causar dano, planos de dar-lhes esperança e um futuro.",
        version: "NVI"
      }
    ];
  }

  loadBooksData() {
    return [
      { name: "Gênesis", testament: "AT", chapters: 50, theme: "Criação, Patriarcas" },
      { name: "Êxodo", testament: "AT", chapters: 40, theme: "Libertação, Lei" },
      { name: "Salmos", testament: "AT", chapters: 150, theme: "Louvor, Oração" },
      { name: "Isaías", testament: "AT", chapters: 66, theme: "Profecia, Messias" },
      { name: "Mateus", testament: "NT", chapters: 28, theme: "Evangelho, Reino" }
    ];
  }

  loadCharactersData() {
    return [
      { name: "Jesus", role: "Filho de Deus", books: ["Mateus", "Marcos", "Lucas", "João"] },
      { name: "Moisés", role: "Líder, Profeta", books: ["Êxodo", "Levítico", "Números", "Deuteronômio"] },
      { name: "Davi", role: "Rei, Salmista", books: ["1 Samuel", "2 Samuel", "Salmos"] }
    ];
  }

  loadThemesData() {
    return [
      { theme: "Amor", verses: ["João 3:16", "1 Coríntios 13", "1 João 4:8"] },
      { theme: "Fé", verses: ["Hebreus 11:1", "Romanos 10:17", "Efésios 2:8"] },
      { theme: "Esperança", verses: ["Jeremias 29:11", "Romanos 15:13", "1 Pedro 1:3"] }
    ];
  }

  setupSearchHandlers() {
    const searchInput = document.getElementById('gallery-search');
    const clearBtn = document.getElementById('gallery-clear');
    const searchCount = document.getElementById('search-count');

    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.trim();
      this.performUniversalSearch(query);
    });

    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        searchInput.value = '';
        this.clearSearch();
        if (searchCount) searchCount.textContent = '';
      });
    }

    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        this.performUniversalSearch(searchInput.value.trim());
      }
    });
  }

  performUniversalSearch(query) {
    if (!query) {
      this.clearSearch();
      return;
    }

    this.highlightAllElements(query);
    this.updateSearchCount(query);
    this.scrollToResults();
  }

  highlightAllElements(query) {
    this.clearSearch();

    const allElements = document.querySelectorAll(`
      .gallery-card, 
      .info-card, 
      .card, 
      .gallery-caption, 
      .card-body,
      h1, h2, h3, h4, h5, h6,
      p, li, span
    `);

    allElements.forEach(element => {
      const elementText = element.textContent.toLowerCase();
      const elementTitle = element.getAttribute('data-title') || 
                         element.querySelector('h5')?.textContent || 
                         element.querySelector('.gallery-caption')?.textContent || 
                         element.querySelector('.card-body')?.textContent || '';

      const searchText = (elementText + ' ' + elementTitle).toLowerCase();
      
      if (searchText.includes(query.toLowerCase())) {
        element.classList.add('search-highlight');

        if (element.classList.contains('card-led') || element.classList.contains('card')) {
          element.style.setProperty('--led-intensity', '0.8');
          element.style.boxShadow = '0 0 25px rgba(249, 211, 66, 0.6)';
        }

        element.style.display = '';
        if (element.parentElement?.classList.contains('col-md-4')) {
          element.parentElement.style.display = '';
        }
      } else {
        if (element.classList.contains('gallery-card') || 
            element.classList.contains('info-card') ||
            element.classList.contains('card')) {
          element.style.display = 'none';
          if (element.parentElement?.classList.contains('col-md-4')) {
            element.parentElement.style.display = 'none';
          }
        }
      }
    });
  }

  scrollToResults() {
    const firstHighlight = document.querySelector('.search-highlight');
    
    if (firstHighlight) {
      const navbar = document.querySelector('.navbar');
      const navbarHeight = navbar ? navbar.offsetHeight : 80;
      const elementPosition = firstHighlight.getBoundingClientRect().top + window.pageYOffset;
      
      setTimeout(() => {
        window.scrollTo({
          top: elementPosition - navbarHeight - 20,
          behavior: 'smooth'
        });
      }, 100);
    }
  }

  updateSearchCount(query) {
    const searchCount = document.getElementById('search-count');
    if (!searchCount) return;

    const highlightedElements = document.querySelectorAll('.search-highlight');
    const totalResults = highlightedElements.length;
    
    if (totalResults > 0) {
      searchCount.textContent = `${totalResults} resultado(s) para "${query}"`;
      searchCount.style.color = 'var(--accent)';
    } else {
      searchCount.textContent = `Nenhum resultado para "${query}"`;
      searchCount.style.color = 'var(--danger)';
    }
  }

  clearSearch() {
    document.querySelectorAll('.search-highlight').forEach(el => {
      el.classList.remove('search-highlight');
      if (el.classList.contains('card-led') || el.classList.contains('card')) {
        el.style.setProperty('--led-intensity', '0.3');
        el.style.boxShadow = '';
      }
    });

    document.querySelectorAll('.gallery-card, .info-card, .card').forEach(el => {
      el.style.display = '';
      if (el.parentElement?.classList.contains('col-md-4')) {
        el.parentElement.style.display = '';
      }
    });

    const searchCount = document.getElementById('search-count');
    if (searchCount) {
      searchCount.textContent = '';
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    window.bibleSearch = new BibleSearch();
    
    if (!document.getElementById('search-highlight-css')) {
      const css = `
        <style id="search-highlight-css">
        .search-highlight {
          outline: 3px solid var(--accent) !important;
          box-shadow: 0 0 20px rgba(249, 211, 66, 0.4) !important;
          transform: scale(1.02) !important;
          transition: all 0.3s ease !important;
          z-index: 10 !important;
          position: relative !important;
          animation: pulse-highlight 2s infinite !important;
        }
        
        @keyframes pulse-highlight {
          0% { 
            box-shadow: 0 0 10px rgba(249, 211, 66, 0.4); 
            transform: scale(1.02);
          }
          50% { 
            box-shadow: 0 0 25px rgba(249, 211, 66, 0.8); 
            transform: scale(1.03);
          }
          100% { 
            box-shadow: 0 0 10px rgba(249, 211, 66, 0.4); 
            transform: scale(1.02);
          }
        }
        </style>
      `;
      document.head.insertAdjacentHTML('beforeend', css);
    }
  }, 500);
});