const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Setting MONGODB_URI for deployment to Heroku
// If one does not exist, use localhost instead
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://heroku_l7gqm4k0:e8lfffk4fbqhnqj60efivuaind@ds037387.mlab.com:37387/heroku_l7gqm4k0";

mongoose.connect(MONGODB_URI, {useNewUrlParser: true });

require('./routes/api-routes')(app);

app.listen(PORT, function() {
  console.log(`App is running on port ${PORT}`);
});
