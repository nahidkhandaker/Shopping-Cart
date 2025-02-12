// Cart Module
const CartModule = {
    cart: [],

    addToCart(productId) {
        const product = ProductsModule.getProductById(productId);
        if (!product) return;
        
        const cartItem = this.cart.find(item => item.productId === productId);

        if (cartItem) {
            cartItem.quantity++;
        } else {
            this.cart.push({
                productId,
                quantity: 1,
                name: product.name,
                price: product.price,
                image: product.image
            });
        }

        this.saveCart();
        UIModule.updateCartUI();
    },

    updateQuantity(productId, change) {
        const cartItem = this.cart.find(item => item.productId === productId);
        if (cartItem) {
            const newQuantity = cartItem.quantity + change;
            if (newQuantity > 0) {
                cartItem.quantity = newQuantity;
            } else {
                this.cart = this.cart.filter(item => item.productId !== productId);
            }
            this.saveCart();
            UIModule.updateCartUI();
        }
    },

    clearCart() {
        this.cart = [];
        this.saveCart();
        UIModule.updateCartUI();
    },

    getTotal() {
        return this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    },

    getItemCount() {
        return this.cart.reduce((total, item) => total + item.quantity, 0);
    },

    saveCart() {
        localStorage.setItem('shoppingCart', JSON.stringify(this.cart));
    },

    loadCart() {
        const savedCart = localStorage.getItem('shoppingCart');
        if (savedCart) {
            this.cart = JSON.parse(savedCart);
        }
    }
};

// Global functions for HTML onclick events
function addToCart(productId) {
    CartModule.addToCart(productId);
}

function updateQuantity(productId, change) {
    CartModule.updateQuantity(productId, change);
}

function clearCart() {
    CartModule.clearCart();
}

function checkout() {
    UIModule.showCheckout();
}