const pilotos = ["Vettel", 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop() //Remove o ultimo
pilotos.push("Piloto 1") //Adiciona um piloto
pilotos.shift() //Remove o primeiro
pilotos.unshift('Hamilton') // Adiciona um piloto na primeira posição

// Splice remove e adiciona elementos

// adiciona dois elementos a partir do indice 2 do array
pilotos.splice(2, 0, "Bottas", 'Massa')

//remover 
pilotos.splice(3, 1)

// Cria um novo array a partir do segundo indice
const pilotosNovo = pilotos.slice(2)

// Cria um novo array pegando os itens 1,2,3 do array
const pilotosNovos2 = pilotos.slice(1, 4)


(function() {
    function IDGenerator() {
    
        this.length = 8;
        this.timestamp = +new Date;
        
        var _getRandomInt = function( min, max ) {
           return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
        }
        
        this.generate = function() {
            var ts = this.timestamp.toString();
            var parts = ts.split( "" ).reverse();
            var id = "";
            
            for( var i = 0; i < this.length; ++i ) {
               var index = _getRandomInt( 0, parts.length - 1 );
               id += parts[index];	 
            }
            
            return id;
        }

        
    }
    
    
    document.addEventListener( "DOMContentLoaded", function() {
       var btn = document.querySelector( "#generate" ),
           output = document.querySelector( "#output" );
           
       btn.addEventListener( "click", function() {
           var generator = new IDGenerator();
           output.innerHTML = generator.generate();
           
       }, false); 
        
    });
    
    
})();
