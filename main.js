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
})