'use strict';
// toggle Mobile menu button
const mobileBtn = document.querySelector(".toggle-button");
const content = document.querySelector(".content");

mobileBtn.addEventListener('click', function() {
  content.classList.toggle('hidden');
  document.getElementById("nav").style.cssText = "background: #2D3748; opacity: 0.9";
});


// =============== changing bg of nav on scroll ===============
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("nav").style.cssText = "background: #2D3748; opacity: 0.9";
  } else {
    document.getElementById("nav").style.cssText = "background: none; opacity: 1";
  }
}

// =============== Counter animation ===============
let nCount = function(selector) {
    $(selector).each(function() {
        $(this).animate({
            Counter: $(this).text()
        }, {
            duration: 3000,
            easing: "swing",
            step: function(value){
                $(this).text(Math.ceil(value));
            }
        });
    });
};

let a = 0;
$(window).scroll(function(){
    let Top = $('.counts').offset().top - window.innerHeight;
    if(a==0 && $(window).scrollTop() >= Top) {
        a++;
        nCount('.count-card > h1');
    }
})

// =============== isotope for portfolio ===============
let $btn = $('.button-group button');

$btn.click(function(e) {
  $('.button-group button').removeClass('active');
  e.target.classList.add('active');

  let selector = $(e.target).attr('data-filter');
  $('.isotope').isotope({
    filter: selector
  });
  return false
})

// =============== accordion ===============
const menuLinks = document.querySelectorAll(".accordion button");
menuLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    let menuContent = link.nextElementSibling;
    let active = document.querySelector(".accordion section.active");

    if (menuContent) {
      if (active) {
        if (link.parentElement.classList.contains("active")) {
          link.parentElement.classList.remove("active");
          active.lastElementChild.style.height = "0";
          link.querySelector("svg").style.transform = "rotate(0deg)";
        } else {
          active.classList.remove("active");
          active.querySelector("svg").style.transform = "rotate(0)";
          active.lastElementChild.style.height = "0";
          link.parentElement.classList.add("active");
          menuContent.style.height = menuContent.scrollHeight + "px";
          link.querySelector("svg").style.transform = "rotate(180deg)";
        }
      }
      else {
        link.parentElement.classList.add("active");
        menuContent.style.height = menuContent.scrollHeight + "px";
        link.querySelector("svg").style.transform = "rotate(180deg)";
      }
    }
  });
});
