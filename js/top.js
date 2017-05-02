$(function(){
  setTimeout('chara()', 0);
  setTimeout('story()', 1000);
  setTimeout('game()', 2000);
  setTimeout('about()', 3000);
  banner_localizer();
});

function pop_story(num){
  var pops = [
    "#chara-pop",
    "#story-pop",
    "#game-pop",
    "#about-pop",
  ];
  $(".gray").fadeIn("slow");
  $(pops[num]).fadeIn("slow");
  $(".close").fadeIn("slow");
  $(".close").click(function(){
    $(".gray").fadeOut("slow");
    $(pops[num]).fadeOut("slow");
    $(".close").fadeOut("slow");
  });
}

function banner_localizer(){
  var images = [];
  if(window.navigator.languages[0] == "ja"){
    images = [
	    './img/gameover_buta.png',
    ];
  }else if(window.navigator.languages[0] == "ch"){
  }
  $('.pugya').attr('src', images);
}

function chara(){
    $('#chara-ad').click(function(){
      pop_story(0);
    });
    $('#chara-ad').animate({
        opacity: '1',
        bottom: '0'
    }, 4500).animate({
        opacity: '0',
        bottom: '200px'
    }, 500);
    setTimeout('chara()', 5000);
}

function story(){
    $('#story-ad').click(function(){
      pop_story(1);
    });
    $('#story-ad').animate({
        top: '100%'
    }, 5000).animate({
        top: '-100%'
    }, 0);
    setTimeout('story()', 5400);
}

function game(){
    $('#game-ad').click(function(){
      pop_story(2);
    });
    $('#game-ad').animate({
        right: '100%'
    }, 5000).animate({
        right: '-100%'
    }, 0);
    setTimeout('game()', 5300);
}

function about(){
    $('#about-ad').click(function(){
      pop_story(3);
    });
    $('#about-ad').animate({
        left: '100%',
        top: '100%'
    }, 4500).animate({
        left: '-100%',
        top: '-100%'
    }, 0);
    setTimeout('about()', 4800);
}
