//Par nome/valor 
const saudacao = 'opa'; //constexto léxico 1

function exec() {
    const saudacao = 'Falaaa';
    return saudacao;
}

//Objetos são grupos alinhados de pares nome/valor

const Cliente = {
    nome: 'fulano',
    idade: 150,
    endereco: {
        rua: 'josé silva',
        numero: 10
    }
};

console.log(Cliente);