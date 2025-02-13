// Products Module
const ProductsModule = {
    products: [],

    async loadProducts() {
        try {
            const response = await fetch('../data/products.json');
            this.products = await response.json();
            return this.products;
        } catch (error) {
            console.error('Error loading products:', error);
            // Fallback to sample data if fetch fails
            this.products = [
                {
                    id: 1,
                    name: "Laptop",
                    description: "High-performance laptop with latest specifications",
                    price: 999.99,
                    image: "assets/High-performance laptop with latest specifications.jpg"
                },
                {
                    id: 2,
                    name: "Smartphone",
                    description: "Latest smartphone with advanced camera features",
                    price: 599.99,
                    image: "assets/Latest smartphone with advanced camera features.jpg"
                },
                {
                    id: 3,
                    name: "Headphones",
                    description: "Wireless noise-canceling headphones",
                    price: 99.99,
                    image: "assets/Wireless noise-canceling headphones.jpeg"
                },
                {
                    id: 4,
                    name: "Smartwatch",
                    description: "Fitness tracking smartwatch with heart rate monitor",
                    price: 299.99,
                    image: "assets/Fitness tracking smartwatch with heart rate monitor.jpg"
                }
            ];
            return this.products;
        }
    },

    getProductById(id) {
        return this.products.find(product => product.id === id);
    }
};
