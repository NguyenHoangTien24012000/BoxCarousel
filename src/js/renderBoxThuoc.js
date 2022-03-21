
function renderCarousel(){
	var $=document.querySelector.bind(document);
    this.css=`%%css%%`;
	this.html=`%%html%%`;
    var ifr=$('#iframe01');
    var io=ifr.contentWindow;
    io.document.write(`<style>${this.css}</style>${this.html}
    <script>
    %%js%%
    <\/script>
    `);
    io.document.close();
}
renderCarousel()
