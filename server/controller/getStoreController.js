let retailerSchema = require("./../models/retailerSchema.js");

module.exports = {
  getStoreDetails: function(req, res) {
    var country = req.body.country;
    var region = req.body.region;
    console.log(country,"country");
    console.log(region,"region");
    retailerSchema.findOne({ country: country, region:region }, function(err, details) {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        console.log("storelist",details);
        res.send(details);
      }
    });
  }
};
