let notas = [1.0, 7.0, 5.8, 10, 20];

let notasBaixas = [];

for(let i in notas){
    if(notas[i] < 7){
        notasBaixas.push(notas[i]);
    }
}

console.log(notasBaixas);

notasBaixas = notas.filter(function(nota){
  return nota < 7;
});

console.log(notasBaixas);