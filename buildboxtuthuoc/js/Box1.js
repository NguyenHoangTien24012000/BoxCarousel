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
  width: 298px;
  height: 598px;
  background-color: #F9F9F9;
  border-radius: 10px;
  position: relative;
  border: 0.5px solid #A5A5A5;
}
.box .box__brand {
  display: flex;
  justify-content: space-between;
  padding: 8px;
  padding-bottom: 0;
  margin: 2px 0px 8px;
}
.box .box__brand .box__brand--left {
  display: flex;
}
.box .box__brand .box__logo--right{
  padding-top:5px;
}
.box .box__brand .box__brand--left .brand__logo--left {
  margin-top: 2px;
}
.box .box__brand .box__brand--left .brand__logo--left img{
  background: #0640d2;
  width:31px;
}
.box .box__brand .box__logo--right img{
 width: 88px;
}

.box .box__brand .brand__text--left {
  margin-left: 7px;
  margin-top: 3px;
}
.box .box__brand .brand__text--left .text--content {
  font-size: 14px;
  color: #0640d2;
  line-height: 16.41px;
}
.box .box__content {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}
.box .box__content .content__border {
  width: 10px;
  height: 77px;
  background: #0640d2;
}
.box .box__content .content__banner {
  width: 280px;
  height: 157px;
  background-color: #e5e5e5;
  box-shadow: 0px 4px 4px rgba(185, 185, 185, 0.25);
}
.box .box__content .content__banner .banner__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.box .box__carousel {
  position: absolute;
  z-index: 20;
  overflow: hidden;
  margin-left: 10px;
  padding-left: 4px;
}
.box .box__carousel .control {
  margin-bottom: 18px;
}
.box .box__carousel .control .control__container {
  display: flex;
  list-style: none;
  position: absolute;
  left: 18%;
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
.box .box__carousel .carousel__container {
  transition: all 0.5s;
  display: flex;
}
.box .box__carousel .carousel__item {
  width: 200px;
  height: 300px;
  background-color: white;
  margin-right: 10px;
  border-radius: 5px;
  box-shadow: 0px 0px 7px rgba(136, 136, 136, 0.25);
}
.box .box__carousel .carousel__item--image {
  width: 181px;
  height: 181px;
  margin: 10px;
}
.box .box__carousel .carousel__item--image .item__image {
  border: 1px solid #CDCDCD;
  border-radius: 5px;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.box .box__carousel .carousel__item--text {
  margin: 6px 10px;
}
.box .box__carousel .carousel__item--text .item__title {
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  padding-bottom: 4px;
  color: #333333;
}
.box .box__carousel .carousel__item--text .item__detail {
  font-size: 11px;
  font-weight: 400;
  color: #555555;
}
.box .box__carousel .carousel__item--button {
  text-align: center;
}
.box .box__carousel .carousel__item--button .btn__item {
  border: none;
  color: white;
  font-weight: 700;
  padding: 6px 12px;
  text-align: center;
  font-size: 10px;
  border-radius: 10px;
  cursor: pointer;
  background: #0640d2;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.box .box__note {
  width: 100%;
  height: 77px;
  background: #0640d2;
  position: absolute;
  bottom: 0;
}
.box .box__note .note__content {
  position: absolute;
  bottom: 12px;
  margin: 0 14px;
}
.box .box__note .note__content .note__text {
  font-size: 10px;
  color: #fff;
  font-weight: 700;
  font-style: italic;
}
.box .box__note .note__content .note__text--small {
  font-weight: 300;
  opacity: 0.9;
}
`;
   
  this.html = `<div id="box__tuThuoc">
    <div class="box" >
        <div class="box__container">
            <div class="box__brand">
                <div class="box__brand--left">
                <div class="brand__logo--left">
                <img src="https://demo.admicro.vn/buildboxtuthuoc/images/iconTuThuoc.png" alt="logo">
            </div>
            <div class="brand__text--left">
                <h5 class="text--content">Tủ thuốc</h5>
                <h5 class="text--content">gia đình</h5>
            </div>
                </div>
                <div class="box__logo--right">
                    <img src="https://cdnstoremedia.com/adt/banners/nam2015/4043/min_html5/images/2022-05-12/honglethi/logo-long-chaau-2.jpg" alt="logo">
                </div>
            </div>
            <div class="box__content">
                <div class="content__border border--left">

                </div>
                <div class="content__banner">
                  <video width="280" height="157" controls autoplay muted>
                  <source src="https://cdnstoremedia.com/adt/banners/nam2015/4043/min_html5/media/2022-05-09/lanvuthihoang/275238455_2281159572190797_5902030546499621941_n.mp4" type="video/mp4">
              </video>
              
                </div>
                <div class="content__border border--right">

                </div>
            </div>
          
            <div class="box__carousel">
                <div class="control">
                    <ul class="control__container">
                        <!-- <li class="control__item active arrow right"></li>
                        <li class="control__item arrow left"></li>
                        <li class="control__item"></li> -->
                    </ul>
                </div>
                <div class="carousel__container">
                    <div class="carousel__item">
                        <div class="carousel__item--image">
                            <img class="item__image" src="https://cdnstoremedia.com/adt/banners/nam2015/4043/min_html5/images/2022-05-12/honglethi/evening-primrose-oil-epo-1000mg.jpg" alt="">
                        </div>
                        <div class="carousel__item--text">
                                 <h5 class="item__title">Evening Primrose Oil (Epo) 1000Mg</h5>
                            <p class="item__detail">Giúp chống oxy hóa tế bào, cải thiện nội tiết tố nữ, giúp mịn da.</p>
                        </div>
                        <div class="carousel__item--button"><button class="btn__item"><a class="btn__text" src="">TÌM HIỂU NGAY</a></button></div>
                    </div>
                    <div class="carousel__item">
                        <div class="carousel__item--image">
                            <img class="item__image" src="https://cdnstoremedia.com/adt/banners/nam2015/4043/min_html5/images/2022-05-12/honglethi/brauer-baby-child-immunity-support.jpg" alt="">
                        </div>
                        <div class="carousel__item--text">
                                 <h5 class="item__title">Brauer Baby Child Immunity Support</h5>
                            <p class="item__detail">Bổ sung Betacaroten & D3, giúp tăng đề kháng & hấp thu canxi.</p>
                        </div>
                        <div class="carousel__item--button"><button class="btn__item"><a class="btn__text" src="">TÌM HIỂU NGAY</a></button></div>
                    </div>
                    <div class="carousel__item">
                        <div class="carousel__item--image">
                            <img class="item__image" src="https://cdnstoremedia.com/adt/banners/nam2015/4043/min_html5/images/2022-05-12/honglethi/brauer-baby-kids-liquid-vitamin-c.png" alt="">
                        </div>
                        <div class="carousel__item--text">
                                 <h5 class="item__title">Brauer Baby Kids Liquid Vitamin C</h5>
                            <p class="item__detail">Bổ sung vitamin C, hỗ trợ tăng cường sức đề kháng cho trẻ.</p>
                        </div>
                        <div class="carousel__item--button"><button class="btn__item"><a class="btn__text" src="">TÌM HIỂU NGAY</a></button></div>
                    </div>

                    <div class="carousel__item--button"><button class="btn__item"><a class="btn__text" src="">TÌM HIỂU NGAY</a></button></div>
                </div>
                </div>
            </div>
            <div class="box__note">
                <div class="note__content">
                    <p class="note__text">Khuyến cáo: <a class="note__text--small">Sản phẩm này không phải là thuốc và không có tác dụng thay thế thuốc chữa bệnh</a></p>
                </div>
            </div>
        </div>
    </div>
</div>`;
  var elem = document.createElement("iframe")
  Object.assign(elem, {
    id: 'myIframe',
    height: 600, // pixels
    width: 300, // pixels
    frameBorder: 0
  })
  document.getElementById('myDiv').appendChild(elem)
  let iframe = document.getElementById("myIframe");
  let doc = iframe.contentWindow
  // doc.querySelector('body').innerHTML = `<style>${this.css}</style>${this.html}`;
  doc.document.write(`<style>${this.css}</style>${this.html}
    <script>
    {const carouselBox = function (selector) {

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
                    carousel.style.transform = 'translateX(-' + (cardWidth * index - 75) + 'px )';
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
            carousel.style.transform = 'translateX(-' + (cardWidth * current - 75) + 'px )';
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
}
    <\/script>
    `);
  doc.document.close();
}
renderBox()
