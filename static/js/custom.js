$('#Intro').shuffleLetters();

$(".navbar").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
     $(this).removeClass("idle");
});