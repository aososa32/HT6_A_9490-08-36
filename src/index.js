const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const vehiculoRoutes = require("./routes/vehiculo");


// settings
const app = express();
const port = process.env.PORT || 9000;

// middleware
app.use(express.json());
app.use('/api', vehiculoRoutes)


// routes
app.get("/", (req, res) => {
    res.send("Bienvenido a API ASOSA");
  });

// mongodb connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Conectado a MongoDB Atlas"))
  .catch((error) => console.error(error));

// server listening
app.listen(port, () => console.log("Servidor escuchando a", port));