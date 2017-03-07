// Localize
$(function(){
  $("[data-localize]").localize("gullwing");
});

// Banner Animation
$(function () {
    setTimeout('rect()'); 
    setTimeout('pigu()'); 
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

function pigu(){
    $('.horizon').animate({
        left: '100%'
    }, 1500).animate({
        left: '-20%'
    }, 0);
    setTimeout('pigu()', 1500);
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
    right: '-50%'
  }, 2000).animate({
    right: '0'
  }, 0);
  setTimeout('smile()', 4000);
  setTimeout('hide()', 1900);
}

function hide(){
  $('.cherry-smile').css('visibility', 'hidden');
}
