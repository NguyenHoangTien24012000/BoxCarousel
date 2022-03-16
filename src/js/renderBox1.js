function renderBox(){
	this.css=`%%css%%`;
	this.html=`%%html%%`;
    let iframe = document.getElementById("myIframe");
    let doc = iframe.contentWindow.document;
	doc.querySelector('body').innerHTML = `<style>${this.css}</style>${this.html}`;
}
renderBox()
