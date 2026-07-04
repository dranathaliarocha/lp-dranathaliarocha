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

  // Carrosseis (clínica e resultados)
  document.querySelectorAll('.carousel').forEach(function (carousel) {
    var track = carousel.querySelector('.carousel-track');
    var prevBtn = carousel.querySelector('.carousel-btn.prev');
    var nextBtn = carousel.querySelector('.carousel-btn.next');
    if (!track || !prevBtn || !nextBtn) return;

    var images = Array.prototype.slice.call(track.querySelectorAll('img'));
    var total = images.length;
    var current = 0;
    var timer;

    function goTo(index) {
      images[current].classList.remove('ativo');
      current = (index + total) % total;
      images[current].classList.add('ativo');
    }

    function startAuto() {
      clearInterval(timer);
      timer = setInterval(function () { goTo(current + 1); }, 3000);
    }

    function stopAuto() { clearInterval(timer); }

    prevBtn.addEventListener('click', function () { stopAuto(); goTo(current - 1); startAuto(); });
    nextBtn.addEventListener('click', function () { stopAuto(); goTo(current + 1); startAuto(); });
    carousel.addEventListener('mouseenter', stopAuto);
    carousel.addEventListener('mouseleave', startAuto);

    images[0].classList.add('ativo');
    startAuto();
  });

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
