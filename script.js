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