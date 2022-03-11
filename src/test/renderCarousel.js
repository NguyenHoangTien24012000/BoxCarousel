function renderCarousel(){
	this.css=`@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&family=Roboto:wght@300;400;500;700&display=swap);*{margin:0;padding:0}body{font-family:Roboto,sans-serif;box-sizing:border-box}.layout-carousel{width:656px;margin:10px auto;padding:10px;height:334px;border-radius:3px;border:1px solid #dedede}.layout-carousel .carousel-logo{margin-left:5px;margin-bottom:5px}.layout-carousel .carousel-logo .logo-image{width:34px;height:37px}.layout-carousel .content-carousel{overflow:hidden;position:relative;padding-bottom:10px}.layout-carousel .carousel-container{width:100%;margin-top:5px}.layout-carousel .carousel-container .track{width:100%;display:flex;transition:all .5s}.layout-carousel .card-container{box-shadow:0 1px 4px rgba(0,0,0,.25);flex-shrink:0;width:180px;height:280px;margin:0 5px;box-sizing:border-box;border-radius:3px}.layout-carousel .card-container .card{position:relative;width:100%;height:100%}.layout-carousel .card-container .card .card-img{width:100%;height:100%}.layout-carousel .card-container .card .card-img img{width:100%;height:100%;object-fit:cover}.layout-carousel .card-button{position:absolute;right:9px;bottom:10px;cursor:pointer}.layout-carousel .card-button .button-gray{border-radius:3px;width:160px;height:35px;background-color:#f6f6f6;border:1px solid #c2c2c2;display:flex;align-items:center;justify-content:center}.layout-carousel .card-button .button-gray:hover{background-color:#dbdbdb;border-color:#a3a3a3}.layout-carousel .card-button .button-gray.active{background-color:#dbdbdb;border-color:#a3a3a3}.layout-carousel .card-button .text-button{color:#262626;font-weight:400;font-size:15px}.layout-carousel .controls{transition:all .5s}.layout-carousel .controls .controls-overplay-left{position:absolute;z-index:10;top:0;width:45px;height:297px;background:linear-gradient(90deg,rgba(255,255,255,.79) 0,rgba(255,255,255,0) 100%)!important;display:none}.layout-carousel .controls .controls-overplay-right{position:absolute;z-index:10;top:0;right:0;width:45px;height:297px;background:linear-gradient(270deg,rgba(255,255,255,.79) 0,rgba(255,255,255,0) 100%)!important}.layout-carousel .controls .arrow{position:absolute;top:50%;transform:translateY(-50%);cursor:pointer;background-color:rgba(255,255,255,.7)}.layout-carousel .controls .arrow.left{top:135px;left:10px;width:26px;font-size:20px;height:26px;line-height:26px;text-align:center;border:1px solid transparent;border-radius:50%}.layout-carousel .controls .arrow.left svg{width:7px}.layout-carousel .controls .arrow.right{top:135px;right:5px;width:26px;font-size:20px;height:26px;line-height:26px;text-align:center;border:1px solid transparent;border-radius:50%}.layout-carousel .controls .arrow.right svg{width:7px}.layout-carousel .controls .arrow:hover{background-color:rgba(255,255,255,.9)}`;
	this.html=`<div class="carouselJS">
    <div class="layout-carousel">
        <div class="carousel-logo">
            <img class="logo-image"
                src="https://cdn.adbro.me/inimage/mitsubishi/1905/1/images/mitsubishi-slider-logo.png" alt="logo" />
        </div>
        <div class="content-carousel">
            <div class="carousel-container">
                <div class="track">
                    <div class="card-container">
                        <div class="card">
                            <div class="card-img">
                                <img src="https://cdn.adbro.me/inimage/mitsubishi/1905/1/images/mitsubishi-slider-img1.png"
                                    alt="1">
                            </div>
                            <div class="card-button ">
                                <div class="button-gray active"><a class="text-button">XEM THÊM</a></div>
                            </div>
                        </div>
                    </div>
                    <div class="card-container">
                        <div class="card">

                            <div class="card-img">
                                <img src="https://cdn.adbro.me/inimage/mitsubishi/1905/1/images/mitsubishi-slider-img1.png"
                                    alt="1">
                            </div>
                            <div class="card-button">
                                <div class="button-gray"><a class="text-button">XEM THÊM</a></div>
                            </div>

                        </div>
                    </div>
                    <div class="card-container">
                        <div class="card">

                            <div class="card-img">
                                <img src="https://cdn.adbro.me/inimage/mitsubishi/1905/1/images/mitsubishi-slider-img1.png"
                                    alt="1">
                            </div>
                            <div class="card-button">
                                <div class="button-gray"><a class="text-button">XEM THÊM</a></div>
                            </div>
                        </div>
                    </div>
                    <div class="card-container">
                        <div class="card">

                            <div class="card-img">
                                <img src="https://cdn.adbro.me/inimage/mitsubishi/1905/1/images/mitsubishi-slider-img1.png"
                                    alt="1">
                            </div>
                            <div class="card-button">
                                <div class="button-gray"><a class="text-button">XEM THÊM</a></div>
                            </div>
                        </div>
                    </div>
                    <div class="card-container">
                        <div class="card">

                            <div class="card-img">
                                <img src="https://cdn.adbro.me/inimage/mitsubishi/1905/1/images/mitsubishi-slider-img1.png"
                                    alt="1">
                            </div>
                            <div class="card-button">
                                <div class="button-gray"><a class="text-button">XEM THÊM</a></div>
                            </div>
                        </div>
                    </div>
                    <div class="card-container">
                        <div class="card">

                            <div class="card-img">
                                <img src="https://cdn.adbro.me/inimage/mitsubishi/1905/1/images/mitsubishi-slider-img1.png"
                                    alt="1">
                            </div>
                            <div class="card-button">
                                <div class="button-gray"><a class="text-button">XEM THÊM</a></div>
                            </div>
                        </div>
                    </div>
                    <div class="card-container">
                        <div class="card">

                            <div class="card-img">
                                <img src="https://cdn.adbro.me/inimage/mitsubishi/1905/1/images/mitsubishi-slider-img1.png"
                                    alt="1">
                            </div>
                            <div class="card-button">
                                <div class="button-gray"><a class="text-button">XEM THÊM</a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="controls">
                    <div class="controls-overplay-left">
                        <span class="arrow left">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                                <path
                                    d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z" />
                            </svg>
                        </span>
                    </div>
                    <div class="controls-overplay-right">
                        <span class="arrow right"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                                <path
                                    d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z" />
                            </svg></span>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>`;
	document.querySelector('body').innerHTML = `<style>${this.css}</style>${this.html}`;
}
renderCarousel()

function jsCarousel(){
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




}
jsCarousel();