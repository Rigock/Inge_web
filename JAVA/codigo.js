var rigo = {
    nombre: 'Rigo',
    apellido: 'Garavito',
    altura: 1.80,
    creditos: 36
}
var juan = {
    nombre: 'Juan',
    apellido: 'Morales',
    altura: 1.70,
    creditos: 32
}
var lorena = {
    nombre: 'Lorena',
    apellido: 'Morales',
    altura: 1.60,
    creditos: 30
}
var pedro = {
    nombre: 'Pedro',
    apellido: 'Perez',
    altura: 1.75,
    creditos: 40
}
var sara = {
    nombre: 'Sara',
    apellido: 'Diaz',
    altura: 1.70,
    creditos: 39
}

var personas = [rigo, juan, lorena, pedro, sara]

for (var i = 0; i < personas.length; i++) {
    var estudiante = personas[i]
        //console.log(`${estudiante.nombre} mide ${estudiante.altura} mts`)
    console.log(`${estudiante.nombre} tiene ${estudiante.creditos} creditos`)
}
/*
function masAlto(estudiante) {
    return estudiante.altura > 1.75
}
function pasarACMS(estudiante) {
    estudiante.altura = estudiante.altura * 100
    return estudiante.altura
}

*/

const masAlto = ({ altura }) => altura > 1.69

const masCredi = ({ creditos }) => creditos > 35

const pasarACMS = altura => ({

    ...estudiante,
    altura: estudiante.altura *= 100


})


var estudianteCredito = personas.filter(masCredi);

var estudianteAlto = personas.filter(masAlto);

var personaCMS = personas.map(pasarACMS)

//console.log(estudianteCredito)
console.log(personas)