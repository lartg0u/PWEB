function retorna_maior() {
    let num1_str = prompt("Função 1 (Maior): Digite o primeiro número:");
    let num2_str = prompt("Função 1 (Maior): Digite o segundo número:");
    let num3_str = prompt("Função 1 (Maior): Digite o terceiro número:");

    let num1 = parseFloat(num1_str);
    let num2 = parseFloat(num2_str);
    let num3 = parseFloat(num3_str);


    let maior = Math.max(num1, num2, num3);

    alert("O maior número é: " + maior);
}

function ordena_crescente() {
    let num1_str = prompt("Função 2 (Ordem): Digite o primeiro número:");
    let num2_str = prompt("Função 2 (Ordem): Digite o segundo número:");
    let num3_str = prompt("Função 2 (Ordem): Digite o terceiro número:");

    let num1 = parseFloat(num1_str);
    let num2 = parseFloat(num2_str);
    let num3 = parseFloat(num3_str);


    let numeros = [num1, num2, num3];

    numeros.sort(function(a, b) {
        return a - b;
    });

    alert("Os números em ordem crescente são: " + numeros.join(", "));
}

function retorna_palindromo() {
    let texto = prompt("Função 3 (Palíndromo): Digite uma palavra ou frase:");

    let textoFormatado = texto.toUpperCase().replace(/\s/g, '');

    let textoInvertido = textoFormatado.split('').reverse().join('');

    if (textoFormatado === textoInvertido) {
        alert("'" + texto + "' É um palíndromo!");
    } else {
        alert("'" + texto + "' NÃO é um palíndromo.");
    }
}

function retorna_triangulo() {
    let lado1_str = prompt("Função 4 (Triângulo): Digite o LADO 1:");
    let lado2_str = prompt("Função 4 (Triângulo): Digite o LADO 2:");
    let lado3_str = prompt("Função 4 (Triângulo): Digite o LADO 3:");

    let l1 = parseFloat(lado1_str);
    let l2 = parseFloat(lado2_str);
    let l3 = parseFloat(lado3_str);


    if (l1 + l2 > l3 && l1 + l3 > l2 && l2 + l3 > l1) {
        
        if (l1 === l2 && l2 === l3) {
            alert("Os valores formam um Triângulo EQUILÁTERO (todos os lados iguais).");
        } else if (l1 === l2 || l1 === l3 || l2 === l3) {
            alert("Os valores formam um Triângulo ISÓSCELES (dois lados iguais).");
        } else {
            alert("Os valores formam um Triângulo ESCALENO (todos os lados diferentes).");
        }

    } else {
        alert("Os valores informados NÃO formam um triângulo.");
    }
}