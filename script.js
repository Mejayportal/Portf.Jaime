$(document).ready(function(){

  $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });

  $(window).on('scroll load',function(){

    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if($(window).scrollTop() > 0){
      $('.top').show();
    }else{
      $('.top').hide();
    }

  });

  // smooth scrolling 

  $('a[href*="#"]').on('click',function(e){

    e.preventDefault();

    $('html, body').animate({

      scrollTop : $($(this).attr('href')).offset().top,

    },
      800, 
      'linear'
    );

  });

  // <!-- text-animation code link -->
  
  var typed = new Typed('#element', {
    strings: ['Web Developer.','Wordpress Developer.','Video/Photo Editor.','Designer.'],
    typeSpeed: 100,
    backSpeed:100,
    loop: true
  });

});


