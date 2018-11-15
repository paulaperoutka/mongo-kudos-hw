const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//  Create a new Kudo Schema to map Mongo documents to an object in our node application
var KudoSchema = new Schema({
  title: String,
  body: String,
  to: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
  from: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ]
});

const Kudo = mongoose.model("Kudo", KudoSchema);

module.exports = Kudo;
