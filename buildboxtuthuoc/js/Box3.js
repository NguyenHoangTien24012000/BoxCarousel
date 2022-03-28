function renderBox() {
	this.css = `@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&family=Roboto:wght@300;400;500;700&display=swap");
* {
  margin: 0;
  padding: 0;
}

body {
  font-family: "Roboto", sans-serif;
  box-sizing: border-box;
}

.box {
  overflow: hidden;
  max-width: 100%;
  aspect-ratio: 16/10;
  background-color: #fff;
  border-radius: 10px;
  position: relative;
  border: 0.5px solid #A5A5A5;
}
.box .box__brand {
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
  padding-bottom: 0;
  margin-top: 10px;
}
.box .box__brand .box__brand--left {
  display: flex;
}
.box .box__brand .box__brand--left .brand__logo--left {
  margin-top: 2px;
}
.box .box__brand .brand__text--left {
  margin-left: 7px;
  margin-top: 11 px;
}
.box .box__brand .brand__text--left .text--content {
  font-size: 14px;
  margin-top: 12px;
  color: #236c62;
  line-height: 16.41px;
}
.box .box__carousel {
  position: absolute;
  z-index: 20;
  top: 50px;
  overflow: hidden;
  margin-left: 10px;
  padding: 5px 0px 5px 4px;
}
.box .box__carousel .control {
  margin-bottom: 11px;
}
.box .box__carousel .control .control__container {
  display: flex;
  list-style: none;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
}
.box .box__carousel .control .control__item {
  width: 6px;
  height: 6px;
  margin-right: 6px;
  border-radius: 50%;
  background-color: #cecece;
}
.box .box__carousel .control .control__item.active {
  background-color: white;
}
.box .box__carousel .carousel__container {
  transition: all 0.5s;
  width: 300%;
  display: flex;
}
.box .box__carousel .carousel__item {
  position: relative;
  width: 10.2%;
  aspect-ratio: 2/3;
  background-color: white;
  margin-right: 10px;
  border-radius: 5px;
  box-shadow: 0px 0px 7px rgba(136, 136, 136, 0.25);
}
.box .box__carousel .carousel__item--image {
  display: flex;
  justify-content: center;
  margin: 5% 0;
  width: 100%;
}
.box .box__carousel .carousel__item--image .item__image {
  width: 88%;
  object-fit: cover;
  border-radius: 5px;
  border: 1px solid #CDCDCD;
}
.box .box__carousel .carousel__item--text {
  margin: 0 4%;
}
.box .box__carousel .carousel__item--text .item__title {
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  padding-bottom: 1%;
  color: #333333;
}
.box .box__carousel .carousel__item--text .item__detail {
  font-size: 11px;
  font-weight: 400;
  color: #555555;
  margin-bottom: 5px;
}
.box .box__carousel .carousel__item--button {
  position: absolute;
  bottom: 3%;
  left: 50%;
  transform: translateX(-50%);
}
.box .box__carousel .carousel__item--button .btn__item {
  border: none;
  color: white;
  font-weight: 700;
  padding: 5px 12px;
  white-space: nowrap;
  text-align: center;
  font-size: 10px;
  border-radius: 10px;
  cursor: pointer;
  background: radial-gradient(143.96% 215.88% at 45.83% 54.55%, rgba(11, 24, 27, 0.5) 0%, rgba(24, 121, 104, 0.39) 51.28%, rgba(0, 200, 164, 0.5) 100%), #20c8a7;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.box .box__note {
  width: 100%;
  height: 77px;
  background: radial-gradient(143.96% 215.88% at 45.83% 54.55%, rgba(11, 24, 27, 0.5) 0%, rgba(24, 121, 104, 0.39) 51.28%, rgba(0, 200, 164, 0.5) 100%), #20c8a7;
  position: absolute;
  bottom: 0;
}
.box .box__note .note__content {
  position: absolute;
  bottom: 11px;
  margin: 0 14px;
  width: 100%;
}
.box .box__note .note__content .note__text {
  text-align: center;
  font-size: 10px;
  color: #fff;
  font-weight: 700;
  font-style: italic;
}
.box .box__note .note__content .note__text--small {
  font-weight: 300;
  opacity: 0.9;
}

@media only screen and (max-width: 600px) {
  .box .box__carousel .carousel__item {
    width: 10.2%;
  }
  .box .box__carousel .carousel__item .carousel__item--text .item__title {
    font-size: 12px;
  }
  .box .box__carousel .carousel__item .carousel__item--text .item__detail {
    font-size: 10px;
  }
  .box .box__carousel .carousel__item .carousel__item--button .btn__item {
    padding: 4px 10px;
    font-size: 9px;
  }
}
/*# sourceMappingURL=styleBox3.css.map */`;
	this.html = `<div class="box" id="box__tuThuoc">
    <div class="box__container">
        <div class="box__brand">
            <div class="box__brand--left">
                <div class="brand__logo--left">
                    <img src="https://demo.admicro.vn/dtg/images/Vector.png" alt="logo">
                </div>
                <div class="brand__text--left">
                    <h5 class="text--content">Tủ thuốc gia đình</h5>
                </div>
            </div>
            <div class="box__logo--right">
                <img src="https://demo.admicro.vn/dtg/images/image%2016.png" alt="logo">
            </div>
        </div>
        <div class="box__carousel">
          
            <div class="carousel__container">
                <div class="carousel__item">
                    <div class="carousel__item--image">
                        <img class="item__image" src="https://demo.admicro.vn/dtg/images/image%205-3.png" alt="">
                    </div>
                    <div class="carousel__item--text">
                             <h5 class="item__title">TPBVSK Kim Não Khang</h5>
                        <p class="item__detail">Không còn đau đầu, chóng mặt, mất ngủ. Chiết xuất từ thảo dược 100% thiên nhiên</p>
                    </div>
                    <div class="carousel__item--button"><button class="btn__item"><a class="btn__text" src="">TÌM HIỂU NGAY</a></button></div>
                </div>
                <div class="carousel__item">
                    <div class="carousel__item--image">
                        <img class="item__image" src="https://demo.admicro.vn/dtg/images/image%205-3.png" alt="">
                    </div>
                    <div class="carousel__item--text">
                             <h5 class="item__title">TPBVSK Kim Não Khang</h5>
                        <p class="item__detail">Không còn đau đầu, chóng mặt, mất ngủ. Chiết xuất từ thảo dược 100% thiên nhiên</p>
                    </div>
                    <div class="carousel__item--button"><button class="btn__item"><a class="btn__text" src="">TÌM HIỂU NGAY</a></button></div>
                </div>
                <div class="carousel__item">
                    <div class="carousel__item--image">
                        <img class="item__image" src="https://demo.admicro.vn/dtg/images/image%205-3.png" alt="">
                    </div>
                    <div class="carousel__item--text">
                             <h5 class="item__title">TPBVSK Kim Não Khang</h5>
                        <p class="item__detail">Không còn đau đầu, chóng mặt, mất ngủ. Chiết xuất từ thảo dược 100% thiên nhiên</p>
                    </div>
                    <div class="carousel__item--button"><button class="btn__item"><a class="btn__text" src="">TÌM HIỂU NGAY</a></button></div>
                </div>
                <div class="carousel__item">
                    <div class="carousel__item--image">
                        <img class="item__image" src="https://demo.admicro.vn/dtg/images/image%205-3.png" alt="">
                    </div>
                    <div class="carousel__item--text">
                             <h5 class="item__title">TPBVSK Kim Não Khang</h5>
                        <p class="item__detail">Không còn đau đầu, chóng mặt, mất ngủ. Chiết xuất từ thảo dược 100% thiên nhiên</p>
                    </div>
                    <div class="carousel__item--button"><button class="btn__item"><a class="btn__text" src="">TÌM HIỂU NGAY</a></button></div>
                </div>
                <div class="carousel__item">
                    <div class="carousel__item--image">
                        <img class="item__image" src="https://demo.admicro.vn/dtg/images/image%205-3.png" alt="">
                    </div>
                    <div class="carousel__item--text">
                             <h5 class="item__title">TPBVSK Kim Não Khang</h5>
                        <p class="item__detail">Không còn đau đầu, chóng mặt, mất ngủ. Chiết xuất từ thảo dược 100% thiên nhiên</p>
                    </div>
                    <div class="carousel__item--button"><button class="btn__item"><a class="btn__text" src="">TÌM HIỂU NGAY</a></button></div>
                </div>
                <div class="carousel__item">
                    <div class="carousel__item--image">
                        <img class="item__image" src="https://demo.admicro.vn/dtg/images/image%205-3.png" alt="">
                    </div>
                    <div class="carousel__item--text">
                             <h5 class="item__title">TPBVSK Kim Não Khang</h5>
                        <p class="item__detail">Không còn đau đầu, chóng mặt, mất ngủ. Chiết xuất từ thảo dược 100% thiên nhiên</p>
                    </div>
                    <div class="carousel__item--button"><button class="btn__item"><a class="btn__text" src="">TÌM HIỂU NGAY</a></button></div>
                </div>
                <div class="carousel__item">
                    <div class="carousel__item--image">
                        <img class="item__image" src="https://demo.admicro.vn/dtg/images/image%205-3.png" alt="">
                    </div>
                    <div class="carousel__item--text">
                             <h5 class="item__title">TPBVSK Kim Não Khang</h5>
                        <p class="item__detail">Không còn đau đầu, chóng mặt, mất ngủ. Chiết xuất từ thảo dược 100% thiên nhiên</p>
                    </div>
                    <div class="carousel__item--button"><button class="btn__item"><a class="btn__text" src="">TÌM HIỂU NGAY</a></button></div>
                </div>
                <div class="carousel__item">
                    <div class="carousel__item--image">
                        <img class="item__image" src="https://demo.admicro.vn/dtg/images/image%205-3.png" alt="">
                    </div>
                    <div class="carousel__item--text">
                             <h5 class="item__title">TPBVSK Kim Não Khang</h5>
                        <p class="item__detail">Không còn đau đầu, chóng mặt, mất ngủ. Chiết xuất từ thảo dược 100% thiên nhiên</p>
                    </div>
                    <div class="carousel__item--button"><button class="btn__item"><a class="btn__text" src="">TÌM HIỂU NGAY</a></button></div>
                </div>
                <div class="carousel__item">
                    <div class="carousel__item--image">
                        <img class="item__image" src="https://demo.admicro.vn/dtg/images/image%205-3.png" alt="">
                    </div>
                    <div class="carousel__item--text">
                             <h5 class="item__title">TPBVSK Kim Não Khang</h5>
                        <p class="item__detail">Không còn đau đầu, chóng mặt, mất ngủ. Chiết xuất từ thảo dược 100% thiên nhiên</p>
                    </div>
                    <div class="carousel__item--button"><button class="btn__item"><a class="btn__text" src="">TÌM HIỂU NGAY</a></button></div>
                </div>
            </div>
            <div class="control">
                <ul class="control__container">
                </ul>
            </div>
        </div>
        <div class="box__note">
            <div class="note__content">
                <p class="note__text">Khuyến cáo: <a class="note__text--small">Sản phẩm này không phải là thuốc và không có tác dụng thay thế thuốc chữa bệnh</a></p>
            </div>
        </div>
    </div>
</div>`;
	var elem = document.createElement("iframe")
	Object.assign(elem, {
		id: 'myIframe',
		height: 408, // pixels
		width: 580, // pixels
		frameBorder : 0
	})
	document.getElementById('myDiv').appendChild(elem)
	let iframe = document.getElementById("myIframe");
	let doc = iframe.contentWindow
	// doc.querySelector('body').innerHTML = `<style>${this.css}</style>${this.html}`;
	doc.document.write(`<style>${this.css}</style>${this.html}
    <script>
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
    <\/script>
    `);
    doc.document.close();
}
renderBox()
