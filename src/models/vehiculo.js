const mongoose = require("mongoose");

const vehiculoSchema = mongoose.Schema({
    vin:{
        type: String,
        required: true,
    },
    county:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    state:{
        type: String,
        required: true
    },
    postal_code:{
        type: Number,
        required: true
    },
    model_year:{
        type: Number,
        required: true
    },
    make:{
        type: String,
        required: true
    },
    model:{
        type: String,
        required:true
    },
    electric_vehicle_type:{
        type: String,
        required: true
    },
    clean_alternative_fuel_vehicle:{
        type: String,
        required: true
    },
    electric_range:{
        type: Number,
        required: true
    },
    base_msrp:{
        type: Number,
        required: true
    },
    legislative_district:{
        type: Number,
        required: true
    },
    dol_vehicle_id:{
        type: Number,
        required: true
    },
    vehicle_location: {
        type: String,
        required: true
    },
    electric_utility:{
        type: String,
        required: true
    },
    census_2020_track:{
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Vehiculo',vehiculoSchema);