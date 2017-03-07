// Localize
$(function(){
  $("[data-localize]").localize("gullwing");
});

// Banner Animation
$(function () {
    setTimeout('rect()'); 
    setTimeout('pig()'); 
    setTimeout('pig2()', 500); 
    setTimeout('pig3()', 1000); 
    setTimeout('pig4()', 1500); 
    setTimeout('pig5()', 2000); 
    setTimeout('cherrySmile()');
    setTimeout('smile()', 2000);
});

function rect() {
    $('.banner').animate({
      top: '100%'
    }, 3000).animate({
        top: '0'
    }, 3000);
    $('.fadein').animate({
        opacity: '1'
    }, 3000).animate({
        opacity: '0'
    }, 3000);
    setTimeout('rect()', 6000);
}

function pig(){
    $('.horizon').animate({
        left: '100%'
    }, 2500).animate({
        left: '-20%'
    }, 0);
    setTimeout('pig()', 2500);
}

function pig2(){
    $('.horizon2').animate({
        left: '100%'
    }, 2500).animate({
        left: '-20%'
    }, 0);
    setTimeout('pig2()', 2500);
}

function pig3(){
    $('.horizon3').animate({
        left: '100%'
    }, 2500).animate({
        left: '-20%'
    }, 0);
    setTimeout('pig3()', 2500);
}

function pig4(){
    $('.horizon4').animate({
        left: '100%'
    }, 2500).animate({
        left: '-20%'
    }, 0);
    setTimeout('pig4()', 2500);
}

function pig5(){
    $('.horizon5').animate({
        left: '100%'
    }, 2500).animate({
        left: '-20%'
    }, 0);
    setTimeout('pig5()', 2500);
}

function cherrySmile(){
  $('.cherry').animate({
    right: '0'
  }, 2000).animate({
    right: '-100%'
  }, 0);
  setTimeout('cherrySmile()', 4000);
}

function smile(){
  $('.cherry-smile').css('visibility', 'visible');
  $('.cherry-smile').animate({
    right: '-40%'
  }, 2000).animate({
    right: '0'
  }, 0);
  setTimeout('smile()', 4000);
  setTimeout('hide()', 1900);
}

function hide(){
  $('.cherry-smile').css('visibility', 'hidden');
}
