$('#Intro').shuffleLetters();

$(".side-menu").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
     $(this).removeClass("idle");
});