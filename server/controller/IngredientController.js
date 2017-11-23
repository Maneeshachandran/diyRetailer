let ingredientSchema = require("./../models/IngredientSchema.js");

module.exports = {
  getIngredientDetails: function(req, res) {
    var url = req.query.url;
    ingredientSchema.findOne({ url: url }, function(err, details) {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        console.log("aaaa",details);
        res.send(details);
      }
    });
  }
};
