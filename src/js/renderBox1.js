function renderBox() {
	this.css = `%%css%%`;
	this.html = `%%html%%`;
	var elem = document.createElement("iframe")
	Object.assign(elem, {
		id: 'myIframe',
		height: 300, // pixels
		width: 660, // pixels
		frameBorder : 0
	})
	document.getElementById('myDiv').appendChild(elem)
	let iframe = document.getElementById("myIframe");
	let doc = iframe.contentWindow
	// doc.querySelector('body').innerHTML = `<style>${this.css}</style>${this.html}`;
	doc.document.write(`<style>${this.css}</style>${this.html}
    <script>
    %%js%%
    <\/script>
    `);
    doc.document.close();
}
renderBox()
