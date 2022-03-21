const carouselBox = function (selector) {

    let slider = document.querySelector(`#${selector}`);

    let carousel = slider.querySelector('.carousel__container');

    //Kich thuoc the con + 10px margin
    let cardWidth = slider.querySelector('.carousel__item').offsetWidth + 10;

    //So luong the con
    let numberItem = slider.querySelectorAll('.carousel__item').length;

    function createNodeChildLi() {
        for (let i = 0; i < 3; i++) {
            var li = document.createElement("li");
            li.classList.add("control__item")
            li.setAttribute("index", i)
            slider.querySelector('.control .control__container').appendChild(li);
        }
        slider.querySelectorAll('.control li')[0].classList.add('active');
    }


    function activeElenment() {
        slider.querySelectorAll('.control__item').forEach((item) => {
            item.classList.remove("active")
        });
    }

    function carouselAction() {
        slider.querySelectorAll('.control__item').forEach((item, index) => {
            item.addEventListener('click', () => {
                activeElenment()
                item.classList.add('active')

                carousel.style.transform = `translateX(-${cardWidth * index * 3}px )`;


            });
        });
    }
    return createNodeChildLi(), carouselAction();
}

carouselBox('box__tuThuoc');