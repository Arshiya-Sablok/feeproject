// js/script.js

const foodData = {
    restaurants: [
        { id: 1, name: "Pizza House", cuisine: "Italian, Fast Food", rating: 4.4, time: "30 min", img: "photos/Pizza House.jpeg", priceRate: "₹400 for two", location: "Connaught Place" },
        { id: 2, name: "Burger Empire", cuisine: "American, Fast Food", rating: 4.6, time: "25 min", img: "photos/Burger Empire.jpeg", priceRate: "₹300 for two", location: "Cyber Hub" },
        { id: 3, name: "Dragon Wok", cuisine: "Chinese, Asian", rating: 4.2, time: "40 min", img: "photos/Dragon Wok.jpeg", priceRate: "₹500 for two", location: "Vasant Kunj" },
        { id: 4, name: "Spice Junction", cuisine: "Indian, Biryani", rating: 4.8, time: "35 min", img: "photos/Spice Junction.jpeg", priceRate: "₹600 for two", location: "Chandni Chowk" },
        { id: 5, name: "Taco Fiesta", cuisine: "Mexican, Tacos", rating: 4.5, time: "20 min", img: "photos/Taco Fiesta.jpeg", priceRate: "₹350 for two", location: "Saket" },
        { id: 6, name: "Healthy Corner", cuisine: "Salads, Healthy", rating: 4.9, time: "15 min", img: "photos/Healthy Corner.jpeg", priceRate: "₹450 for two", location: "Hauz Khas" }
    ],
    dishes: [
        // Pizza House (id 1) - Categories: pizza
        { id: 101, name: "Farmhouse Paneer Pizza", price: 199, restaurantId: 1, restaurant: "Pizza House", type: "veg", category: "pizza", img: "photos/Farmhouse Paneer Pizza.jpeg", description: "Delightful combination of onion, capsicum, tomato & paneer" },
        { id: 102, name: "Margherita Pizza", price: 149, restaurantId: 1, restaurant: "Pizza House", type: "veg", category: "pizza", img: "photos/Margherita Pizza.jpeg", description: "Classic cheese pizza with a perfect crust." },
        { id: 103, name: "Pepperoni Pizza", price: 299, restaurantId: 1, restaurant: "Pizza House", type: "non-veg", category: "pizza", img: "photos/Pepperoni Pizza.jpeg", description: "Classic pepperoni with extra cheese" },
        { id: 104, name: "Garlic Bread", price: 99, restaurantId: 1, restaurant: "Pizza House", type: "veg", category: "sides", img: "photos/Garlic Bread.jpg", description: "Freshly baked garlic bread with herbs." },
        { id: 105, name: "Choco Lava Cake", price: 89, restaurantId: 1, restaurant: "Pizza House", type: "veg", category: "desserts", img: "photos/choco lava cake.jpg", description: "Chocolate lovers delight!" },
        { id: 106, name: "Chocolate Pastry", price: 110, restaurantId: 1, restaurant: "Pizza House", type: "veg", category: "desserts", img: "photos/chocolate pastry.jpg", description: "Rich chocolate layer pastry" },
        { id: 107, name: "Fudge Brownie", price: 130, restaurantId: 1, restaurant: "Pizza House", type: "veg", category: "desserts", img: "photos/Fudge Brownie.jpeg", description: "Warm fudge brownie" },
        { id: 108, name: "Coca Cola", price: 60, restaurantId: 1, restaurant: "Pizza House", type: "veg", category: "drinks", img: "photos/coca cola.jpeg", description: "Chilled Coke" },
        
        // Burger Empire (id 2) - Categories: burger
        { id: 201, name: "Classic Chicken Burger", price: 129, restaurantId: 2, restaurant: "Burger Empire", type: "non-veg", category: "burger", img: "photos/Classic Chicken Burger.jpeg", description: "Our signature chicken patty with fresh lettuce and mayo." },
        { id: 202, name: "Veg Maharaja Mac", price: 149, restaurantId: 2, restaurant: "Burger Empire", type: "veg", category: "burger", img: "photos/Veg Maharaja Mac.jpeg", description: "Double veg patty with cheese." },
        { id: 203, name: "Crispy Fries", price: 79, restaurantId: 2, restaurant: "Burger Empire", type: "veg", category: "sides", img: "photos/crispy fries.jpeg", description: "Golden crispy french fries." },
        { id: 204, name: "Vanilla Ice Cream", price: 90, restaurantId: 2, restaurant: "Burger Empire", type: "veg", category: "desserts", img: "photos/vanilla ice cream.webp", description: "Classic vanilla bean ice cream" },
        { id: 205, name: "Choco Chip Cookie", price: 50, restaurantId: 2, restaurant: "Burger Empire", type: "veg", category: "desserts", img: "photos/choco chip cookie.webp", description: "Fresh baked cookie" },
        { id: 206, name: "Cold Coffee", price: 120, restaurantId: 2, restaurant: "Burger Empire", type: "veg", category: "drinks", img: "photos/Cold Coffee.png", description: "Creamy iced coffee" },
        { id: 207, name: "Pepsi", price: 60, restaurantId: 2, restaurant: "Burger Empire", type: "veg", category: "drinks", img: "photos/pepsi.jpeg", description: "Chilled Pepsi" },

        // Dragon Wok (id 3) - Categories: chinese
        { id: 301, name: "Veg Hakka Noodles", price: 180, restaurantId: 3, restaurant: "Dragon Wok", type: "veg", category: "chinese", img: "photos/Veg Hakka Noodles.jpeg", description: "Stir-fried noodles with assorted vegetables." },
        { id: 302, name: "Schezwan Noodles", price: 190, restaurantId: 3, restaurant: "Dragon Wok", type: "veg", category: "chinese", img: "photos/Schezwan Noodles.jpeg", description: "Spicy schezwan style noodles" },
        { id: 303, name: "Chicken Chilli Garlic Noodles", price: 220, restaurantId: 3, restaurant: "Dragon Wok", type: "non-veg", category: "chinese", img: "photos/chicken chilli garlic noodles.jpg", description: "Noodles tossed in garlic and chilli oil" },
        { id: 304, name: "Chilli Chicken", price: 220, restaurantId: 3, restaurant: "Dragon Wok", type: "non-veg", category: "chinese", img: "photos/chilli chicken.jpg", description: "Spicy and tangy tossed chicken." },
        { id: 305, name: "Spring Rolls", price: 150, restaurantId: 3, restaurant: "Dragon Wok", type: "veg", category: "chinese", img: "photos/spring roll.jpg", description: "Deep fried crispy rolls." },

        // Spice Junction (id 4) - Categories: indian
        { id: 401, name: "Chole Bhature", price: 150, restaurantId: 4, restaurant: "Spice Junction", type: "veg", category: "indian", img: "photos/chole bhature.avif", description: "Authentic Delhi style Chole Bhature" },
        { id: 402, name: "Rajma Chawal", price: 140, restaurantId: 4, restaurant: "Spice Junction", type: "veg", category: "indian", img: "photos/rajma chawal.jpg", description: "Comforting Rajma with steamed rice" },
        { id: 403, name: "Hyderabadi Biryani", price: 249, restaurantId: 4, restaurant: "Spice Junction", type: "non-veg", category: "indian", img: "photos/hyderabadi chicken biryani.png", description: "Authentic dum biryani." },
        { id: 404, name: "Paneer Butter Masala", price: 260, restaurantId: 4, restaurant: "Spice Junction", type: "veg", category: "indian", img: "photos/paneer butter masala.webp", description: "Rich and creamy paneer gravy" },
        { id: 405, name: "Tandoori Naan", price: 40, restaurantId: 4, restaurant: "Spice Junction", type: "veg", category: "indian", img: "photos/tandoori naan.png", description: "Fresh from tandoor" },
        { id: 406, name: "Masala Tea", price: 40, restaurantId: 4, restaurant: "Spice Junction", type: "veg", category: "drinks", img: "photos/masala tea.webp", description: "Indian spiced tea" },

        // Taco Fiesta (id 5)
        { id: 501, name: "Crunchy Taco", price: 120, restaurantId: 5, restaurant: "Taco Fiesta", type: "non-veg", category: "mexican", img: "photos/Crunchy Taco.jpeg", description: "Crispy shell taco with meat and cheese." },
        { id: 502, name: "Veggie Burrito", price: 180, restaurantId: 5, restaurant: "Taco Fiesta", type: "veg", category: "mexican", img: "photos/Veggie Burrito.jpeg", description: "Packed with beans, rice, and fresh veggies." },

        // Healthy Corner (id 6) - Categories: healthy
        { id: 601, name: "Super Bowl Salad", price: 250, restaurantId: 6, restaurant: "Healthy Corner", type: "veg", category: "healthy", img: "photos/Super Bowl Salad.jpeg", description: "Avocado, quinoa, and greens." },
        { id: 602, name: "Greek Caesar Salad", price: 220, restaurantId: 6, restaurant: "Healthy Corner", type: "veg", category: "healthy", img: "photos/Greek Caesar Salad.jpeg", description: "Fresh veggies with caesar dressing" },
        { id: 603, name: "Fruit Salad", price: 180, restaurantId: 6, restaurant: "Healthy Corner", type: "veg", category: "healthy", img: "photos/Fruit Salad.jpeg", description: "Seasonal fresh fruits mix" },
        { id: 604, name: "Green Smoothie", price: 150, restaurantId: 6, restaurant: "Healthy Corner", type: "veg", category: "healthy", img: "photos/Green Smoothie.jpg", description: "Spinach, apple, and celery detox." },
        { id: 605, name: "Lemon Tea", price: 50, restaurantId: 6, restaurant: "Healthy Corner", type: "veg", category: "drinks", img: "photos/Lemon Tea.jpeg", description: "Refreshing lemon tea" }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    // 1. Dark Mode System
    const darkModeToggle = document.getElementById('darkModeToggle');
    const root = document.documentElement;
    
    if (localStorage.getItem('theme') === 'dark') {
        root.setAttribute('data-theme', 'dark');
        if(darkModeToggle) darkModeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }

    darkModeToggle?.addEventListener('click', () => {
        if (root.getAttribute('data-theme') === 'dark') {
            root.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
            darkModeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
        } else {
            root.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            darkModeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
        }
    });

    // 2. Mobile Menu System
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle?.addEventListener('click', () => {
        if(navLinks) {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            if(navLinks.style.display === 'flex') {
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.background = 'var(--surface-color)';
                navLinks.style.flexDirection = 'column';
                navLinks.style.padding = '20px';
                navLinks.style.boxShadow = 'var(--shadow-md)';
            }
        }
    });

    // Handle scroll for navbar glassmorphism enhancement
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('.navbar');
        if(nav) {
            if (window.scrollY > 50) {
                nav.style.boxShadow = 'var(--shadow-sm)';
            } else {
                nav.style.boxShadow = 'none';
            }
        }
    });

    // Dynamic Menu Load
    if(window.location.pathname.includes('menu.html')) {
        loadMenu();
    }
});

