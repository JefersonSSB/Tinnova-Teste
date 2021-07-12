const multiplo3ou5 = (limite) => {
    let soma = 0;
    for(let i=1; i <= limite; i++){
        //Verifica se é multiplo de 3 ou 5
        if(i%3 == 0 || i%5 == 0) soma = soma + i;
    }
    return soma;
}

console.log(multiplo3ou5(10));