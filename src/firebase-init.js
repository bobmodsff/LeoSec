// Firebase Configuration and Authentication Setup
console.log('Firebase init script loaded');

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyDydHQwNNLCBdRTvUktz7dSYeLhtx8W51c",
  authDomain: "leosec.firebaseapp.com",
  projectId: "leosec",
  storageBucket: "leosec.firebasestorage.app",
  messagingSenderId: "794052919195",
  appId: "1:794052919195:web:cc257dfc2147fde89f6b3e",
  measurementId: "G-QX4800D2LK"
};

// Initialize Firebase when it's available
function waitForFirebase() {
  if (typeof firebase === 'undefined' || typeof firebase.auth === 'undefined') {
    console.log('Waiting for Firebase to load...');
    setTimeout(waitForFirebase, 100);
    return;
  }

  console.log('Firebase loaded! Initializing...');
  
  try {
    // Check if already initialized
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
      console.log('Firebase initialized successfully');
    }
  } catch (e) {
    console.error('Firebase initialization error:', e);
  }

  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  // Configure Google Provider
  provider.addScope('profile');
  provider.addScope('email');

  // Global Google Sign-In Handler
  window.handleGoogleSignIn = function() {
    console.log('Google Sign-In clicked');
    
    auth.signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        console.log("✅ Usuário autenticado:", user.email);
        
        // Store user data
        localStorage.setItem('user_data', JSON.stringify({
          name: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          uid: user.uid
        }));
        
        // Update UI
        updateUIAfterLogin(user);
        
        // Close modal
        const modal = document.getElementById('login-modal');
        if (modal) {
          modal.classList.add('hidden');
        }
        
        // Show notification
        showLoginNotification(user.displayName);
      })
      .catch((error) => {
        console.error("❌ Erro ao autenticar:", error);
        if (error.code === 'auth/popup-blocked') {
          alert('Pop-up bloqueado. Por favor, permita pop-ups neste site.');
        } else if (error.code === 'auth/cancelled-popup-request') {
          console.log('Login cancelado pelo usuário');
        } else {
          alert("Erro ao fazer login: " + error.message);
        }
      });
  };

  // Global Sign Out Handler
  window.handleSignOut = function() {
    console.log('Sign out clicked');
    
    auth.signOut()
      .then(() => {
        localStorage.removeItem('user_data');
        console.log("Usuário desconectado");
        location.reload();
      })
      .catch((error) => {
        console.error("Erro ao desconectar:", error);
      });
  };

  // Global Guest Sign-In Handler (anonymous)
  window.handleGuestSignIn = function() {
    console.log('Guest sign-in clicked');
    auth.signInAnonymously()
      .then((result) => {
        const user = result.user;
        console.log("✅ Convidado autenticado uid:", user.uid);

        // store minimal user data
        localStorage.setItem('user_data', JSON.stringify({
          name: 'Convidado',
          uid: user.uid,
          guest: true
        }));

        updateUIAfterLogin(user);

        const modal = document.getElementById('login-modal');
        if (modal) modal.classList.add('hidden');

        showLoginNotification('Convidado');
      })
      .catch((error) => {
        console.error('❌ Erro no login como convidado:', error);
        alert('Não foi possível cadastrar como convidado: ' + error.message);
      });
  };

  // Update UI After Login
  function updateUIAfterLogin(user) {
    const loginBtn = document.getElementById('login-btn');
    if (loginBtn) {
      if (user.photoURL) {
        loginBtn.innerHTML = `<img src="${user.photoURL}" alt="Avatar" class="w-6 h-6 rounded-full" /> ${user.displayName}`;
      } else {
        loginBtn.innerHTML = `👤 ${user.displayName}`;
      }
      loginBtn.onclick = window.handleSignOut;
      loginBtn.classList.add('logged-in');
    }
  }

  // Show Notification
  function showLoginNotification(userName) {
    const notification = document.createElement('div');
    notification.className = 'fixed top-4 right-4 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50';
    notification.innerHTML = `✅ Bem-vindo, ${userName}!`;
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.style.opacity = '0';
      notification.style.transition = 'opacity 0.5s';
      setTimeout(() => notification.remove(), 500);
    }, 3000);
  }

  // Monitor Auth State Changes
  auth.onAuthStateChanged((user) => {
    if (user) {
      console.log("✅ Usuário já autenticado:", user.email);
      updateUIAfterLogin(user);
    } else {
      console.log("⚪ Nenhum usuário autenticado");
    }
  });

  console.log('Firebase handlers ready!');
}

// Start initialization
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', waitForFirebase);
} else {
  waitForFirebase();
}
