$(document).ready(function(){
    var $slider = $('.single-item');
    var $currentNum = $('.currenNum');
    var $total = $('.total');
    var $pausePlayButton = $('.pause');

    $slider.on('init', function(event, slick){
        $total.text(' / ' + slick.slideCount);
        updateCurrentSlide(slick.currentSlide);
    });

    $slider.on('afterChange', function(event, slick, currentSlide){
        updateCurrentSlide(currentSlide);
    });

    function updateCurrentSlide(currentSlide) {
        $currentNum.text(currentSlide + 1);
    }

    $slider.slick({
        autoplay: true,
        autoplaySpeed: 2000, 
        dots: true,          
        arrows: false        
    });

    $('.prev').on('click', function(){
        $slider.slick('slickPrev');
    });

    $('.next').on('click', function(){
        $slider.slick('slickNext');
    });

    $pausePlayButton.on('click', function(){
        if ($pausePlayButton.hasClass('pause')) {
            $slider.slick('slickPause');
            $pausePlayButton.removeClass('pause').addClass('play').text('Oynat');
        } else {
            $slider.slick('slickPlay');
            $pausePlayButton.removeClass('play').addClass('pause').text('Durdur');
        }
    });
});





var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
  });


 

