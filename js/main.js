var mixer = mixitup ( '.container-filter' );

$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.head__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

$(document).ready(function(){
    $('.testim__slider').slick();
});