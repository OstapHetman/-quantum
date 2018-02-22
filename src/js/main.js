$(document).ready(function() {

    $('.step-slide__title').each(function(index, el) {
        $(el).prepend('<div class="step-slide__title-counter">' + (index + 1) + '</div>');
    });

    for (var i = 0; i < $('.step-slide').length - 1; i++) {
        $('.step__extender').append('<div class="step__extender-item"></div>');
    };

    var progress = {
        current: (100 / ($('.step-slide').length - 1)),
        total: $('.step-slide').length,
        width: (100 / ($('.step-slide').length - 1)),
        process: doProgress
    };

    function doProgress() {
        testSlider = $('.test-slider').bxSlider({
            mode: 'fade',
            infiniteLoop: false,
            speed: 0,
            adaptiveHeight: true,
            adaptiveHeightSpeed: 0,
            touchEnabled: false,
            pager: false,
            nextSelector: '.btn-next-container',
            nextText: '<div class="btn-next"><span>на следующий шаг</span></div>',
            onSliderLoad: function(currentIndex) {
                // первоначальные стили
                $('.main-progress__text').eq(currentIndex).addClass('main-progress__text_active');
                $('.step__extender-item').eq(currentIndex).addClass('step__extender-item_active');
                $('.main-progress__extender').css('width', progress.width + '%');
            },
            onSlideAfter: function(slideElement, oldIndex, newIndex) {
                // активация кнопок
                $('.btn-next-container').removeClass('btn-next-container_active');
                $('.btn-next').removeClass('btn-next_active btn-shine');

                // изменение полосы загрузки
                progress.current += progress.width;
                $('.main-progress__extender').css('width', progress.current + '%');

                // изменение шага
                $('.step__extender-item').eq(newIndex).addClass('step__extender-item_active');
                $('.step__text span').html(newIndex + 1);

                // изменение заголовка в полосе загрузки
                if ($('.main-progress__text').eq(newIndex).length != 0) {
                    $('.main-progress__text').eq(oldIndex).removeClass('main-progress__text_active');
                    $('.main-progress__text').eq(newIndex).addClass('main-progress__text_active');
                };

                var toTopDoc = window.parent.document.querySelector('.fancybox-slide--iframe');
                $(toTopDoc).animate({ scrollTop: 0 }, 0);

            }
        });
        return testSlider;
    }

    $(".quickview").on("click", doProgress);

    $('.pick-item__input.not-important').on('change', function(event) {
        event.preventDefault();
        $('.btn-next-container').addClass('btn-next-container_active');
        $('.btn-next').addClass('btn-next_active btn-shine');
    });

    $('.pick-item__input.must-have').on('change', function(event) {
        event.preventDefault();
        if ($('.pick-item__input.must-have:checked').length == 2) {
            console.log($('.must-have:checked').length);
            $('.btn-next-container').addClass('btn-next-container_active');
            $('.btn-next').addClass('btn-next_active btn-shine');
        }
    });

    $('.pick-item__input.size').on('change', function(event) {
        event.preventDefault();
        if ($('#step2-1').val().length > 0 && $('#step2-2').val().length > 0 && $('#step2-3').val().length > 0) {
            $('.btn-next-container').addClass('btn-next-container_active');
            $('.btn-next').addClass('btn-next_active btn-shine');
        }
    });

    $('.pick-item__input.must-have2').on('change', function(event) {
        event.preventDefault();
        if ($('.pick-item__input.must-have2:checked').length == 2) {
            console.log($('.must-have2:checked').length);
            $('.btn-next-container').addClass('btn-next-container_active');
            $('.btn-next').addClass('btn-next_active btn-shine');
        }
    });


    $('form').each(function(index, el) {
        $(el).validate({
            rules: {
                "phone": { required: true }
            },
            submitHandler: function(form) {
                $(form).ajaxSubmit({
                    type: 'POST',
                    url: 'mailer.php',
                    success: function() {
                        testSlider.goToSlide($('.step-slide').length - 1);
                        $('.header-line').slideUp(300);
                        $('.progress-line').slideUp(300);
                        $('input[type="radio"]').prop('checked', false);
                        $('input[type="checkbox"]').prop('checked', false);
                        $('input[type="text"]').val('');
                    }
                });
            }
        });
    });
    $("#next1").click(function() {
        $("#step2-1").focus();
    });
});

// Get modal element

var modal = document.getElementById('simpleModal');
var body = document.getElementsByTagName('BODY')[0];

// Get open modal button 
var modalBtn = document.getElementById('modalBtn');

//Get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

//Listen for open click
modalBtn.addEventListener('click', openModal);

//Listen for close click
closeBtn.addEventListener('click', closeModal);

//Listen for outside click
window.addEventListener('click', clickOutside);

function openModal() {
    modal.style.display = 'block';
    body.style.overflow = 'hidden';
}

function closeModal() {
    modal.style.display = 'none';
    body.style.overflow = ' auto';
}

function clickOutside(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
        body.style.overflow = ' auto';
    }
}