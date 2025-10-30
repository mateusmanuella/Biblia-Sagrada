// gallery.js - Gerenciador de Galeria (MODIFICADO)
class GalleryManager {
  constructor() {
    this.items = [];
    this.currentIndex = -1;
    this.lastActiveElement = null;
    this.init();
  }

  init() {
    this.cacheGalleryItems();
    this.setupLightbox();
    this.setupVideoPlayer();
  }

  cacheGalleryItems() {
    // APENAS os cards da seção galeria (não outros cards do site)
    const gallerySection = document.getElementById('galeria');
    if (!gallerySection) return;
    
    const galleryCards = gallerySection.querySelectorAll('.gallery-card');
    this.items = Array.from(galleryCards).map((card, index) => {
      const img = card.querySelector('img');
      return {
        src: img.src,
        alt: img.alt || '',
        caption: card.querySelector('.gallery-caption')?.textContent || '',
        element: card,
        index: index
      };
    });
  }

  setupLightbox() {
    this.lightbox = document.getElementById('lightbox');
    this.lightboxImage = document.getElementById('lb-image');
    this.lightboxCaption = document.getElementById('lb-caption');
    
    if (!this.lightbox) return;

    // Event listeners
    document.getElementById('lb-prev')?.addEventListener('click', () => this.showPrev());
    document.getElementById('lb-next')?.addEventListener('click', () => this.showNext());
    document.getElementById('lb-close')?.addEventListener('click', () => this.closeLightbox());
    
    this.lightbox.addEventListener('click', (e) => {
      if (e.target === this.lightbox) this.closeLightbox();
    });

    // Teclado
    document.addEventListener('keydown', (e) => {
      if (!this.lightbox.classList.contains('show')) return;
      
      if (e.key === 'Escape') this.closeLightbox();
      if (e.key === 'ArrowRight') this.showNext();
      if (e.key === 'ArrowLeft') this.showPrev();
    });

    // Clique nas imagens APENAS da galeria
    this.items.forEach((item, index) => {
      item.element.addEventListener('click', () => this.openLightbox(index));
    });
  }

  openLightbox(index) {
    if (index < 0 || index >= this.items.length) return;
    
    this.currentIndex = index;
    const item = this.items[index];
    
    this.lightboxImage.src = item.src;
    this.lightboxImage.alt = item.alt;
    this.lightboxCaption.textContent = item.caption;
    
    this.lightbox.classList.add('show');
    this.lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  closeLightbox() {
    this.lightbox.classList.remove('show');
    this.lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  showNext() {
    if (this.items.length === 0) return;
    this.openLightbox((this.currentIndex + 1) % this.items.length);
  }

  showPrev() {
    if (this.items.length === 0) return;
    this.openLightbox((this.currentIndex - 1 + this.items.length) % this.items.length);
  }

  setupVideoPlayer() {
    this.videoLightbox = document.getElementById('video-lightbox');
    this.videoIframe = document.getElementById('video-iframe');
    
    if (!this.videoLightbox) return;

    // Configurar os cards de vídeo específicos
    const videoCard1 = document.querySelector('[data-title="Introdução Vídeo"]');
    const videoCard2 = document.querySelector('[data-title="A Vida de Jesus"]');
    
    if (videoCard1) {
      videoCard1.addEventListener('click', () => {
        this.openVideo('OkUSftiKn98');
      });
    }
    
    if (videoCard2) {
      videoCard2.addEventListener('click', () => {
        this.openVideo('6ATJ6avomUg');
      });
    }

    // Outros cards de vídeo (manter funcionamento original)
    const otherVideoCards = document.querySelectorAll('[data-video-id]:not([data-title="Introdução Vídeo"]):not([data-title="A Vida de Jesus"])');
    otherVideoCards.forEach(card => {
      card.addEventListener('click', () => {
        const videoId = card.dataset.videoId;
        if (videoId) this.openVideo(videoId);
      });
    });

    document.getElementById('close-video')?.addEventListener('click', () => this.closeVideo());
    this.videoLightbox.addEventListener('click', (e) => {
      if (e.target === this.videoLightbox) this.closeVideo();
    });
  }

  openVideo(videoId) {
    if (!this.videoIframe) return;
    
    this.videoIframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    this.videoLightbox.classList.add('show');
    this.videoLightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  closeVideo() {
    if (this.videoIframe) {
      this.videoIframe.src = '';
    }
    this.videoLightbox.classList.remove('show');
    this.videoLightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.galleryManager = new GalleryManager();
});