

function gerar() {
    var quantidade = parseInt(document.getElementById('quantidade').value)
    var minimo = parseInt(document.getElementById('minimo').value)
    var maximo = parseInt(document.getElementById('maximo').value)
    var numeros = [];

    while(numeros.length < quantidade){
        var aleatorio = Math.floor(Math.random()*(maximo - minimo)+minimo);
        if(numeros.indexOf(aleatorio) == -1)
        numeros.push(aleatorio);
    }
    document.querySelector('#sorteio > span1').textContent = numeros;
    achaSegundoMaior();
}

function achaSegundoMaior(){
    document.querySelector('#segundoMaior > span2').textContent = minimo;
}








/*
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

