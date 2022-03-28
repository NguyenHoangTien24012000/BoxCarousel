const carouselBox = function (selector) {

    let slider = document.getElementById(selector);

    let carousel = slider.querySelector('.carousel__container');

    let cardWidth = slider.querySelector('.carousel__item').offsetWidth + 10;
    window.onresize = function(){
        cardWidth = slider.querySelector('.carousel__item').offsetWidth + 10;
    }

    let current = 0;

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
                current = index
                activeElenment()
                item.classList.add('active')
                carousel.style.transform = 'translateX(-'+cardWidth * index * 3 + 'px )';


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
            carousel.style.transform = 'translateX(-' + (cardWidth * current * 3) + 'px )';
            current = 0;
        } else {
            carousel.style.transform = 'translateX(-' + (cardWidth * current * 3) + 'px )';
            current += 1;
        }
    }
    setInterval(carouselAuto, 3000)

    return createNodeChildLi(), carouselAction();
}

carouselBox('box__tuThuoc');