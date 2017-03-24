// Localize
$(function(){
  $("[data-localize]").localize("gullwing");
});

// Banner Animation
$(function () {
    random();
    setTimeout('rect()'); 
    setTimeout('concierge()'); 
    setTimeout('pig()'); 
    setTimeout('pig2()', 2000); 
    setTimeout('pig3()', 4000); 
    setTimeout('pig4()', 6000); 
    setTimeout('pig5()', 8000); 
    setTimeout('cherrySmile()');
    setTimeout('smile()', 2000);
});

function random(){
  var images = [
	'../img/gameover_buta.png',
	'../img/game_over_2.png',
	'../img/game_over3.png'
  ];
  var randImg = images[Math.floor(Math.random() * images.length)];
  $('.pugya').attr('src', randImg);
}

function concierge(){
    $('.concierge').animate({
        left: '100%'
    }, 2500).animate({
        left: '-30%'
    }, 3000);
    setTimeout('concierge()', 5500);
}

function rect() {
    $('.mak').animate({
      top: '100%'
    }, 3000).animate({
        top: '0'
    }, 3000);
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
        left: '-30%'
    }, 0);
    setTimeout('pig()', 10000);
}

function pig2(){
    $('.horizon2').animate({
        left: '100%'
    }, 2500).animate({
        left: '-30%'
    }, 0);
    setTimeout('pig2()', 10000);
}

function pig3(){
    $('.horizon3').animate({
        left: '100%'
    }, 2500).animate({
        left: '-30%'
    }, 0);
    setTimeout('pig3()', 10000);
}

function pig4(){
    $('.horizon4').animate({
        left: '100%'
    }, 2500).animate({
        left: '-30%'
    }, 0);
    setTimeout('pig4()', 10000);
}

function pig5(){
    $('.horizon5').animate({
        left: '100%'
    }, 2500).animate({
        left: '-30%'
    }, 0);
    setTimeout('pig5()', 10000);
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
