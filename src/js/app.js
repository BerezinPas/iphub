import * as customfunctions from "./modules/functions.js";


customfunctions.test();

import Swiper, {Navigation, Pagination} from 'swiper';
// import { create } from "browser-sync";



const swiper = new Swiper('.business-solution__swiper', {
  // configure Swiper to use modules
  modules: [Navigation],

  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    440: {
      slidesPerView: 2,
    },
    700: {
      slidesPerView: 3,
    },
    1256: {
      slidesPerView: 4,
    }
  }

});

const caseSwiper = new Swiper('.case__swiper', {
  // configure Swiper to use modules
  modules: [Navigation],

  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
   
    769: {
      slidesPerView: 2,
    }
  }
});

const expertsSwiper = new Swiper('.experts__swiper', {
  // configure Swiper to use modules
  modules: [Navigation],

  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    400: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1256: {
      slidesPerView: 4,
    }
  }
});


const quizBackBtn = document.querySelector(".form-quiz__back");
const quizNextBtn = document.querySelector(".form-quiz__next");
const quizSteps = document.querySelectorAll('.form-quiz__step');
let quizStep = 0;
let quizFraction = document.querySelector('.form-quiz__fraction span');
if (quizFraction) {
  quizFraction.nextSibling.textContent ='/' +  quizSteps.length;
}
if (quizNextBtn) {
  quizNextBtn.addEventListener('click', () => {
    quizSteps.forEach((item) => { item.classList.remove('active') });
    quizSteps[++quizStep].classList.add('active');
    quizFraction.textContent = quizStep + 1;
    if (quizStep) {
      quizBackBtn.classList.remove('d-none')
    } else {
      quizBackBtn.classList.add('d-none')
    }
  });
}
if (quizBackBtn) {
  quizBackBtn.addEventListener('click', () => {
    quizSteps.forEach((item) => { item.classList.remove('active') });
    quizSteps[--quizStep].classList.add('active');
    quizFraction.textContent = quizStep + 1;
    if (quizStep) {
      quizBackBtn.classList.remove('d-none')
    } else {
      quizBackBtn.classList.add('d-none')
    }
  });
}


// const modal = document.querySelector('.modal');
// modal.addEventListener('click', (e) => {
//   if (!isNaN(e.target.dataset.modalClose)) {
//     // e.target.classList.remove('active');
//     e.currentTarget.classList.remove('active');
//   }
// });
document.addEventListener('click', (e) => {
  // console.log(e.target);
  // console.log(e.currentTarget);
  if (e.target.dataset.modalOpen) {
    e.preventDefault();
    const idModal = e.target.dataset.modalOpen;
    const modal = document.querySelector(idModal);
    modal.classList.add('active');
    document.querySelector('body').classList.add('blocked');
  }
  
  if (e.target.dataset.modalClose !== undefined) {
    let iterator = e.target;
    while (!iterator.classList.contains('modal')) {
      iterator = iterator.parentElement;
    }
    iterator.classList.remove('active');
    document.querySelector('body').classList.remove('blocked');
  }
  if (e.target.classList.contains('swiper-item')) {
    console.log(e.target.querySelector('.swiper-item__img img').src);
    const modal = document.querySelector(e.target.dataset.modalOpen);
    modal.querySelector('.modal__img img').src = e.target.querySelector('.swiper-item__img img').src;
    modal.querySelector('.modal__title').textContent = e.target.querySelector('.swiper-item__title').textContent;
    modal.querySelector('.modal__subtitle').textContent = e.target.querySelector('.swiper-item__text').textContent;
    modal.querySelector('.modal__text').textContent = e.target.dataset.text;
    console.log(e.target.querySelector('.swiper-item__title').textContent);
    console.log(modal.querySelector('.modal__title'));
  }
  if (e.target.classList.contains('tab-link') && !e.target.classList.contains('active')) {
    
    e.preventDefault();
    console.log(e.target.parentElement);
    e.target.parentElement.querySelectorAll('.tab-link').forEach(el => {
      el.classList.remove('active');
    })
    e.target.classList.add('active');
    document.querySelector(e.target.dataset.tabId).parentElement.querySelectorAll('.tab').forEach(el => {
      el.classList.remove('active');
    })
    document.querySelector(e.target.dataset.tabId).classList.add('active')
  }

  if (e.target.classList.contains('spoiler__header') ) {
    e.target.parentElement.classList.toggle('active');
  }

  if (e.target.classList.contains('burger')) {
    e.target.classList.toggle('active');
    document.querySelector('body').classList.toggle('blocked')
  }
  if (e.target.classList.contains('burger-page')) {
    e.target.parentElement.querySelector('.burger').classList.toggle('active');
    document.querySelector('body').classList.toggle('blocked')
  }


  // select 
  console.log(e.target);
  if (e.target.classList.contains('select__preview')) {
    e.target.parentElement.classList.toggle('active');
  }

  if (e.target.classList.contains('filter__checkbox-fake') && window.outerWidth < 1024) {
    console.log('ticknul');
    let iterator = e.target;
    while (!iterator.classList.contains('select')) {
      iterator = iterator.parentElement;
    }

    iterator.classList.remove('active');
    const selectPreview = iterator.querySelector('.filter__icon').previousSibling;
    let checkboxes = iterator.querySelectorAll('.checkbox');

    checkboxes.forEach( el => {
      el.checked = false;
    })
    
    e.target.previousElementSibling.checked = false;
    selectPreview.textContent = e.target.textContent;
  }
})

