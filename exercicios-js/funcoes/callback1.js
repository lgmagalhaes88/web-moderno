const fabricantes = ['jose', 'carlin', 'tio'];

function imprimir(nome, indice){
    console.log(`${indice +1}. ${nome}`);
}

fabricantes.forEach(imprimir);