const products = [
    {
        name: "Glow Renewal Serum",
        price: "20.99",
        reviews: "2550+ Reviews",
        image: "https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=735"
    }
]

function loadProducts() {
    const grid = document.getElementById('productsGrid')
    products.forEach((product) => {
        const card = document.createElement('div')
        card.className = 'product-card'
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-name">${product.name}</div>
            <div class="product-reviews">
                <span class="stars">★★★★☆</span>
                <span>${product.reviews}</span>
            </div>
            <div class="product-price">${product.price}</div>
            <button class="add-btn">Add to Cart</button>
        
        ` 
        grid.appendChild(card)
    })
}


document.addEventListener('DOMContentLoaded', loadProducts)