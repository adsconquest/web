// Localize
$(function(){
  topMSG();
});

// Banner Animation
$(function () {
    random();
    setTimeout('rect()'); 
    setTimeout('pig()'); 
    setTimeout('cherrySmile()');
    setTimeout('smile()', 2000);
});


function topMSG(){
  var language = (window.navigator.userLanguage || window.navigator.language || window.navigator.browserLanguage).substr(0,2) == "ja" ? "ja" : "en";
  if(language == "ja"){
    $("#back").text("アプリに戻る");
  }else{
    $("#twitter").text("OKAOKAHOUSE Twitter page");
  }
}

function random(){
  var language = (window.navigator.userLanguage || window.navigator.language || window.navigator.browserLanguage).substr(0,2) == "ja" ? "ja" : "en";
  var images = [
	'../img/gameover_okaoka1.png',
	'../img/gameover_okaoka2.png',
  ];
  var enImages = [
	'../img/en_gameover_okaoka.png',
  ];
  //if(window.navigator.languages[0] == "ja" || window.navigator.languages[0] == "ja-JP"){
  if(language == "ja"){
    var randImg = images[Math.floor(Math.random() * images.length)];
  }else{
    var randImg = enImages[Math.floor(Math.random() * enImages.length)];
  }
  $('.pugya').attr('src', randImg);
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
    setTimeout('rect()', 6000);
}

function pig(){
    $('.horizon').animate({
        left: '100%'
    }, 2500).animate({
        left: '-30%'
    }, 0);
    setTimeout('pig()', 2500);
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
