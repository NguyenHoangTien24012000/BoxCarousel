function renderBox() {
	this.css = `%%css%%`;
	this.html = `%%html%%`;
	var elem = document.createElement("iframe")
	Object.assign(elem, {
		id: 'myIframe',
		height: 600, // pixels
		width: 300, // pixels
<<<<<<< HEAD
		frameBorder: 0
	})
	document.querySelector('#myDiv').appendChild(elem)
	let iframe = document.getElementById("myIframe");
	let doc = iframe.contentWindow;
	// doc.querySelector('body').wr = `<style>${this.css}</style>${this.html}`;
=======
		frameBorder : 0
	})
	document.getElementById('myDiv').appendChild(elem)
	let iframe = document.getElementById("myIframe");
	let doc = iframe.contentWindow
	// doc.querySelector('body').innerHTML = `<style>${this.css}</style>${this.html}`;
>>>>>>> 87b91e64814be289dc3849c53f8e9fc75a721576
	doc.document.write(`<style>${this.css}</style>${this.html}
    <script>
    %%js%%
    <\/script>
    `);
<<<<<<< HEAD
=======
    doc.document.close();
>>>>>>> 87b91e64814be289dc3849c53f8e9fc75a721576
}
renderBox()
