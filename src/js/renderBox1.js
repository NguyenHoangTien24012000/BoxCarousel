function renderBox() {
	this.css = `%%css%%`;
	this.html = `%%html%%`;
	var elem = document.createElement("iframe")
	Object.assign(elem, {
		id: 'myIframe',
		height: 600, // pixels
		width: 300, // pixels
		frameBorder: 0
	})
	document.querySelector('#myDiv').appendChild(elem)
	let iframe = document.getElementById("myIframe");
	let doc = iframe.contentWindow;
	// doc.querySelector('body').wr = `<style>${this.css}</style>${this.html}`;
	doc.document.write(`<style>${this.css}</style>${this.html}
    <script>
    %%js%%
    <\/script>
    `);
}
renderBox()
