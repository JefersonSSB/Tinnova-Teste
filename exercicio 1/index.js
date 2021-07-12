class Voto {

    constructor() {
        this.totalDeEleitores = 1000;
        this.valido = 800;
        this.branco = 150;
        this.nulo = 50;
    }

    getTotalDeEleitores() {
        return this.totalDeEleitores;
    }

    getValido() {
        return this.valido;
    }

    getBranco() {
        return this.branco;
    }

    getNulo() {
        return this.nulo;
    }

    percentual(opcao) {
        // Regra de 3
        let porcentagem = opcao * 100 / this.totalDeEleitores;

        return porcentagem;
    }
}

const instanciaVoto = new Voto();

percentualBranco = instanciaVoto.percentual(instanciaVoto.getBranco());
percentualValido = instanciaVoto.percentual(instanciaVoto.getValido());
percentualNulo = instanciaVoto.percentual(instanciaVoto.getNulo());

console.log("Percentual de votos:\n")
console.log("Brancos: " + percentualBranco + "%");
console.log("Válidos: " + percentualValido + "%");
console.log("Nulos: " + percentualNulo + "%");