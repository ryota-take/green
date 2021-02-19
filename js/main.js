'use strict';







$(function(){
  $('.btn-trigger').on('click', function() {
    $(this).toggleClass('active');
    return false;
  });
});


// === modal window ===

const btn01 = document.getElementById('btn01');
const modalBg = document.querySelector('.modal-bg');
const home = document.querySelector('.home');

btn01.addEventListener('click', ()=> {
  modalBg.classList.toggle('show');
} );


// 要素が現れた時のアニメーション

// const ah1 = document.querySelector('.ah1');
let fadeInTarget = document.querySelectorAll('.ah1');   //対象となる要素の取得


window.addEventListener('scroll', () => {               //スクロールイベントの宣言

  for (let i = 0; i < fadeInTarget.length; i++){

    const rect = fadeInTarget[i].getBoundingClientRect().top;       //getBoundingClientRect()はターゲットまでの位置を取得するが、
                                                                        //ビューポートの左 上から（ドキュメントの左上からではない.
                                                                        //ドキュメントの左端から？）
    const scroll = window.pageYOffset || document.documentElement.scrollTop;    //window.pageYOffsetは、ドキュメントの左上からのスクロール量を取得

    const offset = rect + scroll;       //左端からの位置と上からのスクロール量を足して位置を取得


    const windowHeight = window.innerHeight; // 現在のブラウザの高さ
    if (scroll > offset - windowHeight + 180) {
      fadeInTarget[i].classList.add('ah1move');
    }
  }
});

// ====== p要素 ======


let aboutP = document.querySelectorAll('.about-p');   


window.addEventListener('scroll', () => {               

  for (let i = 0; i < aboutP.length; i++){

    const rect = aboutP[i].getBoundingClientRect().top;       
    const scroll = window.pageYOffset || document.documentElement.scrollTop;    
    const offset = rect + scroll;       


    const windowHeight = window.innerHeight; 
    if (scroll > offset - windowHeight + 150) {
      aboutP[i].classList.add('pShow');
    }
  }
});


// =========================

let aboutImg1 = document.querySelectorAll('.about-img-1');   

window.addEventListener('scroll', () => {               
  for (let i = 0; i < aboutImg1.length; i++){

    const rect = aboutImg1[i].getBoundingClientRect().top;       
    const scroll = window.pageYOffset || document.documentElement.scrollTop;    
    const offset = rect + scroll;      

    const windowHeight = window.innerHeight; 
    if (scroll > offset - windowHeight + 160) {
      aboutImg1[i].classList.add('imgShow1');
    }
  }
});

let aboutImg2 = document.querySelectorAll('.about-img-2');   

window.addEventListener('scroll', () => {               
  for (let i = 0; i < aboutImg2.length; i++){

    const rect = aboutImg2[i].getBoundingClientRect().top;       
    const scroll = window.pageYOffset || document.documentElement.scrollTop;    
    const offset = rect + scroll;      

    const windowHeight = window.innerHeight; 
    if (scroll > offset - windowHeight + 160) {
      aboutImg2[i].classList.add('imgShow2');
    }
  }
});

let aboutImg3 = document.querySelectorAll('.about-img-3');   

window.addEventListener('scroll', () => {               
  for (let i = 0; i < aboutImg3.length; i++){

    const rect = aboutImg3[i].getBoundingClientRect().top;       
    const scroll = window.pageYOffset || document.documentElement.scrollTop;    
    const offset = rect + scroll;      

    const windowHeight = window.innerHeight; 
    if (scroll > offset - windowHeight + 20) {
      aboutImg3[i].classList.add('imgShow3');
    }
  }
});

let aboutImg4 = document.querySelectorAll('.about-img-4');   

window.addEventListener('scroll', () => {               
  for (let i = 0; i < aboutImg4.length; i++){

    const rect = aboutImg4[i].getBoundingClientRect().top;       
    const scroll = window.pageYOffset || document.documentElement.scrollTop;    
    const offset = rect + scroll;      

    const windowHeight = window.innerHeight; 
    if (scroll > offset - windowHeight + 20) {
      aboutImg4[i].classList.add('imgShow4');
    }
  }
});




// =========================================================================

