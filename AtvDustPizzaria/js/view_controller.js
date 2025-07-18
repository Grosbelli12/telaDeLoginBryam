// --- CONTROLES DE VISIBILIDADE DAS TELAS ---
const loginContainer = document.querySelector('.login-container');
const loginView = document.getElementById('login-view');
const signupView = document.getElementById('signup-view');

function showSignupView() {
    loginView.style.display = 'none';
    signupView.style.display = 'block';
    loginContainer.classList.add('signup-active'); // Adiciona a classe para inverter
}

function showLoginView() {
    signupView.style.display = 'none';
    loginView.style.display = 'block';
    loginContainer.classList.remove('signup-active'); // Remove a classe para voltar ao normal
}