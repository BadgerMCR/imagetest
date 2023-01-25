module.exports = {
	name: "Test",
	description: "fortestingshittthings",
	category: "Basic",
	icon: "image",
	hasEntries: false,
	props: [
		{
			name: "image",
			description: "Show the selected image",
			type: "ImageFile"
		}
	],
	
	vue_template: renderPug(getFile("template.pug").toString()),
	vue_component: getFile("component.js").toString(),
	css: renderStylus(getFile("style.styl").toString())
}
