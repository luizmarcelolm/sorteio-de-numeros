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
            document.querySelector('#sorteio > span1').textContent = "Números criados " + numeros;
            acharSegundoMaior();
            novaLista();
        } 

        function novaLista() {   
            document.getElementById("gerar").style.display = "none";           
        }

        //função de acha o segundo maior número da lista
        const acharSegundoMaior = () =>{
        var maior = numeros[0];
        var segundoMaior = 0; 
             
                for (i = 1; i < numeros.length; i++) {                  
                    var atual = numeros[i];

                    if (maior > atual && segundoMaior < atual){
                        maior = maior; 
                        segundoMaior = atual;
                    }

                    if (maior > atual && segundoMaior > atual){
                        segundoMaior = segundoMaior;
                        maior  = maior;      
                    }

                    if (maior < atual && segundoMaior < atual){
                        segundoMaior = maior;
                        maior = atual;       
                    }
                }        
                document.querySelector('#segundoMaior > span2').textContent = "Segundo maior número da lista é " + segundoMaior;
        }

