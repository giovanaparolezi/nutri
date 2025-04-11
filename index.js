function changeBannerAndVideo() {
    const video = document.querySelector('.background-video');
    const source = video?.querySelector('source');
    const banner = document.querySelector('.banner img');
    const windowWidth = window.innerWidth;
  
    if (windowWidth <= 768) {
      // Remove vídeo no celular
      if (video) {
        video.pause();
        video.removeAttribute('src');
        if (source) source.removeAttribute('src');
        video.style.display = 'none';
      }
  
      // Troca banner para banner2.png no celular
      if (banner) {
        banner.src = 'img/banner2.png';
      }
    } else {
      // Recoloca o vídeo em tela grande
      if (video && source) {
        source.setAttribute('src', 'img/video.mp4');
        video.load();
        video.style.display = 'block';
      }
  
      // Volta o banner original em tela grande
      if (banner) {
        banner.src = 'img/nutrition harmony.jpg';
      }
    }
  }
  
  // Ao carregar e redimensionar
  window.addEventListener('load', changeBannerAndVideo);
  window.addEventListener('resize', changeBannerAndVideo);
  
  // Clique para play/pause
  function playVideo() {
    const video = document.querySelector('.background-video');
    if (video) {
      video.paused ? video.play() : video.pause();
    }
  }
  