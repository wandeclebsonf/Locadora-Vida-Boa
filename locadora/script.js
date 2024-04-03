
function confirmarDados() {
    const loginInput = document.getElementById('login').value;
    const senhaInput = document.getElementsByName('senha')[0].value;
}
    
    // Verifica se os campos de login e senha estão preenchidos
    if (loginInput && senhaInput) {
        alert('Login: ' + loginInput + 'Senha: ' + senhaInput);
    } else {
        alert('Por favor, preencha todos os campos.');
    }
     if (loginInput && senhaInput) {
        alert('login: '+ loginInput + 'senha: ' + senhaInput);
    } else{
        alert('Seja bem vindo.')
    }

// Adiciona um ouvinte de evento para o botão de confirmar dados
const confirmarButton = document.getElementById('botão');
confirmarButton.addEventListener('click', confirmarDados);