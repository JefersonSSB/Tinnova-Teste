const v = [5, 3, 2, 4, 7, 1, 0, 6]

// Variável auxiliar para troca de posição
let aux;

/* Considerando que após a primeira iteração a última posição
   estará ordenada, percorremos 'tamanhoDoVetor' - 1           */ 
for(let j=0; j < v.length; j++) {
    for(let i=0; i < v.length; i++ ) {
        //Compara o par com o próximo
        if ( v[i] > v[i+1] ) {
            aux = v[i]; 
            v[i] = v[i+1];
            v[i+1] = aux;
        }
    }
}

console.log(v)
