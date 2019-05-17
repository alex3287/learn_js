$(document).ready(function () {
    let show_window = function(event) {
        event.preventDefault();
        $('.overlay').fadeIn(1000);
       // $('.modal').fadeToggle('slow');
        $('.modal').show(1000);

        /*$('a').on('click', function(e){
            e.preventDefault();
            $('.modal').toggleClass('active');
        });*/
    };

    $('.main_btna').on('click', show_window);
    $('.main_btn').on('click', show_window);
    $('ul:eq(2)').find('li:eq(1)').on('click', show_window);


    // закрытие модального окна
    $('.close').on('click',function () {
       $('.modal').hide(1000);
       $('.overlay').fadeOut(1000);
    });
});