
const carouselBox = function (selector) {

    let slider = document.querySelector('#'+selector);

    let carousel = slider.querySelector('.carousel__container');

    //Kich thuoc the con + 10px margin
    let cardHeight = slider.querySelector('.box__carousel').offsetHeight - 14;

    //So luong the con
  

    let buttonDown = slider.querySelector(".button__item.down");

    let buttonUp = slider.querySelector(".button__item.up");

    let textSlider = slider.querySelector(".control__text .text--left")
    console.log(textSlider)
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
            textSlider.textContent = current + 1;
           
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
            textSlider.textContent = current + 1;
        }
        if(current === 0){
            buttonUp.classList.remove("active")
        }
    })

}

carouselBox('box__tuThuoc');
