const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/user');
const Car = require('./models/car');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

mongoose.connect('mongodb://localhost/tarea_final_js', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Conexión a la base de datos exitosa');
}).catch((err) => {
  console.error('Error al conectar a la base de datos:', err);
});

app.post('/api/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newUser = new User({ name, email, password });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: 'Error al registrar usuario', error });
  }
});

app.post('/api/cars', async (req, res) => {
  try {
    const { brand, model, year, mileage, pricePerDay } = req.body;
    const newCar = new Car({ brand, model, year, mileage, pricePerDay });
    await newCar.save();
    res.status(201).json(newCar);
  } catch (error) {
    res.status(500).json({ message: 'Error al agregar coche', error });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
