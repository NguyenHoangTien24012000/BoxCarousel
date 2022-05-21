const carouselBox = function (selector) {

    let slider = document.querySelector('#' + selector);

    let carousel = slider.querySelector('.carousel__container');

    //Kich thuoc the con + 10px margin
    let cardWidth = slider.querySelector('.carousel__item').offsetWidth + 10;

    //So luong the con
    let numberItem = slider.querySelectorAll('.carousel__item').length;

    function createNodeChildLi() {
        for (let i = 0; i < numberItem; i++) {
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
    let current = 1;
    function carouselAction() {
        slider.querySelectorAll('.control__item').forEach((item, index) => {
            item.addEventListener('click', () => {
                activeElenment()
                current = index
                item.classList.add('active')
                if (index === numberItem - 1) {
                    carousel.style.transform = 'translateX(-' + (cardWidth * index - cardWidth/2.6) + 'px )';
                } else {
                    carousel.style.transform = 'translateX(-' + cardWidth * index + 'px )';
                }

            });
        });
    }
    function carouselAuto() {
        activeElenment()
        slider.querySelectorAll('.control__item').forEach((item,index) =>{
            if(index === current){
                item.classList.add('active')
            }
        })
        if (current === 2) {
            carousel.style.transform = 'translateX(-' + (cardWidth * current - cardWidth/2.66) + 'px )';
            current = 0;
        } else {
            carousel.style.transform = 'translateX(-' + cardWidth * current + 'px )';
            current += 1;
        }
    }
    setInterval(carouselAuto, 3000)
    return createNodeChildLi(), carouselAction();
}

carouselBox('box__tuThuoc');