// --- CONTROLES DE VISIBILIDADE DAS TELAS ---
const loginView = document.getElementById('login-view');
const signupView = document.getElementById('signup-view');

function showSignupView() {
    loginView.style.display = 'none';
    signupView.style.display = 'block';
}

function showLoginView() {
    signupView.style.display = 'none';
    loginView.style.display = 'block';
}