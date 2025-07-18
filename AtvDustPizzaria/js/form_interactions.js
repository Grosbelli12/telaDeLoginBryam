// --- FUNÇÃO PARA MOSTRAR/OCULTAR SENHA ---
function togglePasswordVisibility(inputId, toggleId) {
    const passwordInput = document.getElementById(inputId);
    const toggleIcon = document.getElementById(toggleId);

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleIcon.textContent = "👁️‍🗨️"; 
    } else {
        passwordInput.type = "password";
        toggleIcon.textContent = "👁️"; 
    }
}

// Adiciona o evento de clique para cada ícone de olho
document.getElementById("toggle-login-password").addEventListener("click", function () {
    togglePasswordVisibility("minha-senha-login", "toggle-login-password");
});

document.getElementById("toggle-signup-password").addEventListener("click", function () {
    togglePasswordVisibility("minha-senha-signup", "toggle-signup-password");
});

document.getElementById("toggle-confirm-password").addEventListener("click", function () {
    togglePasswordVisibility("confirma-senha", "toggle-confirm-password");
});

// --- LÓGICA PARA ESCONDER ÍCONES AO FOCAR NOS CAMPOS ---
document.querySelectorAll('.camposDeTexto').forEach(input => {
    const icon = input.parentElement.querySelector('.input-icon-abs');
    if (icon) {
        input.addEventListener('focus', () => {
            icon.style.display = 'none';
        });
        input.addEventListener('blur', () => {
            if (input.value === '') {
                icon.style.display = 'inline';
            }
        });
    }
});