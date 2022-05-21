function AdmZones_adxzone() {
    var aThis = this;
    var core_ecom;
    this.zoneid = -1;
    this.logo = true;
    this.rand_limit = 3;
    this.ItemsShow = [];
    this.logosp ={};
    this.ItemsRandom = [];
    this.numberStop = 1;
    this.listCampaign = 0;
    this.formatName = "";
    var cTimeout;
    var cInterval;
    var boxWidth = 0;
    var widthLi = "150px";
    var zdata;
    this.wItem = 180;
    var databanner;
    var lastfame = false;
    var _checkBannerintro=false;



    var dmCore ='//media1.admicro.vn';
    var dmAdi = '//adi.admicro.vn';
    try{
        if(typeof(admerrorload)!= 'undefined' && parent.admerrorload == true){
           dmCore = '//static.contineljs.com';
           dmAdi = '//cdnstoremedia.com';
        }        
    }catch(e){

    }

    this.CreateStyleSheet = function() {
        // var css = 'body{margin:0;padding:0}#adxzone_ecom,#adxzone_ecom *{box-sizing:border-box}#adxzone_ecom{margin:0 auto;font-family:tahoma;font-size:13px;border:1px solid #ffb74d;position:relative;padding:11px 28px;background:#fdfdfe;text-align:left;width:'+boxWidth+'px;height:250px}#adxzone_ecom .adxzone_ecom_header{height:34px;margin-bottom:20px;display: table;margin: 0 auto}#adxzone_ecom .adxzone_ecom_logohead{height:35px;border:0;float:left;float:right}#adxzone_ecom .adxzone_ecom_header span{float:left;white-space:nowrap;margin-bottom:20px;font-family:arial;color:#333;font-weight:700;font-size:16px;height:34px;line-height:34px}#adxzone_ecom .adxzone_ecom_zonewrap{margin-top:15px; max-height:250px;position:relative}#adxzone_ecom .adxzone_ecom_listitem{width:100%;}#adxzone_ecom .adxzone_ecom_item{float:left;width:'+aThis.wItem+'px;position:relative;cursor:pointer;}#adxzone_ecom .adxzone_ecom_item:after{content:"";position:absolute;top:0;right:0;background:url('+dmAdi+'/adx/linebor.png) center center no-repeat;width:2px;height:198px}#adxzone_ecom .adxzone_ecom_item:last-child:after{display:none}#adxzone_ecom .adxzone_ecom_next_left,#adxzone_ecom .adxzone_ecom_next_right{top:95px;width:35px;height:38px;z-index:99;cursor:pointer;position:absolute}#adxzone_ecom .adxzone_ecom_item:nth-child('+aThis.rand_limit+'){margin-right:0}.adxzone_ecom_item:nth-child(1){margin-left:13px}' ;
        //     if(aThis.rand_limit < 4){
        //         css +='#adxzone_ecom .adxzone_ecom_next_left{left:-20px;top:45px;background:url('+dmAdi+'/adt/cpc/tvcads/files/images/ecom_150618/ButtonEcom2.png) center center/contain no-repeat;background-size: 130px 130px;}#adxzone_ecom .adxzone_ecom_next_right{right:-20px;top:45px;background:url('+dmAdi+'/adt/cpc/tvcads/files/images/ecom_150618/ButtonEcom1.png) center center/contain no-repeat;background-size: 130px 130px;}';
        //     }else{
        //         css +='#adxzone_ecom .adxzone_ecom_next_left{left:-20px;top:45px;background:url('+dmAdi+'/adt/cpc/tvcads/files/images/ecom_150618/ButtonEcom2.png) center center/contain no-repeat;background-size: 130px 130px;}#adxzone_ecom .adxzone_ecom_next_right{right:-20px;top:45px;background:url('+dmAdi+'/adt/cpc/tvcads/files/images/ecom_150618/ButtonEcom1.png) center center/contain no-repeat;background-size: 130px 130px;}';
        //     }
        //     css +='#adxzone_ecom .adxzone_ecom_control{display:table;margin:0 auto;}#adxzone_ecom .adxzone_ecom_control li{height:9px;width:9px;background-color:#e6e6e6;float:left;margin-left:5px;cursor:pointer;list-style-type:none;border-radius:9px}#adxzone_ecom .adxzone_ecom_img{width:100%;text-align:center;background:#fff}#adxzone_ecom .adxzone_ecom_thumb{border:0;margin:0 auto;width:140px;height:140px;background:#fff}#adxzone_ecom .adxzone_ecom_content{width:'+aThis.wItem+'px;margin-top:12px;float:left}#adxzone_ecom .adxzone_ecom_title span{color:#3b5998;font-weight:700;text-decoration:none;margin:3px 0 0;padding:0;font-family:arial;font-size:15px;line-height:19px}#adxzone_ecom .adxzone_ecom_price{margin-top: 5px;line-height:13px;padding:0;display:table;margin: 0 auto;}#adxzone_ecom .adxzone_ecom_priceCurr{color:#e43454;font-size:12px;margin-left:0;font-weight:700;float:left;}#adxzone_ecom .adxzone_ecom_priceOrig{color:grey;font-size:12px;text-decoration:line-through;-webkit-text-stroke:initial;margin-left:5px;float:left}#adxzone_ecom .adxzone_ecom_saleoff{width:100%;height:13px;line-height:12px;margin-top:8px;font-size:12px;font-family:tahoma;color:grey;margin-left:5px}#adxzone_ecom .adxzone_ecom_adv{margin-top:5px;font-size:12px;color:grey}#adxzone_ecom .adxzone_ecom_logo_short{position:absolute;top:0;right:0;height:17px;line-height:17px;overflow:hidden;display:block}#adxzone_ecom .adxzone_ecom_logo_short a{text-decoration:none}#adxzone_ecom #adxzone_ecom_zonebox_header_short{background:url('+dmAdi+'/adxecom/logoadx4ecom-1b.png) no-repeat;width:35px;height:17px;display:block;float:right}#adxzone_ecom #adxzone_ecom_zonebox_header_long{background:url('+dmAdi+'/adxecom/logoadx4ecom-1b-hover-bg.png) no-repeat;width:99px;height:17px;display:none}#adxzone_ecom .adxzone_ecom_zonebox_header_long_span{font-size:11px;color:#888;font-family:arial;padding-left:21px;line-height:17px}#adxzone_ecom .adxzone_ecom_zonebox_header_long_b{font-size:11px;color:#888;line-height:17px;font-weight:700}';

        var css = `
                    @charset "UTF-8";
                    body{
                        margin: 0;
                        padding: 0;
                    }
                    #adxzone_ecom{
                      border: 1px solid #e4c35a; 
                    }
                    #adxzone_prefix-980x250 .ecom-price-2:empty{
                        display:none;
                    }
                    #adxzone_prefix-980x250 .ecom-price-1:after {
                      position: relative;
                      top: -2px;
                      left: -3px;
                      font-size: 11px;
                      content: "đ";
                      text-decoration: underline;
                    }
                    #adxzone_prefix-980x250 .ecom-price-2:after {
                      position: relative;
                      top: -2px;
                      left: 1px;
                      font-size: 11px;
                      content: "đ";
                      text-decoration: underline;
                    }

                    #adxzone_prefix-980x250 {
                      width: 100%;
                      height: 248px;
                      font-family: tahoma, arial;
                      line-height: 18px;
                      position: relative;
                      overflow: hidden;
                    }
                    #adxzone_prefix-980x250 .ecom-Contain {
                      height: 100%;
                      padding-left: 10px;
                      border-left: 1px solid #e4c35a;
                      background: #fff;
                      overflow: hidden;
                    }
                    #adxzone_prefix-980x250 .ecom-Header {
                      background-color : #fff;
                      height: 50px;
                      width: 110px;
                      height: 250px;
                      display: inline-block;
                      margin: 0 auto;
                      float: left;
                    }
                    #adxzone_prefix-980x250 .ecom-Header a {
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      height: 250px;
                      width: 100%;
                    }
                    #adxzone_prefix-980x250 .ecom-Header img {
                      max-width: 100px; 
                      min-width: 90px;  
                      max-height: 200px;
                    }
                    #adxzone_prefix-980x250 ul {
                      list-style: none;
                      margin: 0;
                      padding: 0;
                    }
                    #adxzone_prefix-980x250 li {
                      margin: 0;
                      padding: 0;
                      display: inline-block;
                      float: left;
                    }
                    #adxzone_prefix-980x250 .ecom-Items {
                      width: 100%;
                      overflow: hidden;
                      background: #fff;
                    }
                    #adxzone_prefix-980x250 .ecom-Items li {
                      display: inline-block;
                      float: left;
                      width: ${widthLi};
                      padding-top: 5px;
                      margin-right: 10px;
                      position:relative;
                      height:230px; 
                    }
                    #adxzone_prefix-980x250 li:not(:last-child) { 
                      border-right: 1px solid #e7e7e7;  
                    }
                    #adxzone_prefix-980x250 li:last-child { 
                      margin-right:0px;
                      padding-right:0px;  
                    }
                    #adxzone_prefix-980x250 .ecom-Items a {
                      color: #000;
                      font-size: 12px;
                      text-decoration: none;
                      text-align: left;
                    }
                    #adxzone_prefix-980x250 .ecom-Items img {
                      width: 148px !important;
                      height: 148px !important;
                      margin-bottom: 5px;
                    }
                    #adxzone_prefix-980x250 .ecom-price-1 {
                      font-size: 14px;
                      font-weight: bold;
                      color: #e00000;
                      text-decoration: none;
                      display:block;
                    }
                    #adxzone_prefix-980x250 .ecom-price-2 {
                      font-size: 14px;
                      color: #000;
                      text-decoration: line-through;
                    }
                    #adxzone_prefix-980x250 .navigator-prev {
                      position: absolute;
                      top: 10px;
                      left: 180px;
                      height: 230px;
                      display: flex;
                      align-items: center;
                      width: 35px;
                      background-image: linear-gradient(to left, transparent, white);
                    }
                    #adxzone_prefix-980x250 .navigator-prev .pre {
                      display: block;
                      width: 35px;
                      height: 60px;
                      background: #fff;
                      border: 1px solid #e7e7e7;
                      border-left: none;
                      border-top-right-radius: 5px;
                      border-bottom-right-radius: 5px;
                      text-decoration: none;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      box-shadow: -1px -1px 8px rgba(0, 0, 0, 0.3), 2px 2px 5px rgba(0, 0, 0, 0.3);
                      font-size: 20px;
                      color: #000;
                      font-weight: bold;
                    }
                    #adxzone_prefix-980x250 .navigator-prev .pre:hover {
                      background: #fb8e2d;
                      color: #fff;
                      box-shadow: -1px -1px 8px rgba(251, 142, 45, 0.3), 2px 2px 5px rgba(251, 142, 45, 0.3);
                    }
                    #adxzone_prefix-980x250 .navigator-next {
                      position: absolute;
                      right: 1px;
                      top: 10px;
                      height: 230px;
                      background-image: linear-gradient(to right, transparent, white);
                      width: 70px;
                      display: flex;
                      align-items: center;
                      justify-content: flex-end;
                    }
                    #adxzone_prefix-980x250 .navigator-next .next {
                      width: 35px;
                      height: 60px;
                      background: #fff;
                      border: 1px solid #e7e7e7;
                      border-right: none;
                      border-top-left-radius: 5px;
                      border-bottom-left-radius: 5px;
                      text-decoration: none;
                      display: flex;
                      justify-content: center;
                      align-items: center;
                      box-shadow: -1px -1px 8px rgba(0, 0, 0, 0.3), 2px 2px 5px rgba(0, 0, 0, 0.3);
                      font-size: 20px;
                      color: #000;
                      font-weight: bold;
                    }
                    #adxzone_prefix-980x250 .navigator-next .next:hover {
                      background: #fb8e2d;
                      color: #fff;
                      box-shadow: -1px -1px 8px rgba(251, 142, 45, 0.3), 2px 2px 5px rgba(251, 142, 45, 0.3);
                    }
                    #adxzone_prefix-980x250 .ecom-discount{
                      position:absolute;
                      top:0px;
                      left:0px;
                      font-weight:bold;
                      color:#fff;
                      display:flex;
                      width:46px;
                      height:46px;
                      border-radius:50%;
                      background:red;
                      border:1px solid #fff;
                      justify-content:center;
                      align-items:center;
                      font-size:12px
                  }
                  #adxzone_prefix-980x250 .ecom-discount:after{
                      content: "%";
                  }
                  #adxzone_prefix-980x250 .ecom-discount:empty{
                      display:none;
                  }
                  #adxzone_prefix-980x250 .logo_ecom{
                      background:url(${dmAdi}/adx/adxlogo-2.png) no-repeat top left;
                      display:block;
                       width:35px;
                       height:20px;
                      z-index:9;
                       position:absolute;
                       top:0px;
                       right:0px;
                  }
                  #adxzone_prefix-980x250 .logo_ecom .txtlogo{
                      display:none;
                  }
                  #adxzone_prefix-980x250 .logo_ecom:hover{
                      text-decoration:none;
                      width:109px;
                      padding-left:10px;
                      background:url(${dmAdi}/adt/banners/nam2015/148/logo/adx/adxlogo-2-hover.png) no-repeat top left;
                  }
                  #adxzone_prefix-980x250 .logo_ecom:hover .txtlogo{
                      display:block;
                      font:11px tahoma,arial;
                       color:#9b9b9b;
                       font-weight:600;
                      padding-left:20px;
                      text-decoration:none;
                      line-height:17px;
                  }
                  .ecom-title{
                    text-overflow: ellipsis;
                    overflow: hidden;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    width: 100%;
                  }
                    /*# sourceMappingURL=980x250.css.map */
                  }


        `



        return css;
    };

    this.DrawCreateAdx = function() {
        var adxlinkhome = '//adx.admicro.vn/ecom?utm_source=Admicro&utm_medium='+document.domain+'&utm_campaign=adxzone_'+aThis.zoneid;
        var number = aThis.numberStop - 1;
        if(number === 0){
            number = aThis.listCampaign;
        }
        var html = '';
        html += '<style>'+aThis.CreateStyleSheet()+'</style>';
        html += '<div id="adxzone_ecom">';
        
        // if(aThis.logo){
        //     html += '<div class="adxzone_ecom_logo_short" onmouseover="parent.'+aThis.formatName + '_' + aThis.zoneid+'.hovers(this)" onmouseout="parent.'+aThis.formatName + '_' + aThis.zoneid+'.mouseouts(this)"> <a rel="nofollow" href="'+adxlinkhome+'" target="_blank"> <div id="adxzone_ecom_zonebox_header_short"></div><div id="adxzone_ecom_zonebox_header_long"><span class="adxzone_ecom_zonebox_header_long_span"><b class="adxzone_ecom_zonebox_header_long_b">AdX 4 Ecom</b></span></div></a> </div>';
        // }
        
        // html += '<div class="adxzone_ecom_header"> <img src="'+aThis.logosp.logo+'" class="adxzone_ecom_logohead"> </div>';

        // html += '<div class="adxzone_ecom_zonewrap"> <div class="adxzone_ecom_listitem" style="padding:0 0px;overflow:hidden">';

        

        html += `
                <div id="adxzone_prefix-980x250">
                `
        
        if (aThis.logo) {
                    html += 
                        `<a class="logo_ecom" href="${adxlinkhome}" target="_blank">
                            <span class="txtlogo">AdX 4 Ecom</span>
                        </a>` ; 
                }
        
        html += `
                    <!-- header box-->
                    <div class="ecom-Header">
                        <a rel="nofollow" target="_blank">
                            <img src="${aThis.logosp.logo}" border="0" />
                        </a>
                    </div>
                    <!---/header box--->

                    <div class="ecom-Contain" style="border-color:#e4c35a;">
                        <ul class="ecom-Items" id="adxzone_prefix-980x250_ul">
        `


        
        var textprice = function(price){
            var price = price.toString();
            var lengprice = price.length;
            if(lengprice <=6){
               var price1 = price.slice(lengprice-3,lengprice);
               var price2 = price.slice(0,lengprice-3); 
               price = price2 +"."+price1;
            }else{
                var price1 = price.slice(lengprice-3,lengprice);  
                var price2 = price.slice(lengprice-6,lengprice-3);
                var price3 = price.slice(0,lengprice-6);
                price = price3+"."+price2+"."+price1; 
            }
             
            return price;
        }


        for (var i = 0; i < aThis.rand_limit; i++) { 
            var Item = aThis.ItemsShow[i];
            var urlLogClick = core_ecom.logUrl(Item);

            var img = Item['src'],
                title = core_ecom.getSubString(Item['title'], 40),
                priceo = Item['priceo'],
                prices = Item['prices'],
                link = Item['link'],
                dsof = Item['dsof'],
                descr = '',
                flag = false,
                color = (typeof(Item['color']) == 'undefined' || Item['color'] === '') ? '#ffffff' : Item['color'],
                alt = title;
            if(Item['priceo'] == Item['prices']){
                prices = textprice(Item['prices']);
                priceo = "";
            }else{
                priceo = priceo == 0?'':textprice(priceo);
                prices = prices == 0?'':textprice(prices);
            }
            if(aThis.logosp.flag){
                descr = Item['descr'];
            }
            if(!aThis.logosp.flag && typeof(Item['descadv']) != 'undefined' && Item['descadv'] !== ''){
                flag = true;
                descr = Item['descadv'];
            }
            if(dsof < 5 && typeof(Item['dsof']) != 'undefined'){
                dsof='';
            }

            html+= `
                    <li>
                        <a href="" rel="nofollow" target="_blank" id="dxzone_ecom_${aThis.zoneid}_campaign_${aThis.numberStop}_click_${i}">
                            <img src="${img}" align="left" border="0" />
                            <div class="ecom-item-info">
                                <div class="ecom-title" title="${Item['title']}" alt="${Item['title']}">
                                    ${Item['title']}
                                </div>
                                <span class="ecom-price-1">
                                    ${prices}
                                </span>
                                <span class="ecom-price-2">${priceo}</span>
                            </div>
                        </a>
                        <div class="ecom-discount">${dsof}</div>
                    </li>
            `


            // html += '<div title="'+Item['title']+'" class="adxzone_ecom_item" id="dxzone_ecom_'+aThis.zoneid+'_campaign_'+aThis.numberStop+'_click_'+i+'"onmouseover="parent.'+aThis.formatName + '_' + aThis.zoneid+'.hovers_muangay('+i+')" onmouseout="parent.'+aThis.formatName + '_' + aThis.zoneid+'.mouseouts_muangay('+i+')" > '

            // if(dsof > 5 && typeof(Item['dsof']) != 'undefined' && Item['dsof'] != ''){
            //     html += '<div style="left:20px;top:2px; width: 45px;height: 45px;background-color: #e43454;position: absolute;border-radius: 30px;color: white;font-family:arial;font-size:14px;font-weight:600"><div style="margin: 13px 0px 0px 10px;">'+dsof+'%</div></div>';
            // }
            // html+= '<div id="adx_ecom_muangay_'+i+'" style="display:none; width: 80%;height: 60px;position: absolute;color: white;font-family:arial;font-size:15px;opacity: 0.7;bottom:50px;left: 12px;"><div style="margin: 20px 0px 0px 8px;background-color: black;width:140px;padding:10px 30px;opacity:1;">MUA NGAY</div></div>';

            // html +='<div class="adxzone_ecom_img">  <img src="'+img+'" class="adxzone_ecom_thumb" alt="'+title+'">  </div><div class="adxzone_ecom_content"> <div class="adxzone_ecom_title">  </div><div class="adxzone_ecom_price"> <span class="adxzone_ecom_priceCurr">'+prices+'</span><span class="adxzone_ecom_priceOrig"> '+priceo+'</span>';

            // html += '</div>';
            // html += '</div></div>';
        }
       // html += '</div><div class="adxzone_ecom_next_left" onclick="parent.'+aThis.formatName + '_' + aThis.zoneid+'.next_left()"></div><div class="adxzone_ecom_next_right"  onclick="parent.'+aThis.formatName + '_' + aThis.zoneid+'.next_right()"></div></div>';

       
       html+= `
            </ul>
                
            </div>

       `
// <div class="navigator-prev">
                   
//                 </div>
//                 <div class="navigator-next">
                   
//                 </div>
        html += '</div>';
        html = html.replace(/adxzone_ecom/gi, 'adxzone_ecom_' + aThis.zoneid);
        return html;
    };

    this.hovers = function(){
        var docZone = document.getElementById('adnzone_ifr_'+aThis.zoneid).contentWindow.document
        docZone.getElementById("adxzone_ecom_"+ aThis.zoneid+"_zonebox_header_short").style.display = "none";
        docZone.getElementById("adxzone_ecom_"+ aThis.zoneid+"_zonebox_header_long").style.display = "block";
    }
    this.mouseouts = function(){
        var docZone = document.getElementById('adnzone_ifr_'+aThis.zoneid).contentWindow.document
        docZone.getElementById("adxzone_ecom_"+ aThis.zoneid+"_zonebox_header_short").style.display = "block";
        docZone.getElementById("adxzone_ecom_"+ aThis.zoneid+"_zonebox_header_long").style.display = "none";
    }

    this.hovers_muangay = function(i){
        var docZone = document.getElementById('adnzone_ifr_'+aThis.zoneid).contentWindow.document;
        docZone.getElementById("adx_ecom_muangay_"+i).style.display = "block";
    }

    this.mouseouts_muangay = function(i){
        var docZone = document.getElementById('adnzone_ifr_'+aThis.zoneid).contentWindow.document;
        docZone.getElementById("adx_ecom_muangay_"+i).style.display = "none";
    }


    this.ifr = function () {
        try {
            var docZone = document.getElementById('adxzone_'+aThis.zoneid);
            var clientWidth = docZone.clientWidth;
            var outHtml = '<iframe id="adnzone_ifr_'+aThis.zoneid+'" scrolling="no" style="width: 100%; height:330px; border: none; overflow: hidden;"></iframe>';
            try {
                if (docZone) {
                    docZone.innerHTML = outHtml;
                }
            } catch (e) {}
        } catch (e) {}
    };
    this.loadFrame = function() {
        var output = aThis.DrawCreateAdx();
        try {
            var docZone = document.getElementById('adnzone_ifr_'+aThis.zoneid).contentWindow.document;
            try {
                if (docZone) {
                    docZone.write(output);
                    core_ecom.setClick(docZone,"dxzone_ecom_"+aThis.zoneid+"_campaign_"+aThis.numberStop+"_click");
                    core_ecom.logItemView();
                    docZone.close();
                }
            } catch (e) {}
        } catch (e) {}

        cInterval = setInterval(function() {
            if (core_ecom.checkBoxView()) {
                cTimeout = setTimeout(function () {
                    if (lastfame && _checkBannerintro) {
                        aThis.campaign();
                        aThis.loadFrameintro(databanner);
                    }else{
                        aThis.campaign();
                        aThis.loadFrame();
                    }
                },2000);
                clearInterval(cInterval);
            }
        }, 1000);

    };

    this.iconClick = function (number) {
        aThis.numberStop = number;
        clearInterval(cInterval);
        clearTimeout(cTimeout);
        aThis.campaign();
        aThis.loadFrame();
    };


    var campaign4 = function (arrItems,rand_limit,number) { 
        var rsCampaignItem = [];
        for (var i = 0; i < arrItems.length; i++) {
            if(number == 1){
                if (i >= (rand_limit * (number-1))  && i < (rand_limit * number)) { 
                    rsCampaignItem.push(arrItems[i]);
                }
            }else{
                if (i >= (rand_limit * (number-1) -1)  && i < (rand_limit * number)) { 
                  rsCampaignItem.push(arrItems[i]);
              }  
            } 
        }
        core_ecom.resetLog(); 
        return rsCampaignItem; 
    };

    this.campaign = function(){
        if(aThis.numberStop <= aThis.listCampaign){
            aThis.ItemsShow = campaign4(aThis.ItemsRandom,aThis.rand_limit,aThis.numberStop);
            aThis.logosp = core_ecom.logo(aThis.ItemsShow);
           // 
            if(aThis.numberStop == aThis.listCampaign){
              lastfame = true;
                aThis.numberStop = 1;
            }else{
                aThis.numberStop++;
            }
        }
    };

    this.next_left = function () { 
        if(aThis.numberStop == 2){
            aThis.numberStop = aThis.listCampaign;
        }else if(aThis.numberStop === 1){
            aThis.numberStop =  aThis.listCampaign - 1;
        }else{
            aThis.numberStop =  aThis.numberStop - 2;
        }
        clearInterval(cInterval);
        clearTimeout(cTimeout);
        aThis.campaign();
        aThis.loadFrame();
    };

    this.next_right = function () { 
          clearInterval(cInterval);
          clearTimeout(cTimeout);
          aThis.campaign(); console.log(aThis.numberStop,aThis.listCampaign)
          // if(aThis.numberStop == aThis.listCampaign){
          //   document.getElementById('adxzone_prefix-980x250_ul').style.marginLeft = "-75px"
          // }else{
            aThis.loadFrame();
          //}
          
        
    }

    this.init = function(cWidth){
        if(cWidth >= 970){
            aThis.rand_limit =5;
            boxWidth = "980px";
            widthLi = "18.5%";
            aThis.load();
        }
        if(cWidth < 970 && cWidth >= 610){
           aThis.rand_limit =3;
            boxWidth = "630px";
            widthLi = "31.5%";
            aThis.load(); 
        }
        if(cWidth < 610 && cWidth >= 491){
            aThis.rand_limit = 2;
            boxWidth = "456px";
            widthLi = "48%";
            aThis.load();
        }
        if(cWidth < 491){
            AdmLoadDefault('adxzone_' +aThis.zoneid);
            return false;
        }
    }

    this.getWidth = function () {
        var wBox = 0;
        var widthInterval = setInterval(function () {
            wBox = document.getElementById('adxzone_'+aThis.zoneid).clientWidth;
            if(wBox > 0){
                clearInterval(widthInterval);
                aThis.init(wBox)
            }
        },1000);
    };
    

    this.loadFrameintro = function(data){
        try {
        var adxlinkhome = '//adx.admicro.vn/ecom?utm_source=Admicro&utm_medium='+document.domain+'&utm_campaign=adxzone_'+aThis.zoneid;
        var html_logo = `<a class="adxzone_${aThis.zoneid}" href="${adxlinkhome}" target="_blank"><span class="txtlogo">AdX 4 Ecom</span><span></span></a>`;
        var css_logo = `<style type="text/css">#adnzone_510423{clear:both;text-align:left;margin:0 auto}.adxzone_${aThis.zoneid}{background:url(${dmAdi}/adx/adxlogo-2.png) no-repeat  top left;display:block; width:35px; height:20px;z-index:9; position:absolute; top:0px; right:0px;}.adxzone_${aThis.zoneid} .txtlogo{display:none;}.adxzone_${aThis.zoneid}:hover{box-sizing:content-box;text-decoration:none;width:109px;padding-left:10px;background:url(${dmAdi}/adt/banners/nam2015/148/logo/adx/adxlogo-2-hover.png) no-repeat top left;}.adxzone_${aThis.zoneid}:hover .txtlogo{box-sizing:content-box;display:block;font:11px tahoma,arial; color:#9b9b9b; font-weight:600;padding-left:16px;text-decoration:none;line-height:17px;}body{margin:0}</style>`;
        core_ecom.logviewbannerintro(data.data.bannerintro);

        var databannerintro = data.data.bannerintro.dataintro;
        var linkclick_intro = core_ecom.logclickintro(data.data.bannerintro);
        databannerintro = JSON.parse(databannerintro);
        
        var html_bannerintro = databannerintro['980x250']['script']+"?url="+encodeURIComponent(linkclick_intro);console.log(boxWidth);
        var script_margin = `<script>var ele=parent.document.getElementById('adxzone_${aThis.zoneid}').clientWidth;if(ele<1160) {document.body.style.marginLeft = "-"+(1160-ele)/2+"px"};console.log(ele)</script>`;
        if (boxWidth == "630px") {
            html_bannerintro = databannerintro['610x250']['script']+"?url="+encodeURIComponent(linkclick_intro);
            var script_margin = `<script>var ele=parent.document.getElementById('adxzone_${aThis.zoneid}').clientWidth;if(ele<660) {document.body.style.marginLeft = "-"+(660-ele)/2+"px"};console.log(ele)</script>`;
        }
        var script_checkhtml = `<script>var chkStatusBan=!0,idfhtml=null,admidchk="adxzone_${aThis.zoneid}";try{var arradmid=admid.split("_");admidchk=arradmid[0]+"_"+arradmid[1]}catch(a){}
function checkBanStartCanvas(a){if(!idfhtml){var b=document.getElementsByTagName("iframe");b&&(idfhtml=b[0].contentWindow)}if(idfhtml)try{var c=function(){var b=parent.document.getElementById(a);parent.VisSense(b).monitor({visible:function(){idfhtml.postMessage("start","*")},hidden:function(){idfhtml.postMessage("pause","*")}}).start()};"undefined"!=typeof parent.VisSense?c():parent._admloadJs("https://media1.admicro.vn/core/visen.js",function(){c()})}catch(d){}}
var admcall=function(a){try{(-1!=a.data.indexOf(admid)||-1!=a.origin.indexOf("secure-ds.serving")&&-1!=a.data.indexOf("complete_"))&&checkBanStartCanvas(admidchk)}catch(b){}};window.addEventListener?window.addEventListener("message",admcall,!1):window.attachEvent("onmessage",admcall,!1);</script>`;
        var output = `<script>(function(){var doc=document;var wd="100%";var hg=250;var url='${html_bannerintro}';doc.write('<ifr'+'ame id="xxx" src="'+url+'" width="'+wd+'" height="'+hg+'" frameborder="0" scrolling="no"></ifr'+'ame>${html_logo}');/*reponsive*/})();</script>`+css_logo+script_checkhtml+script_margin;
            var docZone = document.getElementById('adnzone_ifr_'+aThis.zoneid).contentWindow.document;
                if (docZone) {
                    docZone.write(output);
                    // core_ecom.setClick(docZone,"dxzone_ecom_"+aThis.zoneid+"_campaign_"+aThis.numberStop+"_click");
                    // core_ecom.logItemView();
                    docZone.close();
                }
        } catch (e) {console.log(e)}
        


        var loadframe2 = function () {
            try{
                var elementItems = document.getElementById("adxzone_" + aThis.zoneid);
                VisSense(elementItems).onPercentageTimeTestPassed(function() {
                    setTimeout(function(){
                        document.getElementById('adnzone_ifr_'+aThis.zoneid).style.opacity  = 0;
                        document.getElementById('adnzone_ifr_'+aThis.zoneid).style.transition ="all 1s"
                    }, 4000);
                    setTimeout(function(){
                        document.getElementById('adnzone_ifr_'+aThis.zoneid).style.opacity  = 1;
                        aThis.loadFrame();
                    }, 5000);
            }, {
                percentageLimit: .5,
                timeLimit: 500,
                interval: 100
            });
            }catch (e){console.log(e)}
        };

        if (typeof VisSense == 'function') {
            loadframe2();
        } else {
            _admloadJs(dmCore+'/core/visen.js', function(){
                loadframe2();
            })
        }
    }


    this.load = function () {
        core_ecom = new coreEcom(zdata);
        aThis.ItemsRandom = core_ecom.dataItem();
        if(aThis.ItemsRandom.length < aThis.rand_limit || aThis.ItemsRandom.length === 0){
            AdmLoadDefault('adxzone_' +aThis.zoneid);
            return false;
        }
        if (typeof(zdata['ext']) != 'undefined' && zdata['ext'] != null && typeof(zdata['ext']['logo']) != 'undefined' && zdata['ext']['logo'] != null && zdata['ext']['logo'] == 1) {
            aThis.logo = false;
        }
        aThis.listCampaign = Math.floor(aThis.ItemsRandom.length/aThis.rand_limit);
        aThis.ifr();
        aThis.campaign();
        // aThis.loadFrame();
        var checkBannerintro;

        if (zdata.data && zdata.data.bannerintro && zdata.data.bannerintro.dataintro) {
            checkBannerintro = JSON.parse(zdata.data.bannerintro.dataintro);
          if (boxWidth == "980px") {

                if (checkBannerintro['980x250']!= undefined) {
                  _checkBannerintro = true;
                    setTimeout(function(){aThis.loadFrameintro(zdata);}, 500);
                }else{
                    setTimeout(function(){aThis.loadFrame();}, 500);
                }
          }else{
                if (checkBannerintro['610x250']!= undefined) {
                  _checkBannerintro = true;
                    setTimeout(function(){aThis.loadFrameintro(zdata);}, 500);
                }else{
                    setTimeout(function(){aThis.loadFrame();}, 500);
                }
          }
        }else{
          setTimeout(function(){aThis.loadFrame();}, 500);
        }
        


        var docZone = document.getElementById('adnzone_ifr_'+aThis.zoneid).contentWindow.document;
        var c_item = docZone.getElementsByClassName('adxzone_ecom_'+aThis.zoneid+'_item');
        var itemHeigh = 0;
        for (var i = 0; i < c_item.length;i++){
            var b_heigh = c_item[i].clientHeight;
            if(b_heigh > 0){
                itemHeigh = b_heigh;
            }
        }
        document.getElementById('adnzone_ifr_'+aThis.zoneid).style.height = itemHeigh + 250 + 'px';
    };

    this.OnLoaded = function(data) {
        if (typeof(data['ext']) != 'undefined' && data['ext'] != null && typeof(data['ext']['logo']) != 'undefined' && data['ext']['logo'] != null && data['ext']['logo'] == 1) {
          dmCore = '//static.contineljs.com';
          dmAdi = '//cdnstoremedia.com';
      }
        var initLoad = function () {
            aThis.zoneid = data['ZONEID'];
            aThis.formatName = data['formatName'];
            zdata = data;
            databanner = data;
            aThis.getWidth();
        };
        var ele=document.querySelector('script[src*="sspcallbackgg.js"]');
        if(ele){
            if(typeof coreEcom == 'undefined'){
                _admloadJs(dmCore+'/core/ecom/core_ecom_gg.js',function () {initLoad();})
            }else{
                initLoad();
            }
        }else{
             if(typeof coreEcom == 'undefined'){
                _admloadJs(dmCore+'/core/ecom/core_ecom.js',function () {initLoad();})
            }else{
                initLoad();
            }
        }
    }
}
