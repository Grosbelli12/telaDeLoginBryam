// --- CONTROLES DE VISIBILIDADE DAS TELAS ---
const loginContainer = document.querySelector('.login-container');
const loginView = document.getElementById('login-view');
const signupView = document.getElementById('signup-view');

function showSignupView() {
    loginView.style.display = 'none';
    signupView.style.display = 'block';
    loginContainer.classList.add('signup-active'); 
}

function showLoginView() {
    signupView.style.display = 'none';
    loginView.style.display = 'block';
    loginContainer.classList.remove('signup-active');
}