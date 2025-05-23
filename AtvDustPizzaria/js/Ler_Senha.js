function lerSenha() {
  var senha = document.getElementById("minha-senha").value;
  return senha;
}

// Pega o elemento de input de senha com o ID correto "minha-senha"
// Verifica se o tipo do input é "password" (senha oculta)
// Muda para "text" para mostrar a senha
// Altera o ícone para indicar que a senha está visível

document.getElementById("icone-senha").addEventListener("click", function () {
  var senhaInput = document.getElementById("minha-senha");
  if (senhaInput.type === "password") {
    senhaInput.type = "text";
    this.textContent = "👁️‍🗨️";
  } else {
    senhaInput.type = "password";
    this.textContent = "👁️";
  }
});

// Evento focus detecta quando clica no campo para colocar a senha
// Evento blur detecta quando clico fora do campo ou uso tab e verifica se o campo está vazio
// style.display: Acessa a propriedade CSS display de um elemento via JavaScript para controlar sua visibilidade
// "none": Remove completamente o elemento da página. Ele fica invisível e não ocupa espaço no layout, como se não existisse.
// "inline": Faz o elemento se comportar como inline (ocupa só o espaço do conteúdo, sem quebras de linha)

document.getElementById("minha-senha").addEventListener("focus", function () {
  document.getElementById("icone-chave").style.display = "none";
});

document.getElementById("minha-senha").addEventListener("blur", function () {
  if (this.value === "") {
    document.getElementById("icone-chave").style.display = "inline";
  }
});
