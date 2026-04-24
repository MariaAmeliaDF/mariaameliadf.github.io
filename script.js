// script.js LIMPO E FUNCIONAL PARA SUA PÁGINA

document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector(".form-opiniao");
    const textarea = document.querySelector("textarea");
    const button = document.querySelector("button");

    // ENVIO DO FORMULÁRIO
    form.addEventListener("submit", function(e){
        e.preventDefault();

        const mensagem = textarea.value.trim();

        if(mensagem === ""){
            alert("Escreva sua opinião primeiro 💚");
            return;
        }

        // feedback visual
        button.innerText = "Enviando...";
        button.disabled = true;

        setTimeout(() => {
            alert("Mensagem enviada com sucesso 💚");

            textarea.value = "";
            button.innerText = "Enviar";
            button.disabled = false;

        }, 1000);
    });

    // EFEITO NO BOTÃO
    button.addEventListener("mouseenter", () => {
        button.style.transform = "scale(1.05)";
    });

    button.addEventListener("mouseleave", () => {
        button.style.transform = "scale(1)";
    });

    // AUTO RESIZE TEXTAREA
    textarea.addEventListener("input", () => {
        textarea.style.height = "180px";
        textarea.style.height = textarea.scrollHeight + "px";
    });

});
