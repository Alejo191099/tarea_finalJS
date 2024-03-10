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
        alert('Usuario registrado con éxito');
        // Redirigir al usuario a otra página o realizar otra acción
      } else {
        alert('Error al registrar usuario');
      }
    } catch (error) {
      console.error('Error al enviar solicitud:', error);
      alert('Error al enviar solicitud');
    }
  });
  