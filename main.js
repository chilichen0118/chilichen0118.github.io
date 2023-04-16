// const carousel = document.querySelector(".ground-cards");

// let isDragStart = false, prevPageX, prevScrollLeft;

// const dragStart = (e) => {
//     isDragStart = true;
//     prevPageX = e.pageX;
//     prevScrollLeft = carousel.scrollLeft;
// }

// const dragging = (e) => {
//     if(!isDragStart) return;
//     e.preventDefault();
//     let positionDiff = e.pageX - prevPageX;
//     carousel.scrollLeft = prevScrollLeft - positionDiff;
// }

// const dragStop = () => {
//     isDragStart = false;
// }

// carousel.addEventListener('mousemove', dragStart);
// carousel.addEventListener('mousemove', dragging);
// carousel.addEventListener('mouseup', dragStop);

$('.owl-carousel').owlCarousel({
    loop:true,
    dots:false,
    autoplay:true,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});

$(function () {
    cursorX = 0;
    cursorY = 0;
    mouseX = 0;
    mouseY = 0;
    $(window).on('mousemove', function (e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    setInterval(function () {
        cursorX += (mouseX - cursorX) / 20; //後面的數字愈小動愈快
        cursorY += (mouseY - cursorY) / 20;
        $('.cursor').css({
            'top': cursorY + 'px',
            'left': cursorX + 'px',
        })
    }, 10) //每幾毫秒更新一次，數字愈小愈流暢
});

$('.menu-btn').on('click', function(){
    $('.menu').toggleClass('active');
})