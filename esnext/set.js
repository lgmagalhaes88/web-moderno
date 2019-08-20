// Não aceita repetição e não indexa

const times = new Set();
times.add('Vasco')
times.add('São Paulo').add('Palmeiras')
times.add('Flamengo')

// Set { 'Vasco', 'São Paulo', 'Palmeiras', 'Flamengo' }
console.log(times);

// 4
console.log(times.size);

// true
console.log(times.has('Flamengo'))


const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']

const nomesSet = new Set(nomes)

// Set { 'Raquel', 'Lucas', 'Julia' }
console.log(nomesSet)