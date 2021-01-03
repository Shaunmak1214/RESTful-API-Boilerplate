let mongoose = require('mongoose')

const MONGO_URI = "mongodb+srv://root:Yenwei-76167616@clustertest.i88xt.mongodb.net/CustomerAPI.Customer?retryWrites=true&w=majority";

mongoose.connect("mongodb+srv://root:Yenwei-76167616@clustertest.i88xt.mongodb.net/Customer?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.set('useCreateIndex', true);

let CustomerSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true
  }
})

module.exports = mongoose.model('Test', CustomerSchema)