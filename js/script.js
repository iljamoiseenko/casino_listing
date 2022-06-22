var acc = document.getElementsByClassName("cart-text-block");
var popupClose = document.querySelectorAll('.popup-close-btn');
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
      var panel = this.nextElementSibling;
      panel.classList.toggle('open-popup')
      this.classList.toggle('active-color')
        
  });
}

var popupClose = document.querySelectorAll('.popup-close-btn');
var popUp = document.querySelectorAll('.cart-text-popup-block');
var bg = document.querySelectorAll(".cart-text-block");


for( var i = 0; i < popupClose.length; i++ ) {
  popupClose[i].onclick = function() {
    for( var a = 0; a < popUp.length; a++ ) {
      popUp[a].classList.remove('open-popup');
      for ( var b = 0; b < bg.length; b++ ) {
        bg[b].classList.remove('active-color');
      }
      
    }
  }    
}


let loadMore = document.querySelector('.load-more-btn');
let loadBlock = document.querySelector('.product-cart-wrapper');
loadMore.addEventListener('click', function() {
  loadBlock.classList.add('active');
  loadMore.classList.add('none');
});


let copyAlert = document.querySelector('.copy-alert');
let copyBlock = document.querySelector('.copy-block');
function myFunction() {
  var copyText = document.getElementById('myInput');
  copyText.select();
  document.execCommand("copy");
  copyBlock.addEventListener('click', function() {
    copyAlert.classList.add('copy-alert-show');
    setTimeout( function () {
      copyAlert.classList.remove('copy-alert-show');
    }, 3000 );
  });
  
}