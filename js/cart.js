// js/cart.js

const cartSystem = {
    items: [],
    appliedCoupon: null,
    discountAmount: 0,
    tipAmount: 0,
    instructions: '',
    deliverySchedule: '',
    
    coupons: {
        'WELCOME50': { minAmount: 0, discount: (total) => Math.min(total * 0.5, 100), label: '50% OFF up to ₹100' },
        'FOOD50': { minAmount: 0, discount: (total) => Math.min(total * 0.5, 100), label: '50% OFF up to ₹100' },
        'FREEDEL': { minAmount: 199, discount: () => 40, label: 'Free Delivery' },
        'PARTY20': { minAmount: 0, discount: (total) => Math.round(total * 0.2), label: 'Flat 20% OFF' },
        'BOGO': { minAmount: 150, discount: (total) => Math.round(total * 0.5), label: 'Buy 1 Get 1 (50% OFF)' },
        'SAVE500': { minAmount: 500, discount: () => 100, label: 'Flat ₹100 OFF' },
        'SAVE1000': { minAmount: 1000, discount: () => 250, label: 'Flat ₹250 OFF' }
    },

    init() {
        // Load from local storage
        const saved = localStorage.getItem('foodies_cart');
        if (saved) {
            try {
                this.items = JSON.parse(saved);
            } catch(e) {
                this.items = [];
            }
        }
        
        this.tipAmount = parseInt(localStorage.getItem('foodies_cart_tip')) || 0;
        this.instructions = localStorage.getItem('foodies_cart_instructions') || '';
        this.deliverySchedule = localStorage.getItem('foodies_cart_schedule') || '';

        const savedCoupon = localStorage.getItem('foodies_cart_coupon');
        if (savedCoupon) {
            const code = savedCoupon.trim().toUpperCase();
            if(this.coupons[code]) {
                const total = this.getTotal();
                if(total >= this.coupons[code].minAmount) {
                    this.appliedCoupon = code;
                    this.discountAmount = this.coupons[code].discount(total);
                } else {
                    localStorage.removeItem('foodies_cart_coupon');
                }
            }
        }
        this.updateUI();
    },

    save() {
        localStorage.setItem('foodies_cart', JSON.stringify(this.items));
        if (this.appliedCoupon) {
            localStorage.setItem('foodies_cart_coupon', this.appliedCoupon);
        } else {
            localStorage.removeItem('foodies_cart_coupon');
        }
        localStorage.setItem('foodies_cart_tip', this.tipAmount);
        localStorage.setItem('foodies_cart_instructions', this.instructions);
        localStorage.setItem('foodies_cart_schedule', this.deliverySchedule);
        this.updateUI();
    },

    addItem(id, name, price, img, customizations = null, baseId = null) {
        const cartId = baseId ? id : id; 
        const realId = baseId ? baseId : id;
        
        const existingItem = this.items.filter(item => item.id === cartId)[0];
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.items.push({ id: cartId, realId: realId, name, price, img, quantity: 1, customizations });
        }
        this.save();
        
        // Show Toast Notification
        if (window.showToast) {
            window.showToast(`Added ${name} to cart`);
        }

        // Bump animation on cart icon
        const countBadge = document.querySelector('.cart-count');
        if (countBadge) {
            countBadge.classList.add('bump');
            setTimeout(() => countBadge.classList.remove('bump'), 300);
        }
    },

    removeItem(id) {
        this.items = this.items.filter(item => String(item.id) !== String(id));
        this.save();
    },

    updateItemCustomization(oldId, newId, newPrice, customizations) {
        const itemIndex = this.items.findIndex(item => String(item.id) === String(oldId));
        if (itemIndex > -1) {
            const item = this.items[itemIndex];
            item.id = newId;
            item.price = newPrice;
            item.customizations = customizations;
            
            const existingSame = this.items.findIndex((i, idx) => i.id === newId && idx !== itemIndex);
            if (existingSame > -1) {
                this.items[existingSame].quantity += item.quantity;
                this.items.splice(itemIndex, 1);
            }
            this.save();
        }
    },

    clearCart() {
        this.items = [];
        this.save();
    },

    saveOrder() {
        const order = {
            id: '#FD' + Math.floor(Math.random() * 100000),
            date: new Date().toLocaleDateString(),
            items: JSON.parse(JSON.stringify(this.items)),
            total: this.getFinalTotal()
        };
        const orders = this.getOrders();
        orders.unshift(order); // Add to beginning
        localStorage.setItem('foodies_orders', JSON.stringify(orders));
    },

    getOrders() {
        try {
            return JSON.parse(localStorage.getItem('foodies_orders')) || [];
        } catch(e) { return []; }
    },

    reorder(orderId) {
        const orders = this.getOrders();
        const order = orders.find(o => o.id === orderId);
        if(order) {
            this.clearCart();
            order.items.forEach(item => {
                this.items.push(item);
            });
            this.save();
            window.location.href = 'cart.html';
        }
    },

    updateQuantity(id, delta) {
        const item = this.items.filter(i => String(i.id) === String(id))[0];
        if (item) {
            item.quantity += delta;
            if (item.quantity <= 0) {
                this.removeItem(id);
            } else {
                this.save();
            }
        }
    },

    getTotal() {
        return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    },

    getCount() {
        return this.items.reduce((count, item) => count + item.quantity, 0);
    },

    applyCoupon(code) {
        if (!code) return false;
        code = code.trim().toUpperCase();
        if(this.coupons[code]) {
            const total = this.getTotal();
            if(total >= this.coupons[code].minAmount) {
                this.appliedCoupon = code;
                this.discountAmount = this.coupons[code].discount(total);
                if(window.showToast) window.showToast(`Coupon ${code} applied successfully!`);
                this.save();
                return true;
            } else {
                if(window.showToast) window.showToast(`Min order for this coupon is ₹${this.coupons[code].minAmount}`);
                return false;
            }
        }
        if(window.showToast) window.showToast('Invalid Coupon Code');
        return false;
    },
    
    removeCoupon() {
        this.appliedCoupon = null;
        this.discountAmount = 0;
        if(window.showToast) window.showToast('Coupon removed');
        this.save();
    },

    getFinalTotal() {
        const total = this.getTotal();
        if(this.appliedCoupon && total >= this.coupons[this.appliedCoupon].minAmount) {
             this.discountAmount = this.coupons[this.appliedCoupon].discount(total);
        } else {
             this.appliedCoupon = null;
             this.discountAmount = 0;
        }
        return total + 45 + this.tipAmount - this.discountAmount; // 40 delivery + 5 platform + tip
    },

    updateUI() {
        // Update total items badge
        const countElements = document.querySelectorAll('.cart-count');
        for (const el of countElements) {
            el.textContent = this.getCount();
        }

        // Update preview popup
        const previewContainer = document.getElementById('cartPreviewItems');
        const previewTotal = document.getElementById('previewTotalVal');
        
        if (previewContainer) {
            if (this.items.length === 0) {
                previewContainer.innerHTML = '<p class="empty-msg">Cart is empty</p>';
                if (previewTotal) previewTotal.textContent = '₹0';
                return;
            }

            let html = '';
            for (const item of this.items) {
                html += `
                    <div class="preview-item">
                        <span class="preview-item-name">${item.quantity}x ${item.name}</span>
                        <span class="preview-item-price">₹${item.price * item.quantity}</span>
                    </div>
                `;
            }
            previewContainer.innerHTML = html;
            if (previewTotal) {
                previewTotal.textContent = `₹${this.getTotal()}`;
            }
        }
        
        // If on cart page, run specific update
        if (window.location.pathname.includes('cart.html') && typeof updateCartPage === 'function') {
            updateCartPage();
        }
    },
    
    setTip(amount) {
        this.tipAmount = amount;
        this.save();
    },
    
    setInstructions(text) {
        this.instructions = text;
        this.save();
    },
    
    setSchedule(time) {
        this.deliverySchedule = time;
        this.save();
    },
    
    getCouponSuggestions() {
        const total = this.getTotal();
        let suggestions = [];
        for (const code in this.coupons) {
            const coupon = this.coupons[code];
            if (total < coupon.minAmount) {
                const diff = coupon.minAmount - total;
                suggestions.push({ code, diff, label: coupon.label });
            }
        }
        return suggestions;
    }
};

// Initialize when DOM loaded
document.addEventListener('DOMContentLoaded', () => {
    cartSystem.init();
});

// Make global
window.cartSystem = cartSystem;

