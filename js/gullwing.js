// Localize

$(function(){
  $("[data-localize]").localize("gullwing");
});

// Banner Animation
$(function () {
    setTimeout('rect()'); 
    setTimeout('pigu()'); 
});

function rect() {
    $('.banner').animate({
      top: '100%'
    }, 3000).animate({
        top: '0'
    }, 3000);
    $('.fadein').animate({
        opacity: '0'
    }, 3000).animate({
        opacity: '1'
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
