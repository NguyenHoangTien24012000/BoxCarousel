function sponsoradx(data){
    var zoneid=data.zoneid;
    this.zoneid = data.zoneid;
    var ADMSTORAGE={'image':'adi.admicro.vn','js':'media1.admicro.vn','logging':'lg1.logging.admicro.vn'};
    try{
        var ADMSTORAGE=parent.window.admerrorload?{'image':'cdnstoremedia.com','js':'static.contineljs.com','logging':'trunkpkg.com'}:{'image':'adi.admicro.vn','js':'media1.admicro.vn','logging':'lg1.logging.admicro.vn'};
    }catch(e){}
    if(typeof(parent.ADMStorageFileCDN)!='undefined'){
        ADMSTORAGE.image=parent.ADMStorageFileCDN.adi;
        ADMSTORAGE.js=parent.ADMStorageFileCDN.js;
        ADMSTORAGE.logging=parent.ADMStorageFileCDN.logging;
    }
    var wd=frameElement.clientWidth;
    var checkWd=true;
    if(wd<600){
        checkWd=false;
    }

    var bindcss=function(a){var b=document.createElement("style");b.type="text/css";document.getElementsByTagName("head")[0].appendChild(b);b.styleSheet?b.styleSheet.cssText=a:b.appendChild(document.createTextNode(a))};
    this.templateCss=function(){
        var css = `body{margin:0;padding:0}@font-face {
            font-family: Roboto;
            font-style: normal;
            font-weight: 300;
            src: url(https://static.contineljs.com/fonts/Roboto-Light.woff2) format("woff2"),url(https://static.contineljs.com/fonts/Roboto-Light.woff) format("woff")
        }

        @font-face {
            font-family: Roboto;
            font-style: normal;
            font-weight: 400;
            src: url(https://static.contineljs.com/fonts/Roboto-Regular.woff2) format("woff2"),url(https://static.contineljs.com/fonts/Roboto-Regular.woff) format("woff")
        }

        @font-face {
            font-family: Roboto;
            font-style: normal;
            font-weight: 500;
            src: url(https://static.contineljs.com/fonts/Roboto-Medium.woff2?v=2) format("woff2"),url(https://static.contineljs.com/fonts/Roboto-Medium.woff) format("woff")
        }

        @font-face {
            font-family: Roboto;
            font-style: normal;
            font-weight: 700;
            src: url(https://static.contineljs.com/fonts/Roboto-Bold.woff2) format("woff2"),url(https://static.contineljs.com/fonts/Roboto-Bold.woff) format("woff")
        }
    
    :root {
      --adxbackground: #FFF;
      --adxarticleWd: 260px;
      --adxarticleHg: 146px;
    }
    @media only screen and (max-width: 600px) {
        :root {
          --adxbackground: #FFF;
          --adxarticleWd: 220px;
          --adxarticleHg: 146px;
        }
    }
    .adxspInstream{
      background: var(--adxbackground);
      padding: 0; 
      position:relative;
      padding:20px 0 0 0;
      height:calc(var(--adxarticleHg) + 20px);
    }
    .adxspInstream div,.adxspInstream span,.adxspInstream p{
      font-family: Roboto, arial, tahoma;
    }
    .adxspInstream .adx--img_Thumb{
      float:left;
      width: var(--adxarticleWd); 
      height: var(--adxarticleHg);
      padding-right:18px;
    }
    .adxspInstream .adx--content{
      float: left;
      padding:0;
      width: calc(100% - 28px - var(--adxarticleWd));
    }
    .adxspInstream .adx--img_Thumb img{
      width: var(--adxarticleWd); 
      height: var(--adxarticleHg);
      border:none;
    }
    .adxspInstream .adx--brand{
      /*padding:10px 0 0 0;*/
      position:absolute;
      bottom:10px;
      width:calc(100% - var(--adxarticleWd) - 18px);
      box-sizing:border-box;
    }
    .adxspInstream  .adx--desc{
      font-style: normal;
      font-weight: normal;
      font-size: 13px;
      line-height: 18px;

      color: #757575;
    }
    .adxspInstream  .adx--title{
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 23px;
      overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: 2; /* number of lines to show */
   -webkit-box-orient: vertical;
      /* or 129% */

    

      color: #454545;
    }
    .adxspInstream  .adx--domain{
      font-family: Roboto;
      font-style: italic;
      font-weight: 300;
      font-size: 12px;
      line-height: 18px;
      padding:3px 0;
      /* identical to box height, or 150% */

      color: #A5A5A5;

    }
    .adxspInstream .adx--logo{
      float: left;

         color:#1C8DDC;
        font-size:14px;
        font-weight:bold;
        line-height:39px;
        font-family: Roboto;
        display: flex;
        /* height: 39px; */
        align-items: center;

    }
    .adxspInstream .adx--logo::after {
      font-weight: 300;
      font-size: 12px;
      line-height: 38px;
      color: #A5A5A5;
      font-style:normal;
      content:" tài trợ";
      padding-left:8px;

    }
    .adxspInstream .adx--logo img{
      max-width:90px;
      max-height:35px;
     
    }

    .adxspInstream .adx--more{
      color: #0094FF;
      float:right;
      font-size: 14px;
      line-height: 35px;
      font-weight:normal;
      display: flex;
      align-items: center;
      height:35px;
      padding-right:10px;
    }
    .adxspInstream::after {
        content: "";
        clear: both;
        width: 100%;
        height: 0;
        display:block;
        
    }
    
    `;
        
        bindcss(css);
    };

    this.templateHtml=function(item,click){
        var strBrand=item.brandname||'';
        strBrand=strBrand.replace('http://','').replace('https://','');
        var strdomain=item.domain || '';
        strdomain=strdomain.replace('http://','').replace('https://','');
        var brand=item.brand?'<img src="'+item.brand+'">':`${strBrand}`;
        item.image_wide= item.image_wide?item.image_wide:(item.image_3_2?item.image_3_2:item.image);
        var html=`
<!DOCTYPE html>
    <html lang="vi" xmlns="//www.w3.org/1999/xhtml">
    
    <head prefix="og: //ogp.me/ns# fb: //ogp.me/ns/fb# article: https://ogp.me/ns/article#">
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        
    </head>
<body>
        <div class="adxsponsor" id="adxsponsor" style="width:100%">
  <div class="adxspInstream">
      <a href="${click}" target="_blank" rel="nofollow">
          <div class="adx--img_Thumb">
            <img src="${checkWd?item.image_wide:item.image_3_2}"  >
          </div>
          <div class="adx--content">
              <div class="adx--title">
               ${item.title}
 
              </div>
              <div class="adx--domain">
                ${strdomain}
              </div>
              <div class="adx--desc">
                ${item.desc} 
              </div>
              <div class="adx--brand">
                <span class="adx--logo">
                 ${brand}
                </span>
                <span class="adx--more">
                  <svg width="22" height="22" viewBox="0 0 36 36" fill="none" xmlns="//www.w3.org/2000/svg">
<circle cx="18" cy="18" r="18" fill="#1C8DDC"/>
<path d="M28.0607 19.0607C28.6464 18.4749 28.6464 17.5251 28.0607 16.9393L18.5147 7.3934C17.9289 6.80761 16.9792 6.80761 16.3934 7.3934C15.8076 7.97919 15.8076 8.92893 16.3934 9.51472L24.8787 18L16.3934 26.4853C15.8076 27.0711 15.8076 28.0208 16.3934 28.6066C16.9792 29.1924 17.9289 29.1924 18.5147 28.6066L28.0607 19.0607ZM7 19.5H27V16.5H7V19.5Z" fill="white"/>
</svg>

                </span>
              </div>

          </div>
      </a>
  </div>
</div>
</body>
</html>`;
return html;
    };
     function sendLog(){
            var img=[];
            for (var o = 0; o < logview.length; o++) {
                img[o]=new Image();
                img[o].src= logview[o];
            }
        }
        var timeoutTime;
        
        var chkSendLog=false;
    var initLoad = function(data) {
        var core_sponsor_pc = new core_adx_sponsor_pc(data);
        var view = core_sponsor_pc.getlogview(data.items[0]);
        window.logview=[view];
        var logurl = core_sponsor_pc.getlogclick(data.items[0]);
        document.write(templateHtml(data.items[0],logurl));
        document.close();
        templateCss();
        try{
            var dmn=document.domain+'';
            if(dmn=='soha.vn'){
                var eleli=frameElement.parentNode.closest('LI');
                if(!eleli){
                    frameElement.parentNode.style.marginTop='-25px';
                }
                frameElement.parentNode.style.borderBottom='1px dashed #E5E5E5';
                frameElement.parentNode.style.marginBottom='25px';
                
            }
            
            frameElement.width='100%';
            frameElement.style.height='180px';
            frameElement.style.width='100%';
            frameElement.parentNode.style.width='100%';
            var id=frameElement.id.replace('_sponsor_','');
            var idele=frameElement.id.replace('sponsor_','');
            parent.document.querySelector(`#${idele} > div`).style.width='100%';
            if(typeof(parent.VisSense)=='undefined'){
                 parent._admloadJs('https://'+ADMSTORAGE.js+'/core/visen.js',function(){
                    parent.VisSense(frameElement).onPercentageTimeTestPassed(function() {
                        sendLog();
                    }, {
                        percentageLimit: .5,
                        timeLimit: 1E3,
                        interval: 100
                    });
                })
            }else{
                parent.VisSense(frameElement).onPercentageTimeTestPassed(function() {
                        sendLog();
                    }, {
                        percentageLimit: .5,
                        timeLimit: 1E3,
                        interval: 100
                    });
            }
           

          }catch(e){console.log(e)}
          try{
            if(typeof(data.item[0].ext)!='undefined' && typeof(data.item[0].ext.has)!='undefined'){ 
                document.getElementById("adxsponsor").addEventListener("click", senLogABtest);
            }
            
                function senLogABtest() {

                    var logurl = '//'+ADMSTORAGE.logging+'/ab?dmn='+encodeURIComponent(document.domain)+'&h='+encodeURIComponent(data.item[0].ext.hash)+'&d=1,-1,-1,-1&p='+encodeURIComponent(location.pathname
)+'&r='+Math.random();
                    var img = new Image();
                    img.src = logurl;
                }

          }catch(e){}
    
    }

   function _admloadJs(b, c) {
        var e = document.createElement("script");
        e.type = "text/javascript";
        e.async = !0;
        e.src = b;
        2 <= arguments.length && (e.onload = c, e.onreadystatechange = function() {
            4 != e.readyState && "complete" != e.readyState || c()
        });
        document.getElementsByTagName("head")[0].appendChild(e)
    }
  
    if(typeof core_adx_sponsor_pc === "undefined"){
            _admloadJs('//'+ADMSTORAGE.js+'/core/core_adx_sponsor_pc.js',function () {
                initLoad(data);
            });
        }else{
            initLoad(data);
        }
    window.setTimeout(function(){
        try{
            /*var dmn=document.domain;
            if(dmn=='soha.vn'){
                parent.cpmzone.prototype.addCss.call(null,'#adnzone_'+zoneid+'{margin-top:-8px}')
            }*/
            var hg=document.body.clientHeight;
            if(hg>180){
                frameElement.style.height=(hg+10)+'px';
            }
            
        }catch(e){}
    },1000);

};
