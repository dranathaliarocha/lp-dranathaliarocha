document.addEventListener('DOMContentLoaded', function () {

  // Ano atual no rodapé
  var anoEl = document.getElementById('anoAtual');
  if (anoEl) anoEl.textContent = new Date().getFullYear();

  // Menu mobile
  var header = document.querySelector('.site-header');
  var menuToggle = document.getElementById('menuToggle');
  if (menuToggle && header) {
    menuToggle.addEventListener('click', function () {
      var aberto = header.classList.toggle('menu-aberto');
      menuToggle.setAttribute('aria-expanded', aberto ? 'true' : 'false');
    });
    document.querySelectorAll('.main-nav a').forEach(function (link) {
      link.addEventListener('click', function () {
        header.classList.remove('menu-aberto');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // FAQ accordion
  document.querySelectorAll('.faq-item').forEach(function (item) {
    var btn = item.querySelector('.faq-pergunta');
    btn.addEventListener('click', function () {
      var jaAberto = item.classList.contains('aberto');
      document.querySelectorAll('.faq-item.aberto').forEach(function (i) {
        if (i !== item) i.classList.remove('aberto');
      });
      item.classList.toggle('aberto', !jaAberto);
    });
  });

  // Carrossel da clínica
  var track = document.querySelector('.carousel-track');
  var prevBtn = document.querySelector('.carousel-btn.prev');
  var nextBtn = document.querySelector('.carousel-btn.next');
  if (track && prevBtn && nextBtn) {
    var scrollAmount = function () {
      var img = track.querySelector('img');
      return img ? img.offsetWidth + 16 : 300;
    };
    prevBtn.addEventListener('click', function () {
      track.scrollBy({ left: -scrollAmount(), behavior: 'smooth' });
    });
    nextBtn.addEventListener('click', function () {
      track.scrollBy({ left: scrollAmount(), behavior: 'smooth' });
    });
  }

  // Botão WhatsApp flutuante: aparece após 3s ou ao iniciar o scroll
  var waFloat = document.getElementById('whatsappFloat');
  if (waFloat) {
    var mostrar = function () {
      waFloat.classList.add('visivel', 'pulse');
      window.removeEventListener('scroll', onScroll);
    };
    var onScroll = function () {
      if (window.scrollY > 80) mostrar();
    };
    window.addEventListener('scroll', onScroll);
    setTimeout(mostrar, 3000);
  }

});
