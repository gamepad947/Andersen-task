document.body.appendChild(createTree(treeData))

function createTree(obj) {
	var leaf = document.createElement('div')

	var title = document.createElement('h4')
	title.innerHTML = obj.name
	leaf.appendChild(title)

	if (obj.children) {
		var children = document.createElement('div')
		obj.children.forEach(function (obj) {
			children.appendChild(createTree(obj))
		})
		leaf.appendChild(children)
	}
	return leaf
}
