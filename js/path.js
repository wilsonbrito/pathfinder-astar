let createGraph = require('ngraph.graph');
let g = createGraph();
let path = require('ngraph.path')

var nodes = require('./nodes.json')
var links = require('./links.json')

fetch('./nodes.json').then(res, function () {
	res.json()
}.then(data, function () {
	nodes.nodes.forEach(function (node) {
		g.addNode(node.rua, {
			holes: node.holes,
			semaphore: node.semaphore,
			x: node.x,
			y: node.y
		})
	})
}))

links.links.forEach(function (link) {
	g.addLink(link.from, link.to)
})

/*Distance*/
let totaldistance = 0;
let arredondado = 0;

/*heuristic*/
let holes = 0;
let semaphore = 0;
let result = 0;

let pathFinder = path.aStar(g, {
	distance(from, to, link) {
		let dx = from.data.x - to.data.x;
		let dy = from.data.y - to.data.y;
		let distance = Math.sqrt(dx * dx + dy * dy);
		arredondado = parseFloat(distance.toFixed(3));
		totaldistance += arredondado;
		return arredondado;
	},
	heuristic(from, to, link) {
		let holes = from.data.holes - to.data.holes;
		let semaphore = from.data.semaphore - to.data.semaphore;
		let calc = Math.sqrt(holes * holes + semaphore * semaphore);
		result = parseFloat(calc.toFixed(1));
		return result
	}
});

// function foundpath() {
// 	let from = document.getElementById('from');
// 	let to = document.getElementById('to');
// 	console.log('From --> ' + from.value)
// 	console.log('To -->' + to.value)

// 	let foundPath = pathFinder.find(from.value, to.value);
// 	foundPath.forEach(function (node) {
// 		var nodeSelector = node.id
// 		document.querySelector('#' + nodeSelector).setAttribute('fill', 'green')
// 		console.log("#" + nodeSelector)
// 	});

// }

// document.getElementById('botao').addEventListener('click', () => {
// 	foundpath();
// });

let foundPath = pathFinder.find('conexao1216', 'conexao11121617');
console.log(foundPath);