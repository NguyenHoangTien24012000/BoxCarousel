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
        #adxzone_prefix-brand{
            border:1px solid #e7e7e7;
            width:300px;
            box-sizing:border-box;
            font-size:12px;
            font-family:tahoma,arial;
            color:#222;
            line-height:18px;
            background-color: #fff;
        }
        #adxzone_prefix-brand .ecom-Header{
            height:75px;
            width:100%;
            display:flex;
            width:auto;
            align-items:center;
            justify-content:center;
            border-bottom:1px solid #e7e7e7;
        }
        #adxzone_prefix-brand .ecom-Header img{
            max-width:100%;
            max-height: 65px;
        }
        #adxzone_prefix-brand .ecom-Items{
            list-style:none;
            padding:0 5px 20px 5px;
            display:block;
            clear:both;
            margin:0;

        }
        #adxzone_prefix-brand .ecom-Items img{
            width:150px !important;
            height:150px !important
        }
        #adxzone_prefix-brand .ecom-Items .ecom-item-img{
            display:inline-block
        }
        #adxzone_prefix-brand .ecom-Items .ecom-item-info{
            display:inline-block;
            float:right;
            width:calc(100% - 155px);
        }
        #adxzone_prefix-brand .ecom-Items .ecom-title{
            font-size:12px;
            color:#222;
            margin-bottom:20px;
            line-height:18px;
            text-overflow: ellipsis;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 5;
            -webkit-box-orient: vertical;
            width: 100%;
        }
        #adxzone_prefix-brand .ecom-Items li{
            padding:10px 0;
            border-bottom:1px solid #e7e7e7;
            position:relative;
        }
        #adxzone_prefix-brand .ecom-Items li:last-child{
            border:0;
            padding:10px 0 0 0
        }
        #adxzone_prefix-brand .ecom-Items a{
            text-decoration:none
        }
        #adxzone_prefix-brand .ecom-Items li:after{
            content:"";
            clear:both;
            display:block
        }
        #adxzone_prefix-brand .ecom-price-1{
            font-size:14px;
            font-weight:bold;
            color:#e00000;
            text-decoration:none;
            width: 100%;
            display: block
        }
        #adxzone_prefix-brand .ecom-price-1:after{
            position:relative;
            top:-4px;
            left:1px;
            font-size:11px;
            content:"đ";
            text-decoration:underline
        }
        #adxzone_prefix-brand .ecom-price-2{
            font-size:14px;
            color:#222;
            text-decoration:line-through
        }
        #adxzone_prefix-brand .ecom-price-2:empty{
            display:none;
        }
        #adxzone_prefix-brand .ecom-price-2:after{
            position:relative;
            top:-2px;
            left:0;
            font-size:11px;
            content:"đ";
            text-decoration:underline
        }
        #adxzone_prefix-brand .ecom-discount{
            position:absolute;
            top:10;
            left:0;
            font-weight:bold;
            color:#fff;
            display:flex;
            width:46px;
            height:46px;
            border-radius:50%;
            background:red;
            box-shadow:rgba(255,255,255,0.3) 0 0 1px;       border:none;
            justify-content:center;
            align-items:center;
            font-size:12px
        }
        #adxzone_prefix-brand .ecom-discount:after{
            content:"%"
        }
        #adxzone_prefix-brand .ecom-discount:empty{
            display:none
        }


        #adxzone_prefix-brand .logo_ecom{
            background:url(${dmAdi}/adx/adxlogo-2.png) no-repeat top left;
            display:block;
             width:35px;
             height:20px;
            z-index:9;
             position:absolute;
             top:0px;
             right:0px;
        }
        #adxzone_prefix-brand .logo_ecom .txtlogo{
            display:none;
        }
        #adxzone_prefix-brand .logo_ecom:hover{
            text-decoration:none;
            width:109px;
            padding-left:10px;
            background:url(${dmAdi}/adt/banners/nam2015/148/logo/adx/adxlogo-2-hover.png) no-repeat top left;
        }
        #adxzone_prefix-brand .logo_ecom:hover .txtlogo{
            display:block;
            font:11px tahoma,arial;
             color:#9b9b9b;
             font-weight:600;
            padding-left:20px;
            text-decoration:none;
            line-height:17px;
        }
        /*# sourceMappingURL=300x600-brand.css.map */

        
        `;
        return css;
    };

    
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

    this.DrawCreateAdx = function() {
        var adxlinkhome = '//adx.admicro.vn/ecom?utm_source=Admicro&utm_medium='+document.domain+'&utm_campaign=adxzone_'+aThis.zoneid;
        var html = '';
        html += '<style>'+aThis.CreateStyleSheet()+'</style>'; 
        html+=`
            <div id="adxzone_prefix-brand">
                <div class="ecom-Contain">
                    <!-- header box-->
                    <div class="ecom-Header">
                        <a rel="nofollow" target="_blank">
                            <img src="${aThis.logosp.logo}" border="0" />
                        </a>
                    </div>
                    

                `
        if (aThis.logo) {
                    html += 
                        `<a class="logo_ecom" href="${adxlinkhome}" target="_blank">
                            <span class="txtlogo">AdX 4 Ecom</span>
                        </a>` ; 
                }
                
        html+=  `
                    <ul class="ecom-Items">

                `


        for (var i = 0; i < aThis.rand_limit; i++) {
            var Item = aThis.ItemsShow[i];
            var urlLogClick = core_ecom.logUrl(Item);
            var img = Item['src'],
                title = core_ecom.getSubString(Item['title'], 80),
                desc = core_ecom.getSubString(Item['desc'], 85),
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
                            <a href="" id="dxzone_ecom_${aThis.zoneid}_campaign_${aThis.numberStop}_click_${i}" rel="nofollow" target="_blank">
                                <img src="${img}" align="left" border="0" />
                                <div class="ecom-item-info">
                                     <div class="ecom-title" title="${Item['title']}">
                                        ${Item['title']}
                                    </div>
                                    <span class="ecom-price-1">${prices}</span>
                                    <span class="ecom-price-2">${priceo}</span>
                                    <div class="ecom-discount">${dsof}</div>
                                </div>
                            </a>
                        </li>
                    `
        }

        html+= `            
                    </ul>
                    <!-- /listing item product-->
                </div>
            </div>

        `
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

    this.ifr = function () {
        try {
            var docZone = document.getElementById('adxzone_'+aThis.zoneid);
            var outHtml = '<iframe id="adnzone_ifr_'+aThis.zoneid+'" scrolling="no" style="width:300px; height:600px; border: none; overflow: hidden;"></iframe>';
            try {
                if (docZone) {
                    docZone.innerHTML = outHtml;
                }
            } catch (e) {console.log(e)}
        } catch (e) {console.log(e)}
    };

    this.loadFrame = function() {
        var output = aThis.DrawCreateAdx();
        try {
            var docZone = document.getElementById('adnzone_ifr_'+aThis.zoneid).contentWindow.document;
            // try {
                if (docZone) {
                    docZone.write(output);
                    core_ecom.setClick(docZone,"dxzone_ecom_"+aThis.zoneid+"_campaign_"+aThis.numberStop+"_click");
                    core_ecom.logItemView();
                    docZone.close();
                }
            // } catch (e) {console.log(e)}
        } catch (e) {console.log(e)}

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



    this.loadFrameintro = function(data){
        try {
        var adxlinkhome = '//adx.admicro.vn/ecom?utm_source=Admicro&utm_medium='+document.domain+'&utm_campaign=adxzone_'+aThis.zoneid;
        var html_logo = `<a class="adxzone_${aThis.zoneid}" href="${adxlinkhome}" target="_blank"><span class="txtlogo">AdX 4 Ecom</span><span></span></a>`;
        var css_logo = `<style type="text/css">#adnzone_510423{clear:both;text-align:left;margin:0 auto}.adxzone_${aThis.zoneid}{background:url(${dmAdi}/adx/adxlogo-2.png) no-repeat  top left;display:block; width:35px; height:20px;z-index:9; position:absolute; top:0px; right:0px;}.adxzone_${aThis.zoneid} .txtlogo{display:none;}.adxzone_${aThis.zoneid}:hover{box-sizing:content-box;text-decoration:none;width:109px;padding-left:10px;background:url(${dmAdi}/adt/banners/nam2015/148/logo/adx/adxlogo-2-hover.png) no-repeat top left;}.adxzone_${aThis.zoneid}:hover .txtlogo{box-sizing:content-box;display:block;font:11px tahoma,arial; color:#9b9b9b; font-weight:600;padding-left:16px;text-decoration:none;line-height:17px;}body{margin:0}</style>`;
        core_ecom.logviewbannerintro(data.data.bannerintro);

        var databannerintro = data.data.bannerintro.dataintro;
        var linkclick_intro = core_ecom.logclickintro(data.data.bannerintro);
        databannerintro = JSON.parse(databannerintro);
        
        var html_bannerintro = databannerintro['300x600']['script']+"?url="+encodeURIComponent(linkclick_intro);
        var script_checkhtml = `<script>var chkStatusBan=!0,idfhtml=null,admidchk="adxzone_${aThis.zoneid}";try{var arradmid=admid.split("_");admidchk=arradmid[0]+"_"+arradmid[1]}catch(a){}
function checkBanStartCanvas(a){if(!idfhtml){var b=document.getElementsByTagName("iframe");b&&(idfhtml=b[0].contentWindow)}if(idfhtml)try{var c=function(){var b=parent.document.getElementById(a);parent.VisSense(b).monitor({visible:function(){idfhtml.postMessage("start","*")},hidden:function(){idfhtml.postMessage("pause","*")}}).start()};"undefined"!=typeof parent.VisSense?c():parent._admloadJs("https://media1.admicro.vn/core/visen.js",function(){c()})}catch(d){}}
var admcall=function(a){try{(-1!=a.data.indexOf(admid)||-1!=a.origin.indexOf("secure-ds.serving")&&-1!=a.data.indexOf("complete_"))&&checkBanStartCanvas(admidchk)}catch(b){}};window.addEventListener?window.addEventListener("message",admcall,!1):window.attachEvent("onmessage",admcall,!1);</script>`
        var output = `<script>(function(){var doc=document;var wd=300;var hg=600;var url='${html_bannerintro}';doc.write('<ifr'+'ame id="xxx" src="'+url+'" width="'+wd+'" height="'+hg+'" frameborder="0" scrolling="no"></ifr'+'ame>${html_logo}');/*reponsive*/})();</script>`+css_logo+script_checkhtml;
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
            aThis.zoneid = data['ZONEID'];
            databanner = data;
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
            
            var checkBannerintro;
            if (databanner.data && databanner.data.bannerintro && databanner.data.bannerintro.dataintro) {
                checkBannerintro = JSON.parse(data.data.bannerintro.dataintro);
                if (checkBannerintro['300x600']!= undefined) {
                    _checkBannerintro = true;
                    setTimeout(function(){aThis.loadFrameintro(data);}, 500);
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
