$(function () {
    setTimeout('rect()'); 
});

function rect() {
    $('.banner').animate({
        top: '800px'
    }, 3000).animate({
        top: '0'
    }, 3000);
    setTimeout('rect()', 6000); 
}
