let cartCount = 0;

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        alert('تمت إضافة الكتاب إلى السلة!');
        updateCartCount();
    });
});

function updateCartCount() {
    if (!document.querySelector('.cart-counter')) {
        const counter = document.createElement('div');
        counter.classList.add('cart-counter');
        counter.style.position = 'fixed';
        counter.style.top = '10px';
        counter.style.right = '10px';
        counter.style.backgroundColor = '#4CAF50';
        counter.style.color = 'white';
        counter.style.padding = '0.5rem 1rem';
        counter.style.borderRadius = '5px';
        document.body.appendChild(counter);
    }
    document.querySelector('.cart-counter').textContent = `السلة: ${cartCount}`;
}