// Load Specific Restaurant Menu securely
function loadMenu() {
    const params = new URLSearchParams(window.location.search);
    let restId = parseInt(params.get('id'));
    if(!restId || isNaN(restId)) restId = 1; // Default to Pizza House

    const restaurant = foodData.restaurants.find(r => r.id === restId);
    if(!restaurant) return;

    // Update Headers
    document.getElementById('restName').textContent = restaurant.name;
    document.getElementById('restCuisine').textContent = restaurant.cuisine + ' • ' + restaurant.priceRate;
    document.getElementById('restLocation').innerHTML = `<i class="fa-solid fa-location-dot"></i> ${restaurant.location}`;
    document.getElementById('restRating').innerHTML = `<i class="fa-solid fa-star"></i> ${restaurant.rating}`;

    // Get Dishes
    let restDishes = foodData.dishes.filter(d => d.restaurantId === restId);
    
    // Filter logic
    const menuFilter = document.getElementById('menuFilter');
    if (menuFilter) {
        if (menuFilter.value === 'veg') {
            restDishes = restDishes.filter(d => d.type === 'veg');
        } else if (menuFilter.value === 'non_veg') {
            restDishes = restDishes.filter(d => d.type === 'non-veg');
        }
    }

    // Sort logic
    const menuSort = document.getElementById('menuSort');
    if (menuSort) {
        if (menuSort.value === 'low_to_high') {
            restDishes.sort((a, b) => a.price - b.price);
        } else if (menuSort.value === 'high_to_low') {
            restDishes.sort((a, b) => b.price - a.price);
        }
    }

    const container = document.getElementById('menuItemsContainer');
    
    if(!container) return;
    container.innerHTML = '';
    
    restDishes.forEach(d => {
        const typeClass = d.type === 'veg' ? 'success' : 'danger';
        container.innerHTML += `
            <div class="menu-item">
                <div class="menu-item-info" style="position:relative;">
                    <span class="type-icon ${d.type}" style="position:static; display:inline-flex; width:16px; height:16px; border:1px solid var(--${typeClass}-color); border-radius:2px; font-size:10px; margin-bottom:8px;"><i class="fa-solid fa-circle" style="color:var(--${typeClass}-color);"></i></span>
                    <h4>${d.name}</h4>
                    <span class="price">₹${d.price}</span>
                    <p style="color:var(--text-secondary); font-size:0.85rem; margin-top:8px;">${d.description}</p>
                </div>
                <div class="menu-item-img" style="position:relative;">
                    <button class="wishlist-dish-btn" data-id="${d.id}" onclick="wishlistSystem.toggleDish(${d.id})" style="position:absolute; top:8px; right:8px; background:white; border:none; border-radius:50%; width:28px; height:28px; display:flex; align-items:center; justify-content:center; box-shadow:0 2px 5px rgba(0,0,0,0.2); cursor:pointer; z-index:2; color:var(--text-secondary);"><i class="fa-regular fa-heart"></i></button>
                    <img src="${d.img}" alt="${d.name}">
                    <button class="menu-item-btn" onclick="cartSystem.addItem(${d.id}, '${d.name.replace(/'/g, "\\'")}', ${d.price}, '${d.img}')">ADD</button>
                </div>
            </div>
        `;
    });
    
    setTimeout(() => { if(window.wishlistSystem) window.wishlistSystem.updateButtons(); }, 100);
}

