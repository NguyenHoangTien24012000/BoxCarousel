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
    var bindcss=function(a){var b=document.createElement("style");b.type="text/css";document.getElementsByTagName("head")[0].appendChild(b);b.styleSheet?b.styleSheet.cssText=a:b.appendChild(document.createTextNode(a))};
    var wd=frameElement.clientWidth;
    var checkWd=true;
    if(wd<600){
        checkWd=false;
    }
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
      --adxbackground: #F1F1F1;
      --adxarticleWd: 320px;
      --adxarticleHg: 178px;
    }
    @media only screen and (max-width: 600px) {
        :root {
          --adxbackground: #F1F1F1;
          --adxarticleWd: 220px;
          --adxarticleHg: 158px;
        }
    }
    .adxaritcle{
      background: var(--adxbackground);
      padding: 0; 
      position:relative;
      box-sizing: border-box;
      border: 1px solid #E7E7E7;
    }
    .adxaritcle div,.adxaritcle span,.adxaritcle p{
      font-family: Roboto, arial, tahoma;
    }
    .adxaritcle .adx--img_Thumb{
      float:left;
      width: var(--adxarticleWd); 
      height: var(--adxarticleHg);
      padding-right:18px;
    }
    .adxaritcle .adx--content{
      float: left;
      padding:15px 0 0 0;
      width: calc(100% - 28px - var(--adxarticleWd));
    }
    .adxaritcle .adx--img_Thumb img{
      width: var(--adxarticleWd); 
      height: var(--adxarticleHg);
      border:none;
    }
    .adxaritcle .adx--brand{
      padding:0px 10px 0 0;
      position:absolute;
      bottom:3px;
      width:calc(100% - var(--adxarticleWd) - 18px);
      box-sizing:border-box;
    }
    .adxaritcle  .adx--desc{
      font-style: normal;
      font-weight: normal;
      font-size: 13px;
      line-height: 18px;

      color: #757575;
    }
    .adxaritcle  .adx--title{
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 23px;
      /* or 129% */

      display: flex;
      align-items: center;

      color: #454545;
    }
    .adxaritcle  .adx--domain{
      font-family: Roboto;
      font-style: italic;
      font-weight: 300;
      font-size: 12px;
      line-height: 18px;
      padding:3px 0;
      /* identical to box height, or 150% */

      color: #A5A5A5;

    }
    .adxaritcle .adx--logo{
      float: left;
      color:#1C8DDC;
        font-size:14px;
        font-weight:bold;
        line-height:39px;
        font-family: Roboto;
        display: flex;
        height: 39px;
        align-items: center;
    }
    .adxaritcle .adx--logo::after {
      font-weight: 300;
      font-size: 12px;
      line-height: 38px;
      color: #A5A5A5;
      font-style:normal;
      content:" tài trợ";
      padding-left:8px;

    }
    .adxaritcle .adx--logo img{
      max-width:90px;
      max-height:35px;
      
    }

    .adxaritcle .adx--more{
      color: #0094FF;
      float:right;
      font-size: 14px;
      line-height: 35px;
      font-weight:normal;
      display: flex;
      align-items: center;
      height:35px;
    }
    .adxaritcle::after {
        content: "";
        clear: both;
        width: 100%;
        height: 0;
        display:block;
        
    }`;
        
        bindcss(css);
    };
    this.templateHtml=function(item,click){
        var strBrand=item.brandname||'';
        strBrand=strBrand.replace('http://','').replace('https://','');
        var strdomain=item.domain || '';
        strdomain=strdomain.replace('http://','').replace('https://','');
        var brand=item.brand?'<img src="'+item.brand+'">':strBrand;
        item.image_wide= item.image_wide?item.image_wide:(item.image_3_2?item.image_3_2:item.image);
        var html=`
<!DOCTYPE html>
    <html lang="vi" xmlns="//www.w3.org/1999/xhtml">
    
    <head prefix="og: //ogp.me/ns# fb: //ogp.me/ns/fb# article: https://ogp.me/ns/article#">
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        
    </head>
<body>
        <div class="adxsponsor" id="adxsponsor" style="width:100%">
  <div class="adxaritcle">
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
            /*document.getElementById('closeAds').addEventListener('click',function(){
                frameElement.parentNode.style.display='none';
            })*/
            try{
                setTimeout(function(){

                    var id=frameElement.id.replace('adnzone_sponsor_','')
                    var ele=frameElement.parentNode.querySelector('[class*="admLogoAdx"]').parentNode;
                    ele.parentNode.style.margin='15px 0';
                    ele.setAttribute('class','admLogoAdx--'+id);
                    var div=document.createElement('div');
                    var html=ele.innerHTML+`<div onclick="this.parentNode.parentNode.style.display='none'" style="
                        position: absolute;
                        top: -5px;
                        right: -8px;
                        z-index: 9;
                        cursor:pointer;
                    "><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18Z" fill="#454545" fill-opacity="0.6"></path>
                    <path d="M12.6 5.40002L5.39999 12.6" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M5.39999 5.40002L12.6 12.6" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg></div><style>.admLogoAdx--${id}{width:100% !important;}.admLogoAdx--${id}::after{width:10px; height:17px; background-color:#e7e7e7; content:" "; display:inline-block;position:absolute; top:0; right:0;}.admLogoAdx${id}{margin-right:10px;}</style>`;
                    ele.innerHTML=html;
                },100)
            }catch(e){console.log(e)}
            frameElement.width='100%';
            var hg=180;
            if(!checkWd){
                hg=160;
            }
            frameElement.style.height=hg+'px';
            frameElement.style.width='100%';
            frameElement.parentNode.style.width='100%';
            var id=frameElement.id.replace('_sponsor_','');
            var idele=frameElement.id.replace('sponsor_','');
            parent.document.querySelector(`#${idele} > div`).style.width='calc(100% - 10px)';
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

};
