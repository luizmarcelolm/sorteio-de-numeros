//variáveis digitadas pelo usuário
var minimo = document.getElementById('minimo')
var maximo = document.getElementById('maximo')
var quantidade = document.getElementById('quantidade')
var numeros=[];

        //função que cria números aleatórios
        const gerarNumeros = () => {
            while(numeros.length < parseInt(quantidade.value)){
                var aleatorio = Math.floor(Math.random()*(parseInt(maximo.value) - parseInt(minimo.value)) + parseInt(minimo.value));
                if(numeros.indexOf(aleatorio) == -1)
                numeros.push(aleatorio);
            }
            document.querySelector('#sorteio > span1').textContent = numeros;
            acharSegundoMaior();
        } 

        //função de acha o segundo maior número da lista
        const acharSegundoMaior = () =>{
        var maior = numeros[0]; 
         

                for (i = 1; i < numeros.length; i++) {                  
                    var atual = numeros[i];
                    if( maior > atual)
                       maior = maior;
                       auxiliar = atual;
                    if( maior < atual)
                       maior = atual;
                }        
                    document.querySelector('#segundoMaior > span2').textContent = maior;
        }













/*
 const acharSegundoMaior = () =>{
        var maior = numeros[0];

                for ( i = 1; i < numeros.length; i++) {
                    var posicao = numeros[i];
                    if( posicao > maior)
                    maior = posicao;
                }
                    document.querySelector('#segundoMaior > span2').textContent = maior;
        }


//evento de click, pegando valores dos inputs
const button = document.getElementById('gerador');
button.addEventListener('click', function(){
    const quantidade = parseInt(document.getElementById('quantidade').value)
    const minimo = parseInt(document.getElementById('minimo').value)
    const maximo = parseInt(document.getElementById('maximo').value)

    //solução encontrada devido quando é gerada a lista o número máximo digitado pelo usuário nunca aparece
    var maximo1 = maximo +1;
    var numeros=[];

    // fórmula para gerar quantidade de números entre mínimo e máximo 
    while(numeros.length < quantidade){
        var aleatorio = Math.floor(Math.random()*(maximo1 - minimo)+minimo);
        if(numeros.indexOf(aleatorio) == -1)
        numeros.push(aleatorio);
    }
            //mostra na tela no span1 a lista de números sorteados
            document.querySelector('#sorteio > span1').textContent = numeros;

            //para achar o segundo múmero maior da lista usei o comando "sort" para colocar em ordem crescente a lista
             var crescente = numeros.sort();

            //utilizei essa função para pegar o penultimo números da lista crescente que corresponde ao segundo maior número da lista
             var segundoMaior = crescente[crescente.length-2];

             //mostra na tela o segundo maior número
            document.querySelector('#segundoMaior > span2').textContent = segundoMaior;
    
});

*/

