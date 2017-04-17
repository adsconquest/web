$(function(){
  $(".gray").fadeIn("slow");
  $(".popup").fadeIn("slow");
  $(".close").fadeIn("slow");
  $(".close").click(function(){
    $(".gray").fadeOut("slow");
    $(".popup").fadeOut("slow");
    $(".close").fadeOut("slow");
  });
});

