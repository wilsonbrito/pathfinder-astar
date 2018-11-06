let createGraph = require('ngraph.graph');
let g = createGraph();
let path = require('ngraph.path')

//var nodes = require('./nodes.json')

fetch('../js/nodes.json').then(function (res) {
	return res.json()
}).then(function (data) {
	data.nodes.forEach(function (node) {
		g.addNode(node.rua, {
			holes: node.holes,
			semaphore: node.semaphore,
			x: node.x,
			y: node.y
		})
	})
})

fetch('../js/links.json').then(function (res) {
	return res.json()
}).then(function (data) {
	data.links.forEach(function (link) {
		g.addLink(link.from, link.to)
	})
})

var rects = Array.from(document.querySelectorAll('rect, path'))

rects.forEach(function(rect){
	rect.addEventListener("click", function(){

		var id = rect.getAttribute("id")
		var from = document.getElementById("from")
		var to = document.getElementById("to")


		if((from.value && to.value) || !from.value){

			return from.value = id
		}
		to.value = id
	})
})

/*Distance*/
let totaldistance = 0
let arredondado = 0

/*heuristic*/
let holes = 0
let semaphore = 0
let result = 0

let pathFinder = path.aStar(g, {
	distance(from, to, link) {
		let dx = from.data.x - to.data.x
		let dy = from.data.y - to.data.y
		let distance = Math.sqrt(dx * dx + dy * dy)
		arredondado = parseFloat(distance.toFixed(3))
		totaldistance += arredondado
		console.log("Distance --> " +arredondado)
		return arredondado
	},
	heuristic(from, to, link) {
		let holes = from.data.holes - to.data.holes
		let semaphore = from.data.semaphore - to.data.semaphore
		let calc = Math.sqrt(holes * holes + semaphore * semaphore)
		result = parseFloat(calc.toFixed(1))
		console.log("Heuristic --> " +result)
		return result
	}
});

function foundpath() {
	let from = document.getElementById('from')
	let to = document.getElementById('to')

	let foundPath = pathFinder.find(from.value, to.value)
	foundPath.forEach(function (node) {
		var nodeSelector = node.id
		document.querySelector('#' + nodeSelector).setAttribute('fill', 'green')
	});

}

document.getElementById('botao').addEventListener('click', () => {
	foundpath()
});

//Consultar pelo Node.
// let foundPath = pathFinder.find('conexao1216', 'conexao11121617');
// console.log(foundPath);
