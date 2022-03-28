function buildBoxThuoc(data) {
    let htmlBanner;
    if (data.type === 1) {
        htmlBanner = `<img class="banner__img" src="${data.url}" alt="alo">`
    } else {
        htmlBanner = ''
    }
    function renderSanPham(arrSanPham) {
        let content = ''
        arrSanPham.forEach(item => {
            content += ` <div class="carousel__item">
            <div class="item__container">
                <div class="item__left">
                    <div class="carousel__item--image">
                        <img class="item__image"
                            src="${item.img}"
                            alt="${item.title}">
                    </div>
                </div>
                <div class="item__right">
                    <div class="carousel__item--text">
                        <h5 class="item__title">${item.title}</h5>
                        <p class="item__detail">${item.desc}</p>
                    </div>
                    <div class="carousel__item--button"><button class="btn__item"><a class="btn__text"
                                src="${item.url_btn}">Xem thêm </a><svg xmlns="http://www.w3.org/2000/svg" width="11"
                                height="9" viewBox="0 0 11 9" fill="none">
                                <path
                                    d="M10.3536 4.68705C10.5488 4.49179 10.5488 4.1752 10.3536 3.97994L7.17157 0.797962C6.97631 0.6027 6.65973 0.6027 6.46447 0.797962C6.2692 0.993224 6.2692 1.30981 6.46447 1.50507L9.29289 4.3335L6.46447 7.16192C6.2692 7.35719 6.2692 7.67377 6.46447 7.86903C6.65973 8.06429 6.97631 8.06429 7.17157 7.86903L10.3536 4.68705ZM0 4.8335H10V3.8335H0V4.8335Z"
                                    fill="#007880" />
                            </svg></button></div>
                </div>
            </div>
            <div class="line__container">
                <hr class="line__item">
            </div>
        </div>`
        });
        return content;
    }

    let html =  `<div class="box" id="box__tuThuoc">
    <div class="box__container">
        <div class="box__brand">
            <div class="box__brand--left">
                <div class="brand__logo--left">
                    <img src="https://demo.admicro.vn/dtg/images/Vector.png" alt="logo">
                </div>
                <div class="brand__text--left">
                    <h5 class="text--content">Tủ thuốc</h5>
                    <h5 class="text--content">gia đình</h5>
                </div>
            </div>
            <div class="box__logo--right">
                <img src="https://demo.admicro.vn/dtg/images/image%2016.png" alt="logo">
            </div>
        </div>
        <div class="box__content">
            <div class="content__border border--left">

            </div>
            <div class="content__banner">
                <img class="banner__img" src="https://demo.admicro.vn/dtg/images/image%205-3.png" alt="">
            </div>
            <div class="content__border border--right">

            </div>
        </div>

        <div class="box__carousel">
            <div class="control">
                <div class="control__text">
                    <h5 class="text__content"><a class="text--left">1</a>/3<a class="text-right"></a></h5>
                </div>
                <div class="control__button">
                    <div class="button__item down active">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7"
                            fill="none">
                            <path d="M1 1.3067L5 5.51118L9 1.3067" stroke="white" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <div class="button__item up">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7"
                            fill="none">
                            <path d="M9 5.5112L5 1.30673L1 5.5112" stroke="white" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>
                <div class="line__container  line--top">
                    <hr class="line__item">
                </div>
            </div>
            <div class="carousel__container">
            ${renderSanPham(data.arr_sp)}
            </div>
        </div>
        <div class="box__note">
            <div class="note__content">
                <p class="note__text">Khuyến cáo: <a class="note__text--small">Sản phẩm này không phải là thuốc và
                        không có tác dụng thay thế thuốc chữa bệnh</a></p>
            </div>
        </div>
    </div>
</div>`

    let css = `@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&family=Roboto:wght@300;400;500;700&display=swap");
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
      background-color: #FEFEFE;
      border-radius: 10px;
      border: 0.5px solid #A5A5A5;
    }
    .box .box__brand {
      display: flex;
      justify-content: space-between;
      padding: 8px;
      padding-bottom: 0;
      margin: 5px 0px;
    }
    .box .box__brand .box__brand--left {
      display: flex;
    }
    .box .box__brand .box__brand--left .brand__logo--left {
      margin-top: 2px;
    }
    .box .box__brand .brand__text--left {
      margin-left: 7px;
      margin-top: 3px;
    }
    .box .box__brand .brand__text--left .text--content {
      font-size: 14px;
      color: #236c62;
      line-height: 16.41px;
    }
    .box .box__content {
      display: flex;
      align-items: center;
      margin-bottom: 12px;
    }
    .box .box__content .content__border {
      width: 10px;
      height: 77px;
      background: linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(207, 239, 235, 0.141667) 41.67%, rgba(0, 0, 0, 0) 100%), #20C8A7;
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
      margin: 0 10px;
      height: 332px;
      overflow: hidden;
      position: relative;
    }
    .box .box__carousel .line__item {
      border-top: 1px dotted #e5e5e5;
    }
    .box .box__carousel .control {
      position: absolute;
      z-index: 10;
      width: 100%;
      height: 10px;
      margin-left: 2px;
      display: flex;
      padding-bottom: 10px;
    }
    .box .box__carousel .control__text .text__content {
      font-size: 14px;
      font-weight: 500;
      color: #4e4e4e;
    }
    .box .box__carousel .line__container {
      width: 100%;
    }
    .box .box__carousel .line__container.line--top {
      margin-top: 7px;
    }
    .box .box__carousel .control__button {
      margin-left: 9px;
      display: flex;
    }
    .box .box__carousel .button__item {
      cursor: pointer;
      margin-right: 5px;
      width: 16px;
      height: 10px;
      padding-top: 5px;
      padding-bottom:1px;
      line-height: 16px;
      text-align: center;
      background-color: #20c8a866;
    }
    .box .box__carousel .button__item.up{
        padding-top: 4px;
        padding-bottom: 2px;
      }
    .box .box__carousel .button__item.active {
      background-color: #20c8a8;
    }
    .box .box__carousel .carousel__container {
      position: absolute;
      top: 14px;
      height: 94%;
      overflow-y: auto;
      scroll-snap-type: y mandatory;
    }
    .box .box__carousel .carousel__container::-webkit-scrollbar {
      display: none;
    }
    .box .box__carousel .carousel__item .item__container {
      padding: 9px 0 4px;
      display: flex;
    }
    .box .box__carousel .item__left {
      margin-right: 10px;
    }
    .box .box__carousel .carousel__item--image {
      width: 79px;
      height: 79px;
    }
    .box .box__carousel .carousel__item--image .item__image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .box .box__carousel .item__right .item__title {
      font-size: 14px;
      font-weight: 500;
      margin-bottom: 5px;
      color: #222222;
    }
    .box .box__carousel .item__right .item__detail {
      font-size: 12px;
      font-weight: 400;
      color: #656565;
      margin-bottom: 24px;
    }
    .box .box__carousel .item__right .carousel__item--button {
      display: flex;
      justify-content: end;
    }
    .box .box__carousel .item__right .btn__item {
      color: #007880;
      background-color: white;
      border: none;
      cursor: pointer;
    }
    .box .box__note {
      height: 40px;
    }
    .box .box__note .note__content {
      margin: 6px 14px;
    }
    .box .box__note .note__content .note__text {
      font-size: 10px;
      color: #A5A5A5;
      font-weight: 700;
      font-style: italic;
    }
    .box .box__note .note__content .note__text--small {
      font-weight: 300;
      opacity: 0.9;
    }
    /*# sourceMappingURL=styleBox2.css.map */`
    
    let script =`
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
    `


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

    doc.document.write(`<style>${css}</style>${html}<script>${script}</script>
    `);
    doc.document.close();
}

