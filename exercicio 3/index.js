//Método recursivo
const fatorialRecursivo = (numero) => {
    if(numero == 1) return numero;
    return numero * fatorial(numero-1);
}

//Método tradicional
const fatorial = (numero) => {
    if(numero == 0) return 1;

    let resultado = numero;

    for(let i=1; i < numero ; i++){
        resultado = resultado * i;
        // console.log(numero)
    }
    return resultado;
}

console.log("Fatorial de 5 -> 5!\n")
console.log("Resultado método tradicional: " + fatorial(5));
console.log("Resultado método recursivo: " + fatorialRecursivo(5));