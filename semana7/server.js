const express = require('express');
const app = express();

app.use(express.json());

// Array en memoria para almacenar los reportes de manera temporal
let reportes = [];

// Endpoint GET para consultar todos los reportes registrados
app.get('/reportes', (req, res) => {
  res.json(reportes);
});

// Endpoint POST para registrar un nuevo reporte
app.post('/reportes', (req, res) => {
  const reporte = {
    id: reportes.length + 1,
    tipo: req.body.tipo,
    descripcion: req.body.descripcion
  };

  reportes.push(reporte);

  res.json({
    mensaje: "Reporte registrado",
    reporte: reporte
  });
});

app.listen(3000, () => {
  console.log('Servidor ejecutándose en puerto 3000');
});