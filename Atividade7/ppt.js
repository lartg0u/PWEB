function jogar(escolhausuario){
    
    var numero = Math.floor(Math.random*3);
    var escolha_pc
    if(numero == 0){
        escolha_pc = "pedra";
    }

    if(numero == 1){
        escolha_pc = "papel";
    }

    if(numero == 2){
        escolha_pc = "tesoura";
    }

    
    if(escolhausuario === escolha_pc){
        alert("Empate!");
    }
    if((escolhausuario == "pedra" && escolha_pc == "tesoura")||(escolhausuario == "papel" && escolha_pc == "pedra") || (escolhausuario == "tesoura" && escolha_pc == "papel")){
        alert("Vitória! Você escolheu " + escolhausuario+ "e o computador escolheu " +escolha_pc);
    }
    else{
        alert("Derrota! Você escolheu "+ escolhausuario+" e o computador escolheu "+escolha_pc);
    }
    return 0;
}
