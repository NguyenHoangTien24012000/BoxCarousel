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
  width: 658px;
  height: 298px;
  background-color: #F9F9F9;
  border-radius: 10px;
  position: relative;
  border: 0.5px solid #A5A5A5;
}
.box .box__brand {
  display: flex;
  justify-content: space-between;
  padding: 8px;
  padding-bottom: 16px;
}
.box .box__brand .box__brand--left {
  display: flex;
  margin-left: 10px;
}
.box .box__brand .brand__text--left {
  margin-left: 7px;
  margin-top: 11px;
}
.box .box__brand .brand__text--left .text--content {
  font-size: 18px;
  color: #236c62;
  line-height: 16.41px;
}
.box .box__brand .box__logo--right .box__logo--item {
  width: 120px;
  height: 26px;
  border-radius: 10px;
  text-align: center;
  background-image: url("https://demo.admicro.vn/buildboxtuthuoc/images/Rectangle%207.png");
}
.box .box__brand .box__logo--right .logo--text {
  line-height: 25px;
  font-size: 11px;
  color: #fff;
}
.box .box__content {
  display: flex;
  align-items: flex-end;
}
.box .box__content .content__border {
  width: 17px;
  height: 133px;
  margin-bottom: 26px;
  background: radial-gradient(143.96% 215.88% at 45.83% 54.55%, rgba(11, 24, 27, 0.5) 0%, rgba(24, 121, 104, 0.5) 51.28%, rgba(0, 200, 164, 0.5) 100%), #20C8A7;
}
.box .box__content .content__border.active {
  position: absolute;
  right: 0;
}
.box .box__content .content__image {
  margin-bottom: 25px;
  width: 304px;
  height: 171px;
  background-color: #e5e5e5;
  box-shadow: 0px 4px 4px rgba(185, 185, 185, 0.25);
}
.box .content__carousel {
  position: absolute;
  top: 52px;
  right: 19px;
  box-shadow: 0px 0px 7px rgba(136, 136, 136, 0.25);
  border-radius: 10px;
}
.box .box__carousel {
  width: 300px;
  position: relative;
}
.box .box__carousel .control {
  position: absolute;
  bottom: -18px;
  left: 50%;
  transform: translateX(-50%);
}
.box .box__carousel .control .control__container {
  display: flex;
  list-style: none;
}
.box .box__carousel .control .control__item {
  width: 6px;
  height: 6px;
  margin-right: 6px;
  border-radius: 50%;
  background-color: #cecece;
}
.box .box__carousel .control .control__item.active {
  background-color: #656565;
}
.box .box__carousel .carousel__content {
  display: flex;
  width: 300%;
  transition: all 0.5s;
}
.box .box__carousel .carousel__container {
  overflow: hidden;
}
.box .box__carousel .carousel__item {
  display: flex;
  width: 300px;
  height: 205px;
  background-color: white;
  border-radius: 5px;
}
.box .box__carousel .carousel__item--image {
  width: 123px;
  height: 123px;
  margin: 13px;
}
.box .box__carousel .carousel__item--image .item__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.box .box__carousel .carousel__item--image .item--description {
  margin-top: 10px;
  font-size: 14px;
  color: #222;
  font-weight: 500;
}
.box .box__carousel .carousel__item--text {
  margin-top: 8px;
  width: 142px;
}
.box .box__carousel .carousel__item--text .text__style {
  font-size: 13px;
  line-height: 15px;
  color: #474747;
  font-weight: 400;
  margin-bottom: 15px;
}
.box .box__carousel .carousel__item--button {
  text-align: center;
}
.box .box__carousel .carousel__item--button .btn__item {
  border: none;
  color: white;
  font-weight: 700;
  padding: 5px 12px;
  text-align: center;
  font-size: 10px;
  border-radius: 10px;
  cursor: pointer;
  background: radial-gradient(143.96% 215.88% at 45.83% 54.55%, rgba(11, 24, 27, 0.5) 0%, rgba(24, 121, 104, 0.5) 51.28%, rgba(0, 200, 164, 0.5) 100%), #20c8a7;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.box .box__note {
  width: 50%;
}
.box .box__note .note__content {
  margin: 0 18px;
}
.box .box__note .note__content .note__text {
  font-size: 10px;
  color: #656565;
  font-weight: 700;
  font-style: italic;
}
.box .box__note .note__content .note__text--small {
  font-weight: 300;
  opacity: 0.9;
}
/*# sourceMappingURL=styleBox4.css.map */`;
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
                <div class="box__logo--item">
                    <h5 class="logo--text"> Não khoẻ - Sống vui</h5>
                </div>
            </div>
        </div>
        <div class="box__content">
            <div class="content__border ">

            </div>
            <div class="content__image">
                
            </div>
            <div class="content__border">

            </div>
            <div class="content__carousel">
                <div class="box__carousel">
             
                    <div class="carousel__container">
                        <div class="carousel__content">
                            <div class="carousel__item">
                                <div class="carousel__item--image">
                                    <img class="item__image" src="https://demo.admicro.vn/dtg/images/image%205-3.png" alt="">
                                    <h5 class="item--description">Thuốc Bổ Não Cebraton</h5>
                                </div>
                                <div class="carousel__item--text">
                                   <div class="text__logo">
                                    <img src="https://demo.admicro.vn/dtg/images/image%2016.png" alt="logo">
                                   </div>
                                   <div class="text__detail">
                                        <p class="text__style">Không còn đau đầu, chóng mặt, mất ngủ</p>
                                        <p class="text__style">Vượt qua căng thẳng, stress mùa dịch</p>
                                        <p class="text__style">Phòng ngừa tai biến mạch máu não</p>
                                   </div>
                                </div>
                            </div>
                            <div class="carousel__item">
                                <div class="carousel__item--image">
                                    <img class="item__image" src="https://demo.admicro.vn/dtg/images/image%205-3.png" alt="">
                                    <h5 class="item--description">Thuốc Bổ Não Cebraton</h5>
                                </div>
                                <div class="carousel__item--text">
                                   <div class="text__logo">
                                    <img src="https://demo.admicro.vn/dtg/images/image%2016.png" alt="logo">
                                   </div>
                                   <div class="text__detail">
                                        <p class="text__style">Không còn đau đầu, chóng mặt, mất ngủ</p>
                                        <p class="text__style">Vượt qua căng thẳng, stress mùa dịch</p>
                                        <p class="text__style">Phòng ngừa tai biến mạch máu não</p>
                                   </div>
                                </div>
                            </div>
                            <div class="carousel__item">
                                <div class="carousel__item--image">
                                    <img class="item__image" src="https://demo.admicro.vn/dtg/images/image%205-3.png" alt="">
                                    <h5 class="item--description">Thuốc Bổ Não Cebraton</h5>
                                </div>
                                <div class="carousel__item--text">
                                   <div class="text__logo">
                                    <img src="https://demo.admicro.vn/dtg/images/image%2016.png" alt="logo">
                                   </div>
                                   <div class="text__detail">
                                        <p class="text__style">Không còn đau đầu, chóng mặt, mất ngủ</p>
                                        <p class="text__style">Vượt qua căng thẳng, stress mùa dịch</p>
                                        <p class="text__style">Phòng ngừa tai biến mạch máu não</p>
                                   </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="control">
                        <ul class="control__container">
                            <!-- <li class="control__item active arrow right"></li>
                            <li class="control__item arrow left"></li>
                            <li class="control__item"></li> -->
                        </ul>
                    </div>
                </div>
            </div>
            <div class="content__border active">

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
		height: 300, // pixels
		width: 660, // pixels
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

    let carousel = slider.querySelector('.carousel__content');

    //Kich thuoc the con + 10px margin
    let cardWidth = slider.querySelector('.carousel__item').offsetWidth;

    //So luong the con
    let numberItem = slider.querySelectorAll('.carousel__item').length;

    let current =1;
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

    function carouselAction() {
        slider.querySelectorAll('.control__item').forEach((item, index) => {
            item.addEventListener('click', () => {
                current = index
                activeElenment()
                item.classList.add('active')
                carousel.style.transform = 'translateX(-'+ cardWidth * index +'px)';
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
            carousel.style.transform = 'translateX(-' + (cardWidth * current) + 'px )';
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
    <\/script>
    `);
    doc.document.close();
}
renderBox()