const swiperLogos = new Swiper('.logos-swiper', {
  // configure Swiper to use modules

  slidesPerView: 1.2,
  spaceBetween: 20,
  breakpoints: {
    500: {
      slidesPerView: 1.5,
    },
    600: {
      slidesPerView: 2.2,
    },
    768: {
      slidesPerView: 3.5,
    },
    1256: {
      slidesPerView: 4.5,
    }
  },
});

const swiperProcess = new Swiper('.process__swiper', {
  // configure Swiper to use modules

  modules: [Navigation, Pagination],

  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: 'true',
    dynamicBullets: 'true',
    dynamicMainBullets: 1,
  },
  breakpoints: {
    
    768: {
      pagination: {
        dynamicMainBullets: 2,
      },
    },
    1024: {
      pagination: {
        dynamicMainBullets: 3,
      },
    },
    1256: {
      pagination: {
        dynamicMainBullets: 5,
      },
    }
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
swiperProcess.pagination.bullets.forEach((el, index) => {
  el.innerHTML='<div class="process-step"><div class="process-step__number number">1</div><div class="process-step__arrow"><svg width="94" height="8" viewBox="0 0 94 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.5" d="M93.3536 4.35355C93.5488 4.15829 93.5488 3.84171 93.3536 3.64645L90.1716 0.464466C89.9763 0.269204 89.6597 0.269204 89.4645 0.464466C89.2692 0.659728 89.2692 0.976311 89.4645 1.17157L92.2929 4L89.4645 6.82843C89.2692 7.02369 89.2692 7.34027 89.4645 7.53553C89.6597 7.7308 89.9763 7.7308 90.1716 7.53553L93.3536 4.35355ZM0 4.5H93V3.5H0V4.5Z" fill="url(#paint0_linear_2240_20)"/><defs><linearGradient id="paint0_linear_2240_20" x1="93" y1="4.00007" x2="0" y2="3.99994" gradientUnits="userSpaceOnUse"><stop stop-color="#DA4533"/><stop offset="1" stop-color="#DA4533" stop-opacity="0"/></linearGradient></defs></svg></div><div class="process-step__text">Выдача свидетельства на товарный знак</div></div>';
  el.querySelector('.number').textContent = index + 1;
  el.querySelector('.process-step__text').textContent = swiperProcess.slides[index].querySelector('.process-item').dataset.stepName;
});



// for (let index = 0; index < swiperProcess.slides.length; index++) {

//   const element = swiperProcess.slides.length;
  
// }

// console.log(swiperProcess.pagination.bullets[0].innerHTML='<div>123<span>span</span></div>');
// console.log(swiperProcess.slides[0].querySelector('.swiper-item__bridget-item').textContent);

const swiperTask = new Swiper('.swiper-task', {
  // configure Swiper to use modules
  modules: [Navigation],

  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    400: {
      slidesPerView: 2,
    }
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiperResult = new Swiper('.swiper-result', {
  // configure Swiper to use modules
  modules: [Navigation],

  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    400: {
      slidesPerView: 2,
    }
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});