let data = {
    icon: 'https://demo.admicro.vn/dtg/images/Vector.png',
    logo: 'https://demo.admicro.vn/dtg/images/image%2016.png',
    color_text_brand: '#236c62',
    color_bg: 'radial-gradient(143.96% 215.88% at 45.83% 54.55%, rgba(11, 24, 27, 0.5) 0%, rgba(24, 121, 104, 0.5) 51.28%, rgba(0, 200, 164, 0.5) 100%), #20C8A7;',
    url: 'https://demo.admicro.vn/dtg/images/image%205-3.png',
    type: 1,
    arr_sp: [{ img: 'https://media3.scdn.vn/img4/2020/10_10/brTXpA7d6ydEDCJTsJ8K_simg_b5529c_250x250_maxb.jpg', title: 'name', desc: 'Không còn đau đầu, chóng mặt, mất ngủ. Chiết xuất từ thảo dược 100% thiên nhiên', url_btn: 'linkButton' },
    { img: 'https://media3.scdn.vn/img4/2020/10_10/brTXpA7d6ydEDCJTsJ8K_simg_b5529c_250x250_maxb.jpg', title: 'name', desc: 'detail', url_btn: 'linkButton' },
    { img: 'https://media3.scdn.vn/img4/2020/10_10/brTXpA7d6ydEDCJTsJ8K_simg_b5529c_250x250_maxb.jpg', title: 'name', desc: 'detail', url_btn: 'linkButton' }
    ],
    color_text_footer: '#fff'
}

buildBoxThuoc(data)