let designerImg = document.querySelectorAll('.designer-img');   

window.addEventListener('scroll', () => {               
  for (let i = 0; i < designerImg.length; i++){

    const rect = designerImg[i].getBoundingClientRect().top;       
    const scroll = window.pageYOffset || document.documentElement.scrollTop;    
    const offset = rect + scroll;      

    const windowHeight = window.innerHeight; 
    if (scroll > offset - windowHeight + 50) {
      designerImg[i].classList.add('designermove');
    }
  }
});



// ===========  service  =================


let serContainer = document.querySelectorAll('.ser-container');   

window.addEventListener('scroll', () => {               
  for (let i = 0; i < serContainer.length; i++){

    const rect = serContainer[i].getBoundingClientRect().top;       
    const scroll = window.pageYOffset || document.documentElement.scrollTop;    
    const offset = rect + scroll;      

    const windowHeight = window.innerHeight; 
    if (scroll > offset - windowHeight + 100) {
      serContainer[i].classList.add('ser-con-move');
    }
  }
});

let serP = document.querySelectorAll('.ser-p');   

window.addEventListener('scroll', () => {               
  for (let i = 0; i < serP.length; i++){

    const rect = serP[i].getBoundingClientRect().top;       
    const scroll = window.pageYOffset || document.documentElement.scrollTop;    
    const offset = rect + scroll;      

    const windowHeight = window.innerHeight; 
    if (scroll > offset - windowHeight + 20) {
      serP[i].classList.add('ser-p-move');
    }
  }
});


// =============== works =======================================

let worksImg = document.querySelectorAll('.works-top-img');   

window.addEventListener('scroll', () => {               
  for (let i = 0; i < worksImg.length; i++){

    const rect = worksImg[i].getBoundingClientRect().top;       
    const scroll = window.pageYOffset || document.documentElement.scrollTop;    
    const offset = rect + scroll;      

    const windowHeight = window.innerHeight; 
    if (scroll > offset - windowHeight + 50) {
      worksImg[i].classList.add('worksshow');
    }
  }
});


// ================== topへ戻る =============================

$(function(){
  const pagetop = $('.arrow');
  // ボタン非表示
  // pagetop.hide();
  // 100px スクロールしたらボタン表示
  // $(window).scroll(function () {
  //    if ($(this).scrollTop() > 100) {
  //         pagetop.fadeIn();
  //    } else {
  //         pagetop.fadeOut();
  //    }
  // });
  pagetop.click(function () {
     $('body, html').animate({ scrollTop: 0 }, 800);
     return false;
  });
});



// ==============================================================





if (window.matchMedia('(min-width: 559px)').matches) {
  //タブレットなどの処理 == middlescreen ==




  for (let i = 0; i < serP.length; i++){

    serP[i].classList.add('ser-p-move-none');
  }

  let service1 = document.querySelector('.service1');   
  let service2 = document.querySelector('.service2');   
  let service3 = document.querySelector('.service3');   

window.addEventListener('scroll', () => {               

    const rect = service2.getBoundingClientRect().top;       
    const scroll = window.pageYOffset || document.documentElement.scrollTop;    
    const offset = rect + scroll;      
    const windowHeight = window.innerHeight; 
    if (scroll > offset - windowHeight + 80) {
      service2.classList.add('service-animation2');
    }
});

window.addEventListener('scroll', () => {               

    const rect = service3.getBoundingClientRect().top;       
    const scroll = window.pageYOffset || document.documentElement.scrollTop;    
    const offset = rect + scroll;      
    const windowHeight = window.innerHeight; 
    if (scroll > offset - windowHeight + 80) {
      service3.classList.add('service-animation3');
    }
});

window.addEventListener('scroll', () => {               

    const rect = service1.getBoundingClientRect().top;       
    const scroll = window.pageYOffset || document.documentElement.scrollTop;    
    const offset = rect + scroll;      
    const windowHeight = window.innerHeight; 
    if (scroll > offset - windowHeight + 80) {
      service1.classList.add('service-animation1');
    }
});








} else if (window.matchMedia('(min-width:769px)').matches) {
  // pc処理 == largescreen ==
} else {
  
};