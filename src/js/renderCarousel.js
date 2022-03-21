function renderCarousel(element){
	this.css=`%%css%%`;
	this.html=`%%html%%`;
	document.querySelector(`#${element}`).innerHTML = `<style>${this.css}</style>${this.html}`;
}
renderCarousel()

function jsCarousel(){
	%%js%%
}
jsCarousel();