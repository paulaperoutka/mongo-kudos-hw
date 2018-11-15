const User = require('../models/User');
const Kudo = require('../models/Kudo');

module.exports = function(app) {
  // Retrieves all kudos from the kudos collection and populates the to and from properties from the user collection
  app.get('/api/kudo', function (req, res) {
    Kudo.find({})
      .populate('to')
      .populate('from')
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

  // Retrieves all users from the users collection
  app.get('/api/user', function (req, res) {
    User.find({})
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

  // Adds a new kudo to the kudos collection
  app.post('/api/kudo', function (req, res) {

    const newKudo = {
      title: req.body.title,
      body: req.body.body,
      to: req.body.to,
      from: req.body.from
    }

    console.log(newKudo);
    Kudo.create(newKudo)
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });
}