$(document).ready(function(){
    $('.burger').click(function(){
        console.log("You clicked the burger!");
        $(this).toggleClass('burger-open');
        $('.mobile-menu').toggleClass('menu-open');
    });
});