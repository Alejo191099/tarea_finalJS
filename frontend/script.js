document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
      });
      if (response.ok) {
        alert('Usuario registrado correctamente');
      } else {
        alert('Error al registrar usuario');
      }
    } catch (error) {
      console.error('Error al enviar solicitud:', error);
      alert('Error al enviar solicitud');
    }
  });
  
  document.getElementById('carForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const brand = document.getElementById('brand').value;
    const model = document.getElementById('model').value;
    const year = document.getElementById('year').value;
    const mileage = document.getElementById('mileage').value;
    const pricePerDay = document.getElementById('pricePerDay').value;
  
    try {
      const response = await fetch('/api/cars', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ brand, model, year, mileage, pricePerDay })
      });
      if (response.ok) {
        alert('Coche agregado correctamente');
      } else {
        alert('Error al agregar coche');
      }
    } catch (error) {
      console.error('Error al enviar solicitud:', error);
      alert('Error al enviar solicitud');
    }
  });
  