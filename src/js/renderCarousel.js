function renderCarousel(){
	this.css=`%%css%%`;
	this.html=`%%html%%`;
	document.querySelector('body').innerHTML = `<style>${this.css}</style>${this.html}`;
}
renderCarousel()

function jsCarousel(){
	%%js%%
}
jsCarousel();