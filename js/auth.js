// js/auth.js

const authSystem = {
    user: null,

    init() {
        const savedUser = localStorage.getItem('foodies_user');
        if (savedUser) {
            try {
                this.user = JSON.parse(savedUser);
            } catch(e) {
                this.user = null;
            }
        }
        this.updateAuthUI();
    },

    register(name, phone, address, pincode, email) {
        // In a real app we'd call an API and save a token. Here we simulate it.
        this.user = {
            name: name || 'User',
            phone: phone,
            address: address || '',
            pincode: pincode || '',
            email: email || '',
            avatarInitials: name ? name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase() : 'U'
        };
        localStorage.setItem('foodies_user', JSON.stringify(this.user));
        this.updateAuthUI();
        
        if (window.showToast) {
            window.showToast(`Welcome, ${this.user.name}!`);
        }
    },

    login(email, password) {
        // Simulate login based on email
        // If they haven't registered, we just create a temp profile or assume error
        const savedUser = localStorage.getItem('foodies_user');
        if (savedUser) {
            try {
                this.user = JSON.parse(savedUser);
            } catch(e) {
                this.user = null;
            }
            if (window.showToast) {
                window.showToast(`Welcome back, ${this.user.name}!`);
            }
            this.updateAuthUI();
            return true;
        } else {
            // No user in storage, fallback to a mock user just to demonstrate
            this.register('Guest User', '9999999999', 'Demo Address', '110001', email);
            return true;
        }
    },

    logout() {
        this.user = null;
        localStorage.removeItem('foodies_user');
        this.updateAuthUI();
        if (window.showToast) {
            window.showToast("Logged out successfully");
        }
        // Redirect to home if on a protected page
        if (window.location.pathname.includes('profile.html') || window.location.pathname.includes('checkout.html')) {
            window.location.href = 'index.html';
        }
    },

    isLoggedIn() {
        return this.user !== null;
    },

    getUser() {
        return this.user;
    },

    updateAuthUI() {
        // Find login links in nav and update them
        const loginLinks = document.querySelectorAll('.login-btn');
        loginLinks.forEach(link => {
            if (this.isLoggedIn()) {
                link.innerHTML = `<i class="fa-regular fa-user"></i> ${this.user.name.split(' ')[0]}`;
                // Optional: change href to profile
                link.href = "profile.html";
            } else {
                link.innerHTML = `<i class="fa-regular fa-user"></i> Login`;
                link.href = "login.html";
            }
        });
    }
};

// Initialize early so the UI updates
document.addEventListener('DOMContentLoaded', () => {
    authSystem.init();
});

// Make global
window.authSystem = authSystem;

