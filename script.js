// Seu número de WhatsApp (com código do país, sem símbolos ou espaços)
const whatsappNumber = "5547996156320";

// Função para criar o link do WhatsApp com os dados do formulário
function sendMessageToWhatsApp(name, email, message) {
    // Cria a mensagem que será enviada para o WhatsApp
    const formattedMessage = `Nome: ${name}%0AEmail: ${email}%0AMensagem: ${message}`;
    
    // Cria o link do WhatsApp
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(formattedMessage)}`;

    // Redireciona para o link do WhatsApp
    window.open(whatsappLink, '_blank');
}

// Adiciona o evento de envio do formulário
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Pega os dados dos campos
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Envia para o WhatsApp
    sendMessageToWhatsApp(name, email, message);
});
