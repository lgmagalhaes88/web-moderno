function Carro(velocidadeMaxima = 20, delta = 5){

    let velocidadeAtual = 0;

    this.acelelar = function () {
        if(velocidadeAtual + delta < velocidadeMaxima){
            velocidadeAtual += delta;
        } else {
            velocidadeAtual = velocidadeMaxima;
        }
    }

    this.getVelocidadeAtual = function () {
        return velocidadeAtual;
    }
}

const uno = new Carro;
uno.acelelar();
console.log(uno.getVelocidadeAtual());

const ferrari = new Carro(350, 20);
ferrari.acelelar();
ferrari.acelelar();
ferrari.acelelar();
console.log(ferrari.getVelocidadeAtual());