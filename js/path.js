let createGraph = require('ngraph.graph');
let g = createGraph();
let path = require('ngraph.path')

var nodes = require('./nodes.json')
var links = require('./links.json')

console.log(nodes.rua)

nodes.forEach(function (nodes) {
	g.addNode(`${nodes.rua}`, {
		holes: `${nodes.holes}`,
		semaphore: `${nodes.semaphore}`,
		x: `${nodes.x}`,
		y: `${nodes.y}`
	})
})

links.forEach(function (links) {
	g.addLink(`${links.from}`, `${links.to}`)
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

//Linhas abaixo estão comentadas, porém serve para rodar pelo node, caso eu queira testar sem o navegador. 
// let foundPath = pathFinder.find('conexao1216', 'conexao11121617');
// console.log(foundPath);

function foundpath() {
	let from = document.getElementById('from');
	let to = document.getElementById('to');
	console.log('From --> ' + from.value)
	console.log('To -->' + to.value)

	let foundPath = pathFinder.find(from.value, to.value);
	foundPath.forEach(function (node) {
		var nodeSelector = node.id
		document.querySelector('#' + nodeSelector).setAttribute('fill', 'green')
		console.log("#" + nodeSelector)
	});

}
document.getElementById('botao').addEventListener('click', () => {
	foundpath();
});