$(window).on('load', function(){
    // $('.loading').removeClass('d-flex');
    // $('.loading').addClass('d-none');
    setTimeout(function() {
        $('.loading').fadeOut();
        $(window).scrollTop(0);
    }, 2000);
});