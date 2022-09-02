const formulario = document.querySelector("form");

function formularioEnviado(resposta) {
    if(resposta.ok) {
        formulario.innerHTML = "<p class='font-2-l' style='grid-column: 1/-1; padding: 1rem; border-radius: 4px; background: #f7f7f7;' ><span style='#317A00'>Mensagem enviada</span>, em breve entraremos em contato</p>";
    } else {
    formulario.innerHTML = "<p class='font-2-l' style='grid-column: 1/-1; padding: 1rem; border-radius: 4px; background: #f7f7f7;' ><span style='#E00000'>Erro no envio</span>, você pode enviar diretamente para o nosso e-mail em contato.universoo@gmail.com</p>";
}
}

function enviarFormulario(event) {
    event.preventDefault();
    const botao = document.querySelector("form button");
    botao.disabled = true;
    botao.innerText = "Enviando..."
    
    const data = new FormData(formulario);
    fetch('./enviar.php', {
        method: 'POST',
        body: data,
    }).then(formularioEnviado);
}


formulario.addEventListener("submit", enviarFormulario);