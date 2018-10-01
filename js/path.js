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

g.addNode('rua8-com-rua9-3', {
	holes: 0,
	semaphore: 0,
	x: 31,
	y: 2
});

g.addNode('rua8-5', {
	holes: 0,
	semaphore: 0,
	x: 31,
	y: 4
});

g.addNode('rua8-4', {
	holes: 0,
	semaphore: 0,
	x: 31,
	y: 6
});

g.addNode('rua8-3', {
	holes: 0,
	semaphore: 0,
	x: 31,
	y: 8
});

g.addNode('rua8-2', {
	holes: 0,
	semaphore: 0,
	x: 31,
	y: 10
});

g.addNode('rua8-1', {
	holes: 0,
	semaphore: 0,
	x: 31,
	y: 12
});

g.addNode('rua1-com-rua10-1', {
	holes: 0,
	semaphore: 0,
	x: 1,
	y: 2
});

g.addNode('rua1-5', {
	holes: 0,
	semaphore: 0,
	x: 1,
	y: 4
});

g.addNode('rua1-4', {
	holes: 0,
	semaphore: 0,
	x: 1,
	y: 6
});

g.addNode('rua1-3', {
	holes: 0,
	semaphore: 0,
	x: 1,
	y: 6
});

g.addNode('rua1-2', {
	holes: 0,
	semaphore: 0,
	x: 1,
	y: 8
});

g.addNode('rua1-1', {
	holes: 0,
	semaphore: 0,
	x: 1,
	y: 10
});

g.addNode('rua11-5', {
	holes: 0,
	semaphore: 0,
	x: 16,
	y: 3
});

g.addNode('rua11-4', {
	holes: 0,
	semaphore: 0,
	x: 16,
	y: 5
});

g.addNode('rua11-3', {
	holes: 0,
	semaphore: 0,
	x: 16,
	y: 7
});

g.addNode('rua11-2', {
	holes: 0,
	semaphore: 0,
	x: 16,
	y: 9
});

g.addNode('rua11-1', {
	holes: 0,
	semaphore: 0,
	x: 16,
	y: 12
});

g.addNode('conexao1216', {
	holes: 0,
	semaphore: 0,
	x: 1,
	y: 14
});

g.addNode('rua16-1', {
	holes: 0,
	semaphore: 0,
	x: 3,
	y: 14
});

g.addNode('rua16-2', {
	holes: 0,
	semaphore: 0,
	x: 5,
	y: 14
});

g.addNode('rua16-3', {
	holes: 0,
	semaphore: 0,
	x: 7,
	y: 14
});

g.addNode('rua16-4', {
	holes: 0,
	semaphore: 0,
	x: 9,
	y: 14
});

g.addNode('rua16-5', {
	holes: 0,
	semaphore: 0,
	x: 13,
	y: 14
});

g.addNode('conexao11121617', {
	holes: 0,
	semaphore: 0,
	x: 16,
	y: 14
});

g.addNode('rua17-1', {
	holes: 0,
	semaphore: 0,
	x: 18,
	y: 14
});

g.addNode('rua17-2', {
	holes: 0,
	semaphore: 0,
	x: 20,
	y: 14
});

g.addNode('rua17-3', {
	holes: 0,
	semaphore: 0,
	x: 24,
	y: 14
});

g.addNode('rua17-4', {
	holes: 0,
	semaphore: 0,
	x: 27,
	y: 14
});

g.addNode('rua17-5', {
	holes: 0,
	semaphore: 0,
	x: 29,
	y: 14
});

g.addNode('conexao78', {
	holes: 0,
	semaphore: 0,
	x: 31,
	y: 14
});

g.addNode('rua2-5', {
	holes: 0,
	semaphore: 0,
	x: 1,
	y: 16
});

g.addNode('rua2-5', {
	holes: 0,
	semaphore: 0,
	x: 1,
	y: 16
});

g.addNode('rua2-4', {
	holes: 0,
	semaphore: 0,
	x: 1,
	y: 18
});

g.addNode('rua2-3', {
	holes: 0,
	semaphore: 0,
	x: 1,
	y: 20
});

g.addNode('rua2-2', {
	holes: 0,
	semaphore: 0,
	x: 1,
	y: 22
});

g.addNode('rua2-1', {
	holes: 0,
	semaphore: 0,
	x: 1,
	y: 24
});

g.addNode('conexao2314', {
	holes: 0,
	semaphore: 0,
	x: 1,
	y: 26
});

g.addNode('rua3-5', {
	holes: 0,
	semaphore: 0,
	x: 1,
	y: 28
});

g.addNode('rua3-4', {
	holes: 0,
	semaphore: 0,
	x: 1,
	y: 30
});

g.addNode('rua3-3', {
	holes: 0,
	semaphore: 0,
	x: 1,
	y: 32
});

g.addNode('rua3-2', {
	holes: 0,
	semaphore: 0,
	x: 1,
	y: 34
});

