var swiper = new Swiper(".mySwiper2", {});

window.addEventListener('scroll', function() {
    const div = document.querySelector('.wrap.en');
    if (window.scrollY >= 200) {
      div.classList.add('on');
    } else {
      div.classList.remove('on');
    }
  });