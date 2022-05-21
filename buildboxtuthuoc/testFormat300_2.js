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
    var cInterval,cTimeout;
    var databanner;
    var lastfame = false;
    var _checkBannerintro=false;


    var dmCore ='//media1.admicro.vn';
    var dmAdi = '//adi.admicro.vn';

    //console.log(this.logo);
    try{
        if(typeof(admerrorload)!= 'undefined' && parent.admerrorload == true){
           dmCore = '//static.contineljs.com';
           dmAdi = '//cdnstoremedia.com';
        }        
    }catch(e){

    }

    this.CreateStyleSheet = function() {
        var css=`
        body{
            margin:0;
        }
        
        #adxzone_prefix-320x250{
            border:1px solid #e7e7e7;
            width:300px;
            box-sizing:border-box;
            font-size:12px;
            font-family:tahoma,arial;
            color:#222;
            line-height:18px;
            background-color: #fff;
        }



        #adxzone_prefix-320x250.ecom-Contain{
            position:relative
        }

        #adxzone_prefix-320x250 .ecom-Header{
            height:42px;
            width:100%;
            display:flex;
            width:auto;
            align-items:center;
            justify-content:center;
            border-bottom:1px solid #e7e7e7;
        }
        #adxzone_prefix-320x250 .ecom-Header img{
            max-height:38px;
            max-width:298px
        }
        #adxzone_prefix-320x250 .ecom-Items li:after{
            content:"";
            clear:both;
            display:block
        }
        #adxzone_prefix-320x250 .ecom-price-1{
            font-size:14px;
            font-weight:bold;
            color:#e00000;
            text-decoration:none;
            width:150px;
            display:block
        }
        #adxzone_prefix-320x250 .ecom-price-1:empty{
            display:none
        }
        #adxzone_prefix-320x250 .ecom-price-1:after{
            position:relative;
            top:-4px;
            left:1px;
            font-size:11px;
            content:"đ";
            text-decoration:underline
        }
        #adxzone_prefix-320x250 .price0:after{
            display:none;
        }
        #adxzone_prefix-320x250 .ecom-price-2{
            font-size:14px;
            color:#222;
            text-decoration:line-through
        }
        #adxzone_prefix-320x250 .ecom-price-2:empty{
            display:none
        }
        #adxzone_prefix-320x250 .ecom-price-2:after{
            position:relative;
            top:-2px;
            left:0;
            font-size:11px;
            content:"đ";
            text-decoration:underline
        }
        #adxzone_prefix-320x250 .ecom-Items{
            list-style:none;
            padding:10px;
            display:block;
            clear:both;
            margin:0
        }
        #adxzone_prefix-320x250 .ecom-Items img{
            width:120px !important;
            height:120px !important
        }
        #adxzone_prefix-320x250 .ecom-Items .ecom-item-img{
            display:inline-block
        }
        #adxzone_prefix-320x250 .ecom-Items .ecom-item-info{
            display:inline-block;
            float:right;
            width:150px
        }
        #adxzone_prefix-320x250 .ecom-Items .ecom-title{
            font-size:12px;
            color:#222;
            margin-bottom:20px;
            line-height:18px
        }
        #adxzone_prefix-320x250 .ecom-Items li:first-child{
            position:relative;
            border-bottom:1px solid #e7e7e7;
            margin-bottom:10px;
            padding:0 0 10px 0
        }
        #adxzone_prefix-320x250 .ecom-Items li:first-child .ecom-logo{
            position:absolute;
            bottom:20px;
            right:0;
            width:100px;
            display:flex;
            justify-content:center;
            align-items:center
        }
        #adxzone_prefix-320x250 .ecom-Items li:first-child .ecom-logo img{
            width:auto !important;
            max-width:100px !important;
            height:30px !important
        }
        #adxzone_prefix-320x250 .ecom-Items li:not(:first-child){
            display:inline-block;
            float:left;
            width:128px;
            font-size:12px;
            position:relative       
        }
        #adxzone_prefix-320x250 .ecom-Items li:not(:first-child) .ecom-price-1{
            font-size:12px
        }
        #adxzone_prefix-320x250 .ecom-Items li:not(:first-child) .ecom-item-info{
            display:inline-block;
            float:right;
            width:79px
        }
        #adxzone_prefix-320x250 .ecom-Items li:not(:first-child) .ecom-price-2{
            font-size:12px
        }
        #adxzone_prefix-320x250 .ecom-Items li:not(:first-child) .ecom-title{
            display:none
        }
        #adxzone_prefix-320x250 .ecom-Items li:not(:first-child) img{
            width:44px !important;
            height:44px !important
        }
        #adxzone_prefix-320x250 .ecom-Items li:last-child{
            float:right;
            margin-left:10px;
            border-left:1px solid #e7e7e7;
            padding-left:10px;
            margin-bottom:0
        }
        #adxzone_prefix-320x250 .ecom-Items li:last-child .ecom-logo{
            bottom:0
        }
        #adxzone_prefix-320x250 .ecom-Items a{
            text-decoration:none
        }
        #adxzone_prefix-320x250 .ecom-Items:after{
            display:block;
            content:"";
            clear:both
        }
        #adxzone_prefix-320x250 .hover_item{
            position:absolute;
            opacity :0.6;
            cursor: pointer;
            z-index:99999;
            width:100px;
            height:100px;
            left:20px;
            top:60px;
            display:none
        }
        #adxzone_prefix-320x250 .hover_item img{
            display:block;
            margin: 0 auto;
            width:100px;
            height:100px;
        }

        #adxzone_prefix-320x250 .loading {
                -webkit-animation: rotation 2s infinite linear;
        }

        #adxzone_prefix-320x250 .ecom-discount{
            position:absolute;
            top:-5px;
            left:-5px;
            font-weight:bold;
            color:#fff;
            display:flex;
            width:40px;
            height:40px;
            border-radius:50%;
            background:red;
            border:1px solid #fff;
            justify-content:center;
            align-items:center;
            font-size:12px
        }
        #adxzone_prefix-320x250 .ecom-discount:after{
            content: "%";
        }
        #adxzone_prefix-320x250 .ecom-discount:empty{
            display:none;
        }

        @-webkit-keyframes rotation {
                from {
                        -webkit-transform: rotate(0deg);
                }
                to {
                        -webkit-transform: rotate(359deg);
                }
        }

        #adxzone_prefix-320x250 .logo_ecom{
            background:url(${dmAdi}/adx/adxlogo-2.png) no-repeat top left;
            display:block;
             width:35px;
             height:20px;
            z-index:9;
             position:absolute;
             top:0px;
             right:0px;
        }
        #adxzone_prefix-320x250 .logo_ecom .txtlogo{
            display:none;
        }
        #adxzone_prefix-320x250 .logo_ecom:hover{
            text-decoration:none;
            width:109px;
            padding-left:10px;
            background:url(${dmAdi}/adt/banners/nam2015/148/logo/adx/adxlogo-2-hover.png) no-repeat top left;
        }
        #adxzone_prefix-320x250 .logo_ecom:hover .txtlogo{
            display:block;
            font:11px tahoma,arial;
             color:#9b9b9b;
             font-weight:600;
            padding-left:20px;
            text-decoration:none;
            line-height:17px;
        }

        /*# sourceMappingURL=320x250.css.map */

        `;
        return css;
    };

    
    var textprice = function(price){
            var price = price.toString();
            var lengprice = price.length;
            if(lengprice <=6 && lengprice >3){
               var price1 = price.slice(lengprice-3,lengprice);
               var price2 = price.slice(0,lengprice-3); 
               price = price2 +"."+price1;
            }else if(lengprice >6){
                var price1 = price.slice(lengprice-3,lengprice);  
                var price2 = price.slice(lengprice-6,lengprice-3);
                var price3 = price.slice(0,lengprice-6);
                price = price3+"."+price2+"."+price1; 
            }
             
            return price;
        }

    this.DrawCreateAdx = function() { var adxlinkhome = '//adx.admicro.vn/ecom?utm_source=Admicro&utm_medium='+document.domain+'&utm_campaign=adxzone_'+aThis.zoneid; 
    var html = ''; 
    html +='<style>'+aThis.CreateStyleSheet()+'</style>';  
    html+=  ` 
    <div id="adxzone_prefix-320x250"> 
        <div class="ecom-Contain"> 
        <!-- header box-->
            <div class="ecom-Header"> 
                <a rel="nofollow" target="_blank"> 
                    <img src="${aThis.logosp.logo}" border="0" /> 
                </a> 
            </div> 
        <div class="hover_item" id="hover_quay">
            <image class="loading" width="100px" height="100px" src="${dmAdi}/adt/cpc/tvcads/files/images/ecom_300818/Gear.png">
        </div>
        `
        if (aThis.logo) {
            html += 
                `<a class="logo_ecom" href="${adxlinkhome}" target="_blank">
                    <span class="txtlogo">AdX 4 Ecom</span>
                </a>` ; 
        }

        

    html +=    `
        <ul class="ecom-Items" id="myList">

        `



        for (var i = 0; i < aThis.rand_limit; i++) {
            var Item = aThis.ItemsShow[i];
            var urlLogClick = core_ecom.logUrl(Item);
            var img = Item['src'],
                title = core_ecom.getSubString(Item['title'], 80),
                desc = core_ecom.getSubString(Item['desc'], 86),
                priceo = Item['priceo'],
                prices = Item['prices'],
                dsof = Item['dsof'],
                descr = '',
                flag = false,
                alt = title,
                color = (typeof(Item['color']) == 'undefined' || Item['color'] === '') ? '#ffffff' : Item['color'];
            if(Item['priceo'] == Item['prices']){
                prices = textprice(Item['prices']);
                priceo = '';
            }else{
                priceo = priceo == 0?'':textprice(priceo);
                prices = prices == 0?'':textprice(prices);
            }
            if (Item['prices'] == 0) {
                prices = "Giá liên hệ";
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

                if(i==0){  
                    html+= `
                        <li id="adxzone_ecom_${aThis.zoneid}_bigitem" >
                            <a href="" id="dxzone_ecom_${aThis.zoneid}_campaign_${aThis.numberStop}_click_${i}" rel="nofollow" target="_blank" datai="${i}">
                                <img src="${img}" align="left" border="0" />
                                <div class="ecom-item-info">
                                     <div class="ecom-title" title="${Item['title']}">
                                        ${title}
                                    </div>`;
                    if (prices == "Giá liên hệ") {
                        html+=`<span class="ecom-price-1 price0">${prices}</span>`;
                    }else{

                        html+=`<span class="ecom-price-1">${prices}</span>`;
                    }
                    html+=`
                                    <span class="ecom-price-2">${priceo}</span>
                                </div>
                            </a>
                            <div class="ecom-discount">${dsof}</div>
                        </li>
                    `   
                }else{
                        html+= `
                            <li id="li${i}" onmouseover="parent.${aThis.formatName}_${aThis.zoneid}.hovers_item(${i})" onmouseout="parent.${aThis.formatName}_${aThis.zoneid}.mouserout_item(${i})">
                                <a href="" id="dxzone_ecom_${aThis.zoneid}_campaign_${aThis.numberStop}_click_${i}" rel="nofollow" target="_blank" datai="${i}">
                                    <img src="${img}" align="left" border="0" />
                                    <div class="ecom-item-info">
                                         <div class="ecom-title">
                                            ${title}
                                        </div>
                                        `;
                    if (prices == "Giá liên hệ") {
                        html+=`<span class="ecom-price-1 price0">${prices}</span>`;
                    }else{

                        html+=`<span class="ecom-price-1">${prices}</span>`;
                    }
                    html+=`
                                        <span class="ecom-price-2">${priceo}</span>
                                    </div>
                                </a>
                            </li>
                        `
                }    
        }
        html+= `            
                    </ul>
                    <!-- /listing item product-->
                </div>
            </div>

        `
        return html;
    };

    var renderItemBig = function(item){
            var item;
            var html_bigitem='';
            var Item = aThis.ItemsShow[item];
            var img = Item['src'],
                title = core_ecom.getSubString(Item['title'], 70),
                desc = core_ecom.getSubString(Item['desc'], 86),
                priceo = Item['priceo'],
                prices = Item['prices'],
                dsof = Item['dsof'],
                descr = '',
                flag = false,
                alt = title,
                color = (typeof(Item['color']) == 'undefined' || Item['color'] === '') ? '#ffffff' : Item['color'];
            if(Item['priceo'] == Item['prices']){
                //prices = core_ecom.formatIntNumber(Item['prices']);
                prices = textprice(Item['prices']);
                priceo = '';
            }else{
                priceo = priceo == 0?'':textprice(priceo);
                prices = prices == 0?'':textprice(prices);
            }
            if (Item['prices'] == 0) {
                prices = "Giá liên hệ";
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
            
            html_bigitem+=`
                            <a href="" id="dxzone_ecom_big_${aThis.zoneid}_campaign_${aThis.numberStop}_click_${item}" rel="nofollow" target="_blank" datai="${item}">
                                <img src="${img}" align="left" border="0" />
                                <div class="ecom-item-info">
                                     <div class="ecom-title" title="${Item['title']}">
                                        ${title}
                                    </div>
                                    `;
                    if (prices == "Giá liên hệ") {
                        html_bigitem+=`<span class="ecom-price-1 price0">${prices}</span>`;
                    }else{

                        html_bigitem+=`<span class="ecom-price-1">${prices}</span>`;
                    }
                    html_bigitem+=`
                                    <span class="ecom-price-2">${priceo}</span>
                                </div>
                            </a>
                            <div class="ecom-discount">${dsof}</div>
                            </div>
                        
        ` 

           return html_bigitem;

        }


    this.hovers = function(){
        var docZone = document.getElementById('adnzone_ifr_'+aThis.zoneid).contentWindow.document;
        docZone.getElementById("adxzone_ecom_"+ aThis.zoneid+"_zonebox_header_short").style.display = "none";
        docZone.getElementById("adxzone_ecom_"+ aThis.zoneid+"_zonebox_header_long").style.display = "block";
    }
    this.mouseouts = function(){
        var docZone = document.getElementById('adnzone_ifr_'+aThis.zoneid).contentWindow.document
        docZone.getElementById("adxzone_ecom_"+ aThis.zoneid+"_zonebox_header_short").style.display = "block";
        docZone.getElementById("adxzone_ecom_"+ aThis.zoneid+"_zonebox_header_long").style.display = "none";
    }

    this.hovers_item = function(i){
        var docZone = document.getElementById('adnzone_ifr_'+aThis.zoneid).contentWindow.document;
        var iBig = docZone.getElementById("adxzone_ecom_"+aThis.zoneid+"_bigitem").querySelector('A').getAttribute("datai");
        if(iBig != i){
           // docZone.getElementById("hover_quay").style.display = "block"; 
          //  docZone.getElementById("hover_quay").style.transform = "rotate(360deg)";    
            setTime = setTimeout(function() {
                docZone.getElementById("adxzone_ecom_"+aThis.zoneid+"_bigitem").innerHTML = renderItemBig(i);
                core_ecom.setClick(docZone,"dxzone_ecom_big_"+aThis.zoneid+"_campaign_"+aThis.numberStop+"_click");
              // docZone.getElementById("hover_quay").style.display = "none";
            }, 400);
        }
        
    }

     this.mouserout_item = function(i){
            var docZone = document.getElementById('adnzone_ifr_'+aThis.zoneid).contentWindow.document; 
            try{
                clearTimeout(setTime);
            }catch(e){}
  
           // docZone.getElementById("hover_quay").style.display = "none";
     }

    // this.hover_item = function(x){
    //     var docZone = document.getElementById('adnzone_ifr_'+aThis.zoneid).contentWindow.document;
    //     var change1=[0,x];
    //     var divCha = docZone.getElementById("myList"); console.log(divCha);
    //     var divCon = divCha.querySelectorAll('li')[x];console.log(divCon);
    //     function swap(x){
    //         function swapDiv() { 
    //            var ele=divCha.querySelectorAll('li');
    //             var item = ele[change1[0]];
    //             var item1 = ele[x];
                
    //             console.log(item,item1);
    //             var cln = item.cloneNode(true);
    //             var cln1 = item1.cloneNode(true);

    //             divCha.replaceChild(cln,item1);
    //             divCha.replaceChild(cln1,item);  
    //         }

    //         var setTime;
    //         divCon.addEventListener("mouseover", function() {   
    //             setTime = setTimeout(function() {
    //                 swapDiv();
    //             }, 2000);
    //         }, false);

    //         divCon.addEventListener("mouseout", function() {   
    //             clearTimeout(setTime);
    //         }, false);

    //     }
    //     divCha.addEventListener("mouseover", function() { 
    //                 swap(x);
    //         }, false);
    // }

    this.ifr = function () {
        try {
            var docZone = document.getElementById('adxzone_'+aThis.zoneid);
            var outHtml = '<iframe id="adnzone_ifr_'+aThis.zoneid+'" scrolling="no" style="width:300px; height:250px; border: none; overflow: hidden;"></iframe>';
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

    this.loadFrameintro = function(){
        try {
        var adxlinkhome = '//adx.admicro.vn/ecom?utm_source=Admicro&utm_medium='+document.domain+'&utm_campaign=adxzone_'+aThis.zoneid;
        var html_logo = `<a class="adxzone_${aThis.zoneid}" href="${adxlinkhome}" target="_blank"><span class="txtlogo">AdX 4 Ecom</span><span></span></a>`;
        var css_logo = `<style type="text/css">#adnzone_510423{clear:both;text-align:left;margin:0 auto}.adxzone_${aThis.zoneid}{background:url(${dmAdi}/adx/adxlogo-2.png) no-repeat  top left;display:block; width:35px; height:20px;z-index:9; position:absolute; top:0px; right:0px;}.adxzone_${aThis.zoneid} .txtlogo{display:none;}.adxzone_${aThis.zoneid}:hover{box-sizing:content-box;text-decoration:none;width:109px;padding-left:10px;background:url(${dmAdi}/adt/banners/nam2015/148/logo/adx/adxlogo-2-hover.png) no-repeat top left;}.adxzone_${aThis.zoneid}:hover .txtlogo{box-sizing:content-box;display:block;font:11px tahoma,arial; color:#9b9b9b; font-weight:600;padding-left:16px;text-decoration:none;line-height:17px;}body{margin:0}</style>`;
        core_ecom.logviewbannerintro(databanner.data.bannerintro);

        var databannerintro = databanner.data.bannerintro.dataintro;
        var linkclick_intro = core_ecom.logclickintro(databanner.data.bannerintro);
        databannerintro = JSON.parse(databannerintro);
        
        var html_bannerintro = databannerintro['300x250']['script']+"?url="+encodeURIComponent(linkclick_intro);
        var script_checkhtml = `<script>var chkStatusBan=!0,idfhtml=null,admidchk="adxzone_${aThis.zoneid}";try{var arradmid=admid.split("_");admidchk=arradmid[0]+"_"+arradmid[1]}catch(a){}
function checkBanStartCanvas(a){if(!idfhtml){var b=document.getElementsByTagName("iframe");b&&(idfhtml=b[0].contentWindow)}if(idfhtml)try{var c=function(){var b=parent.document.getElementById(a);parent.VisSense(b).monitor({visible:function(){idfhtml.postMessage("start","*")},hidden:function(){idfhtml.postMessage("pause","*")}}).start()};"undefined"!=typeof parent.VisSense?c():parent._admloadJs("https://media1.admicro.vn/core/visen.js",function(){c()})}catch(d){}}
var admcall=function(a){try{(-1!=a.data.indexOf(admid)||-1!=a.origin.indexOf("secure-ds.serving")&&-1!=a.data.indexOf("complete_"))&&checkBanStartCanvas(admidchk)}catch(b){}};window.addEventListener?window.addEventListener("message",admcall,!1):window.attachEvent("onmessage",admcall,!1);</script>`
        var output = `<script>(function(){var doc=document;var wd=300;var hg=250;var url='${html_bannerintro}';doc.write('<ifr'+'ame id="xxx" src="'+url+'" width="'+wd+'" height="'+hg+'" frameborder="0" scrolling="no"></ifr'+'ame>${html_logo}');/*reponsive*/})();</script>`+css_logo+script_checkhtml;
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

    this.campaign = function(){
        if(aThis.numberStop <= aThis.listCampaign){
            aThis.ItemsShow = core_ecom.campaign(aThis.ItemsRandom,aThis.rand_limit,aThis.numberStop);
            aThis.logosp = core_ecom.logo(aThis.ItemsShow);
            if(aThis.numberStop == aThis.listCampaign){
                aThis.numberStop = 1;
                lastfame = true;
            }else{
                aThis.numberStop++;
            }
        }
    };

    this.OnLoaded = function(data) {
        if (typeof(data['ext']) != 'undefined' && data['ext'] != null && typeof(data['ext']['logo']) != 'undefined' && data['ext']['logo'] != null && data['ext']['logo'] == 1) {
                dmCore = '//static.contineljs.com';
                dmAdi = '//cdnstoremedia.com';
            }
        var initLoad = function () {
            databanner = data;
            aThis.zoneid = data['ZONEID'];
            aThis.formatName = data['formatName'];
            if (typeof(data['ext']) != 'undefined' && data['ext'] != null && typeof(data['ext']['logo']) != 'undefined' && data['ext']['logo'] != null && data['ext']['logo'] == 1) {
                aThis.logo = false;
            }
            core_ecom = new coreEcom(data);
            aThis.ItemsRandom = core_ecom.dataItem();
            if(aThis.ItemsRandom.length < aThis.rand_limit || aThis.ItemsRandom.length === 0){
                AdmLoadDefault('adxzone_' +aThis.zoneid);
                return false;
            }
            aThis.listCampaign = Math.floor(aThis.ItemsRandom.length/aThis.rand_limit);
            aThis.campaign();
            aThis.ifr();
            
            // setTimeout(function(){aThis.loadFrame();}, 500);
            // aThis.loadFrame(); 
            var checkBannerintro;
            if (databanner.data && databanner.data.bannerintro && databanner.data.bannerintro.dataintro) {
                checkBannerintro = JSON.parse(databanner.data.bannerintro.dataintro);
                if (checkBannerintro['300x250']!= undefined) {
                    _checkBannerintro = true;
                    setTimeout(function(){aThis.loadFrameintro();}, 500);
                }else{
                    setTimeout(function(){aThis.loadFrame();}, 500);
                }
            }else{
                setTimeout(function(){aThis.loadFrame();}, 500);
            }
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
