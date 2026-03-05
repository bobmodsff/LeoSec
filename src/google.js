// ==================== GOOGLE LOGIN ====================

// Configurações do Google OAuth
const GOOGLE_CLIENT_ID = "YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com";

// Função para inicializar Google Sign-In
function initializeGoogleSignIn() {
    if (window.google && window.google.accounts) {
        google.accounts.id.initialize({
            client_id: GOOGLE_CLIENT_ID,
            callback: handleCredentialResponse
        });

        // Renderizar botão de login
        const loginButton = document.getElementById('google-signin-button');
        if (loginButton) {
            google.accounts.id.renderButton(
                loginButton,
                {
                    theme: 'dark',
                    size: 'large',
                    text: 'signin_with'
                }
            );
        }
    }
}

// Callback quando usuário faz login
function handleCredentialResponse(response) {
    const token = response.credential;
    
    // Decodificar JWT para pegar informações do usuário
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
        atob(base64)
            .split('')
            .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
            .join('')
    );

    const userData = JSON.parse(jsonPayload);
    
    console.log('✅ Login bem-sucedido!');
    console.log('Usuário:', userData);
    
    // Salvar dados do usuário
    localStorage.setItem('user_data', JSON.stringify(userData));
    
    // Mostrar notificação de sucesso
    showLoginNotification(userData.name);
    
    // Atualizar UI
    updateUIAfterLogin(userData);
}

// Função para logout
function handleSignOut() {
    google.accounts.id.disableAutoSelect();
    
    // Limpar localStorage
    localStorage.removeItem('user_data');
    
    console.log('✅ Logout realizado!');
    
    // Atualizar UI
    location.reload();
}

// Mostrar notificação de login
function showLoginNotification(userName) {
    const notification = document.createElement('div');
    notification.className = 'fixed top-4 right-4 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-[9999] animate-in';
    notification.innerHTML = `
        <div className="text-sm font-black">
            ✅ Bem-vindo, ${userName}!
        </div>
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Atualizar UI após login
function updateUIAfterLogin(userData) {
    // Encontrar o botão de login
    const loginBtn = document.getElementById('login-btn');
    if (loginBtn) {
        loginBtn.innerHTML = `
            <div class="flex items-center gap-2">
                <img src="${userData.picture}" alt="Avatar" class="w-8 h-8 rounded-full border border-red-600">
                <span class="text-xs font-black uppercase">${userData.name}</span>
            </div>
        `;
        loginBtn.onclick = () => {
            const menu = document.getElementById('user-menu');
            if (menu) {
                menu.classList.toggle('hidden');
            }
        };
    }
}

// Verificar se usuário já está logado ao carregar página
window.addEventListener('DOMContentLoaded', () => {
    const userData = localStorage.getItem('user_data');
    if (userData) {
        const user = JSON.parse(userData);
        updateUIAfterLogin(user);
    }
    
    // Inicializar Google Sign-In
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeGoogleSignIn);
    } else {
        initializeGoogleSignIn();
    }
});
