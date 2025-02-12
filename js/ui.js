// UI Module
const UIModule = {
    async initialize() {
        await ProductsModule.loadProducts();
        CartModule.loadCart();
        this.displayProducts();
        this.updateCartUI();
        this.setupEventListeners();
    },

    displayProducts() {
        const container = document.getElementById('productsContainer');
        container.innerHTML = ProductsModule.products.map(product => `
            <div class="col-md-6 col-lg-3 mb-4">
                <div class="card h-100">
                    <img src="${product.image}" class="card-img-top product-image" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.description}</p>
                        <p class="card-text"><strong>$${product.price.toFixed(2)}</strong></p>
                        <button class="btn btn-primary" onclick="addToCart(${product.id})">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    },

    updateCartUI() {
        const cartCount = document.getElementById('cartCount');
        const cartItems = document.getElementById('cartItems');
        const cartTotal = document.getElementById('cartTotal');

        // Update cart count
        cartCount.textContent = CartModule.getItemCount();

        // Update cart items
        if (CartModule.cart.length) {
            cartItems.innerHTML = CartModule.cart.map(item => `
                <div class="d-flex align-items-center mb-3">
                    <img src="${item.image}" class="cart-item-image me-3" alt="${item.name}">
                    <div class="flex-grow-1">
                        <h6>${item.name}</h6>
                        <div class="d-flex align-items-center">
                            <button class="btn btn-sm btn-secondary me-2" onclick="updateQuantity(${item.productId}, -1)">-</button>
                            <span>${item.quantity}</span>
                            <button class="btn btn-sm btn-secondary ms-2" onclick="updateQuantity(${item.productId}, 1)">+</button>
                        </div>
                    </div>
                    <div class="ms-3 text-end">
                        <div>$${(item.price * item.quantity).toFixed(2)}</div>
                        <small class="text-muted">$${item.price.toFixed(2)} each</small>
                    </div>
                </div>
            `).join('');
        } else {
            cartItems.innerHTML = '<p>Your cart is empty</p>';
        }

        // Update total
        cartTotal.textContent = CartModule.getTotal().toFixed(2);
    },

    showCheckout() {
        if (CartModule.cart.length === 0) {
            alert('Your cart is empty!');
            return;
        }

        const checkoutSummary = document.getElementById('checkoutSummary');
        checkoutSummary.innerHTML = `
            <h6>Order Summary:</h6>
            ${CartModule.cart.map(item => `
                <div class="d-flex justify-content-between mb-2">
                    <span>${item.name} (${item.quantity})</span>
                    <span>$${(item.price * item.quantity).toFixed(2)}</span>
                </div>
            `).join('')}
            <hr>
            <div class="d-flex justify-content-between">
                <strong>Total:</strong>
                <strong>$${CartModule.getTotal().toFixed(2)}</strong>
            </div>
            <div class="mt-4">
                <button id="completeOrder" class="btn btn-success w-100">Complete Order</button>
            </div>
        `;

        const cartModal = bootstrap.Modal.getInstance(document.getElementById('cartModal'));
        cartModal.hide();
        const checkoutModal = new bootstrap.Modal(document.getElementById('checkoutModal'));
        checkoutModal.show();
        
        // Add event listener for the complete order button
        document.getElementById('completeOrder').addEventListener('click', this.completeOrder);
    },
    
    completeOrder() {
        alert('Thank you for your order! It has been processed successfully.');
        CartModule.clearCart();
        const checkoutModal = bootstrap.Modal.getInstance(document.getElementById('checkoutModal'));
        checkoutModal.hide();
    },
    
    setupEventListeners() {
        // Responsive cart modal for mobile
        const cartModal = document.getElementById('cartModal');
        cartModal.addEventListener('shown.bs.modal', () => {
            if (window.innerWidth < 768) {
                cartModal.querySelector('.modal-dialog').classList.add('modal-fullscreen');
            } else {
                cartModal.querySelector('.modal-dialog').classList.remove('modal-fullscreen');
            }
        });
        
        // Close checkout when clicking outside
        const checkoutModal = document.getElementById('checkoutModal');
        checkoutModal.addEventListener('hidden.bs.modal', () => {
            const cartModalVisible = document.querySelector('.modal.show');
            if (!cartModalVisible) {
                document.body.classList.remove('modal-open');
                document.querySelector('.modal-backdrop')?.remove();
            }
        });
    }
};

// Initialize the application when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => UIModule.initialize());