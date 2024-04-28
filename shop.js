document.addEventListener("DOMContentLoaded", function () {
    // Load cart items from local storage
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  
    // Render cart items
    renderCartItems(cartItems);
  
    // Function to render cart items
    function renderCartItems(items) {
      const cartItemsContainer = document.querySelector(".cart-items");
      cartItemsContainer.innerHTML = "";
  
      items.forEach(item => {
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
          <img src="${item.image}" alt="${item.name}" class="cart-item-image">
          <div class="cart-item-details">
            <h3>${item.name}</h3>
            <p>Price: $${item.price}</p>
          </div>
        `;
        cartItemsContainer.appendChild(cartItem);
      });
    }
  });
  