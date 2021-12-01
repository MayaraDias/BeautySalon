/*Abre e fecha o menu clicando nos icones */
const nav = document.querySelector('.menuNavigation')
const toogle = document.querySelectorAll('.menuNavigation .toogle')

for (const element of toogle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/*Fecha o menu clicando nos links do menu */

const links = document.querySelectorAll('.menuNavigation ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* Adicionando box boxShadow no header ao scrollar a pg*/

const header = document.querySelector('.header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

/* Carrossel com swiper */
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

/* Scroll Reveal*/

const scrollReveal = ScrollReveal({
  oring: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .textInitialPage, #home h2, #home p
#about .image, #about .textAbout, #services header, #services .cards, #testimonials header, #testimonials .testimonials, #testimonials .swiper, #contact .textContact , #contact .links, .socialMedia`,
  {
    interval: 100
  }
)

/**==== BUTTON BACK-TO-TOP ============== */

const backToTopButton = document.querySelector('.back-to-top')

function backToTOp() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuCurrentSection()
})
