// script.js
function enterShowroom() {
    document.getElementById('showroom').style.display = 'flex';
    document.querySelector('.landing-page').style.display = 'none';
  }
  
  function viewDetails(productId) {
    // Dummy implementation for product details
    const productDetails = {
      1: {
        name: 'Product 1',
        description: 'Description of Product 1',
        // Add more details as needed
      },
      2: {
        name: 'Product 2',
        description: 'Description of Product 2',
        // Add more details as needed
      }
      // Add details for more products
    };
  
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('product-details');
    modalContent.innerHTML = `
      <h3>${productDetails[productId].name}</h3>
      <p>${productDetails[productId].description}</p>
      <!-- Add more details here -->
    `;
    modal.style.display = 'block';
  }
  
  function closeModal() {
    document.getElementById('modal').style.display = 'none';
  }
  