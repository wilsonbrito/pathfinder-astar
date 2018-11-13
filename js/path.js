let createGraph = require('ngraph.graph');
let g = createGraph();
let path = require('ngraph.path')

//var nodes = require('./nodes.json')
fetch('../js/nodes.json').then(function (res) {
	return res.json()
}).then(function (data) {
	data.nodes.forEach(function (node) {

		// Validar se contém buracos e vai deixar a rua vermelha
		if(node.holes > 0){
			document.querySelector('#' + node.rua).setAttribute('fill', 'red')
		}

		// Validar se contém semaforos e vai deixar a rua azul
		if(node.semaphore > 0){
			document.querySelector('#' + node.rua).setAttribute('fill', 'blue')
		}

		// Validar se contém semaforo e também os buracos e vai pintar de amarelo
		if(node.semaphore > 0 && node.holes > 0){
			document.querySelector('#' + node.rua).setAttribute('fill', 'yellow')
		}

		// Criação de nós
		g.addNode(node.rua, {
			holes: node.holes,
			semaphore: node.semaphore,
			x: node.x,
			y: node.y
		})
	})
})

//Criação de Links
fetch('../js/links.json').then(function (res) {
	return res.json()
}).then(function (data) {
	data.links.forEach(function (link) {
		g.addLink(link.from, link.to)
	})
})

//Quando clico na rua vai selecionar para o from e para o to nos inputs de texto.
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

// Calculo de distancia e até mesmo heuristica
let pathFinder = path.aStar(g, {
	distance(from, to, link) {
		let dx = from.data.x - to.data.x
		let dy = from.data.y - to.data.y
		let distance = Math.sqrt(dx * dx + dy * dy)
		arredondado = parseFloat(distance.toFixed(3))
		totaldistance += arredondado
	},
	heuristic(from, to, link) {
		let holes = from.data.holes - to.data.holes
		let semaphore = from.data.semaphore - to.data.semaphore
		let calc = Math.sqrt(holes * holes + semaphore * semaphore)
		result = parseFloat(calc.toFixed(1))
		return result
	}
});

// Função para encontrar a melhor rota e pintar
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
