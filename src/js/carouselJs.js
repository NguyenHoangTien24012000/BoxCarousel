const $ = function (selector) {

    let slider = document.querySelector(`.${selector}`);

    let track = slider.querySelector('.track');

    //Kich thuoc the con + 10px margin
    let cardWidth = slider.querySelector('.card-container').offsetWidth + 10;
    //So luong the con
    let numberItem = slider.querySelectorAll('.track .card-container').length;

    let overlayLeft = slider.querySelector('.controls-overplay-left');

    let current = 0;

    // overlayLeft.style.display = "none"

    function next() {
        slider.querySelector('.arrow.right').addEventListener('click', () => {
            if (current === numberItem - 3) {
                current = 0;
                overlayLeft.style.display = "none"
                track.style.transform = `translateX(0px)`;
            } else if (current === numberItem - 4) {
                current += 1;
                track.style.transform = `translateX(-${cardWidth * current - cardWidth / 2}px )`;
            } else {
                current += 1;
                overlayLeft.style.display = "block"
                track.style.transform = `translateX(-${cardWidth * current}px)`;
            }
        })
    }
    function prev() {
        slider.querySelector('.arrow.left').addEventListener('click', () => {
            if(current == 1){
                overlayLeft.style.display = "none"
            }
            if (current !== 0) {
                current -= 1;
                track.style.transform = `translateX(-${cardWidth * current}px )`;
            } else if (current === numberItem - 4) {
                current += 1;
                track.style.transform = `translateX(-${cardWidth * current - cardWidth / 2}px )`;
            }
        })
    }


    return next(), prev();
}

$('carouselJS');



