function lerEmail() {
    var email = document.getElementById("meuEmail").value; // Pegando o valor do input
    return email; 
}
function lerSenha(){
    var senha = document.getElementById("minhaSenha").value;
    return senha;

}

document.getElementById("mostrarSenha").addEventListener('click', function() {
    var senhaInput = document.getElementById('minhaSenha');
    if (senhaInput.type === 'password') {
        senhaInput.type = 'text';
        this.textContent = '👁️‍🗨️';
    } else {
        senhaInput.type = 'password';
        this.textContent = '👁️';
    }
    });



function cadastroFeito() {
    var botao = document.getElementById("btnEntrar");

    botao.addEventListener("click", function() {
        var emailDigitado = lerEmail();
        var senhaDigitada = lerSenha(); 
        alert(" E-mail: " + emailDigitado + "\n Senha: "+senhaDigitada )

        console.log("Email: " + emailDigitado + " Senha: " + senhaDigitada)
    });
    
}
cadastroFeito();