g.addNode('rua3-1', {
	holes: 0,
	semaphore: 0,
	x: 1,
	y: 36
});

g.addNode('rua3-com-rua4-3', {
	holes: 0,
	semaphore: 0,
	x: 1,
	y: 38
});

g.addNode('rua3-com-rua4-2', {
	holes: 0,
	semaphore: 0,
	x: 1,
	y: 40
});

g.addNode('rua3-com-rua4-1', {
	holes: 0,
	semaphore: 0,
	x: 3,
	y: 40
});

g.addNode('rua4-5', {
	holes: 0,
	semaphore: 0,
	x: 6,
	y: 40
});

g.addNode('rua4-4', {
	holes: 0,
	semaphore: 0,
	x: 9,
	y: 40
});

g.addNode('rua4-3', {
	holes: 0,
	semaphore: 0,
	x: 11,
	y: 40
});

g.addNode('rua4-2', {
	holes: 0,
	semaphore: 0,
	x: 13,
	y: 40
});

g.addNode('rua4-1', {
	holes: 0,
	semaphore: 0,
	x: 15,
	y: 40
});

g.addNode('conexao4513', {
	holes: 0,
	semaphore: 0,
	x: 16,
	y: 40
});

g.addNode('rua5-5', {
	holes: 0,
	semaphore: 0,
	x: 18,
	y: 40
});

g.addNode('rua5-4', {
	holes: 0,
	semaphore: 0,
	x: 20,
	y: 40
});

g.addNode('rua5-3', {
	holes: 0,
	semaphore: 0,
	x: 22,
	y: 40
});

g.addNode('rua5-2', {
	holes: 0,
	semaphore: 0,
	x: 24,
	y: 40
});

g.addNode('rua5-1', {
	holes: 0,
	semaphore: 0,
	x: 27,
	y: 40
});

g.addNode('rua5-com-rua6-3', {
	holes: 0,
	semaphore: 0,
	x: 29,
	y: 40
});

g.addNode('rua5-com-rua6-2', {
	holes: 0,
	semaphore: 0,
	x: 31,
	y: 40
});

g.addNode('rua5-com-rua6-1', {
	holes: 0,
	semaphore: 0,
	x: 31,
	y: 38
});

g.addNode('rua6-1', {
	holes: 0,
	semaphore: 0,
	x: 31,
	y: 36
});

g.addNode('rua6-2', {
	holes: 0,
	semaphore: 0,
	x: 31,
	y: 34
});

g.addNode('rua6-3', {
	holes: 0,
	semaphore: 0,
	x: 31,
	y: 32
});

g.addNode('rua6-4', {
	holes: 0,
	semaphore: 0,
	x: 31,
	y: 30
});

g.addNode('rua6-5', {
	holes: 0,
	semaphore: 0,
	x: 31,
	y: 28
});

g.addNode('conexao67', {
	holes: 0,
	semaphore: 0,
	x: 31,
	y: 26
});

g.addNode('rua7-1', {
	holes: 0,
	semaphore: 0,
	x: 31,
	y: 24
});

g.addNode('rua7-2', {
	holes: 0,
	semaphore: 0,
	x: 31,
	y: 22
});

g.addNode('rua7-3', {
	holes: 0,
	semaphore: 0,
	x: 31,
	y: 20
});

g.addNode('rua7-4', {
	holes: 0,
	semaphore: 0,
	x: 31,
	y: 18
});

g.addNode('rua7-5', {
	holes: 0,
	semaphore: 0,
	x: 31,
	y: 16
});

g.addNode('rua14-5', {
	holes: 0,
	semaphore: 0,
	x: 3,
	y: 26
});

g.addNode('rua14-4', {
	holes: 0,
	semaphore: 0,
	x: 5,
	y: 26
});

g.addNode('rua14-3', {
	holes: 0,
	semaphore: 0,
	x: 7,
	y: 26
});

g.addNode('rua14-2', {
	holes: 0,
	semaphore: 0,
	x: 11,
	y: 26
});

g.addNode('rua14-1', {
	holes: 0,
	semaphore: 0,
	x: 14,
	y: 26
});

g.addNode('conexao121315', {
	holes: 0,
	semaphore: 0,
	x: 16,
	y: 26
});

g.addNode('rua15-5', {
	holes: 0,
	semaphore: 0,
	x: 18,
	y: 26
});

g.addNode('rua15-4', {
	holes: 0,
	semaphore: 0,
	x: 20,
	y: 26
});

g.addNode('rua15-3', {
	holes: 0,
	semaphore: 0,
	x: 22,
	y: 26
});

g.addNode('rua15-2', {
	holes: 0,
	semaphore: 0,
	x: 26,
	y: 26
});

g.addNode('rua15-1', {
	holes: 0,
	semaphore: 0,
	x: 29,
	y: 26
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