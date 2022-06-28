function mostrarOla(){
    //obtem o conteúdio do campo com ID
    var nome = document.getElementById("nome").value;
    //exibe o paragráfo com resposta e o nome informado 
    document.getElementById("resposta").textContent = "Olá"  +" " +  nome;
}
//cria uma referência ao botao com id mostrar 
var mostrar = document.getElementById("mostrar");
//registra para o botao mostrar um ouvinte para o evento click 
// que ao ser clicado irá chamar a função mostrarOLA()
mostrar.addEventListener("click",mostrarOla);

// armazenando a referência de um elemento em uma variável
//var inputName = document.getElementById('nome');
//var nome = inputName.value;

// ou utilizar um unico comando  para acessae diretamente a propiedade  obter e alterar
// var nome = document.getElementById("nome").value;






