function showToast(message) {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>${message}</span>`;
    
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add('hide');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}
window.foodData = foodData;
window.showToast = showToast;

function safeParseLocalStorage(key, defaultVal) {
    try {
        const val = localStorage.getItem(key);
        return val ? JSON.parse(val) : defaultVal;
    } catch (e) {
        console.error("Error parsing localStorage key " + key, e);
        return defaultVal;
    }
}

const wishlistSystem = {
    wishlist: safeParseLocalStorage('restaurant_wishlist', []),
    dishWishlist: safeParseLocalStorage('dish_wishlist', []),
    
    toggle: function(id) {
        if (this.wishlist.includes(id)) {
            this.wishlist = this.wishlist.filter(wId => wId !== id);
            showToast("Removed from Favorites");
        } else {
            this.wishlist.push(id);
            showToast("Added to Favorites");
        }
        localStorage.setItem('restaurant_wishlist', JSON.stringify(this.wishlist));
        this.updateButtons();
        if (typeof renderFavorites === 'function') renderFavorites();
        if (typeof renderProfileFavorites === 'function') renderProfileFavorites();
    },

    toggleDish: function(id) {
        if (this.dishWishlist.includes(id)) {
            this.dishWishlist = this.dishWishlist.filter(wId => wId !== id);
            showToast("Dish removed from Favorites");
        } else {
            this.dishWishlist.push(id);
            showToast("Dish added to Favorites");
        }
        localStorage.setItem('dish_wishlist', JSON.stringify(this.dishWishlist));
        this.updateButtons();
        if (typeof renderFavorites === 'function') renderFavorites();
        if (typeof renderProfileFavorites === 'function') renderProfileFavorites();
    },

    updateButtons: function() {
        document.querySelectorAll('.wishlist-btn').forEach(btn => {
            const id = parseInt(btn.dataset.id);
            if (this.wishlist.includes(id)) {
                btn.innerHTML = '<i class="fa-solid fa-heart"></i>';
                btn.style.color = 'var(--danger-color)';
            } else {
                btn.innerHTML = '<i class="fa-regular fa-heart"></i>';
                btn.style.color = 'var(--text-secondary)';
            }
        });
        
        document.querySelectorAll('.wishlist-dish-btn').forEach(btn => {
            const id = parseInt(btn.dataset.id);
            if (this.dishWishlist.includes(id)) {
                btn.innerHTML = '<i class="fa-solid fa-heart"></i>';
                btn.style.color = 'var(--danger-color)';
            } else {
                btn.innerHTML = '<i class="fa-regular fa-heart"></i>';
                btn.style.color = 'var(--text-secondary)';
            }
        });
    }
};
window.wishlistSystem = wishlistSystem;

const profileSystem = {
    addresses: safeParseLocalStorage('foodies_addresses', []),
    payments: safeParseLocalStorage('foodies_payments', []),
    
    saveAddresses: function() {
        localStorage.setItem('foodies_addresses', JSON.stringify(this.addresses));
    },
    
    savePayments: function() {
        localStorage.setItem('foodies_payments', JSON.stringify(this.payments));
    },

    addAddress: function(label, detail) {
        this.addresses.push({ id: Date.now(), label, detail });
        this.saveAddresses();
        if(typeof renderAddresses === 'function') renderAddresses();
    },
    
    removeAddress: function(id) {
        this.addresses = this.addresses.filter(a => a.id !== id);
        this.saveAddresses();
        if(typeof renderAddresses === 'function') renderAddresses();
    },

    addPayment: function(type, detail) {
        this.payments.push({ id: Date.now(), type, detail });
        this.savePayments();
        if(typeof renderPayments === 'function') renderPayments();
    },

    removePayment: function(id) {
        this.payments = this.payments.filter(p => p.id !== id);
        this.savePayments();
        if(typeof renderPayments === 'function') renderPayments();
    }
};
window.profileSystem = profileSystem;
