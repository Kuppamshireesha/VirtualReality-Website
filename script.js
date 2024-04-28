document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");
  
    addToCartButtons.forEach(button => {
      button.addEventListener("click", function () {
        const name = this.getAttribute("data-name");
        const price = parseFloat(this.getAttribute("data-price"));
        const image = this.getAttribute("data-image");
  
        // Create cart item object
        const item = { name, price, image };
  
        // Add item to cart in local storage
        let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        cartItems.push(item);
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
      });
    });
  });
  