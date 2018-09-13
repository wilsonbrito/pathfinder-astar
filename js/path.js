let createGraph = require('ngraph.graph')
let g = createGraph()
let path = require('ngraph.path')

/* Nó das ruas*/
g.addNode('rua1-com-rua10-2', {
	holes: 0,
	semaphore: 0,
	x: 2,
	y: 1
});

g.addNode('rua1-com-rua10-3', {
	holes: 0,
	semaphore: 0,
	x: 4,
	y: 1
});

g.addNode('rua10-5', {
	holes: 0,
	semaphore: 0,
	x: 6,
	y: 1
});

g.addNode('rua10-4', {
	holes: 0,
	semaphore: 0,
	x: 8,
	y: 1
});

g.addNode('rua10-3', {
	holes: 0,
	semaphore: 0,
	x: 10,
	y: 1
});

g.addNode('rua10-2', {
	holes: 0,
	semaphore: 0,
	x: 12,
	y: 1
});

g.addNode('rua10-1', {
	holes: 0,
	semaphore: 0,
	x: 14,
	y: 1
});

g.addNode('conexao91011', {
	holes: 0,
	semaphore: 0,
	x: 16,
	y: 1
});

g.addNode('rua9-1', {
	holes: 0,
	semaphore: 0,
	x: 18,
	y: 1
});

g.addNode('rua9-2', {
	holes: 0,
	semaphore: 0,
	x: 20,
	y: 1
});

g.addNode('rua9-3', {
	holes: 0,
	semaphore: 0,
	x: 22,
	y: 1
});

g.addNode('rua9-4', {
	holes: 0,
	semaphore: 0,
	x: 24,
	y: 1
});

g.addNode('rua9-5', {
	holes: 0,
	semaphore: 0,
	x: 26,
	y: 1
});

g.addNode('rua8-com-rua9-1', {
	holes: 0,
	semaphore: 0,
	x: 28,
	y: 1
});

g.addNode('rua8-com-rua9-2', {
	holes: 0,
	semaphore: 0,
	x: 30,
	y: 1
});

/*Link das ruas*/
g.addLink('r1-b1', 'r2-b1-01', {
	x: 1,
	y: 1
});

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

function foundpath() {
	let from = document.getElementById('from');
	let to = document.getElementById('to');
	console.log(from.value)

	let foundPath = pathFinder.find(from.value, to.value);
	foundPath.forEach(function (node) {
		console.log("Node" + node)
		var nodeSelector = node.id;
		console.log('.' + nodeSelector + " .ico");
		//console.log("Resultado"+result);
		document.querySelector('.' + nodeSelector + " .ico").setAttribute('fill', 'green')
	});

}
document.getElementById('botao').addEventListener('click', () => {
	foundpath();

});