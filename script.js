$(document).ready(function(){


    $('#menu').click(function(){

        $(this).toggleClass('fa-times');
        $('headder').toggleClass('toggle');


    });


    $(window).on('scroll load',function(){

        $(this).removeClass('fa-times');
        $('headder').removeClass('toggle');


    });

    // smooth scrolling

    $('a[href*="#"]').click(function(e){

        e.preventDefault();
        $('html,body').animate({

            scrollTop :$($(this).attr('href')).offset().top,

        },
        500,
        'linear'
        );


    });





});