var nome = prompt("Qual é o seu nome?");
let notas = []
var media = 0;

for(var cont = 0; cont <=3; cont++){
    notas[cont] = parseFloat(prompt("Digite uma nota de 0 a 10"));
    media+= notas[cont];
}

media = media/notas.length;

alert(nome+ ", sua média é: " + media);

