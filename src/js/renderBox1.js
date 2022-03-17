function renderBox() {
	this.css = `%%css%%`;
	this.html = `%%html%%`;
	var elem = document.createElement("iframe")
	Object.assign(elem, {
		id: 'myIframe',
		src: 'https://dummyimage.com/320x240/ccc/fff.jpg',
		height: 120, // pixels
		width: 160, // pixels
		onclick: function () {
			alert('Clicked!')
		}
	})
	document.body.appendChild(elem)
	let iframe = document.getElementById("myIframe");
	let doc = iframe.contentWindow.document;
	doc.querySelector('body').innerHTML = `<style>${this.css}</style>${this.html}`;
}
renderBox()
