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
    height: 297px;
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
  .box .box__brand .brand__logo--left img{
    background: #0640d2;
    width:31px;
  }
  .box .box__brand .brand__text--left {
    margin-left: 7px;
    margin-top: 11px;
  }
  .box .box__brand .brand__text--left .text--content {
    font-size: 18px;
    color: #0640d2;
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
    line-height: 26px;
    font-size: 11px;
    color: #fff;
  }
  .box .box__brand .box__logo--right{
    margin-top: 4px;
    margin-right: 14px;
  }
  .box .box__brand .box__logo--right img{
    width: 96px;
   }
  .box .box__content {
    display: flex;
    align-items: flex-end;
  }
  .box .box__content .content__border {
    width: 18px;
    height: 115px;
    margin-bottom: 50px;
    overflow: hidden;
    background-color: #0640d2;
  }
  .box .box__content .content__border.active {
    position: absolute;
    right: 0;
  }
  .box .box__content .content__banner {
    margin-bottom: 25px;
    width: 304px;
    height: 171px;
    box-shadow: 0px 4px 4px rgba(185, 185, 185, 0.25);
  }
  .box .box__content .content__banner .banner__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border:none;
  }
  .box .content__carousel {
    position: absolute;
    top: 50px;
    right: 19px;
    box-shadow: 0px 0px 7px rgba(136, 136, 136, 0.25);
    border-radius: 10px;
    overflow: hidden;
  }
  .box .box__carousel {
    width: 300px;
    position: relative;
  }
  
  
 
 
  .box .box__carousel .carousel__content {
    display: flex;
    width: 350%;
    transition: all 0.5s;
  }
  .box .box__carousel .carousel__container {
    overflow: hidden;
  }
  .box .box__carousel .carousel__item {
   
    width: 100%;
    height:174px;
    background-color: white;
    border-radius: 5px;
    margin-right: 5px;
    padding:20px 10px 15px;
    box-shadow: 0px 0px 7px rgba(136, 136, 136, 0.25);
  }
  .box .box__carousel .carousel__item  .carousel__item--text{
    padding-right:40px;
  }
  .box .box__carousel .carousel__item  .carousel__item--text .text__detail{
    margin-top:20px;
  }
  .box .box__carousel .carousel__item .item__button{
    margin-left:96px;
    margin-top:27px;
  }
   .box .box__carousel .carousel__item .btn__item{
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
  .box .box__carousel .carousel__item  .text__style{
    font-size: 13px;
    line-height: 15px;
    color: #474747;
    font-weight: 400;
    margin-bottom: 15px;
  }
  .box__carousel .carousel__item .item__content{
    display: flex;
  }
  .carousel__item .item__content .carousel__item--image img{
    width: 123px;
    height: 123px;
  }
  .box .control {
    position: absolute;
    bottom: 20px;
    left: 72%;
  }
  .box .control .control__container {
    display: flex;
    list-style: none;
  }
  .box .control .control__item {
    width: 6px;
    height: 6px;
    margin-right: 6px;
    border-radius: 50%;
    background-color: #cecece;
    cursor:pointer;
  }
  .carousel__item .item__content .carousel__item--text{
    margin-left:10px;
  }
  .carousel__item .item__content .carousel__item--text .item--description{
    font-size: 14px;
    color: #222;
    font-weight: 500;
    margin-bottom: 5px;
  }
 
  .box .control .control__item.active {
    background-color: #656565;
  }
  .box .box__note {
    width: 50%;
  }
  .box .box__note .note__content {
    margin: 0 18px;
  }
  .box .box__note .note__content .note__text {
    font-size: 10px;
    color: #0640d2;
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
            <img src="https://demo.admicro.vn/buildboxtuthuoc/images/iconTuThuoc.png" alt="logo">
          </div>
          <div class="brand__text--left">
            <h5 class="text--content">Tủ thuốc gia đình</h5>
          </div>
        </div>
        <div class="box__logo--right">
      
        <img src="https://cdnstoremedia.com/adt/banners/nam2015/4043/min_html5/images/2022-05-12/honglethi/logo-long-chaau-2.jpg" alt="logo">

        </div>
      </div>
      <div class="box__content">
        <div class="content__border ">

        </div>
        <div class="content__banner">
          <video width="304" height="172" controls autoplay muted>
            <source src="https://cdnstoremedia.com/adt/banners/nam2015/4043/min_html5/media/2022-05-09/lanvuthihoang/275238455_2281159572190797_5902030546499621941_n.mp4" type="video/mp4">
          </video>
        </div>
        <div class="content__border">

        </div>
        <div class="content__carousel">
          <div class="box__carousel">
            <div class="carousel__container">
              <div class="carousel__content">
                <div class="carousel__item">
                  <div class="item__content">
                    <div class="content__left">
                      <div class="carousel__item--image">
                        <img class="item__image"
                          src="https://cdnstoremedia.com/adt/banners/nam2015/4043/min_html5/images/2022-05-12/honglethi/evening-primrose-oil-epo-1000mg.jpg"
                          alt="">

                      </div>
                    </div>
                    <div class="carousel__item--text">
                      <h5 class="item--description">Evening Primrose Oil (Epo) 1000Mg</h5>
                      <div class="text__detail">
                        <p class="text__style">Giúp chống oxy hóa tế bào, cải thiện nội tiết tố nữ, giúp mịn da.</p>
                      </div>
                    </div>
                  </div>
                  <div class="item__button">
                    <button class="btn__item"><a class="btn__text" src="">TÌM HIỂU NGAY</a></button>
                  </div>
                </div>
                <div class="carousel__item">
                  <div class="item__content">
                    <div class="content__left">
                      <div class="carousel__item--image">
                        <img class="item__image"
                          src="https://cdnstoremedia.com/adt/banners/nam2015/4043/min_html5/images/2022-05-12/honglethi/brauer-baby-child-immunity-support.jpg"
                          alt="">

                      </div>
                    </div>
                    <div class="carousel__item--text">
                      <h5 class="item--description">Brauer Baby Child Immunity Support</h5>
                      <div class="text__detail">
                        <p class="text__style">Bổ sung Betacaroten & D3, giúp tăng đề kháng & hấp thu canxi.</p>
                      </div>
                    </div>
                  </div>
                  <div class="item__button">
                    <button class="btn__item"><a class="btn__text" src="">TÌM HIỂU NGAY</a></button>
                  </div>
                </div>
                <div class="carousel__item">
                  <div class="item__content">
                    <div class="content__left">
                      <div class="carousel__item--image">
                        <img class="item__image"
                          src="https://cdnstoremedia.com/adt/banners/nam2015/4043/min_html5/images/2022-05-12/honglethi/brauer-baby-kids-liquid-vitamin-c.png"
                          alt="">

                      </div>
                    </div>
                    <div class="carousel__item--text">
                      <h5 class="item--description">Brauer Baby Kids Liquid Vitamin C</h5>
                      <div class="text__detail">
                        <p class="text__style">Bổ sung vitamin C, hỗ trợ tăng cường sức đề kháng cho trẻ.</p>
                      </div>
                    </div>
                  </div>
                  <div class="item__button">
                    <button class="btn__item"><a class="btn__text" src="">TÌM HIỂU NGAY</a></button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div class="content__border active">

        </div>
      </div>
      <div class="control">
        <ul class="control__container">
        </ul>
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
    frameBorder: 0
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
  let cardWidth = slider.querySelector('.carousel__item').offsetWidth + 5;
  
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
  setInterval(carouselAuto, 4000)
  return createNodeChildLi(), carouselAction();
  }
  
  carouselBox('box__tuThuoc');
  <\/script>
      `);
  doc.document.close();
}
renderBox()
