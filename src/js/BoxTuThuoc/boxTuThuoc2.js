
const carouselBox = function (selector) {

    let slider = document.querySelector('#'+selector);

    let carousel = slider.querySelector('.carousel__container');

    //Kich thuoc the con + 10px margin
    let cardHeight = slider.querySelector('.box__carousel').offsetHeight - 14;

    //So luong the con

    let buttonDown = slider.querySelector(".button__item.down");

    let buttonUp = slider.querySelector(".button__item.up");

    let textSlider = slider.querySelector(".control__text .text--left")

    buttonDown.classList.add("active")

    current = 0;

    buttonDown.addEventListener("click", () => {
        if (current < 2) {
            current += 1;
            carousel.scrollTo({
                top: cardHeight * current,
                behavior: 'smooth'
            })
            buttonUp.classList.add("active")
           
           
        }
        if(current === 2){
            buttonDown.classList.remove("active")
        }
    })
    buttonUp.addEventListener("click", () => {
        if (current > 0) {
            current -= 1;
            carousel.scrollTo({
                top: cardHeight * current,
                behavior: 'smooth'
            })
            buttonDown.classList.add("active")
           
        }
        if(current === 0){
            buttonUp.classList.remove("active")
        }
    })
    function getHeightScroll () {
        if(carousel.scrollTop < cardHeight){
            textSlider.textContent = "1";
            current = 0;
        }else if(carousel.scrollTop >= cardHeight && carousel.scrollTop < (2 * cardHeight - 20)){
            textSlider.textContent = "2";
            current = 1
        }else {
            textSlider.textContent = "3";
            current = 2;
        }
    }
    carousel.addEventListener('scroll', getHeightScroll);

}

carouselBox('box__tuThuoc');
