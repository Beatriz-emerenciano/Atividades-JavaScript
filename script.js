

function converterDuracao() {
  //1° criar uma referência aos elementos da página
  var inTitulo = document.getElementById("inTitulo");
  var inDuracao = document.getElementById("inDuracao");
  var outTitulo = document.getElementById("outTitulo");
  var outResposta = document.getElementById("outResposta")

  //obtén conteúdos dos campos de entrada
  var titulo = inTitulo.value;
  var duracao = parseFloat(inDuracao.value);


  // arrendondar para baixo o resultado da divisão
  var horas = Math.floor(duracao / 60);
  // obtén o rsto da divisão entre dois números
  var minutos = duracao % 60;

  //altera o conteúdo dos paragráfos de resposta 
  outTitulo.textContent = titulo;
  outResposta.textContent = horas + " horas(s)  e " + minutos + "minutos(s)";
}


//cria um referência ao elemento btConverter (botão)
var btConverter = document.getElementById("btConverter");
// registra um evento associado ao botão, para garregar um função
btConverter.addEventListener("click", converterDuracao);


















