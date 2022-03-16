function renderBox(){
	this.css=`@font-face{font-family:SFD-Medium;src:url(https://static.mediacdn.vn/web_font/SFD-Medium.woff2)}@font-face{font-family:SFD-SemiBold;src:url(https://static.mediacdn.vn/web_font/SFD-Bold.woff2)}@font-face{font-family:SFD-Bold;src:url(https://static.mediacdn.vn/web_font/SFD-Bold.woff2)}a{text-decoration:none}.gk_home20-wrapper .gknews_box[type=newest] .noticeable-news{width:48.5%;padding:12px 20px 20px 20px;box-sizing:border-box;background:#f4f7fb;border-radius:8px}.gk_home20-wrapper .gknews_box[type=newest] h3{padding-bottom:8px;margin-bottom:15px;border-bottom:1px solid #d6dce2;box-sizing:border-box}.gk_home20-wrapper .gknews_box[type=newest] .noticeable-news-title{font-size:14px;line-height:140%;text-transform:uppercase;color:#555;font-family:SFD-Bold;position:relative;display:block}.gk_home20-wrapper .gknews_box[type=newest] .noticeable-news .list-nn{display:flex;flex-direction:column;list-style:none}.gk_home20-wrapper .gknews_box[type=newest] .noticeable-news .list-nn .nn-item{padding-bottom:12px;border-bottom:1px dashed #d6dce2;margin-bottom:12px}.gk_home20-wrapper .gknews_box[type=newest] .noticeable-news .list-nn .nn-item .item-gr{display:flex}.gk_home20-wrapper .gknews_box[type=newest] .noticeable-news .list-nn .nn-item.first-noticeable-news .item-gr .item-news{flex-direction:column}.gk_home20-wrapper .gknews_box[type=newest] .noticeable-news .list-nn .nn-item .item-gr .item-news{width:100%}.gk_home20-wrapper .gknews_box[type=newest] .noticeable-news .list-nn .nn-item .item-gr .item-news{display:flex;justify-content:space-between}.gk_home20-wrapper .gknews_box[type=newest] .noticeable-news .list-nn .nn-item.first-noticeable-news .item-gr .item-news .item-news-thumb{width:100%}.gk_home20-wrapper .gknews_box[type=newest] .noticeable-news .list-nn .nn-item .item-gr .item-news .item-news-thumb{display:block}.gk_home20-wrapper .gknews_box[type=newest] .noticeable-news .list-nn .nn-item .item-gr .item-news .item-news-thumb i{display:block;width:100%;padding-top:61.5%;position:relative;margin-bottom:10px;border-radius:4px;overflow:hidden}.gk_home20-wrapper .gknews_box[type=newest] .noticeable-news .list-nn .nn-item .item-gr .item-news .item-news-thumb i img{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover}.gk_home20-wrapper .gknews_box[type=newest] .noticeable-news .list-nn .nn-item.first-noticeable-news .item-gr .item-news h4{width:100%}.gk_home20-wrapper .gknews_box[type=newest] .noticeable-news .list-nn .nn-item.first-noticeable-news .item-gr .item-news h4 .item-news-title{font-family:SFD-SemiBold;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}.gk_home20-wrapper .gknews_box[type=newest] .noticeable-news .list-nn .nn-item .item-gr .item-news h4 .item-news-title{font-size:13px;line-height:140%;color:#555}.gk_home20-wrapper .gknews_box[type=newest] .noticeable-news .list-nn .nn-item{padding-bottom:12px;border-bottom:1px dashed #d6dce2;margin-bottom:12px}.gk_home20-wrapper .gknews_box[type=newest] .noticeable-news .list-nn .nn-item .item-gr{display:flex}.gk_home20-wrapper .gknews_box[type=newest] .noticeable-news .list-nn .nn-item .item-gr .item-news{width:100%}.gk_home20-wrapper .gknews_box[type=newest] .noticeable-news .list-nn .nn-item .item-gr .item-news{display:flex;justify-content:space-between}.gk_home20-wrapper .gknews_box[type=newest] .noticeable-news .list-nn .nn-item .item-gr .item-news h4{display:block;width:64%}.gk_home20-wrapper .gknews_box[type=newest] .noticeable-news .list-nn .nn-item .item-gr .item-news h4 .item-news-title{font-size:13px;line-height:140%;color:#555;font-family:SFD-Medium}.gk_home20-wrapper .gknews_box[type=newest] .noticeable-news .list-nn .nn-item .item-gr .item-news h4 .item-news-title{font-size:14px;line-height:140%;color:#555;font-family:SFD-Medium;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}.gk_home20-wrapper .gknews_box[type=newest] .noticeable-news .list-nn .nn-item .item-gr .item-news .item-news-thumb{display:block;width:32%}.gk_home20-wrapper .gknews_box[type=newest] .noticeable-news .list-nn .nn-item .item-gr .item-news .item-news-thumb i{display:block;width:100%;padding-top:61.5%;position:relative;margin-bottom:10px;border-radius:4px;overflow:hidden}.gk_home20-wrapper .gknews_box[type=newest] .noticeable-news .list-nn .nn-item .item-gr .item-news .item-news-thumb i img{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover}`;
	this.html=`<div class="gk_home20-wrapper">
    <div class="gknews_box" type="newest">
        <div class="noticeable-news">
            <h3>
                <a href="%linkBrand%" title="%titleBrand%" class="noticeable-news-title">%titleBrand%</a>
            </h3>
            <ul class="list-nn" algid="22" boxid="4" dspid="61">
                <li class="nn-item first-noticeable-news" ispopup="1" style="display: list-item;">
                    <div class="item-gr">
                        <div class="item-news">
                            <a data-url="%linkItem1%" href="%linkItem1%" title="%titleItem1%" class="item-news-thumb">
                                <i><img src="%linkImgItem1%" alt="%titleItem1%"></i>
                            </a>
                            <h4>
                                <a data-url="%linkItem1%" href="%linkItem1%" title="%titleItem1%"
                                    class="item-news-title">%titleItem1%</a>
                            </h4>
                        </div>
                    </div>
                </li>
                <li class="nn-item" ispopup="1" style="display: list-item;">
                    <div class="item-gr">
                        <div class="item-news">
                            <h4>
                                <a data-url="%linkItem2%" href="%linkItem2%" title="%titleItem2%"
                                    class="item-news-title">%titleItem2%</a>
                            </h4>
                            <a data-url="%linkItem2%" href="%linkItem2%" class="item-news-thumb"> <i><img
                                        src="%linkImgItem2%" alt="%titleItem2%"></i>
                            </a>
                        </div>
                    </div>
                </li>
                <li class="nn-item" ispopup="0" style="display: list-item;">
                    <div class="item-gr">
                        <div class="item-news">
                            <h4>
                                <a data-url="%linkItem3%" href="%linkItem3%" title="%titleItem3%"
                                    class="item-news-title">%titleItem3%</a>
                            </h4>
                            <a data-url="%linkItem3%" href="%linkItem3%" class="item-news-thumb"> <i><img
                                        src="%linkImgItem3%" alt="%titleItem3%"></i>
                            </a>
                        </div>
                    </div>
                </li>
                <li class="nn-item" ispopup="1" style="display: list-item;">
                    <div class="item-gr">
                        <div class="item-news">
                            <h4>
                                <a data-url="%linkItem4%" href="%linkItem4%" title="%titleItem4%"
                                    class="item-news-title">%titleItem4%</a>
                            </h4>
                            <a data-url="%linkItem4%" href="%linkItem4%" class="item-news-thumb"> <i><img
                                        src="%linkImgItem4%" alt="%titleItem4%"></i>
                            </a>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</div>`;
    let iframe = document.getElementById("myIframe");
    let doc = iframe.contentWindow.document;
	doc.querySelector('body').innerHTML = `<style>${this.css}</style>${this.html}`;
}
renderBox()
