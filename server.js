const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Conexión a la base de datos MongoDB
mongoose.connect('mongodb://localhost/alquiler-coches', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Conexión a la base de datos exitosa');
}).catch((err) => {
  console.error('Error al conectar a la base de datos:', err);
});

// Definir esquema y modelo para usuarios
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

const User = mongoose.model('User', userSchema);

// Rutas para la API
app.post('/api/register', (req, res) => {
  const { name, email, password } = req.body;
  
  const newUser = new User({ name, email, password });
  newUser.save()
    .then(() => res.status(201).send('Usuario registrado con éxito'))
    .catch(err => res.status(500).send('Error al registrar usuario'));
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
