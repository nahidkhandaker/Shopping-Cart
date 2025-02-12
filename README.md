# Shopping Cart Project

A responsive shopping cart implementation using HTML, CSS, Bootstrap, and JavaScript.

## Table of Contents
- [Features](#features)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Technical Details](#technical-details)
- [Dependencies](#dependencies)

## Features

### User Interface
- Responsive product grid display
- Dynamic cart management
- Real-time price calculations
- Interactive quantity controls
- Checkout process
- Mobile-friendly design

### Core Functionality
- Add/remove products to cart
- Update product quantities
- Clear cart option
- Dynamic total calculation
- Checkout summary
- Error handling
- Data persistence

## Project Structure

```
shopping-cart/
├── index.html          # Main HTML file
├── README.md           # Project documentation
├── css/
│   └── styles.css      # Custom styles
├── js/
│   ├── products.js     # Product management
│   ├── cart.js        # Cart operations
│   └── ui.js          # UI updates and display
└── data/
    └── products.json   # Product data
```

### File Descriptions

#### `index.html`
- Main application structure
- Bootstrap integration
- Modal components
- Script and style references

#### `css/styles.css`
- Custom styling for components
- Responsive design rules
- Animation effects
- Cart styling

#### `js/products.js`
- Product data management
- Product loading functionality
- Product retrieval methods

#### `js/cart.js`
- Cart state management
- Add/remove operations
- Quantity updates
- Total calculations

#### `js/ui.js`
- DOM manipulation
- UI updates
- Event handlers
- Display logic

#### `data/products.json`
- Product catalog
- Product details
- Pricing information


## Usage

### Adding Products
1. Browse the product grid
2. Click "Add to Cart" on desired items
3. View cart by clicking the cart icon

### Managing Cart
1. Adjust quantities using +/- buttons
2. Remove items by decreasing quantity to zero
3. Clear cart using the "Clear Cart" button

### Checkout Process
1. Review items in cart
2. Click "Checkout" to view order summary
3. Confirm order details

## Technical Details

### Modules

#### Products Module
- Handles product data loading
- Manages product retrieval
- Implements error handling for data loading

#### Cart Module
- Manages cart state
- Handles quantity updates
- Calculates totals
- Implements data validation

#### UI Module
- Updates display
- Manages modal interactions
- Handles user input
- Implements responsive design

### Error Handling
- Prevents negative quantities
- Validates product data
- Handles API/JSON loading errors
- Provides fallback data

## Dependencies

- Bootstrap 5.3.0
  - Grid system
  - Modal components
  - Styling utilities

### CDN Links
```html
<!-- Bootstrap CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">

<!-- Bootstrap JS Bundle -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request


