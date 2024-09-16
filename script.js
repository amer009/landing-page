  document.addEventListener('DOMContentLoaded', function () {
    const incrementBtn = document.getElementById('incrementBtn');
    const decrementBtn = document.getElementById('decrementBtn');
    const quantityInput = document.getElementById('productQuantity');
    const modalImage = document.getElementById('modalImage');
    const payBtn = document.getElementById('payBtn');
    
    // Evento de clic para el botón "Agregar"
    document.querySelectorAll('[data-bs-target="#cartModal"]').forEach(button => {
      button.addEventListener('click', function () {
        const imageUrl = this.getAttribute('data-image');
        modalImage.src = imageUrl; // Actualiza la imagen en el modal
      });
    });
    
    incrementBtn.addEventListener('click', function () {
      let currentValue = parseInt(quantityInput.value);
      quantityInput.value = currentValue + 1;
    });
    
    decrementBtn.addEventListener('click', function () {
      let currentValue = parseInt(quantityInput.value);
      if (currentValue > 1) {
        quantityInput.value = currentValue - 1;
      }
    });
    
    payBtn.addEventListener('click', function () {
      // Aquí puedes agregar la lógica para procesar el pago
      alert('Procesando el pago...');
    });

    const cartModal = document.getElementById('cartModal');
    cartModal.addEventListener('hidden.bs.modal', function () {
      quantityInput.value = 1; // Reinicia la cantidad a 1
    });
  });
