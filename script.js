document.addEventListener("DOMContentLoaded", () => {
    const whatsapp = document.querySelector(".whatsapp-flutuante");

    if (whatsapp) {
        whatsapp.addEventListener("click", (event) => {
            event.preventDefault();
            const mensagem = encodeURIComponent(
                "Olá! Gostaria de saber mais sobre o projeto Encantos de Pernambuco."
            );

            window.open(
                `https://wa.me/5581985506668?text=${mensagem}`,
                "_blank",
                "noopener,noreferrer"
            );
        });
    }
});

function enviarWhatsApp(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const assunto = document.getElementById("assunto-contato").value;
    const mensagem = document.getElementById("mensagem").value.trim();

    if (!nome || !mensagem) {
        alert("Por favor, preencha seu nome e sua mensagem.");
        return;
    }

    const telefone = "5581985506668";
    const texto = `Olá! Meu nome é *${nome}*.\n*Assunto:* ${assunto}\n*Mensagem:* ${mensagem}`;
    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank", "noopener,noreferrer");
}