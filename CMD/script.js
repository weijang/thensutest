async function fetchProducts() {
    const response = await fetch('/products');
    const products = await response.json();
    const productsDiv = document.getElementById('products');
    productsDiv.innerHTML = '';
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p>Price: $${product.price}</p>
            <p>Stock: ${product.stock}</p>
        `;
        productsDiv.appendChild(productDiv);
    });
}

document.addEventListener('DOMContentLoaded', fetchProducts);