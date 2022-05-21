function sponsoradx(data, typebox) {
    
    console.log("data", data)

    var ADMSTORAGE = parent.window.admerrorload ? { 'image': 'cdnstoremedia.com', 'js': 'static.contineljs.com', 'logging': 'trunkpkg.com' } : { 'image': 'adi.admicro.vn', 'js': 'media1.admicro.vn', 'logging': 'lg1.logging.admicro.vn' };

    function _admloadJs(b, c) {
        var e = document.createElement("script");
        e.type = "text/javascript";
        e.async = !0;
        e.src = b;
        2 <= arguments.length && (e.onload = c, e.onreadystatechange = function () {
            4 != e.readyState && "complete" != e.readyState || c()
        });
        console.log("e", e)
        document.getElementsByTagName("head")[0].appendChild(e)
    }

    try {
        if (parent.window["adnzone" + data.zoneid].ext.logo == 1) {
            ADMSTORAGE = { 'image': 'cdnstoremedia.com', 'js': 'static.contineljs.com', 'logging': 'trunkpkg.com' };
        }
    } catch (e) { };
    

    if (typeof core_adx_sponsor_pc === "undefined") {
        var dmjs = `//${ADMSTORAGE.js}`;

        console.log("dmjs", dmjs)
        _admloadJs(dmjs + '/core/core_adx_sponsor_pc.js', function () {
            initLoad(data);
        });
    } else {
        initLoad(data);
    }



    var initLoad = function (data) {
        var core_sponsor_pc = new core_adx_sponsor_pc(data);

        //truong hop cần test
        var dmLog = `//${ADMSTORAGE.logging}`;
        
        var lengitem = 3;

        var item = data.items;

        this.zoneid = data.zoneid;

        //truong hop cần test
        var pathdmn;
        (function getPath() {
            var url = document.URL;
            var arr = url.split("/");
            var dmn = arr[0] + "//" + arr[2];
            pathdmn = url.replace(dmn, "");
        })();

        //sapxeptheo chi so rank, xac xuat hien thi
        function xeptheorank(item, ran_limit) {
            var arrrank = [];
            var arrxepxong = [];
            var arrvitri = [];
            var arrdiemchot = [0];
            var tong = 0;

            for (i = 0; i < item.length; i++) {
                arrrank.push(item[i].r);
                arrvitri.push(i);
            }
            console.log("arrrank", arrrank);
            console.log("arrvitri", arrvitri)

            for (j = 0; j < ran_limit; j++) {
                var leng = arrrank.length
                for (var i = 0; i < leng; i++) {
                    tong += arrrank[i];
                    arrdiemchot.push(tong);
                };
                console.log("arrdiemchot", arrdiemchot)
                console.log("tong", tong)
                var ran = tong * Math.random();
                console.log("ran", ran)
                for (var i = 1; i <= leng; i++) {
                    if (arrdiemchot[i] > ran && arrdiemchot[i - 1] < ran) {
                        arrxepxong.push(arrvitri[i - 1]);
                        arrvitri.splice(i - 1, 1);
                        arrrank.splice(i - 1, 1);
                        tong = 0;
                        arrdiemchot = [0];
                    }
                    console.log("arrrank 1", arrrank);
                    console.log("arrvitri 1", arrvitri)
                };
            }
            return arrxepxong;
        };

        var arrxepxong = xeptheorank(item, lengitem);

        var first;
        console.log("parent.AdmBanTrackingParam", parent.AdmBanTrackingParam)

        //truong hop chua hiểu, chua su dung
        try {
            if (typeof (parent.AdmBanTrackingParam) != 'undefined' && typeof (parent.AdmBanTrackingParam.zsp) != 'undefined' && parent.AdmBanTrackingParam.zsp != null && parent.AdmBanTrackingParam.zsp != '' && parent.AdmBanTrackingParam.zsp == this.zoneid) {
                for (i = 0; i < item.length; i++) {
                    if (item[i].bid == parent.AdmBanTrackingParam.i) {
                        first = i;
                    }
                }
                console.log("first", first)
                var lenarxx = arrxepxong.length
                for (i = 0; i < lenarxx; i++) {
                    if (arrxepxong[i] == first) {
                        arrxepxong.splice(i, 1);
                        arrxepxong.unshift(first);
                    }
                }
                if (arrxepxong[0] != first) {
                    arrxepxong.unshift(first);
                }
            }

        } catch (e) { }
        

        //truong hop khong su dung
        var descreption = item[arrxepxong[0]].desc;
        if (descreption.length > 95) {
            var descreption1 = descreption.substring(0, 90);
            var lastspace = descreption1.lastIndexOf(" ");
            var descreption = descreption1.substring(0, lastspace) + '...';
        }


        this.getSubString = function (str, max) {
            var j = str.length;
            var bstr = str;
            if (j > max) {
                max = max - 4;
                bstr = str.substr(0, max);
                var n = bstr.lastIndexOf(" ");
                bstr = bstr.substr(0, n);
                bstr = bstr + '...';
            }
            return bstr;
        };


        //truong hop khong su dung
        this.banLog = [];



        var logview = [];
        function render() {
            var header = '';
            var content = '';
            var footer = '';
            var html = '';

            //ko su dung
            var urllog = '',
                urllog1 = '';

            //khong su dung
            var tpn = 4,
                tp = 11, rand = Math.random();
            //khong su dung
            curDom = document.domain;

            // render noi dung 
            for (var i = 0, len = (item.length >= lengitem) ? lengitem : item.length; i < len; i++) {
                //khong su dung
                var descr = item[arrxepxong[0]].desc;
                
                var _title = item[arrxepxong[i]].title;

                if (-1 != document.domain.indexOf("thanhnien") || -1 != document.domain.indexOf("google")) {
                    _title = getSubString(_title, 43);
                }

                //push arr logview, banLog push nhung khong su dung
                if (!parent.ADS_CHECKER.in_array(item[arrxepxong[i]]['bid'], this.banLog)) {
                    this.banLog.push(item[arrxepxong[i]]['bid']);
         
                    var view = core_sponsor_pc.getlogview(data.items[arrxepxong[i]]);

                    logview.push(view);
                }

                //url logclick
                var logurl = core_sponsor_pc.getlogclick(data.items[arrxepxong[i]]);
                
                //chua hieu
                try {
                    var rf = parent.document.referrer + '';
                    if (typeof (parent.dataClickTag) != 'undefined' && parent.dataClickTag != null && parent.dataClickTag != '') {
                        logurl = parent.dataClickTag + encodeURIComponent(logurl);
                    }
                } catch (e) {
                }

                //chua hieu
                try {
                    if (typeof (item[arrxepxong[0]].ext) != 'undefined' && item[arrxepxong[0]].ext != null && item[arrxepxong[0]].ext != '') {

                        var logABtest = '//lg1.logging.admicro.vn/ab?dmn=' + encodeURIComponent(document.domain) + '&h=' + item[arrxepxong[0]].ext.hash + '&d=0,-1,-1,-1&p=' + pathdmn + '&r=' + Math.random() + '&zid=' + this.zoneid;
                        //var logurl = '//lg1.logging.admicro.vn/ab?dmn='+encodeURIComponent(document.domain)+'&h='+item[arrxepxong[0]].ext.hash+'&d=1,-1,-1,-1&p='+pathdmn+'&re='+encodeURIComponent(logurl);
                        logview.push(logABtest);

                    }
                } catch (e) {
                }


                content += `
                    <div class="carousel__item">
                    <div class="carousel__item--image">
                        <a  href="${logurl}" target="_blank" rel="nofollow"><img class="item__image" src="${item[arrxepxong[i]].image_3_2}" alt="${item[arrxepxong[i]].title}"></a>
                    </div>
                    <div class="carousel__item--text">
                             <h5 class="item__title">${item[arrxepxong[i]].title.length > 20 ? item[arrxepxong[i]].title.slice(0, 21) + '...' : item[arrxepxong[i]].title}</h5>
                        <p class="item__detail">${item[arrxepxong[i]].desc.length > 65 ? item[arrxepxong[i]].desc.slice(0, 66) + '...' : item[arrxepxong[i]].desc}</p>
                    </div>
                    <div class="carousel__item--button"><button class="btn__item"><a class="btn__text" href="${logurl}" target="_blank">TÌM HIỂU NGAY</a></button></div>
                </div>
                    `
                header = `<div id="box__tuThuoc">
                    <div class="box" >
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
                                <div class="content__border">
                
                                </div>
                                <div class="content__banner">
                                   <div id="bannervideo"></div>
                                </div>
                                <div class="content__border">
                
                                </div>
                            </div>
                            <div class="control">
                            <ul class="control__container">
                            </ul>
                        </div>
                            <div class="box__carousel">
                
                                <div class="carousel__container">
                                    ${content}
                                </div>
                            </div>
                            <div class="box__note">
                                <div class="note__content">
                                    <p class="note__text">Khuyến cáo: <a class="note__text--small">Sản phẩm này không phải là thuốc và không có tác dụng thay thế thuốc chữa bệnh</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>y
                `;
            };


            html = header;
            return html;
        }


        function sendLog() {
            var img = [];
            for (var o = 0; o < logview.length; o++) {
                img[o] = new Image();
                img[o].src = logview[o];
            }
        }
        var timeoutTime;

        //chua hieu
        var timeoutsendLog = function () {
            if (!chkSendLog && parent.checkAvaiBanHtml5('adnzone_' + zoneid)) {
                chkSendLog = true;
                sendLog();
                if (timeoutTime) { clearTimeout(timeoutTime) }
            }
            else {
                timeoutTime = setTimeout(function () {
                    timeoutsendLog();
                }, 500);
            }
        };

        var chkSendLog = false;
        document.write(`${render()}`);
        document.close();


        //can test 
        try {
            if (typeof (item[arrxepxong[0]].ext) != 'undefined' && item[arrxepxong[0]].ext != null && item[arrxepxong[0]].ext != '') {
                document.getElementById("adm_sponsor_box").addEventListener("click", senLogABtest);
                function senLogABtest() {
                    var logurlab = dmLog + '/ab?dmn=' + encodeURIComponent(document.domain) + '&h=' + item[arrxepxong[0]].ext.hash + '&d=1,-1,-1,-1&p=' + pathdmn + '&r=' + Math.random() + '&zid=' + this.zoneid;
                    var img = new Image();
                    img.src = logurlab;
                }
            }
        } catch (e) {
        }


        var css = `@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&family=Roboto:wght@300;400;500;700&display=swap");
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
          margin-bottom: 15px;
        }
        .box .box__content .content__border {
          width: 10px;
          height: 77px;
          background: radial-gradient(143.96% 215.88% at 45.83% 54.55%, rgba(11, 24, 27, 0.5) 0%, rgba(24, 121, 104, 0.5) 51.28%, rgba(0, 200, 164, 0.5) 100%), #20C8A7;
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
          bottom: 50px;
        }
        .box  .control {
          margin-bottom: 18px;
        }
        .box  .control .control__container {
          display: flex;
          list-style: none;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
        }
        .box .control .control__item {
          width: 6px;
          height: 6px;
          margin-right: 6px;
          border-radius: 50%;
          background-color: #cecece;
        }
        .box  .control .control__item.active {
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
          position: relative;
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
          position: absolute;
          bottom: 11px;
          left: 50%;
          transform: translateX(-50%);
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
          background: radial-gradient(143.96% 215.88% at 45.83% 54.55%, rgba(11, 24, 27, 0.5) 0%, rgba(24, 121, 104, 0.5) 51.28%, rgba(0, 200, 164, 0.5) 100%), #20C8A7;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        }
        .box .box__carousel .carousel__item--button .btn__text {
            text-decoration: none;
            color: white;
        }
        .box .box__note {
          width: 100%;
          height: 77px;
          background: radial-gradient(143.96% 215.88% at 45.83% 54.55%, rgba(11, 24, 27, 0.5) 0%, rgba(24, 121, 104, 0.5) 51.28%, rgba(0, 200, 164, 0.5) 100%), #20C8A7;
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
        }`;
        var bindcss = function (a) { var b = document.createElement("style"); b.type = "text/css"; document.getElementsByTagName("head")[0].appendChild(b); b.styleSheet ? b.styleSheet.cssText = a : b.appendChild(document.createTextNode(a)) };
        bindcss(css);
        var js = '(' + function () {
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
                                carousel.style.transform = 'translateX(-' + (cardWidth * index - 75) + 'px )';
                            } else {
                                carousel.style.transform = 'translateX(-' + cardWidth * index + 'px )';
                            }

                        });
                    });
                }
                function carouselAuto() {
                    activeElenment()
                    slider.querySelectorAll('.control__item').forEach((item, index) => {
                        if (index === current) {
                            item.classList.add('active')
                        }
                    })
                    if (current === numberItem - 1) {
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
            carouselBox('box__tuThuoc')
        } + ')()'
        var loadJs = function (js) {
            var s = document.createElement('script');
            s.type = 'text/javascript';
            var code = js;
            try {
                s.appendChild(document.createTextNode(code));
                document.body.appendChild(s);
            } catch (e) {
                s.text = code;
                document.body.appendChild(s);
            }

        }
        loadJs(js)

        
        
        if (!chkSendLog && parent.checkAvaiBanHtml5('adnzone_' + zoneid)) {
            chkSendLog = true;
            sendLog();
        } else {
            timeoutsendLog();
        }


        var boxsponsor = document.getElementById("adx_sponor_11_7rkzqw");

        // set height cho sponsor
        var fnheight = function () {
            var heightofboxsponsor = boxsponsor.clientHeight + 4;
            if (parent.document.getElementById(admid)) {
                parent.document.getElementById(admid).style.height = heightofboxsponsor + 'px';
            };
            if (heightofboxsponsor < 100) {
                window.setTimeout(function () {
                    fnheight();
                }, 500);
            }

        };
        fnheight();
        (function () {
            parent.document.getElementById("adnzone_" + this.zoneid).children[0].style.width = "100%";
        })()
    }
};