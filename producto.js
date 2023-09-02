const { MongoClient, ServerApiVersion } = require('mongodb');

const productoSchema = new mongodb.Schema({
  city: String,
  vin: String,
  county: String,
});

module.exports = mongodb.model('Producto', productoSchema);
