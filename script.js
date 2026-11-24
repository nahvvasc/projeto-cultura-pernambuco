
document.addEventListener("DOMContentLoaded", () => {
    const whatsapp = document.querySelector(".whatsapp-flutuante");

    if (whatsapp) {
        whatsapp.addEventListener("click", () => {
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
