const express = require("express");
const vehiculoSchema = require("../models/vehiculo");

const router = express.Router();

// crear vehiculo
router.post("/CargaDatosHT5", (req, res) => {
    const vehiculo = vehiculoSchema(req.body);
    vehiculo
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

// obtener todos los vehiculos
router.get("/CargaDatosHT5", (req, res) => {
    vehiculoSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});
   
// obtener vehiculo
router.get("/CargaDatosHT5/:id", (req, res) => {
    const { id } = req.params;
    vehiculoSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

// update vehiculo
router.put("/CargaDatosHT5/:id", (req, res) => {
    const { id } = req.params;
    const{ vin, county, city, state, postal_code, model_year, make, model,
    electric_vehicle_type, clean_alternative_fuel_vehicle, electric_range,
    base_msrp, legislative_district, dol_vehicle_id, vehicle_location, electric_utility, census_2020_track} = req.body;
    vehiculoSchema
    .updateOne({ _id: id},{ $set: {vin, county, city, state, postal_code, model_year, make, model,
        electric_vehicle_type, clean_alternative_fuel_vehicle, electric_range,
        base_msrp, legislative_district, dol_vehicle_id, vehicle_location, electric_utility, census_2020_track} })
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

//delete vehiculo
router.delete("/CargaDatosHT5/:id", (req, res) => {
    const { id } = req.params;
    vehiculoSchema
    .deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});


module.exports = router;