function AdmZones_adxzone() {
    var aThis = this;
    var core_ecom;
    this.zoneid = -1;
    this.logo = true;
    this.rand_limit = 4;
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
        var css = `
body{
    margin: 0;
}
@charset "UTF-8";
#adxzone_prefix-980x90 .ecom-price-2:after, #adxzone_prefix-980x90 .ecom-price-1:after {
  position: relative;
  top: -2px;
  left: 1px;
  font-size: 11px;
  content: "đ";
  text-decoration: underline;
}

#adxzone_prefix-980x90 {
  width: 100%;
  max-width:1160px;
  height: 88px;
  font-family: tahoma, arial;
  line-height: 18px;
  position: relative;
  border: 1px solid #e4c35a;
  background-color :#fff;
  box-sizing: border-box;
}
#adxzone_prefix-980x90 .ecom-Contain {
  height: 100%;
  background: #fff;
  box-sizing: border-box;
  border-left: 1px solid;
  overflow: hidden;
}
#adxzone_prefix-980x90 .ecom-Header {
  width: auto;
  max-width: 140px;
  height: 90px;
  display: inline-block;
  margin: 0 auto;
  float: left;
}
#adxzone_prefix-980x90 .ecom-Header a {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90px;
  width: 100%;
}
#adxzone_prefix-980x90 .ecom-Header img {
  max-width: 130px;
  max-height: 65px;
  padding : 0px 20px;
}
#adxzone_prefix-980x90 ul {
  list-style: none;
  margin: 8px 7px 8px 5px ;
  padding: 0;
}
#adxzone_prefix-980x90 li {
  margin: 0;
  padding: 0;
  display: inline-block;
  float: left;
  width: 24.9%;
  cursor: pointer;
  position: relative
}
#adxzone_prefix-980x90 li:not(:last-child) {
  border-right: 1px solid #e7e7e7;
}
#adxzone_prefix-980x90 .ecom-Items {
  background: #fff;
}
#adxzone_prefix-980x90 .ecom-Items .ecom-title {
  max-height: 36px;
  height: 36px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
#adxzone_prefix-980x90 .ecom-Items a {
  color: #222;
  font-size: 12px;
  text-decoration: none;
  text-align: left;
  width:100%;
  height:auto;
  display:block
}
#adxzone_prefix-980x90 .ecom-Items img {
  width: 70px !important;
  height: 70px !important;
}
#adxzone_prefix-980x90 .ecom-item-info {
  margin-top: -3px;
}
#adxzone_prefix-980x90 .ecom-price-1 {
  font-size: 12px;
  font-weight: bold;
  color: #e00000;
  text-decoration: none;
  display:block;
  width:100%;
}
#adxzone_prefix-980x90 .ecom-price-1:empty {
  display: none;
}
#adxzone_prefix-980x90 .ecom-price-2 {
  font-size: 12px;
  color: #222;
  text-decoration: line-through;
}
#adxzone_prefix-980x90 .ecom-price-2:empty {
  display: none;
}
#adxzone_prefix-980x90 .adxzone_ecom_logo_short{
    position:absolute;
    top:0;
    right:0;
    height:17px;
    line-height:17px;
    overflow:hidden;
    display:block
}
#adxzone_prefix-980x90 .adxzone_ecom_logo_short a{
    text-decoration:none
}
#adxzone_prefix-980x90 #adxzone_ecom_zonebox_header_short{
    background:url(https:${dmAdi}/adxecom/logoadx4ecom-1b.png) no-repeat;
    width:35px;
    height:17px;
    display:block;
    float:right
}
#adxzone_prefix-980x90 #adxzone_ecom_zonebox_header_long{
    background:url(https:${dmAdi}/adxecom/logoadx4ecom-1b-hover-bg.png) no-repeat;
    width:99px;
    height:17px;
    display:none
}
#adxzone_prefix-980x90 .adxzone_ecom_zonebox_header_long_span{
    font-size:11px;
    color:#888;
    font-family:arial;
    padding-left:21px;
    line-height:17px
}
#adxzone_prefix-980x90 .adxzone_ecom_zonebox_header_long_b{
    font-size:11px;
    color:#888;
    line-height:17px;
    font-weight:700
}
#adxzone_prefix-980x90 .adxzone_ecom_logo_short_left{
    position:absolute;
    top:0;
    left:0;
    height:17px;
    line-height:17px;
    overflow:hidden;
    display:none
}

#adxzone_prefix-980x90 .ecom-discount{
    position: absolute;
    top: -5;
    left: 0;
    font-weight: bold;
    color: #fff;
    display: flex;
    width: 30px;
    height: 16px;
    background: red;
    border: 1px solid #fff;
    justify-content: center;
    align-items: center;
    font-size: 10px; 
}



/*# sourceMappingURL=980x90.css.map */`


        return css;
    };

    this.DrawCreateAdx = function() {
        var adxlinkhome = '//adx.admicro.vn/ecom?utm_source=Admicro&utm_medium='+document.domain+'&utm_campaign=adxzone_'+aThis.zoneid;
        var withItem = 0;
        var html = '';
        html += '<style>'+aThis.CreateStyleSheet()+'</style>';
        html += '<div id="adxzone_prefix-980x90">';
        if(!aThis.logosp.flag){
            // html += '<div class="adxzone_ecom_adxtwlogo"> <style type="text/css"> #adxzone_ecom .adxzone_ecom_adxtwlogo{float: left; height: 88px; width: 147px; overflow: hidden; text-align: center;}</style>  <img src="'+aThis.logosp.logo+'" class="adxtlogo" id="adxtlogo" title="Trao chất lượng, Trọn yên tâm" alt="Trao chất lượng, Trọn yên tâm" style="margin-top: 15px;max-width:115px;max-height:65px">  <p id="adxtsgimp"></p></div>';

            html += `
                <div class="ecom-Header">
                    <a rel="nofollow" target="_blank">
                        <img src="${aThis.logosp.logo}" border="0" />
                    </a>
                </div>
            `
            withItem = 160;
        } 

        html += `
                <div class="ecom-Contain" style="border-color:#e4c35a;">
                    <ul class="ecom-Items">
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
                title = core_ecom.getSubString(Item['title'], 42),
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
            // html += '<div title="'+Item['title']+'" class="adxzone_ecom_box_item" id="dxzone_ecom_'+aThis.zoneid+'_campaign_'+aThis.numberStop+'_click_'+i+'" style="width:calc((100% - '+withItem+'px)/'+aThis.rand_limit+');" >';
            

            html += `
                    <li >
                    `

            if(dsof > 5 && typeof(Item['dsof']) != 'undefined' && Item['dsof'] != ''){
                html += `
                  <div class="ecom-discount">
                     <div style="margin: 6 auto;display:table">${dsof}%</div>
                  </div>
                `;
            }


            html+=`
                        <a href="" rel="nofollow" target="_blank" id="dxzone_ecom_${aThis.zoneid}_campaign_${aThis.numberStop}_click_${i}">
                            <img src="${img}" align="left" border="0" />
                            <div class="ecom-item-info">
                                <div class="ecom-title" title="${Item['title']}">
                                        ${Item['title']}
                                    </div>
                                    <span class="ecom-price-1">${prices}</span>
                                    <span class="ecom-price-2">${priceo}</span>
                            </div>
                        </a>
                    </li>
                  `
        }

        html += '</ul></div>';
                if (aThis.logo) {
            html += '<div class="adxzone_ecom_logo_short" onmouseover="parent.'+aThis.formatName + '_' + aThis.zoneid+'.hovers()" onmouseout="parent.'+aThis.formatName + '_' + aThis.zoneid+'.mouseouts()"> <a rel="nofollow" href="'+adxlinkhome+'" target="_blank"> <div id="adxzone_ecom_zonebox_header_short"></div><div id="adxzone_ecom_zonebox_header_long"><span class="adxzone_ecom_zonebox_header_long_span"><b class="adxzone_ecom_zonebox_header_long_b">AdX 4 Ecom</b></span></div></a> </div>';
        }

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

    // this.hovers_muangay = function(i){
    //     var docZone = document.getElementById('adnzone_ifr_'+aThis.zoneid).contentWindow.document;
    //     docZone.getElementById("adx_ecom_muangay_"+i).style.display = "block";
    // }

    // this.mouseouts_muangay = function(i){
    //     var docZone = document.getElementById('adnzone_ifr_'+aThis.zoneid).contentWindow.document;
    //     docZone.getElementById("adx_ecom_muangay_"+i).style.display = "none";
    // }

    this.ifr = function () {
        try {
            var docZone = document.getElementById('adxzone_'+aThis.zoneid);
            var outHtml = '<iframe id="adnzone_ifr_'+aThis.zoneid+'" scrolling="no" style="width: 100%;min-width: 980px;max-width: 1160px; height:90px; border: none; overflow: hidden;"></iframe>';
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

    this.loadFrameintro = function(data){
        try {
        var adxlinkhome = '//adx.admicro.vn/ecom?utm_source=Admicro&utm_medium='+document.domain+'&utm_campaign=adxzone_'+aThis.zoneid;
        var html_logo = `<a class="adxzone_${aThis.zoneid}" href="${adxlinkhome}" target="_blank"><span class="txtlogo">AdX 4 Ecom</span><span></span></a>`;
        var css_logo = `<style type="text/css">#adnzone_510423{clear:both;text-align:left;margin:0 auto}.adxzone_${aThis.zoneid}{background:url(${dmAdi}/adx/adxlogo-2.png) no-repeat  top left;display:block; width:35px; height:20px;z-index:9; position:absolute; top:0px; right:0px;}.adxzone_${aThis.zoneid} .txtlogo{display:none;}.adxzone_${aThis.zoneid}:hover{box-sizing:content-box;text-decoration:none;width:109px;padding-left:10px;background:url(${dmAdi}/adt/banners/nam2015/148/logo/adx/adxlogo-2-hover.png) no-repeat top left;}.adxzone_${aThis.zoneid}:hover .txtlogo{box-sizing:content-box;display:block;font:11px tahoma,arial; color:#9b9b9b; font-weight:600;padding-left:16px;text-decoration:none;line-height:17px;}body{margin:0}</style>`;
        core_ecom.logviewbannerintro(data.data.bannerintro);

        var databannerintro = data.data.bannerintro.dataintro;
        var linkclick_intro = core_ecom.logclickintro(data.data.bannerintro);
        databannerintro = JSON.parse(databannerintro);
        
        var html_bannerintro = databannerintro['980x90']['script']+"?url="+encodeURIComponent(linkclick_intro);
        var script_checkhtml = `<script>var chkStatusBan=!0,idfhtml=null,admidchk="adxzone_${aThis.zoneid}";try{var arradmid=admid.split("_");admidchk=arradmid[0]+"_"+arradmid[1]}catch(a){}
function checkBanStartCanvas(a){if(!idfhtml){var b=document.getElementsByTagName("iframe");b&&(idfhtml=b[0].contentWindow)}if(idfhtml)try{var c=function(){var b=parent.document.getElementById(a);parent.VisSense(b).monitor({visible:function(){idfhtml.postMessage("start","*")},hidden:function(){idfhtml.postMessage("pause","*")}}).start()};"undefined"!=typeof parent.VisSense?c():parent._admloadJs("https://media1.admicro.vn/core/visen.js",function(){c()})}catch(d){}}
var admcall=function(a){try{(-1!=a.data.indexOf(admid)||-1!=a.origin.indexOf("secure-ds.serving")&&-1!=a.data.indexOf("complete_"))&&checkBanStartCanvas(admidchk)}catch(b){}};window.addEventListener?window.addEventListener("message",admcall,!1):window.attachEvent("onmessage",admcall,!1);</script>`;
var script_margin = `<script>var ele=parent.document.getElementById('adxzone_${aThis.zoneid}').clientWidth;if(ele<1160) {document.body.style.marginLeft = "-"+(1160-ele)/2+"px"};console.log(ele)</script>`;
        var output = `<script>(function(){var doc=document;var wd="100%";var hg=90;var url='${html_bannerintro}';doc.write('<ifr'+'ame id="xxx" src="'+url+'" width="'+wd+'" height="'+hg+'" frameborder="0" scrolling="no"></ifr'+'ame>${html_logo}');/*reponsive*/})();</script>`+css_logo+script_checkhtml+script_margin;
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
            //aThis.loadFrame();
            // setTimeout(function(){aThis.loadFrame();}, 500);
            var checkBannerintro;
            if (databanner.data && databanner.data.bannerintro && databanner.data.bannerintro.dataintro) {
                checkBannerintro = JSON.parse(data.data.bannerintro.dataintro);
                if (checkBannerintro['980x90']!= undefined) {
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
